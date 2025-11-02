import { motion } from 'framer-motion'
import { Settings, Store, Truck, Users, ExternalLink } from 'lucide-react'

const panels = [
  {
    title: 'Admin Panel',
    description: 'Control center for configuration, catalog, vendors, orders, payouts, marketing, and analytics.',
    icon: Settings,
    color: 'from-slate-900 to-slate-700',
    link: 'https://vendor.eshopweb.store/admin/home'
  },
  {
    title: 'Seller Panel',
    description: 'Product, inventory, pricing, promotions, order management, and performance insights.',
    icon: Store,
    color: 'from-blue-600 to-indigo-600',
    link: 'https://vendor.eshopweb.store/seller/home'
  },
  {
    title: 'Delivery Panel',
    description: 'Route planning, pickup & drop management, proof of delivery, status updates in real time.',
    icon: Truck,
    color: 'from-emerald-600 to-teal-600',
    link: '#'
  },
  {
    title: 'User App',
    description: 'Delightful shopping with search, filters, cart, checkout, tracking, and support.',
    icon: Users,
    color: 'from-violet-600 to-fuchsia-600',
    link: '#'
  }
]

function PanelsShowcase() {
  return (
    <section id="panels" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-end sm:justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Panels for every role</h2>
            <p className="mt-2 text-slate-600">Purpose‑built experiences that connect across the full order lifecycle.</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {panels.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target={p.link === '#' ? undefined : '_blank'}
              rel={p.link === '#' ? undefined : 'noreferrer'}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${p.color} text-white flex items-center justify-center mb-4`}>
                <p.icon className="h-5 w-5" />
              </div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-slate-900 group-hover:underline flex items-center gap-2">
                    {p.title}
                    {p.link !== '#' && <ExternalLink className="h-4 w-4 text-slate-400" />}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{p.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PanelsShowcase
