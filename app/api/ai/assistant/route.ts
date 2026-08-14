import {NextResponse} from 'next/server'
import {verifyRequestUser} from '@/lib/firebase/admin'
import {aiAssist} from '@/lib/ai'
export async function POST(request:Request){try{await verifyRequestUser(request);const b=await request.json();return NextResponse.json({text:await aiAssist(b.instruction||'',b.section||'',b.currentText||'')})}catch(e:any){return NextResponse.json({error:e.message},{status:401})}}
