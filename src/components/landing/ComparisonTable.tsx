import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const staffRows = [
  { label: "Зарплата", value: "от 60 000 ₽" },
  { label: "Налоги", value: "18 000 ₽" },
  { label: "ПО и сервисы", value: "5 000 ₽" },
  { label: "Итого", value: "83 000 ₽/мес", highlight: true },
  { label: "Команда", value: "1 человек" },
]

const goChatRows = [
  { label: "Стоимость", value: "от 35 000 ₽" },
  { label: "Экономия", value: "48 000 ₽/мес" },
  { label: "Команда", value: "Стратег + копирайтер + дизайнер" },
  { label: "Итого", value: "от 35 000 ₽/мес", highlight: true },
  { label: "Команда", value: "3 специалиста" },
]

export default function ComparisonTable() {
  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-16"
        >
          Нанять штатного SMM-специалиста или подключить GO CHAT?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-gray-400 mb-6">Штатный специалист</h3>
            <div className="space-y-4">
              {staffRows.map((row) => (
                <div
                  key={row.label + row.value}
                  className={`flex justify-between items-center pb-3 border-b border-gray-800 ${
                    row.highlight ? "text-white font-bold text-lg" : "text-gray-400 text-sm"
                  }`}
                >
                  <span>{row.label}</span>
                  <span>{row.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-purple-500/40 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              GO CHAT Команда
              <Icon name="Sparkles" className="h-5 w-5 ml-2 text-purple-400" />
            </h3>
            <div className="space-y-4">
              {goChatRows.map((row) => (
                <div
                  key={row.label + row.value}
                  className={`flex justify-between items-center pb-3 border-b border-gray-800 ${
                    row.highlight ? "text-white font-bold text-lg" : "text-gray-300 text-sm"
                  }`}
                >
                  <span>{row.label}</span>
                  <span className={row.highlight ? "text-green-400" : ""}>{row.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
