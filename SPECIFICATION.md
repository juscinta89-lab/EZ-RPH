Bina sebuah **Progressive Web App (PWA) moden, profesional dan mesra guru** bernama **“e-RPH AI”** untuk membantu guru sekolah rendah dan sekolah menengah di Malaysia menyediakan, mengurus, mengedit dan menjana **Rancangan Pengajaran Harian (RPH)** secara automatik menggunakan AI.

## 1. KONSEP UTAMA

Aplikasi ini merupakan sistem pengurusan RPH berasaskan AI yang membantu guru menyediakan RPH berdasarkan:

- Kurikulum Kebangsaan Kementerian Pendidikan Malaysia (KPM)
- Dokumen Standard Kurikulum dan Pentaksiran (DSKP)
- Standard Kandungan (SK)
- Standard Pembelajaran (SP)
- Standard Prestasi (TP)
- Buku teks rasmi setiap mata pelajaran
- Kandungan/topik pembelajaran
- Takwim persekolahan KPM
- Minggu persekolahan
- Hari dan tarikh
- Jadual waktu guru
- Masa mula dan tamat sesuatu mata pelajaran
- Kelas yang diajar
- Tingkatan/Tahun
- Keperluan PdP guru
- Aktiviti pembelajaran
- Pentaksiran
- Elemen merentas kurikulum
- KBAT
- PAK21
- Nilai murni
- Teknologi/ICT
- Pemulihan dan pengayaan

Matlamat utama adalah:

**Guru hanya perlu menetapkan kelas, subjek, jadual waktu dan minggu pembelajaran. Sistem akan membantu merancang RPH harian secara automatik dan guru boleh menyemak serta mengedit sebelum menyimpannya.**

---

# 2. PLATFORM

Aplikasi mesti dibina sebagai:

- Progressive Web App (PWA)
- Responsive
- Mobile friendly
- Tablet friendly
- Desktop friendly
- Boleh dipasang melalui Google Chrome
- Boleh digunakan seperti aplikasi biasa selepas install
- Sokongan offline asas untuk melihat RPH yang telah disimpan
- Auto-save
- Search
- Filter
- Export
- Print
- PDF
- Backup data

Gunakan reka bentuk UI moden seperti aplikasi SaaS pendidikan.

Reka bentuk mesti:

- Minimalist
- Bersih
- Profesional
- Warna lembut
- Tidak terlalu banyak warna
- Mudah digunakan oleh guru
- Typography jelas
- Kad maklumat moden
- Icon yang konsisten
- Navigation yang mudah
- Mobile-first

---

# 3. DASHBOARD UTAMA

Selepas guru login, paparkan dashboard.

Dashboard mempunyai:

### Ringkasan

- Nama guru
- Sekolah
- Tahun semasa
- Minggu semasa
- Tarikh hari ini
- Minggu persekolahan
- Jumlah RPH minggu ini
- RPH lengkap
- RPH belum lengkap
- RPH yang perlu disemak
- Subjek yang diajar hari ini

### Widget “Hari Ini”

Contoh:

**ISNIN, 17 OGOS 2026**

08:00 – 09:00
Bahasa Melayu Tahun 6

09:00 – 10:00
Sejarah Tahun 6

10:30 – 11:30
Sains Tahun 6

Setiap slot mempunyai butang:

**“Jana RPH AI”**

---

# 4. PROFIL GURU

Sediakan halaman:

**Profil Guru**

Maklumat:

- Nama guru
- No. kad pengenalan / ID guru jika diperlukan
- Sekolah
- Kod sekolah
- Negeri
- Daerah
- Jawatan
- Opsyen
- Email
- Tahun semasa
- Logo sekolah
- Tandatangan digital

Guru boleh edit semua maklumat.

---

# 5. PENGURUSAN KELAS

Guru boleh menambah kelas.

Contoh:

Tahun 1 Amanah
Tahun 2 Bestari
Tahun 3 Cemerlang
Tahun 6 Amanah

Untuk sekolah menengah:

Tingkatan 1 Amanah
Tingkatan 2 Bestari
Tingkatan 3 Cemerlang
Tingkatan 4 Sains
Tingkatan 5 Akaun

Setiap kelas mempunyai:

- Nama kelas
- Tahun/Tingkatan
- Bilangan murid
- Tahap kelas
- Nota guru

---

# 6. PENGURUSAN SUBJEK

Guru boleh memilih mata pelajaran.

Sokong:

## SEKOLAH RENDAH

Contoh:

- Bahasa Melayu
- Bahasa Inggeris
- Matematik
- Sains
- Pendidikan Islam
- Pendidikan Moral
- Sejarah
- Pendidikan Jasmani dan Pendidikan Kesihatan
- Pendidikan Seni Visual
- Pendidikan Muzik
- Reka Bentuk dan Teknologi
- Bahasa Arab
- dan mata pelajaran berkaitan.

## SEKOLAH MENENGAH

Sediakan struktur fleksibel supaya subjek boleh ditambah mengikut kurikulum semasa.

Contoh:

- Bahasa Melayu
- Bahasa Inggeris
- Matematik
- Matematik Tambahan
- Sains
- Fizik
- Kimia
- Biologi
- Sejarah
- Geografi
- Pendidikan Islam
- Pendidikan Moral
- RBT
- ASK
- Prinsip Perakaunan
- Ekonomi
- Perniagaan
- dan lain-lain.

Jangan hard-code hanya subjek contoh. Sistem mesti mempunyai fungsi:

**Tambah Subjek**

---

# 7. PENGURUSAN JADUAL WAKTU

Guru boleh memasukkan jadual waktu.

Contoh:

ISNIN

08:00 – 09:00
Bahasa Melayu
Tahun 6 Amanah

09:00 – 10:00
Sejarah
Tahun 6 Amanah

SELASA

08:00 – 09:00
Matematik
Tahun 6 Amanah

Jadual mestilah menyimpan:

- Hari
- Masa mula
- Masa tamat
- Subjek
- Kelas
- Bilik
- Catatan

Sistem secara automatik menghasilkan senarai RPH berdasarkan jadual ini.

---

# 8. TAKWIM PERSEKOLAHAN

Sediakan modul:

**Takwim Persekolahan KPM**

Sistem mesti boleh memasukkan:

- Tarikh mula sekolah
- Tarikh akhir sekolah
- Cuti penggal
- Cuti perayaan
- Cuti umum
- Hari persekolahan
- Hari tanpa PdP
- Aktiviti sekolah
- Peperiksaan
- Program khas
- Minggu persekolahan

Guru/Admin boleh mengimport takwim.

Sediakan pilihan:

**Import Takwim**

daripada:

- Excel
- CSV
- PDF
- Data manual

Sistem kemudian menentukan:

**Minggu Persekolahan 1, 2, 3, 4...**

secara automatik.

PENTING:

Jangan mereka-reka data rasmi KPM.

Jika data takwim rasmi belum dimasukkan, sistem mesti memaparkan:

**“Sila masukkan atau import takwim rasmi KPM bagi tahun berkenaan.”**

---

# 9. MODUL DSKP

Ini merupakan modul paling penting.

Sediakan:

**DSKP Library**

Struktur data:

Tahun/Tingkatan
↓
Subjek
↓
Tahun Kurikulum
↓
Bidang/Tajuk
↓
Standard Kandungan
↓
Standard Pembelajaran
↓
Standard Prestasi

Contoh:

Bahasa Melayu
Tahun 6
Bidang
Tajuk
SK
SP
TP

Guru boleh:

- Search
- Filter
- View
- Edit jika admin membenarkan
- Import DSKP
- Upload dokumen
- Pilih SK
- Pilih SP
- Pilih TP

Sokong import:

- PDF
- DOCX
- Excel
- CSV

AI tidak boleh mencipta Standard Pembelajaran secara rawak.

Jika maklumat SK/SP tiada dalam database, AI mesti menyatakan:

**“Standard Pembelajaran belum tersedia dalam pangkalan data.”**

dan meminta guru memilih atau memasukkannya.

---

# 10. MODUL BUKU TEKS

Sediakan:

**Textbook Library**

Struktur:

Tahun/Tingkatan
→ Subjek
→ Buku teks
→ Bab
→ Unit
→ Tajuk
→ Subtopik
→ Kandungan pembelajaran
→ Aktiviti berkaitan

Guru boleh upload bahan rujukan buku teks yang mereka mempunyai hak untuk menggunakan.

Sokong:

- PDF
- DOCX
- TXT
- CSV
- Excel

AI boleh menggunakan kandungan yang telah dimasukkan ke dalam sistem sebagai konteks untuk membantu membina RPH.

PENTING:

AI tidak boleh mendakwa mempunyai akses kepada buku teks rasmi jika dokumen tersebut tidak tersedia dalam sistem.

---

# 11. AI RPH GENERATOR

Ini ialah fungsi utama aplikasi.

Butang:

**✨ JANA RPH DENGAN AI**

Apabila ditekan, sistem mengambil data:

- Tarikh
- Hari
- Minggu persekolahan
- Subjek
- Tahun/Tingkatan
- Kelas
- Masa
- Tempoh PdP
- SK
- SP
- TP
- Tajuk
- Buku teks
- Tahap murid
- RPH sebelumnya
- Aktiviti yang telah dijalankan

Kemudian AI menghasilkan RPH.

---

# 12. FORMAT RPH

RPH mesti lengkap dan profesional.

Struktur:

### RANCANGAN PENGAJARAN HARIAN

**Tarikh:**
**Hari:**
**Minggu:**
**Mata Pelajaran:**
**Kelas:**
**Masa:**
**Tempoh:**
**Tema:**
**Tajuk:**

### STANDARD KANDUNGAN

...

### STANDARD PEMBELAJARAN

...

### STANDARD PRESTASI

...

### OBJEKTIF PEMBELAJARAN

Pada akhir pembelajaran, murid dapat:

1. ...
2. ...
3. ...

### KRITERIA KEJAYAAN

Murid dianggap berjaya apabila:

1. ...
2. ...
3. ...

### AKTIVITI PEMBELAJARAN

**Set Induksi**

...

**Langkah 1**

...

**Langkah 2**

...

**Langkah 3**

...

**Aktiviti Pengayaan**

...

**Aktiviti Pemulihan**

...

**Penutup**

...

### KAEDAH / STRATEGI PdP

...

### PAK21

...

### KBAT

...

### EMK

...

### NILAI MURNI

...

### BBM / BAHAN

...

### PENTAKSIRAN

...

### REFLEKSI

...

---

# 13. AI MESTI FAHAM TEMPOH MASA

AI perlu menyesuaikan aktiviti berdasarkan tempoh PdP.

Contoh:

Jika:

08:00 – 08:30

AI menghasilkan aktiviti 30 minit.

Jika:

08:00 – 09:00

AI menghasilkan aktiviti 60 minit.

Jika:

08:00 – 10:00

AI menghasilkan aktiviti 120 minit.

Jangan menghasilkan RPH 60 minit untuk slot 30 minit.

---

# 14. AI MESTI MEMAHAMI RPH SEBELUMNYA

Sistem perlu mempunyai kesinambungan pembelajaran.

Contoh:

Isnin:
Pengenalan topik

Selasa:
Aktiviti pengukuhan

Rabu:
Latihan

Khamis:
Pentaksiran

Jumaat:
Pemulihan/pengayaan

AI perlu melihat RPH sebelumnya supaya tidak menghasilkan aktiviti yang sama secara berulang tanpa sebab.

---

# 15. JANA RPH SEMINGGU

Sediakan butang:

**JANA RPH MINGGU INI**

AI akan membaca jadual guru.

Contoh:

ISNIN
Bahasa Melayu
Sejarah

SELASA
Matematik
Sains

RABU
Bahasa Melayu

dan menghasilkan RPH untuk semua slot yang berkaitan.

Guru boleh memilih:

☐ Jana semua
☐ Jana subjek tertentu
☐ Jana hari tertentu

---

# 16. JANA RPH BULANAN

Sediakan:

**JANA RPH BULAN**

Sistem akan menghasilkan RPH berdasarkan:

- Takwim
- Jadual waktu
- Minggu persekolahan
- DSKP
- Kandungan buku teks
- RPH sebelumnya

Pastikan urutan pembelajaran logik.

---

# 17. EDITOR RPH

Setiap RPH mesti boleh diedit.

Gunakan rich text editor.

Guru boleh:

- Edit teks
- Bold
- Italic
- Bullet
- Numbering
- Tambah jadual
- Tambah gambar
- Tambah aktiviti
- Tukar objektif
- Tukar aktiviti
- Tukar BBM
- Tukar pentaksiran
- Tambah refleksi

Butang:

**Simpan**

**Simpan sebagai Draf**

**Jana Semula AI**

**Salin RPH**

**Cetak**

**Export PDF**

---

# 18. AI ASSISTANT DALAM EDITOR

Sediakan panel AI kecil.

Contoh:

**AI Assistant**

Guru boleh meminta:

“Pendekkan aktiviti ini.”

“Buat aktiviti lebih sesuai untuk murid lemah.”

“Tambah aktiviti KBAT.”

“Buat aktiviti PAK21.”

“Buat versi 30 minit.”

“Tambah aktiviti pemulihan.”

“Buat objektif yang lebih terukur.”

“Buat refleksi berdasarkan aktiviti.”

AI hanya mengubah bahagian yang diminta.

---

# 19. REFLEKSI AI

Selepas PdP, guru boleh tekan:

**✨ Jana Refleksi**

Contoh pilihan:

- Semua murid menguasai
- Sebahagian murid menguasai
- Ramai murid belum menguasai
- Aktiviti berjaya
- Aktiviti perlu ditambah baik

AI menghasilkan refleksi profesional berdasarkan input guru.

---

# 20. KALENDAR RPH

Sediakan paparan Calendar.

Paparkan:

JANUARI
FEBRUARI
MAC
dan seterusnya.

Setiap tarikh menunjukkan:

🟢 RPH lengkap
🟡 RPH draf
🔴 RPH belum dibuat
⚪ Tiada PdP

Klik tarikh → lihat semua RPH pada hari tersebut.

---

# 21. PAPARAN MINGGUAN

Sediakan Weekly View.

Contoh:

| HariMasaSubjekKelasStatus |      |           |    |         |
| ------------------------- | ---- | --------- | -- | ------- |
| Isnin                     | 8:00 | BM        | 6A | Lengkap |
| Isnin                     | 9:00 | Sejarah   | 6A | Draf    |
| Selasa                    | 8:00 | Matematik | 6A | Belum   |

---

# 22. CARIAN RPH

Sediakan search yang pantas.

Guru boleh mencari:

- Tarikh
- Subjek
- Kelas
- Tajuk
- SK
- SP
- Minggu
- Tahun
- Status

---

# 23. EXPORT

Sediakan:

### PDF

- A4
- Portrait
- Header sekolah
- Logo sekolah
- Maklumat guru
- RPH
- Footer
- Ruang tandatangan jika diperlukan

### PRINT

Paparan khas untuk cetakan.

### WORD

Jika boleh disokong, sediakan export DOCX.

### EXCEL

Untuk laporan ringkas RPH.

---

# 24. REKOD DAN HISTORY

Setiap perubahan disimpan.

Contoh:

RPH Matematik 17 Ogos 2026

Version 1
Version 2
Version 3

Guru boleh:

- Lihat history
- Restore version lama

---

# 25. DATABASE

Gunakan database moden seperti Firebase/Supabase.

Struktur data sekurang-kurangnya:

users
schools
teachers
classes
subjects
timetables
calendar
academic\_weeks
dsks
standards
textbooks
textbook\_chapters
lesson\_plans
lesson\_plan\_versions
ai\_generations
settings

Setiap RPH mempunyai:

- user\_id
- school\_id
- date
- day
- academic\_week
- subject\_id
- class\_id
- start\_time
- end\_time
- duration
- theme
- topic
- standard\_content
- learning\_standard
- performance\_standard
- objectives
- success\_criteria
- activities
- assessment
- EMK
- KBAT
- PAK21
- values
- teaching\_materials
- reflection
- status
- created\_at
- updated\_at

---

# 26. LOGIN

Sediakan:

- Email/password
- Google Login jika tersedia
- Logout
- Forgot password

Setiap guru hanya melihat RPH sendiri kecuali admin diberi akses.

---

# 27. ADMIN PANEL

Sediakan Admin Dashboard.

Admin boleh:

- Urus guru
- Urus sekolah
- Urus subjek
- Urus DSKP
- Urus buku teks
- Urus takwim
- Import data
- Manage AI knowledge base
- Lihat statistik penggunaan
- Backup database

---

# 28. SISTEM KNOWLEDGE BASE AI

AI RPH tidak boleh bergantung kepada pengetahuan umum sahaja.

Sediakan knowledge base yang mengandungi:

1. DSKP
2. Standard Kandungan
3. Standard Pembelajaran
4. Standard Prestasi
5. Buku teks yang dimasukkan
6. Takwim
7. Struktur kurikulum
8. Data kelas
9. RPH terdahulu

Apabila menjana RPH, AI perlu melakukan retrieval daripada knowledge base yang berkaitan.

Gunakan pendekatan:

**RAG (Retrieval Augmented Generation)**

supaya AI mengambil maklumat yang relevan sebelum menghasilkan RPH.

---

# 29. ELAKKAN HALUSINASI AI

Ini sangat penting.

AI tidak boleh:

- Mereka-reka Standard Pembelajaran
- Mereka-reka nombor SK/SP
- Mendakwa kandungan buku teks tertentu jika tiada sumber
- Mencipta data rasmi KPM
- Mengubah maksud Standard Pembelajaran
- Menggunakan standard daripada tahun/tingkatan yang salah

Jika data tidak tersedia:

Paparkan:

**“Maklumat rasmi belum tersedia dalam pangkalan data. Sila semak atau masukkan sumber rasmi.”**

---

# 30. AI PROMPT ENGINE

Bina sistem prompt dalaman yang menghantar konteks berikut kepada AI:

Teacher Profile

- School
- Year/Form
- Subject
- Class
- Date
- Academic Week
- Timetable
- Duration
- DSKP
- Standard Content
- Learning Standard
- Performance Standard
- Textbook Chapter
- Previous Lesson
- Student Level
- Teaching Strategy

AI kemudian menghasilkan RPH dalam format standard sistem.

---

# 31. SMART SUGGESTION

Sistem perlu memberikan cadangan automatik.

Contoh:

**Cadangan topik minggu ini**

“Berdasarkan RPH minggu sebelumnya dan DSKP, sistem mencadangkan topik berikut.”

Guru boleh:

**Terima Cadangan**

atau

**Pilih Sendiri**

---

# 32. DUPLICATE / COPY RPH

Guru boleh:

**Salin RPH**

kepada:

- Tarikh lain
- Kelas lain
- Minggu lain

AI kemudian boleh menyesuaikan RPH dengan kelas baru.

---

# 33. NOTIFICATION

Sediakan notification:

“3 RPH belum lengkap untuk minggu ini.”

“RPH Isnin belum disediakan.”

“RPH minggu depan belum dijana.”

---

# 34. DESIGN UI

Gunakan design moden:

- Soft blue
- White
- Light gray
- Soft purple sebagai accent
- Rounded cards
- Subtle shadows
- Clean icons
- Spacious layout

Jangan gunakan design yang terlalu kompleks.

Sidebar desktop:

Dashboard
RPH Saya
Kalendar
Jadual Waktu
Kelas
Subjek
DSKP
Buku Teks
Takwim
AI Assistant
Laporan
Tetapan

Mobile:

Gunakan bottom navigation:

Home
RPH
Calendar
AI
More

---

# 35. PWA

Pastikan aplikasi mempunyai:

- manifest.json
- service worker
- install prompt
- offline caching
- responsive layout
- app icon
- splash screen
- theme color

Nama aplikasi:

**e-RPH AI**

Short name:

**e-RPH**

Description:

**Sistem AI Pintar Menjana dan Mengurus Rancangan Pengajaran Harian Guru**

---

# 36. PENGALAMAN PENGGUNA

Aliran pengguna mesti sangat mudah.

Contoh:

### Langkah 1

Guru login.

### Langkah 2

Masukkan profil.

### Langkah 3

Masukkan kelas.

### Langkah 4

Masukkan subjek.

### Langkah 5

Masukkan jadual waktu.

### Langkah 6

Import takwim.

### Langkah 7

Import DSKP.

### Langkah 8

Masukkan/import buku teks.

### Langkah 9

Sistem membina jadual RPH automatik.

### Langkah 10

Guru tekan:

**✨ JANA RPH AI**

### Langkah 11

AI menghasilkan RPH.

### Langkah 12

Guru edit jika perlu.

### Langkah 13

Simpan.

### Langkah 14

Cetak/export PDF.

---

# 37. CONTOH SMART GENERATION

Jika guru mempunyai:

Subjek:
Bahasa Melayu

Tahun:
6

Kelas:
6 Amanah

Masa:
8:00 – 9:00 pagi

Minggu:
Minggu 12

Topik:
Tatabahasa

DSKP:
SK dan SP yang berkaitan

Buku teks:
Unit yang berkaitan

AI mesti menghasilkan RPH yang sesuai untuk:

**60 minit PdP**

dan aktiviti mestilah sepadan dengan tajuk, standard pembelajaran dan kandungan buku teks.

---

# 38. PENTING — DATA RASMI

Aplikasi mesti direka supaya **data rasmi KPM boleh dikemaskini dari semasa ke semasa**.

Jangan hard-code DSKP untuk satu tahun sahaja.

Sediakan:

**Curriculum Version**

Contoh:

2026
2027
2028

Supaya apabila berlaku perubahan kurikulum, admin boleh memasukkan data baru tanpa membina semula keseluruhan aplikasi.

---

# 39. ARCHITECTURE

Gunakan architecture yang kemas dan scalable.

Frontend:
React / Next.js atau framework moden yang sesuai.

Backend:
Firebase / Supabase.

Database:
Cloud database.

Authentication:
Firebase Auth / Supabase Auth.

Storage:
Cloud Storage.

AI:
API AI yang boleh ditukar melalui configuration.

Jangan hard-code API key di frontend.

Gunakan server-side API / secure environment variables.

---

# 40. SECURITY

Pastikan:

- Authentication
- Authorization
- Database security rules
- User isolation
- Admin role
- Secure API key
- Validation
- Rate limiting untuk AI
- Backup
- Audit log

Guru tidak boleh melihat data guru lain kecuali diberi permission.

---

# 41. AI MODEL ABSTRACTION

Jangan lock aplikasi kepada satu AI provider.

Bina:

AI Service Layer

supaya boleh menggunakan:

- OpenAI
- Gemini
- Claude
- Model lain

melalui configuration.

Contoh:

AI\_PROVIDER = "gemini"

kemudian boleh ditukar kepada:

AI\_PROVIDER = "openai"

tanpa mengubah keseluruhan aplikasi.

---

# 42. LAPORAN

Sediakan halaman laporan:

### Laporan RPH Mingguan

Jumlah:

- Lengkap
- Draf
- Belum dibuat

### Laporan Bulanan

Jumlah RPH mengikut:

- Subjek
- Kelas
- Minggu

### Progress DSKP

Paparkan:

Standard Pembelajaran yang telah digunakan
Standard Pembelajaran yang belum digunakan

Ini membantu guru melihat perkembangan kandungan pembelajaran.

---

# 43. QUALITY CHECK AI

Sebelum RPH disimpan, AI perlu menjalankan semakan automatik:

✓ Subjek betul
✓ Tahun/Tingkatan betul
✓ Kelas betul
✓ Tarikh betul
✓ Minggu betul
✓ Masa betul
✓ Tempoh betul
✓ SK tersedia
✓ SP tersedia
✓ Objektif selari dengan SP
✓ Aktiviti selari dengan objektif
✓ Pentaksiran selari dengan objektif
✓ Aktiviti sesuai dengan tempoh masa
✓ Tiada kandungan yang bercanggah

Paparkan:

**AI Quality Check: 92%**

atau status:

🟢 Sesuai
🟡 Perlu Semakan
🔴 Maklumat Tidak Lengkap

AI Quality Check hanyalah bantuan dan bukan pengesahan rasmi KPM.

---

# 44. PEMBINAAN PROJEK

Bina aplikasi secara production-ready.

Jangan buat sekadar prototype visual.

Pastikan:

- Semua button berfungsi
- Navigation berfungsi
- Database berfungsi
- CRUD berfungsi
- Authentication berfungsi
- AI generation berfungsi
- PDF export berfungsi
- PWA installation berfungsi
- Responsive
- Error handling
- Loading state
- Empty state
- Confirmation dialog
- Toast notification

Gunakan sample data untuk demo tetapi asingkan sample data daripada data sebenar pengguna.

---

# 45. HALAMAN YANG PERLU DIBINA

Bina sekurang-kurangnya:

1. Login
2. Register
3. Dashboard
4. Setup Wizard
5. Profile
6. Classes
7. Subjects
8. Timetable
9. Calendar
10. RPH List
11. RPH Editor
12. AI RPH Generator
13. AI Assistant
14. DSKP Library
15. Textbook Library
16. Academic Calendar
17. Reports
18. Settings
19. Admin Dashboard
20. Data Import

---

# 46. SETUP WIZARD

Untuk pengguna baru, jangan terus bawa ke dashboard kosong.

Paparkan:

**Selamat Datang ke e-RPH AI**

Step 1:
Profil Guru

Step 2:
Sekolah

Step 3:
Kelas

Step 4:
Subjek

Step 5:
Jadual Waktu

Step 6:
Takwim

Step 7:
DSKP

Step 8:
Buku Teks

Step 9:
Sedia menjana RPH.

Progress:

1/9 → 2/9 → 3/9...

---

# 47. PRINSIP UTAMA APLIKASI

Aplikasi ini bukan sekadar:

**“Masukkan tajuk → AI tulis RPH.”**

Sebaliknya:

**TAKWIM KPM**
↓
**MINGGU PERSEKOLAHAN**
↓
**JADUAL WAKTU**
↓
**SUBJEK + KELAS**
↓
**DSKP**
↓
**STANDARD PEMBELAJARAN**
↓
**BUKU TEKS**
↓
**RPH SEBELUMNYA**
↓
**AI**
↓
**RPH**
↓
**AI QUALITY CHECK**
↓
**GURU SEMAK & EDIT**
↓
**SIMPAN**
↓
**PDF / PRINT**

Ini adalah konsep utama keseluruhan aplikasi.

---

# 48. HASIL AKHIR

Hasilkan sebuah PWA bernama:

# e-RPH AI

Tagline:

**“RPH Pintar. PdP Lebih Terancang.”**

Aplikasi mesti terasa seperti produk EdTech profesional yang benar-benar boleh digunakan oleh guru sekolah rendah dan sekolah menengah Malaysia.

Utamakan:

1. Ketepatan data kurikulum
2. Kemudahan penggunaan
3. AI yang membantu, bukan menggantikan pertimbangan guru
4. Kesinambungan pembelajaran
5. RPH yang boleh diedit
6. RPH berdasarkan masa sebenar
7. RPH berdasarkan jadual sebenar
8. RPH berdasarkan minggu persekolahan
9. Integrasi DSKP
10. Integrasi bahan buku teks yang tersedia
11. Keselamatan data
12. PWA yang pantas dan responsive

Bina sistem secara modular supaya pada masa hadapan boleh ditambah:

- e-RPH sekolah
- perkongsian RPH antara guru
- bank aktiviti PdP
- bank soalan
- AI bina lembaran kerja
- AI bina kuiz
- AI bina bahan PdP
- AI bina slaid
- analisis pencapaian murid
- integrasi pentaksiran
- integrasi SPLKPM
- dashboard pentadbir sekolah

Jangan menganggap fungsi-fungsi masa hadapan ini perlu dibina sekarang. Sediakan architecture supaya ia boleh ditambah kemudian tanpa merosakkan sistem utama.