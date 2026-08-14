'use client'
import { FormEvent, useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '@/lib/firebase/client'
export default function RegisterPage(){
 const [name,setName]=useState('');const [email,setEmail]=useState('');const [password,setPassword]=useState('');const [error,setError]=useState('');const [loading,setLoading]=useState(false)
 async function submit(e:FormEvent){e.preventDefault();setLoading(true);try{const c=await createUserWithEmailAndPassword(auth,email,password);await updateProfile(c.user,{displayName:name});await setDoc(doc(db,'teachers',c.user.uid),{user_id:c.user.uid,name,email,created_at:new Date().toISOString()},{merge:true});location.href='/setup'}catch(e:any){setError(e?.message||'Pendaftaran gagal.')}finally{setLoading(false)}}
 return <div className="auth-card"><p className="eyebrow">e-RPH AI</p><h1>Cipta akaun</h1><p className="muted">Sediakan akaun guru anda dalam beberapa langkah.</p><form onSubmit={submit} className="form-grid"><label>Nama guru<input required value={name} onChange={e=>setName(e.target.value)}/></label><label>Email<input type="email" required value={email} onChange={e=>setEmail(e.target.value)}/></label><label>Kata laluan<input type="password" minLength={6} required value={password} onChange={e=>setPassword(e.target.value)}/></label><button className="primary wide" disabled={loading}>{loading?'Mendaftar...':'Daftar'}</button></form>{error&&<div className="error-box">{error}</div>}<p className="muted">Sudah ada akaun? <a href="/login">Log masuk</a></p></div>
}
