import { ExternalLink, Store, Truck, Users } from 'lucide-react'

function HeaderNav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
          <Store className="h-6 w-6 text-blue-600" />
          <span>Multi‑Module Commerce</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#modules" className="hover:text-slate-900">Modules</a>
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#panels" className="hover:text-slate-900">Panels</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://vendor.eshopweb.store/admin/home"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Admin Panel <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="https://vendor.eshopweb.store/seller/home"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Seller Panel <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default HeaderNav
