import { motion } from 'framer-motion'
import { Rocket, Shield, Smartphone } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium mb-4">
              <Rocket className="h-4 w-4" />
              Multi‑Vendor • Multi‑Module • Web + Apps
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Build a complete commerce ecosystem for every role
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Admin, sellers, couriers, and customers — all in one unified suite. Scalable, secure, and ready for real‑world operations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://vendor.eshopweb.store/admin/home"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Open Admin Panel
              </a>
              <a
                href="https://vendor.eshopweb.store/seller/home"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-white/60"
              >
                Open Seller Panel
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div className="inline-flex items-center gap-2"><Shield className="h-4 w-4 text-emerald-600"/>Secure & role‑based</div>
              <div className="inline-flex items-center gap-2"><Smartphone className="h-4 w-4 text-blue-600"/>Web & Mobile ready</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl border border-slate-200 bg-white shadow-xl p-4">
              <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-blue-100 via-indigo-100 to-white flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="text-sm uppercase tracking-widest text-slate-500 font-semibold">Panels & Apps</p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">Admin • Seller • Courier • User</h3>
                  <p className="mt-2 text-slate-600">Role‑specific tools working together seamlessly.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
