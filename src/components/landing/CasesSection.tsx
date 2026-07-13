import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const cases = [
  {
    logo: "https://cdn.poehali.dev/projects/cf490300-e4b4-44de-af6b-0a4ba5773dbd/files/e7ff0289-2bca-43ed-ae5a-66564950cf36.jpg",
    task: "Отсутствие заявок из Telegram",
    solution: "Автоворонка + нейрокомментинг",
    result: "+400 целевых подписчиков за месяц, стоимость лида 8,5 ₽",
  },
  {
    logo: "https://cdn.poehali.dev/projects/cf490300-e4b4-44de-af6b-0a4ba5773dbd/files/b5bc191b-64ea-4f4c-9c28-6a5031770e3d.jpg",
    task: "Слитый бюджет на рекламу без результата",
    solution: "Telegram Ads с точным таргетингом",
    result: "Снижение цены подписчика с 22 ₽ до 9 ₽, рост канала в 3 раза",
  },
  {
    logo: "https://cdn.poehali.dev/projects/cf490300-e4b4-44de-af6b-0a4ba5773dbd/files/e7ff0289-2bca-43ed-ae5a-66564950cf36.jpg",
    task: "Мёртвый канал в Max без активности",
    solution: "Контент-план + инвайтинг живой аудитории",
    result: "1 200 подписчиков и 60 заявок за 45 дней",
  },
  {
    logo: "https://cdn.poehali.dev/projects/cf490300-e4b4-44de-af6b-0a4ba5773dbd/files/b5bc191b-64ea-4f4c-9c28-6a5031770e3d.jpg",
    task: "Заявки с Авито стоили слишком дорого",
    solution: "Оптимизация объявлений + автоответчик",
    result: "Стоимость заявки снижена на 54%, поток вырос вдвое",
  },
]

export default function CasesSection() {
  return (
    <section id="cases" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-16"
        >
          Результаты, которые можно посчитать
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, index) => (
            <motion.div
              key={c.task}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm hover:border-gray-700 transition-all duration-300"
            >
              <img
                src={c.logo}
                alt="Логотип клиента"
                className="w-10 h-10 rounded-lg object-cover mb-4 opacity-80"
              />
              <div className="space-y-3 text-sm">
                <p className="text-gray-500">
                  <span className="text-gray-400 font-medium">Задача:</span> {c.task}
                </p>
                <div className="flex items-center text-purple-400">
                  <Icon name="ArrowRight" className="h-4 w-4 mr-2 shrink-0" />
                  <span>{c.solution}</span>
                </div>
                <p className="text-green-400 font-semibold pt-2 border-t border-gray-800">{c.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
