import { motion } from "framer-motion"
import { ArrowRight, Users, Award, Cpu } from "lucide-react"
import AnimatedButton from "./AnimatedButton"

const badges = [
  { icon: Users, text: "28 человек в команде" },
  { icon: Award, text: "Более 5 лет на рынке" },
  { icon: Cpu, text: "Собственное AI-ПО для продвижения" },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-10 overflow-hidden">
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-tight text-white"
            >
              Клиенты из соцсетей со стоимостью{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                от 8 ₽ за подписчика
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
            >
              Запускаем и ведём каналы в Telegram, Max, VK, Avito. Настроим систему, которая сама приводит горячие
              заявки на автомате — от 15 000 ₽/мес.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a href="#get-started">
                <AnimatedButton variant="slim" size="lg" className="bg-white text-black hover:bg-gray-100">
                  <span className="flex items-center">
                    Получить расчет и стратегию за 2 часа
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </AnimatedButton>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-3 pt-2"
            >
              {badges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="inline-flex items-center px-4 py-2 bg-gray-900/60 border border-gray-800 rounded-full text-xs sm:text-sm text-gray-300 backdrop-blur-sm"
                >
                  <Icon className="h-4 w-4 mr-2 text-blue-400" />
                  {text}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
