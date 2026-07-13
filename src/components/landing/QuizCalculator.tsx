import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { toast } from "sonner"
import AnimatedButton from "./AnimatedButton"
import { sendLead } from "@/lib/leadApi"

const platforms = ["Telegram", "Max", "VK", "Avito", "Сайт"]
const tasks = ["Подписчики", "Заявки", "Продажи"]

export default function QuizCalculator() {
  const [step, setStep] = useState(1)
  const [platform, setPlatform] = useState("")
  const [task, setTask] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return
    setLoading(true)
    const ok = await sendLead({
      name,
      phone,
      messenger: "Telegram",
      service: platform,
      task,
      source: "quiz",
    })
    setLoading(false)
    if (ok) {
      setSent(true)
      toast.success("Заявка отправлена! Пришлём расчёт в течение 15 минут.")
    } else {
      toast.error("Не удалось отправить заявку. Попробуйте ещё раз.")
    }
  }

  return (
    <section className="py-24 relative">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-4"
        >
          Узнайте цену продвижения за 15 минут
        </motion.h2>

        <div className="flex justify-center gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1.5 w-16 rounded-full transition-colors ${
                s <= step ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-gray-800"
              }`}
            />
          ))}
        </div>

        <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm min-h-[280px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <p className="text-white font-semibold mb-6 text-center">Что нужно продвигать?</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {platforms.map((p) => (
                    <button
                      key={p}
                      onClick={() => {
                        setPlatform(p)
                        setStep(2)
                      }}
                      className={`px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${
                        platform === p
                          ? "bg-blue-500/20 border-blue-500 text-blue-300"
                          : "bg-gray-900 border-gray-700 text-gray-300 hover:border-gray-500"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <p className="text-white font-semibold mb-6 text-center">Какая задача в приоритете?</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {tasks.map((t) => (
                    <button
                      key={t}
                      onClick={() => {
                        setTask(t)
                        setStep(3)
                      }}
                      className={`px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${
                        task === t
                          ? "bg-purple-500/20 border-purple-500 text-purple-300"
                          : "bg-gray-900 border-gray-700 text-gray-300 hover:border-gray-500"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="text-gray-500 text-xs mt-6 mx-auto block hover:text-white"
                >
                  Назад
                </button>
              </motion.div>
            )}

            {step === 3 && !sent && (
              <motion.form
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit}
              >
                <p className="text-white font-semibold mb-6 text-center">Ваше имя и телефон</p>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Имя"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Телефон"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
                <div className="mt-5">
                  <AnimatedButton type="submit" disabled={loading} className="w-full bg-white text-black hover:bg-gray-100">
                    {loading ? "Отправляем..." : "Отправить и получить расчет в Telegram/WhatsApp"}
                  </AnimatedButton>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-gray-500 text-xs mt-4 mx-auto block hover:text-white"
                >
                  Назад
                </button>
              </motion.form>
            )}

            {sent && (
              <motion.div
                key="sent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <p className="text-green-400 font-semibold text-lg">Спасибо! Мы уже готовим расчёт для вас.</p>
                <p className="text-gray-400 text-sm mt-2">Свяжемся в течение 15 минут.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
