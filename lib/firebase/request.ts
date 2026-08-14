import { auth } from './client'
export async function apiFetch(input: RequestInfo, init: RequestInit = {}) {
  const token = auth.currentUser ? await auth.currentUser.getIdToken() : ''
  const headers = new Headers(init.headers)
  if (token) headers.set('Authorization', `Bearer ${token}`)
  if (!headers.has('Content-Type') && init.body) headers.set('Content-Type','application/json')
  return fetch(input,{...init,headers})
}
