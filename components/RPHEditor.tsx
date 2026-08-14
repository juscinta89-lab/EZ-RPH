'use client'

import { useState } from 'react'
import { apiFetch } from '@/lib/firebase/request'

export function RPHEditor({ rph }: { rph: any }) {
  const [data,setData]=useState(rph); const [saving,setSaving]=useState(false); const [msg,setMsg]=useState('')
  const update=(key:string,value:any)=>setData((d:any)=>({...d,[key]:value}))
  const updateNested=(section:string,key:string,value:string)=>setData((d:any)=>({...d,[section]:{...(d[section]||{}),[key]:value}}))
  async function save(){setSaving(true); const r=await apiFetch('/api/rph/'+rph.id,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)}); const j=await r.json(); setMsg(r.ok?'RPH disimpan.':(j.error||'Ralat')); setSaving(false)}
  function print(){window.print()}
  async function regenerate(){ const r=await apiFetch('/api/ai/generate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...data,academicWeek:data.academic_week,duration:data.duration,standardContent:data.standard_content,learningStandard:data.learning_standard,performanceStandard:data.performance_standard,className:data.class_name||data.class_id,topic:data.topic,subject:data.subject,startTime:data.start_time,endTime:data.end_time})}); const j=await r.json(); if(r.ok)setData((d:any)=>({...d,...j.rph})) }
  return <div className="page print-area"><div className="page-header no-print"><div><p className="eyebrow">RPH EDITOR</p><h1>{data.subject} · {data.topic}</h1><p className="muted">Edit kandungan, jana semula AI atau cetak.</p></div><div className="button-row"><button className="secondary" onClick={regenerate}>Jana Semula AI</button><button className="secondary" onClick={print}>Cetak / PDF</button><button className="primary" onClick={save} disabled={saving}>{saving?'Menyimpan...':'Simpan'}</button></div></div>
    {msg&&<div className="info-box no-print">{msg}</div>}
    <article className="card rph-editor"><h2>RANCANGAN PENGAJARAN HARIAN</h2><div className="metadata-grid"><label>Tarikh<input type="date" value={data.date||''} onChange={e=>update('date',e.target.value)}/></label><label>Hari<input value={data.day||''} onChange={e=>update('day',e.target.value)}/></label><label>Minggu<input value={data.academic_week||''} onChange={e=>update('academic_week',e.target.value)}/></label><label>Mata Pelajaran<input value={data.subject||''} onChange={e=>update('subject',e.target.value)}/></label><label>Kelas<input value={data.class_name||''} onChange={e=>update('class_name',e.target.value)}/></label><label>Masa<input value={`${data.start_time||''} – ${data.end_time||''}`} readOnly/></label></div>
      <Editable label="Tema" value={data.theme||''} onChange={v=>update('theme',v)}/><Editable label="Tajuk" value={data.topic||''} onChange={v=>update('topic',v)}/><Editable label="STANDARD KANDUNGAN" value={data.standard_content||''} onChange={v=>update('standard_content',v)}/><Editable label="STANDARD PEMBELAJARAN" value={data.learning_standard||''} onChange={v=>update('learning_standard',v)}/><Editable label="STANDARD PRESTASI" value={data.performance_standard||''} onChange={v=>update('performance_standard',v)}/>
      <ListEditor label="OBJEKTIF PEMBELAJARAN" values={data.objectives||[]} onChange={v=>update('objectives',v)}/><ListEditor label="KRITERIA KEJAYAAN" values={data.success_criteria||[]} onChange={v=>update('success_criteria',v)}/>
      <h3>AKTIVITI PEMBELAJARAN</h3><div className="activity-grid">{[['setInduksi','Set Induksi'],['langkah1','Langkah 1'],['langkah2','Langkah 2'],['langkah3','Langkah 3'],['pengayaan','Pengayaan'],['pemulihan','Pemulihan'],['penutup','Penutup']].map(([k,l])=><label key={k}>{l}<textarea value={data.activities?.[k]||''} onChange={e=>updateNested('activities',k,e.target.value)}/></label>)}</div>
      {['strategy','pak21','kbat','emk','values','materials','assessment','reflection'].map(k=><Editable key={k} label={k.toUpperCase()} value={data[k]||''} onChange={v=>update(k,v)}/>) }
    </article>
  </div>
}
function Editable({label,value,onChange}:{label:string,value:string,onChange:(v:string)=>void}){return <section className="editor-section"><h3>{label}</h3><textarea value={value} onChange={e=>onChange(e.target.value)}/></section>}
function ListEditor({label,values,onChange}:{label:string,values:string[],onChange:(v:string[])=>void}){return <section className="editor-section"><h3>{label}</h3>{values.map((v,i)=><div className="inline-field" key={i}><input value={v} onChange={e=>{const n=[...values];n[i]=e.target.value;onChange(n)}}/><button className="danger ghost" onClick={()=>onChange(values.filter((_,x)=>x!==i))}>×</button></div>)}<button className="secondary" onClick={()=>onChange([...values,''])}>+ Tambah</button></section>}
