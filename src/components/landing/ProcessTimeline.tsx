import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const steps = [
  {
    icon: "FileText",
    title: "Оставляете заявку",
    description: "Мы изучаем нишу",
  },
  {
    icon: "PenTool",
    title: "Создаём стратегию, контент-план и ботов",
    description: "Согласовываем",
  },
  {
    icon: "Rocket",
    title: "Запускаем контент и рекламу",
    description: "Первые подписчики",
  },
  {
    icon: "TrendingUp",
    title: "Передаём отчёт и масштабируем результат",
    description: "Ваш бизнес растёт",
  },
]

export default function ProcessTimeline() {
  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-16"
        >
          От заявки до первых клиентов — 4 шага
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
          {steps.map((s, index) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-purple-500/30 flex items-center justify-center mx-auto mb-5 relative z-10 backdrop-blur-sm">
                <Icon name={s.icon} className="h-7 w-7 text-purple-400" />
              </div>
              <h3 className="text-white font-bold mb-2 text-sm sm:text-base">{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
