import { Link } from "react-router-dom";
import { BrainCircuit, ExternalLink, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#020202] border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
                <BrainCircuit className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-wider">认知黑洞</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              以科技定义食品，以诚信守护健康。我们致力于将前沿人工智能与大数据技术应用于食品科学，重塑未来饮食生态。
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              隶属于达康控股
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium mb-6">核心能力</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/ai-capabilities" className="hover:text-purple-400 transition-colors">AI 预测模型</Link></li>
              <li><Link to="/ai-capabilities" className="hover:text-purple-400 transition-colors">智能配方生成</Link></li>
              <li><Link to="/data-capabilities" className="hover:text-purple-400 transition-colors">全链路数据追踪</Link></li>
              <li><Link to="/data-capabilities" className="hover:text-purple-400 transition-colors">消费者行为图谱</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">解决方案与支持</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/solutions" className="hover:text-purple-400 transition-colors">智能制造方案</Link></li>
              <li><Link to="/solutions" className="hover:text-purple-400 transition-colors">食品安全风控</Link></li>
              <li><Link to="/solutions" className="hover:text-purple-400 transition-colors">供应链优化</Link></li>
              <li><Link to="/faq" className="hover:text-purple-400 transition-colors">常见问题 (FAQ)</Link></li>
            </ul>
          </div>

          {/* Group Ecosystem */}
          <div>
            <h4 className="text-white font-medium mb-6 flex items-center gap-2">
              集团生态跳转 <ExternalLink className="w-4 h-4 text-purple-400" />
            </h4>
            <div className="space-y-3">
              <a href="#" className="group flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all">
                <span className="text-sm text-gray-300 group-hover:text-white">达康控股</span>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
              </a>
              <a href="#" className="group flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all">
                <span className="text-sm text-gray-300 group-hover:text-white">达康食品股份</span>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a href="#" className="group flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all">
                <span className="text-sm text-gray-300 group-hover:text-white">达康供应链集团</span>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} 认知黑洞 (Cognitive Blackhole). 达康控股旗下企业. 保留所有权利.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
            <a href="#" className="hover:text-white transition-colors">Cookie 政策</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
