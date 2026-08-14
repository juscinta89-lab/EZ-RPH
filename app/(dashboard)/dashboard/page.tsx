'use client'
import { useEffect,useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { collection,query,where,orderBy,limit,getDocs } from 'firebase/firestore'
import { auth,db } from '@/lib/firebase/client'
import { DashboardClient } from '@/components/DashboardClient'
export default function DashboardPage(){const [teacher,setTeacher]=useState<any>(null);const [plans,setPlans]=useState<any[]>([]);useEffect(()=>onAuthStateChanged(auth,async u=>{if(!u)return;const tq=query(collection(db,'teachers'),where('user_id','==',u.uid),limit(1));const ts=await getDocs(tq);setTeacher(ts.docs[0]?.data()||{name:u.displayName||'Guru'});const pq=query(collection(db,'lesson_plans'),where('user_id','==',u.uid),orderBy('date','desc'),limit(100));const ps=await getDocs(pq);setPlans(ps.docs.map(d=>({id:d.id,...d.data()})))}),[]);return <DashboardClient teacher={teacher} plans={plans}/>}
