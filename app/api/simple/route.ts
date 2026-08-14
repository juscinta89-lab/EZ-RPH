import {NextResponse} from 'next/server'
import {adminDb,verifyRequestUser} from '@/lib/firebase/admin'
const allowed=new Set(['classes','subjects','timetables','standards','textbooks','academic_calendar','settings'])
export async function GET(request:Request){try{const table=new URL(request.url).searchParams.get('table')||'';if(!allowed.has(table))return NextResponse.json({error:'Invalid table'},{status:400});const u=await verifyRequestUser(request);const snap=await adminDb.collection(table).where('user_id','==',u.uid).limit(100).get();return NextResponse.json(snap.docs.map(d=>({id:d.id,...d.data()})))}catch(e:any){return NextResponse.json({error:e.message},{status:401})}}
