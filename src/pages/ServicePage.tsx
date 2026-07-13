import { useParams, Navigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Check, Send } from "lucide-react"
import PageLayout from "@/components/landing/PageLayout"
import AnimatedButton from "@/components/landing/AnimatedButton"
import LeadForm from "@/components/landing/LeadForm"
import { getServiceBySlug } from "@/data/services"

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) {
    return <Navigate to="/404" replace />
  }

  return (
    <PageLayout>
      {/* Первый экран */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
          >
            {service.h1}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10"
          >
            {service.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#service-cta">
              <AnimatedButton size="lg" className="bg-white text-black hover:bg-gray-100">
                {service.ctaText}
              </AnimatedButton>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Тарифы */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
          >
            Что входит в тарифы
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-6 border backdrop-blur-sm flex flex-col ${
                  tier.highlight
                    ? "bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 border-purple-500/50"
                    : "bg-gray-900/30 border-gray-800"
                }`}
              >
                {tier.highlight && (
                  <span className="text-xs font-semibold text-purple-300 bg-purple-500/20 rounded-full px-3 py-1 w-fit mb-4">
                    Популярный
                  </span>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="mb-6">
                  {tier.oldPrice && (
                    <span className="text-gray-500 line-through text-sm mr-2">{tier.oldPrice}</span>
                  )}
                  <span className="text-2xl font-bold text-white">{tier.price}</span>
                </div>
                <ul className="space-y-3 mb-6 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start text-sm text-gray-400">
                      <Check className="h-4 w-4 text-green-400 mr-2 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#service-cta">
                  <AnimatedButton className="w-full bg-white text-black hover:bg-gray-100">
                    Подобрать тариф
                  </AnimatedButton>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Этапы работы */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-16"
          >
            Этапы работы
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            {service.roadmap.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold flex items-center justify-center mx-auto mb-4 relative z-10">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Кейсы */}
      <section className="py-20 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/30 border border-gray-800 rounded-2xl p-10 backdrop-blur-sm"
          >
            <p className="text-gray-400 mb-6">Хотите увидеть реальные результаты по этой услуге?</p>
            <a
              href="https://t.me/gogochat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-lg font-semibold text-white hover:text-blue-400 transition-colors"
            >
              <Send className="mr-2 h-5 w-5" />
              {service.caseText}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Финальный CTA */}
      <section id="service-cta" className="py-20 relative">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            {service.h1}
          </motion.h2>
          <p className="text-gray-400 mb-10">
            Оставьте заявку — пришлём расчёт и медиаплан в течение 15 минут.
          </p>
          <LeadForm source={`service:${service.slug}`} service={service.navTitle} buttonText={service.ctaText} />
        </div>
      </section>
    </PageLayout>
  )
}
