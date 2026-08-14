import { SimpleCrudPage } from '@/components/SimpleCrudPage'
export default function Page(){return <SimpleCrudPage title="Buku Teks" eyebrow="TEXTBOOK" description="Modul e-RPH AI untuk pengurusan dan rujukan data." table="textbooks" columns={['id','name','status']} />}
