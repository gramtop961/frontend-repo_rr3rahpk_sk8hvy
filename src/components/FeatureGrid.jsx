import { motion } from 'framer-motion'
import { BarChart, Boxes, CreditCard, Globe, ShieldCheck, Zap } from 'lucide-react'

const features = [
  {
    title: 'Modular Architecture',
    description: 'Enable or disable modules like catalog, vendors, logistics, payments, and marketing.',
    icon: Boxes,
  },
  {
    title: 'Scalable & Secure',
    description: 'Enterprise‑grade authentication, permissions, and robust API design built‑in.',
    icon: ShieldCheck,
  },
  {
    title: 'Global Ready',
    description: 'Multi‑currency, multi‑language, locale pricing, and tax/VAT rules.',
    icon: Globe,
  },
  {
    title: 'Payments & Payouts',
    description: 'Seamless checkout with split payments and automated vendor settlements.',
    icon: CreditCard,
  },
  {
    title: 'Insights & Analytics',
    description: 'Real‑time dashboards for sales, fulfillment, and experience quality.',
    icon: BarChart,
  },
  {
    title: 'Fast by default',
    description: 'Optimized frontend, CDN‑friendly assets, and efficient APIs.',
    icon: Zap,
  },
]

function FeatureGrid() {
  return (
    <section id="features" className="py-16 border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Everything you need to run multi‑vendor commerce</h2>
          <p className="mt-2 text-slate-600">Designed for performance, reliability, and operational excellence.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{f.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid
