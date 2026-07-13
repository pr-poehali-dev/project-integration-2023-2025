import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const triggers = [
  {
    icon: "MessageSquareOff",
    title: "Канал есть, а продаж нет",
    text: "Напишем контент, выстроим автоворонку с ботами и дадим первых клиентов за 30 дней",
  },
  {
    icon: "Clock",
    title: "Нет времени разбираться в алгоритмах",
    text: "Возьмём всё на себя: от стратегии до модерации",
  },
  {
    icon: "TrendingDown",
    title: "Пробовали рекламу и слили бюджет",
    text: "Настроим Telegram Ads и Яндекс.Директ с оплатой за целевого подписчика от 8 ₽",
  },
]

export default function PainPoints() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-16 max-w-3xl mx-auto"
        >
          Подключают GO CHAT, когда нужен результат, а не процесс
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {triggers.map((t, index) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-5">
                <Icon name={t.icon} className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{t.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
