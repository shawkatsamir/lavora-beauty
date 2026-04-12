import Link from "next/link";
import {
  Bell,
  Heart,
  Search,
  ShoppingBag,
  Sparkles,
  Sprout,
  User,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center justify-between gap-2 shrink-0">
            <div className="flex items-cetner justify-between gap-2">
              <span>
                <Sprout />
              </span>
              <Link href="/">
                <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
                  Lavora
                </h1>
              </Link>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <button className="p-2 rounded-full hover:bg-foreground/5 transition-colors relative">
                <Bell className="w-6 h-6 text-text-muted" />
                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-surface" />
              </button>
            </div>
          </div>

          <div className="w-full md:max-w-md lg:max-w-lg relative mx-auto border-none">
            <div
              className={cn(
                "flex items-center gap-2 bg-foreground/5 border transition-colors rounded-2xl px-4 py-2.5 md:py-2",
              )}
            >
              <Search className="w-5 h-5 text-text-muted shrink-0" />
              <input
                type="text"
                placeholder="Search for products, brands..."
                className="bg-transparent border-none outline-none focus:outline-none focus:ring-0 focus:border-transparent w-full text-base md:text-sm text-foreground placeholder:text-text-muted appearance-none"
              />
              <button className="p-1 hover:bg-foreground/10 rounded-full">
                <X className="w-4 h-4 text-text-muted" />
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors mr-2"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">1240 pts</span>
            </Link>

            <Link
              href="/"
              className="p-2 rounded-full hover:bg-foreground/5 transition-colors relative"
            >
              <Heart className="w-6 h-6 text-text-muted" />
            </Link>

            <Link
              href="/"
              className="p-2 rounded-full hover:bg-foreground/5 transition-colors relative"
            >
              <ShoppingBag className="w-6 h-6 text-text-muted" />
              <span className="absolute top-2 right-2 w-4 h-4 bg-primary text-primary-foreground text-[8px] font-bold rounded-full flex items-center justify-center border-2 border-surface">
                2
              </span>
            </Link>
            <Link
              href="/"
              className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
            >
              <User className="w-6 h-6 text-text-muted" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
