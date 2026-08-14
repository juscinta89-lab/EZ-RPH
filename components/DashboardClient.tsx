'use client'

export function DashboardClient({ teacher, plans }: { teacher: any, plans: any[] }) {
  const today = new Date(); const complete = plans.filter(p => p.status === 'complete').length
  const draft = plans.filter(p => p.status === 'draft').length
  return <div className="page">
    <div className="page-header"><div><p className="eyebrow">DASHBOARD</p><h1>Selamat datang, {teacher?.name || 'Guru'} 👋</h1><p className="muted">{today.toLocaleDateString('ms-MY',{weekday:'long', day:'numeric', month:'long', year:'numeric'})}</p></div><a className="primary button-link" href="/rph/new">✨ Jana RPH AI</a></div>
    <div className="stats-grid"><div className="stat"><span>RPH minggu ini</span><b>{plans.length}</b></div><div className="stat"><span>Lengkap</span><b>{complete}</b></div><div className="stat"><span>Draf</span><b>{draft}</b></div><div className="stat"><span>Perlu semak</span><b>{plans.filter(p=>p.status==='review').length}</b></div></div>
    <section className="card"><div className="section-head"><div><h2>RPH terkini</h2><p className="muted">Semak dan sambung kerja terakhir anda.</p></div><a href="/rph" className="secondary">Lihat semua</a></div>
      <div className="table-wrap"><table><thead><tr><th>Tarikh</th><th>Subjek</th><th>Kelas</th><th>Topik</th><th>Status</th></tr></thead><tbody>{plans.slice(0,6).map(p=><tr key={p.id}><td>{p.date}</td><td>{p.subject}</td><td>{p.class_name || p.class_id || '-'}</td><td>{p.topic}</td><td><span className={`badge ${p.status || 'draft'}`}>{p.status || 'draft'}</span></td></tr>)}{plans.length===0 && <tr><td colSpan={5} className="empty">Belum ada RPH. Mulakan dengan Jana RPH AI.</td></tr>}</tbody></table></div>
    </section>
    <section className="grid-2"><div className="card"><h2>Hari ini</h2><p className="muted">Slot PdP anda akan muncul berdasarkan jadual waktu.</p><a href="/timetable" className="secondary">Urus jadual</a></div><div className="card"><h2>Setup progress</h2><div className="progress"><span style={{width:'55%'}} /></div><p className="muted">Lengkapkan profil, kelas, subjek, jadual, takwim, DSKP dan buku teks untuk generation paling tepat.</p></div></section>
  </div>
}
