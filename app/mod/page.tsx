"use client"

import { useEffect } from "react"

export default function ModPage() {
  useEffect(() => {
    // Redireciona automaticamente para o MediaFire
    window.location.href = "https://www.mediafire.com/file/l0tgszopunilz23/LABUBU+CRAFT+MODS.rar/file"
  }, [])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <p className="text-white">Redirecionando...</p>
    </div>
  )
}
