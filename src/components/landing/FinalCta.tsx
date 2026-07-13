import { motion } from "framer-motion"
import LeadForm from "./LeadForm"

export default function FinalCta() {
  return (
    <section id="get-started" className="py-24 relative">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          Готовы получать клиентов на автомате?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-10"
        >
          Оставьте заявку прямо сейчас, и мы пришлём предварительный расчёт и медиаплан в Telegram в течение 15
          минут.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <LeadForm source="final-cta" buttonText="Хочу расчет через 15 минут" />
        </motion.div>
      </div>
    </section>
  )
}
