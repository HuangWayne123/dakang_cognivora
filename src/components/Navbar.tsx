import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { BrainCircuit, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

const navLinks = [
  { name: "首页", path: "/" },
  { name: "AI能力", path: "/ai-capabilities" },
  { name: "数据能力", path: "/data-capabilities" },
  { name: "解决方案", path: "/solutions" },
  { name: "常见问题", path: "/faq" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all">
            <BrainCircuit className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white tracking-wider">认知黑洞</span>
            <span className="text-[10px] text-purple-400 tracking-widest uppercase">Cognitive Blackhole</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-white",
                  isActive ? "text-white" : "text-gray-400"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-8 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="text-xs text-gray-500 border border-white/10 px-3 py-1 rounded-full">
            隶属于达康控股
          </div>
          <button className="btn-primary">联系我们</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-black/95 border-b border-white/10 p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-medium p-2 rounded-lg",
                location.pathname === link.path ? "bg-white/10 text-white" : "text-gray-400"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-4">
            <div className="text-xs text-purple-400 font-medium">隶属于达康控股</div>
            <button className="btn-primary w-full">联系我们</button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
