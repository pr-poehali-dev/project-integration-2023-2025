import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "Можно ли протестировать услугу до оплаты?",
    a: "Да, можем запустить тестовую рекламную кампанию с бюджетом от 3 000 ₽, чтобы показать стоимость подписчика.",
  },
  {
    q: "Какие гарантии, что реклама не сольётся впустую?",
    a: "Фиксируем KPI в договоре. Если оффер не заходит, меняем гипотезу за свой счёт на старте работ.",
  },
  {
    q: "Работаете ли вы с юрлицами?",
    a: "Да, работаем по договору с ИП или ООО, предоставляем закрывающие документы.",
  },
  {
    q: "Что если мне не понравится контент?",
    a: "У вас неограниченное количество правок на этапе подготовки. Мы не публикуем пост, пока вы его не утвердите.",
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-16"
        >
          Остались вопросы? У нас есть ответы
        </motion.h2>

        <Accordion type="single" collapsible className="bg-gray-900/30 border border-gray-800 rounded-2xl px-6 backdrop-blur-sm">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.q} value={`item-${index}`} className="border-gray-800">
              <AccordionTrigger className="text-white hover:text-blue-400 text-left">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-gray-400">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
