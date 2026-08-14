# e-RPH AI — Firebase + GitHub (Versi Mudah)

Sistem PWA AI untuk membantu guru Malaysia menyediakan dan mengurus RPH.

## Stack
- Next.js 16 + TypeScript
- Firebase Authentication
- Cloud Firestore
- Firebase Storage
- Firebase App Hosting
- OpenAI API melalui server-side route
- PWA

## Cara paling mudah untuk bina

### 1. Buat projek Firebase
1. Buka Firebase Console.
2. Create project: `e-rph-ai` (atau nama lain).
3. Aktifkan Authentication > Sign-in method > Email/Password.
4. Aktifkan Google jika mahu Google Login.
5. Create Firestore Database.
6. Create Storage.
7. Pergi Project Settings > Your apps > Web app dan salin konfigurasi Firebase.

### 2. Upload projek ke GitHub
1. Buat repository baharu, contoh `e-rph-ai`.
2. Extract ZIP ini.
3. Upload SEMUA fail dan folder ke repository.
4. Pastikan `package.json` berada di root repository.
5. Jangan upload `.env.local` atau API key rahsia.

### 3. Sambungkan GitHub ke Firebase App Hosting
1. Firebase Console > App Hosting > Get started.
2. Connect repository GitHub anda.
3. Pilih repository `e-rph-ai`.
4. Pilih branch `main`.
5. Firebase akan build dan deploy Next.js secara automatik.

### 4. Masukkan environment variables
Dalam Firebase App Hosting, masukkan:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `OPENAI_API_KEY`
- `OPENAI_MODEL` = `gpt-5-mini`
- `AI_PROVIDER` = `openai`

Untuk App Hosting, Firebase Admin boleh menggunakan credentials persekitaran cloud. Untuk komputer sendiri, jika perlu, gunakan service account dan isi:
- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`

### 5. Deploy Firestore Rules
Rules ada dalam:
- `firestore.rules`
- `storage.rules`

Jika menggunakan Firebase CLI, jalankan:

```bash
npm install -g firebase-tools
firebase login
firebase use --add
firebase deploy --only firestore:rules,storage
```

### 6. Jalankan di komputer sendiri

```bash
npm install
cp .env.example .env.local
npm run dev
```

Kemudian buka `http://localhost:3000`.

## Penting untuk AI
API key AI TIDAK diletakkan dalam browser. Permintaan AI pergi ke server-side route `/api/ai/*`.

## Data KPM / DSKP
Aplikasi tidak mereka-reka data rasmi. DSKP, SK, SP, TP, buku teks dan takwim perlu dimasukkan/import ke dalam knowledge base terlebih dahulu.

## PWA
Manifest dan service worker telah disediakan. Selepas deployment HTTPS, aplikasi boleh dipasang melalui Chrome pada peranti yang disokong.

## Struktur utama
- `app/` — halaman dan API
- `components/` — UI
- `lib/firebase/` — Firebase client + Admin
- `firestore.rules` — keselamatan database
- `storage.rules` — keselamatan fail
- `apphosting.yaml` — Firebase App Hosting
- `public/` — PWA assets
