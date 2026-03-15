import Link from "next/link";
import { Img } from "../ui/Image";
import { Heart, ShoppingCart } from "lucide-react";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-360 mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link className="flex items-center gap-2 group" href="/">
            <h1 className="text-xl font-extrabold tracking-tighter uppercase">
              Lavora Beauty
            </h1>
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              className="text-sm font-semibold hover:text-primary transition-colors"
              href="#"
            >
              Shop All
            </Link>
            <Link
              className="text-sm font-semibold hover:text-primary transition-colors"
              href="#"
            >
              Skincare
            </Link>
            <Link
              className="text-sm font-semibold hover:text-primary transition-colors"
              href="#"
            >
              Best Sellers
            </Link>
            <Link
              className="text-sm font-semibold hover:text-primary transition-colors"
              href="#"
            >
              Sustainability
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-6 flex-1 justify-end max-w-2xl">
          <div className="relative w-full max-w-md hidden md:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>
            <input
              className="w-full bg-slate-200/50 dark:bg-slate-800/50 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50"
              placeholder="Search products, brands..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full relative">
              <span className="material-symbols-outlined">
                <Heart />
              </span>
            </button>
            <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full relative">
              <span className="material-symbols-outlined">
                <ShoppingCart />
              </span>
              <span className="absolute top-1 right-1 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                3
              </span>
            </button>
            <button className="flex items-center gap-2 p-1 pl-1 pr-3 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-all">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden"></div>
              <span className="text-sm font-medium hidden sm:inline">
                Account
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
