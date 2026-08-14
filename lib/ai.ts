import OpenAI from 'openai'

export type AIProvider = 'openai' | 'gemini' | 'claude'

export type RPHContext = {
  teacher?: string
  school?: string
  date: string
  day: string
  academicWeek: number | string
  subject: string
  className: string
  yearForm: string
  startTime: string
  endTime: string
  duration: number
  theme?: string
  topic: string
  standardContent: string
  learningStandard: string
  performanceStandard?: string
  textbookContext?: string
  previousLesson?: string
  studentLevel?: string
  teachingStrategy?: string
}

const systemPrompt = `Anda ialah AI pembantu RPH untuk guru Malaysia. Hasilkan kandungan RPH yang tepat berdasarkan konteks sumber yang diberikan. Jangan reka SK/SP/TP, nombor standard atau data rasmi KPM. Jika konteks standard rasmi tiada, nyatakan ia belum tersedia. Selaraskan aktiviti dengan tempoh masa sebenar. Pastikan objektif, aktiviti dan pentaksiran selari. Gunakan Bahasa Melayu profesional, praktikal dan sesuai untuk guru.`

export async function generateRPH(context: RPHContext) {
  const provider = (process.env.AI_PROVIDER ?? 'openai') as AIProvider
  if (provider !== 'openai' || !process.env.OPENAI_API_KEY) return fallbackRPH(context)
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  const prompt = `${systemPrompt}\n\nKONTEKS:\n${JSON.stringify(context, null, 2)}\n\nPulangkan JSON sah dengan medan: theme, topic, standardContent, learningStandard, performanceStandard, objectives (array string), successCriteria (array string), activities (object dengan setInduksi, langkah1, langkah2, langkah3, pengayaan, pemulihan, penutup), strategy, pak21, kbat, emk, values, materials, assessment, reflection.`
  const response = await client.responses.create({
    model: process.env.OPENAI_MODEL || 'gpt-5-mini',
    input: prompt,
    text: { format: { type: 'json_object' } }
  })
  try { return JSON.parse(response.output_text) } catch { return fallbackRPH(context) }
}

function fallbackRPH(c: RPHContext) {
  const standardMissing = !c.learningStandard || c.learningStandard.includes('belum tersedia')
  return {
    theme: c.theme || 'Tema pembelajaran', topic: c.topic || 'Topik pembelajaran',
    standardContent: c.standardContent || 'Maklumat SK belum tersedia dalam pangkalan data.',
    learningStandard: c.learningStandard || 'Maklumat SP belum tersedia dalam pangkalan data.',
    performanceStandard: c.performanceStandard || 'Maklumat TP belum tersedia dalam pangkalan data.',
    objectives: ['Murid dapat menyatakan sekurang-kurangnya dua isi berkaitan topik pembelajaran.', 'Murid dapat melaksanakan tugasan pembelajaran dalam tempoh yang ditetapkan.'],
    successCriteria: ['Murid melengkapkan tugasan yang diberikan.', 'Murid dapat menunjukkan kefahaman melalui respons/hasil kerja.'],
    activities: {
      setInduksi: `Pengenalan topik dan aktiviti pencetus minat (${Math.min(5, Math.max(3, Math.floor(c.duration * 0.1)))} minit).`,
      langkah1: `Penerangan dan penerokaan konsep utama (${Math.max(5, Math.floor(c.duration * 0.2))} minit).`,
      langkah2: `Aktiviti berpasangan/kumpulan atau latihan berpandu (${Math.max(8, Math.floor(c.duration * 0.3))} minit).`,
      langkah3: `Latihan individu dan semakan jawapan (${Math.max(8, Math.floor(c.duration * 0.2))} minit).`,
      pengayaan: 'Tugasan lanjutan untuk murid yang menguasai.', pemulihan: 'Bimbingan bertahap dan latihan asas untuk murid yang memerlukan.',
      penutup: 'Rumusan, soal jawab dan exit ticket.'
    },
    strategy: c.teachingStrategy || 'Pembelajaran berpusatkan murid', pak21: 'Think-Pair-Share', kbat: 'Menganalisis dan membuat inferens', emk: 'Bahasa / nilai murni / teknologi', values: 'Kerjasama, yakin diri, bertanggungjawab', materials: 'Buku teks, lembaran kerja, papan putih / bahan digital', assessment: 'Pemerhatian, soal jawab, hasil kerja', reflection: standardMissing ? 'Maklumat standard rasmi perlu disemak oleh guru sebelum digunakan.' : 'Nyatakan bilangan murid menguasai dan tindakan susulan.'
  }
}

export async function aiAssist(instruction: string, section: string, currentText: string) {
  if (!process.env.OPENAI_API_KEY) return currentText
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  const response = await client.responses.create({
    model: process.env.OPENAI_MODEL || 'gpt-5-mini',
    input: `${systemPrompt}\nBahagian: ${section}\nArahan guru: ${instruction}\nTeks semasa:\n${currentText}\n\nPulangkan hanya teks bahagian yang telah ditambah baik.`
  })
  return response.output_text
}
