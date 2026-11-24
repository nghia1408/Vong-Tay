import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

function App() {
  const [apiStatus, setApiStatus] = React.useState('Đang kết nối…')

  React.useEffect(() => {
    fetch('/api/health')
      .then((response) => {
        if (!response.ok) throw new Error('API unavailable')
        return response.json()
      })
      .then((data) => setApiStatus(data.message))
      .catch(() => setApiStatus('Chưa kết nối được API'))
  }, [])

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12">
      <section className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60 sm:p-12">
        <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-xl font-bold text-white">
          V
        </div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
          React · Tailwind · Express
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Dự án đã sẵn sàng
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Frontend React kết nối với API Node.js và Express. Bắt đầu xây dựng tính năng của bạn tại đây.
        </p>
        <div className="mt-8 flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden="true" />
          <span>Trạng thái API: {apiStatus}</span>
        </div>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
