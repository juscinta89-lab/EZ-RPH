'use client'

import { useEffect, useState } from 'react'
import { apiFetch } from '@/lib/firebase/request'

type RPH = {
  id: string
  date: string
  subject: string
  topic: string
  status?: string
}

export default function CalendarPage() {
  const [data, setData] = useState<RPH[]>([])

  useEffect(() => {
    let cancelled = false

    async function loadRPH() {
      try {
        const response = await apiFetch('/api/rph')
        const result = await response.json()

        if (!cancelled) {
          setData(Array.isArray(result) ? result : [])
        }
      } catch (error) {
        console.error('Gagal memuatkan RPH:', error)

        if (!cancelled) {
          setData([])
        }
      }
    }

    loadRPH()

    return () => {
      cancelled = true
    }
  }, [])

  const grouped = data.reduce<Record<string, RPH[]>>((acc, rph) => {
    if (!acc[rph.date]) {
      acc[rph.date] = []
    }

    acc[rph.date].push(rph)

    return acc
  }, {})

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <p className="eyebrow">KALENDAR</p>

          <h1>Kalendar RPH</h1>

          <p className="muted">
            Hijau lengkap · kuning draf · merah belum dibuat.
          </p>
        </div>
      </div>

      <div className="calendar-grid">
        {Object.entries(grouped).map(([date, items]) => (
          <div
            className="calendar-day card"
            key={date}
          >
            <b>{date}</b>

            {items.map((rph) => (
              <div
                key={rph.id}
                className={`calendar-item ${
                  rph.status || 'draft'
                }`}
              >
                <span>{rph.subject}</span>

                <small>{rph.topic}</small>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}