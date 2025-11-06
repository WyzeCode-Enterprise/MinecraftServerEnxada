"use client"

import { useEffect } from "react"

export default function ModPage() {
  useEffect(() => {
    window.location.href = "https://www.mediafire.com/file/7oydvk9ahsf9c3t/mods.rar/file"
  }, [])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <p className="text-white">Redirecionando...</p>
    </div>
  )
}
