"use client"

import { useEffect } from "react"

export default function ModPage() {
  useEffect(() => {
    window.location.href = "https://drive.google.com/file/d/1oeV4_TT71NKhixr48poGlXCP72hd0qTa/view?usp=sharing"
  }, [])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <p className="text-white">Redirecionando...</p>
    </div>
  )
}
