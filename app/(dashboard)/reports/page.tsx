import { SimpleCrudPage } from '@/components/SimpleCrudPage'
export default function Page(){return <SimpleCrudPage title="Laporan" eyebrow="RPH_REPORTS" description="Modul e-RPH AI untuk pengurusan dan rujukan data." table="lesson_plans" columns={['id','name','status']} />}
