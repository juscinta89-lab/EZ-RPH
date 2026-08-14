'use client'
import { FormEvent, useState } from 'react'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '@/lib/firebase/client'

export default function LoginPage(){
 const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [error,setError]=useState(''); const [loading,setLoading]=useState(false)
 async function submit(e:FormEvent){e.preventDefault();setLoading(true);setError('');try{await signInWithEmailAndPassword(auth,email,password);location.href='/dashboard'}catch(e:any){setError(e?.message?.replace('Firebase: Error (auth/','').replace(').','')||'Login gagal.')}finally{setLoading(false)}}
 async function google(){setError('');try{await signInWithPopup(auth,new GoogleAuthProvider());location.href='/dashboard'}catch(e:any){setError('Login Google gagal.')}}
 return <div className="auth-card"><p className="eyebrow">e-RPH AI</p><h1>Selamat datang</h1><p className="muted">Log masuk untuk mengurus RPH anda.</p><form onSubmit={submit} className="form-grid"><label>Email<input type="email" required value={email} onChange={e=>setEmail(e.target.value)}/></label><label>Kata laluan<input type="password" required value={password} onChange={e=>setPassword(e.target.value)}/></label><button className="primary wide" disabled={loading}>{loading?'Log masuk...':'Log masuk'}</button></form><button className="secondary wide" onClick={google}>Teruskan dengan Google</button>{error&&<div className="error-box">{error}</div>}<p className="muted">Belum ada akaun? <a href="/register">Daftar</a></p></div>
}
