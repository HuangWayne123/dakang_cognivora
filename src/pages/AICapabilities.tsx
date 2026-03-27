import { motion } from "motion/react";
import { BrainCircuit, Cpu, Network, Sparkles, ArrowRight } from "lucide-react";

export function AICapabilities() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] -z-10" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300 mb-6"
          >
            <BrainCircuit className="w-4 h-4" />
            核心模块 / AI 能力
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            赋予食品工业 <span className="text-gradient">认知智能</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-3xl leading-relaxed"
          >
            认知黑洞自主研发的“食神”多模态大模型，拥有千亿级参数。我们不仅分析数据，更让机器具备理解风味、预测营养和创新配方的认知能力。
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="glass-card p-10 relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors" />
              <Cpu className="w-12 h-12 text-purple-400 mb-8" />
              <h3 className="text-2xl font-bold text-white mb-4">风味感知与预测模型</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                通过对数百万种分子结构的深度学习，我们的AI能够精确预测不同成分组合产生的感官体验。无需物理实验，即可在虚拟环境中模拟出人类味蕾的真实反馈。
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> 分子级风味映射</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> 跨文化口感偏好分析</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> 气味与质地联合演算</li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="glass-card p-10 relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-colors" />
              <Sparkles className="w-12 h-12 text-cyan-400 mb-8" />
              <h3 className="text-2xl font-bold text-white mb-4">生成式配方引擎</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                输入目标营养指标、成本限制和目标人群，生成式AI可在数秒内输出成百上千种创新配方。极大缩短研发周期，打破人类经验的局限。
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> 零碳排放配方优化</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> 成本与营养动态平衡</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> 替代蛋白智能匹配</li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="glass-card p-10 relative overflow-hidden group md:col-span-2 flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1">
                <Network className="w-12 h-12 text-blue-400 mb-8" />
                <h3 className="text-2xl font-bold text-white mb-4">视觉AI与生产线大脑</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  部署于工厂边缘计算节点的计算机视觉模型，以毫秒级速度识别异物、包装缺陷和颜色偏差。结合强化学习，生产线能够根据实时环境数据自动调整加工参数。
                </p>
                <button className="btn-outline flex items-center gap-2">
                  查看技术白皮书 <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="flex-1 w-full h-64 rounded-xl bg-black/50 border border-white/10 relative overflow-hidden flex items-center justify-center">
                {/* Simulated AI Vision UI */}
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/factory/800/600')] opacity-40 bg-cover bg-center mix-blend-luminosity" />
                <div className="absolute inset-0 border-[2px] border-blue-500/30 m-8 rounded-lg">
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-400 -translate-x-1 -translate-y-1" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-400 translate-x-1 -translate-y-1" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-400 -translate-x-1 translate-y-1" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-400 translate-x-1 translate-y-1" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-16 h-16 border-2 border-dashed border-blue-400 rounded-full animate-[spin_4s_linear_infinite]" />
                    <span className="mt-4 text-xs font-mono text-blue-400 bg-black/50 px-2 py-1 rounded">ANALYZING... 99.9%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
