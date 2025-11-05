"use client"

import { useEffect } from "react"

export default function ModPage() {
  useEffect(() => {
    // Redireciona automaticamente para o MediaFire
    window.location.href = "https://www.mediafire.com/file/5sd61wssv6u5uxn/mods.rar/file"
  }, [])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <p className="text-white">Redirecionando...</p>
    </div>
  )
}
