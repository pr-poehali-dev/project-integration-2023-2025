import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Send, Mail, ArrowRight } from "lucide-react"
import AnimatedButton from "./AnimatedButton"
import { services } from "@/data/services"

export default function AnimatedFooter() {
  return (
    <footer id="contact" className="relative bg-black border-t border-gray-800/50">
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="group flex justify-center lg:justify-start">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105">
                GO CHAT
              </span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Ведём и продвигаем бизнес в Telegram и Max: каналы, воронки, реклама и чат-боты.
              Ваши клиенты уже в мессенджерах — мы поможем вам до них дотянуться.
            </p>

            {/* Social Links */}
            <div className="flex space-x-6 justify-center lg:justify-start">
              {[
                { icon: Send, href: "https://t.me/gogochat", label: "Telegram" },
                { icon: Mail, href: "mailto:gogogotg@yandex.ru", label: "Email" },
              ].map(({ icon: Icon, href, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label={label}
                  >
                    <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-800 group-hover:border-gray-700 transition-colors">
                      <Icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Links and Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Услуги</h4>
              <ul className="space-y-4">
                {services.map((s, index) => (
                  <motion.li
                    key={s.slug}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={`/${s.slug}`}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center justify-center sm:justify-start group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-200 mr-0 group-hover:mr-2" />
                      {s.navTitle}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Контакты</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-400 justify-center sm:justify-start">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <a href="mailto:gogogotg@yandex.ru" className="hover:text-white transition-colors">
                    gogogotg@yandex.ru
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 justify-center sm:justify-start">
                  <Send className="h-5 w-5 text-blue-500" />
                  <a
                    href="https://t.me/gogochat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    @gogochat
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <a href="/#get-started">
                  <AnimatedButton className="w-full bg-white text-black hover:bg-gray-100">
                    <span className="flex items-center justify-center">
                      Начать проект
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </AnimatedButton>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Legal Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center sm:text-left"
        >
          <p className="text-gray-500 text-xs leading-relaxed max-w-3xl mx-auto sm:mx-0">
            ИП Гималетдинова Лилия Фанисовна, ИНН: 161102909341. Email: gogogotg@yandex.ru
          </p>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-6 pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">
            <p className="text-gray-500 text-sm">
              {new Date().getFullYear()} GO CHAT. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors">
                Политика конфиденциальности
              </Link>
            </div>
          </div>
          <p className="text-gray-600 text-xs mt-4 text-center sm:text-left">
            Социальные сети компании Meta (Facebook, Instagram) признаны экстремистскими и запрещены на территории РФ.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
