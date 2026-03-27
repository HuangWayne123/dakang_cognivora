import { motion } from "motion/react";
import { Database, LineChart, ShieldAlert, Link as LinkIcon, ArrowRight } from "lucide-react";

export function DataCapabilities() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[150px] -z-10" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-300 mb-6"
          >
            <Database className="w-4 h-4" />
            核心模块 / 数据能力
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            构建食品工业的 <span className="text-gradient">数字神经系统</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-3xl leading-relaxed"
          >
            数据是现代食品科技的基石。认知黑洞通过物联网、区块链与大数据处理架构，实现从农田源头到消费者餐桌的毫秒级追踪与全息数据映射。
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-card p-8 flex flex-col group">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <LinkIcon className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">区块链溯源网络</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                利用分布式账本技术，将种子基因、土壤数据、农药使用、加工温度、物流轨迹等核心信息加密上链。数据不可篡改，建立绝对信任。
              </p>
              <button className="text-cyan-400 text-sm font-medium flex items-center hover:text-cyan-300">
                查看溯源演示 <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Feature 2 */}
            <div className="glass-card p-8 flex flex-col group">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <LineChart className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">消费者行为图谱</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                整合全球社交媒体、电商评价与零售终端数据，构建千亿级节点知识图谱。实时洞察口味趋势演变，指导产品迭代与营销策略。
              </p>
              <button className="text-purple-400 text-sm font-medium flex items-center hover:text-purple-300">
                获取趋势报告 <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Feature 3 */}
            <div className="glass-card p-8 flex flex-col group">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldAlert className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">预测性风险预警</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                通过分析气象数据、地缘政治、全球疫情与历史召回事件，算法模型可提前数周预测供应链中断或食品安全风险，实现主动防御。
              </p>
              <button className="text-blue-400 text-sm font-medium flex items-center hover:text-blue-300">
                了解风控系统 <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

          {/* Dashboard Visualization */}
          <div className="mt-16 glass-card p-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5" />
            <div className="bg-black/80 rounded-xl p-8 border border-white/5 relative z-10">
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <Database className="w-5 h-5 text-cyan-400" /> 实时数据监控大屏
                </h4>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="text-xs text-gray-500 mb-1">全球节点</div>
                  <div className="text-2xl font-mono text-cyan-400">14,205</div>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="text-xs text-gray-500 mb-1">上链数据量</div>
                  <div className="text-2xl font-mono text-purple-400">8.4 PB</div>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="text-xs text-gray-500 mb-1">实时风险拦截</div>
                  <div className="text-2xl font-mono text-red-400">342</div>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="text-xs text-gray-500 mb-1">系统可用性</div>
                  <div className="text-2xl font-mono text-green-400">99.99%</div>
                </div>
              </div>
              <div className="h-48 bg-white/5 rounded-lg border border-white/10 flex items-end justify-between p-4 gap-2">
                {/* Simulated Chart */}
                {[...Array(24)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-full bg-gradient-to-t from-cyan-500/20 to-purple-500/80 rounded-t-sm"
                    style={{ height: `${Math.random() * 80 + 20}%`, opacity: i % 3 === 0 ? 1 : 0.5 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
