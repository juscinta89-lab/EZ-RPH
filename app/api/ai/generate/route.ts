import {NextResponse} from 'next/server'
import {FieldValue} from 'firebase-admin/firestore'
import {adminDb,verifyRequestUser} from '@/lib/firebase/admin'
import {generateRPH} from '@/lib/ai'
export async function POST(request:Request){try{const u=await verifyRequestUser(request);const body=await request.json();const rph=await generateRPH(body);await adminDb.collection('ai_generations').add({user_id:u.uid,action:'generate_rph',input_payload:body,output_payload:rph,provider:process.env.AI_PROVIDER||'openai',model:process.env.OPENAI_MODEL||'gpt-5-mini',created_at:FieldValue.serverTimestamp()});return NextResponse.json({rph})}catch(e:any){return NextResponse.json({error:e.message||'AI generation failed'},{status:500})}}
