import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import AnimatedButton from "./AnimatedButton"
import { sendLead } from "@/lib/leadApi"

interface LeadFormProps {
  source: string
  service?: string
  buttonText?: string
  className?: string
}

export default function LeadForm({ source, service, buttonText = "Получить расчёт", className }: LeadFormProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [messenger, setMessenger] = useState<"Telegram" | "WhatsApp">("Telegram")
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return

    setLoading(true)
    const ok = await sendLead({ name, phone, messenger, service, source })
    setLoading(false)

    if (ok) {
      setSent(true)
      setName("")
      setPhone("")
      toast.success("Заявка отправлена! Свяжемся с вами в течение 15 минут.")
      setTimeout(() => setSent(false), 4000)
    } else {
      toast.error("Не удалось отправить заявку. Попробуйте ещё раз.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ваше имя"
          required
          className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Телефон"
          required
          className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
        />
      </div>

      <div className="flex items-center gap-2 mt-3">
        {(["Telegram", "WhatsApp"] as const).map((m) => (
          <button
            type="button"
            key={m}
            onClick={() => setMessenger(m)}
            className={`px-3 py-1.5 rounded-lg text-xs border transition-colors ${
              messenger === m
                ? "bg-blue-500/20 border-blue-500 text-blue-300"
                : "bg-gray-900 border-gray-700 text-gray-400 hover:text-white"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <AnimatedButton type="submit" disabled={loading} className="w-full bg-white text-black hover:bg-gray-100">
          {loading ? "Отправляем..." : buttonText}
        </AnimatedButton>
      </div>

      {sent && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-400 text-center mt-3 text-sm"
        >
          Спасибо! Мы свяжемся с вами в течение 15 минут.
        </motion.p>
      )}
    </form>
  )
}
