"use client"

import { useEffect, useState } from "react"
import { CheckCircle2, Download } from "lucide-react"

export default function ResourcePage() {
  const [alreadyDownloaded, setAlreadyDownloaded] = useState(false)

  useEffect(() => {
    const hasDownloaded = localStorage.getItem("resource-pack-downloaded")

    if (hasDownloaded) {
      setAlreadyDownloaded(true)
    } else {
      // Inicia o download automático apenas na primeira vez
      triggerDownload()
      localStorage.setItem("resource-pack-downloaded", "true")
    }
  }, [])

  const triggerDownload = () => {
    const link = document.createElement("a")
    link.href = "/дфигиг скфае.rar"
    link.download = "дфигиг скфае.rar"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="border border-white/20 rounded-lg p-8 flex flex-col items-center gap-6 max-w-md">
        <CheckCircle2 className="w-20 h-20 text-green-500" />

        <div className="flex flex-col items-center gap-2">
          <p className="text-white text-center text-xl font-medium">O resource pack foi instalado com sucesso</p>

          {alreadyDownloaded && (
            <p className="text-white/60 text-center text-sm">Caso o download não tenha sido concluido</p>
          )}
        </div>

        {alreadyDownloaded && (
          <button
            onClick={triggerDownload}
            className="flex items-center gap-2 px-6 py-3 border border-white/30 rounded-lg text-white hover:bg-white/5 transition-colors"
          >
            <Download className="w-5 h-5" />
            Baixar novamente
          </button>
        )}
      </div>
    </div>
  )
}
