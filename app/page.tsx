'use client'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from '@/lib/firebase/client'
export default function HomePage(){useEffect(()=>onAuthStateChanged(auth,u=>{location.href=u?'/dashboard':'/login'}),[]);return <div className="loading-screen">Memuatkan e-RPH AI...</div>}
