import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { homeServicesCatalog } from "@/data/services"

export default function ServicesCatalog() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-16"
        >
          Выберите, с чего начнём рост
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeServicesCatalog.map((s, index) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-purple-400 font-semibold text-sm mb-3">{s.price}</p>
              <p className="text-gray-400 text-sm mb-6 flex-1">{s.description}</p>
              <Link
                to={`/${s.slug}`}
                className="inline-flex items-center text-sm font-medium text-white hover:text-blue-400 transition-colors"
              >
                Подробнее
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
