'use client'
import {useEffect,useState} from 'react'
import {useParams} from 'next/navigation'
import {apiFetch} from '@/lib/firebase/request'
import {RPHEditor} from '@/components/RPHEditor'
export default function RPHDetail(){const {id}=useParams<{id:string}>();const [rph,setRph]=useState<any>(null);useEffect(()=>{apiFetch('/api/rph/'+id).then(r=>r.json()).then(setRph)},[id]);if(!rph)return <div className="page"><div className="card">Memuatkan RPH...</div></div>;return <RPHEditor rph={rph}/>}
