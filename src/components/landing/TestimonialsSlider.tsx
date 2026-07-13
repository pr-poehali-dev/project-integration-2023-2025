import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const testimonials = [
  {
    avatar: "https://cdn.poehali.dev/projects/cf490300-e4b4-44de-af6b-0a4ba5773dbd/files/c3657f08-22b5-403f-8049-4afaacbbe994.jpg",
    name: "Дмитрий Волков",
    role: "Владелец сети кофеен",
    text: "Ребята настроили автоворонку, которая приносит заявки даже ночью. Стоимость лида — 2$. Это лучшее вложение за 3 года.",
  },
  {
    avatar: "https://cdn.poehali.dev/projects/cf490300-e4b4-44de-af6b-0a4ba5773dbd/files/578afa14-9795-43f6-aa32-bf74b79b8866.jpg",
    name: "Анна Светлова",
    role: "Основатель школы английского",
    text: "До GO CHAT мы сливали бюджет на рекламу без результата. Через месяц работы канал ожил, а заявки идут каждый день.",
  },
  {
    avatar: "https://cdn.poehali.dev/projects/cf490300-e4b4-44de-af6b-0a4ba5773dbd/files/c3657f08-22b5-403f-8049-4afaacbbe994.jpg",
    name: "Игорь Панин",
    role: "Директор автосервиса",
    text: "Не было времени разбираться в алгоритмах мессенджеров — команда взяла всё на себя, от контента до модерации.",
  },
]

export default function TestimonialsSlider() {
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
          Кейсы и отзывы клиентов
        </motion.h2>

        <Carousel className="w-full max-w-3xl mx-auto">
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.name}>
                <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 sm:p-10 backdrop-blur-sm text-center">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover mx-auto mb-5"
                  />
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">«{t.text}»</p>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="static translate-y-0 mt-6 mr-3 bg-gray-900 border-gray-700 text-white hover:bg-gray-800" />
          <CarouselNext className="static translate-y-0 mt-6 bg-gray-900 border-gray-700 text-white hover:bg-gray-800" />
        </Carousel>

        <div className="text-center mt-10">
          <a
            href="https://t.me/gogochat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white font-medium hover:text-blue-400 transition-colors"
          >
            <Send className="mr-2 h-4 w-4" />
            Смотреть все кейсы в Telegram
          </a>
        </div>
      </div>
    </section>
  )
}
