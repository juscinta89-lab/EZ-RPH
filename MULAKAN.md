# MULA DI SINI — e-RPH AI

Kalau anda NOOB, ikut ini sahaja.

## A. Apa yang perlu anda ada

1. Akaun Google
2. Akaun GitHub
3. Akaun Firebase
4. API key AI (contohnya OpenAI)

## B. Jangan ubah code dahulu

Extract ZIP → upload semua fail ke GitHub.

## C. Firebase

Firebase Console → Create Project → nama `e-rph-ai`.

Kemudian:

- Authentication → Email/Password ON
- Authentication → Google ON (optional)
- Firestore Database → Create
- Storage → Get started
- Project Settings → Add Web App

Salin 6 nilai Web App ke Firebase App Hosting nanti.

## D. GitHub

Create repository → `e-rph-ai` → upload semua fail ZIP.

## E. Firebase App Hosting

Firebase Console → App Hosting → Get started → Connect GitHub → pilih `e-rph-ai` → branch `main`.

## F. Environment Variables

Masukkan nilai berikut dalam App Hosting:

`NEXT_PUBLIC_FIREBASE_API_KEY`
`NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
`NEXT_PUBLIC_FIREBASE_PROJECT_ID`
`NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
`NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
`NEXT_PUBLIC_FIREBASE_APP_ID`
`OPENAI_API_KEY`
`OPENAI_MODEL` = `gpt-5-mini`
`AI_PROVIDER` = `openai`

## G. Selepas deploy

Buka URL Firebase App Hosting.

1. Daftar akaun guru.
2. Lengkapkan Setup Wizard.
3. Masukkan kelas.
4. Masukkan subjek.
5. Masukkan jadual.
6. Import/masukkan DSKP.
7. Masukkan bahan buku teks yang anda mempunyai hak untuk gunakan.
8. Jana RPH AI.

## H. Jika keluar error

Jangan ubah banyak perkara sekaligus.

Hantar kepada ChatGPT:

> Ini error e-RPH AI saya: [paste error]
>
> Tolong beritahu saya fail mana perlu dibuka dan apa yang perlu saya tukar.

Versi ini sengaja disusun supaya anda tidak perlu faham semua kod terlebih dahulu.
