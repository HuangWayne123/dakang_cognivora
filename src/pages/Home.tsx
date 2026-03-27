import { motion } from "motion/react";
import { ArrowRight, BrainCircuit, Database, FlaskConical, ShieldCheck, ChevronDown, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "../lib/utils";

const faqs = [
  {
    question: "认知黑洞的AI技术如何应用于食品安全？",
    answer: "我们利用深度学习模型对原材料供应链进行实时监控，通过计算机视觉识别微小瑕疵，并结合预测性算法提前预警潜在的食品安全风险，实现从农田到餐桌的全链路智能防护。"
  },
  {
    question: "数据能力如何保障供应链透明度？",
    answer: "我们构建了基于区块链和分布式账本技术的溯源系统。每一批次食品的生产、加工、运输数据均被加密上链，消费者和监管机构可通过扫码获取不可篡改的全生命周期数据。"
  },
  {
    question: "你们的食品科技与传统食品工业有何不同？",
    answer: "传统食品工业依赖经验和大规模试错。认知黑洞采用合成生物学、精密发酵和分子级营养重构技术，在实验室环境中以更低的资源消耗创造出更健康、更具功能性的未来食品。"
  },
  {
    question: "认知黑洞与达康控股的关系是什么？",
    answer: "认知黑洞是达康控股旗下的核心科技企业，专注于将前沿AI与数据技术赋能于大健康与食品产业。我们与达康食品股份、达康供应链集团等兄弟公司深度协同，共建集团生态。"
  }
];

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/ai-grid/1920/1080')] opacity-[0.03] mix-blend-overlay" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-purple-300 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            达康控股旗下核心科技企业
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight"
          >
            以科技定义食品 <br />
            <span className="text-gradient">以诚信守护健康</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            认知黑洞 (Cognitive Blackhole) 致力于将通用人工智能、海量数据演算与前沿合成生物学深度融合，重构人类饮食的未来形态。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/solutions" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
              探索解决方案 <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/ai-capabilities" className="btn-outline w-full sm:w-auto">
              了解核心技术
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Core Modules Section */}
      <section className="py-24 px-6 relative z-10 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">核心技术引擎</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">构建从算法到分子的全栈式科技壁垒</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* AI Card */}
            <Link to="/ai-capabilities" className="glass-card p-8 group flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BrainCircuit className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">AI 能力</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                基于千亿参数大模型，实现风味预测、营养重构与智能配方生成。让机器理解人类味觉，创造前所未有的感官体验。
              </p>
              <div className="flex items-center text-sm font-medium text-purple-400 group-hover:text-purple-300">
                深入了解 <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Data Card */}
            <Link to="/data-capabilities" className="glass-card p-8 group flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Database className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">数据能力</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                构建全球食品供应链知识图谱，实现从农田到餐桌的毫秒级数据追踪与风险预判，确保每一口食物的安全与透明。
              </p>
              <div className="flex items-center text-sm font-medium text-cyan-400 group-hover:text-cyan-300">
                深入了解 <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>


          </div>
        </div>
      </section>

      {/* Solutions Snippet */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">行业解决方案</h2>
              <p className="text-gray-400 max-w-2xl">为食品工业提供端到端的智能化升级方案</p>
            </div>
            <Link to="/solutions" className="btn-outline hidden md:flex items-center gap-2">
              查看全部方案 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
              <ShieldCheck className="w-10 h-10 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">智能风控与合规系统</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                利用视觉AI与多模态传感器，实现生产线7x24小时无人化质检。自动生成符合国际标准的合规报告，将食品安全风险降至零。
              </p>
              <Link to="/solutions" className="text-purple-400 text-sm font-medium flex items-center hover:text-purple-300">
                探索方案 <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="glass-card p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
              <BrainCircuit className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">AI 驱动的新品研发</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                基于消费者行为数据与营养学知识图谱，AI算法可在数秒内生成上万种配方组合，将新产品研发周期从数月缩短至数周。
              </p>
              <Link to="/solutions" className="text-cyan-400 text-sm font-medium flex items-center hover:text-cyan-300">
                探索方案 <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
          <Link to="/solutions" className="btn-outline flex md:hidden items-center justify-center gap-2 mt-8 w-full">
            查看全部方案 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Group Ecosystem Module */}
      <section className="py-24 px-6 relative z-10 bg-gradient-to-b from-transparent to-purple-900/10 border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            集团生态跳转模块
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">达康控股 生态矩阵</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16">
            认知黑洞作为达康控股的科技引擎，与集团内其他产业板块深度协同，共同构建大健康与大农业的闭环生态。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a href="#" className="glass-card p-6 flex flex-col items-center justify-center text-center group hover:border-purple-500/50">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">达康控股</h4>
              <p className="text-xs text-gray-500">集团核心与资本运作</p>
            </a>
            <a href="#" className="glass-card p-6 flex flex-col items-center justify-center text-center group hover:border-cyan-500/50">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">达康食品股份</h4>
              <p className="text-xs text-gray-500">现代食品制造与研发</p>
            </a>
            <a href="#" className="glass-card p-6 flex flex-col items-center justify-center text-center group hover:border-blue-500/50">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">达康供应链集团</h4>
              <p className="text-xs text-gray-500">全球智慧物流与仓储</p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">常见问题 (FAQ)</h2>
            <p className="text-gray-400">了解更多关于认知黑洞的技术与愿景</p>
          </div>

          <div className="space-y-4 mb-10">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={cn(
                  "glass-card overflow-hidden transition-all duration-300",
                  openFaq === index ? "border-purple-500/30 bg-white/10" : ""
                )}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span className="text-white font-medium pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={cn(
                      "w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0",
                      openFaq === index ? "rotate-180 text-purple-400" : ""
                    )} 
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? "auto" : 0, opacity: openFaq === index ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/faq" className="btn-outline inline-flex items-center gap-2">
              查看全部常见问题 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
