import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import AnimatedButton from "./AnimatedButton"
import CountingStats from "./CountingStats"
import { cn } from "@/lib/utils"

export default function Hero() {
  const stats = [
    { value: 300, suffix: "+", label: "Бизнесов продвинуто" },
    { value: 97, suffix: "%", label: "Довольных клиентов" },
    { value: 5, suffix: " млн+", label: "Подписчиков привлечено" },
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-80"
          style={{
            filter: "brightness(0.9) contrast(1.1)",
          }}
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/momotionmp4%20%282%29-js5jkz69E4tKFmKGf85Nu5y4Suf4GI.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-white/30 rounded-full text-sm text-white font-medium backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span>Продвижение бизнеса в мессенджерах</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              >
                <span className="block text-white mb-2">ВЕДЕНИЕ И</span>
                <span className="block text-white mb-2">ПРОДВИЖЕНИЕ БИЗНЕСА</span>
                <span
                  className={cn(
                    "block mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-pacifico",
                  )}
                  style={{
                    textShadow: "0 0 40px rgba(147, 51, 234, 0.5)",
                  }}
                >
                  В Мессенджерах
                </span>
                <span className="block text-gray-300">MAX И TELEGRAM</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0"
              >
                В GoChat мы развиваем бизнес там, где живут ваши клиенты — в Telegram и Max. Ведём каналы, создаём
                воронки продаж и запускаем рекламу, которая приносит реальных покупателей.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col gap-6 items-center justify-center lg:justify-start lg:items-start"
            >
              <a href="#get-started">
                <AnimatedButton variant="slim" className="bg-white text-black hover:bg-gray-100">
                  <span className="flex items-center">
                    Начать
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </AnimatedButton>
              </a>

              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-2.86 13.5c-.21.97-1.43 1.38-2.16.69l-3.5-2.7-1.69 1.63c-.17.17-.44.21-.65.1l.39-5.51 10.03-9.06c.38-.34-.08-.54-.58-.2L5.8 12.9 2.36 11.8c-.97-.3-.99-1.46.19-1.86l15.5-5.98c.87-.33 1.67.51 1.23 1.84z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Telegram</p>
                    <p className="text-xs text-gray-400">Официальный партнёр</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Max</p>
                    <p className="text-xs text-gray-400">Аккредитованный агент</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Гарантия</p>
                    <p className="text-xs text-gray-400">Результат или возврат</p>
                  </div>
                </div>
              </div>

              {/* Stats moved below badges */}
              <CountingStats stats={stats} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}