import { motion } from "motion/react";
import { Briefcase, Factory, ShieldCheck, Truck, ArrowRight, CheckCircle2 } from "lucide-react";

export function Solutions() {
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
            <Briefcase className="w-4 h-4" />
            行业解决方案
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            重塑食品工业的 <span className="text-gradient">全栈方案</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-3xl leading-relaxed"
          >
            认知黑洞为食品制造、零售、餐饮及农业企业提供端到端的智能化升级服务。从配方研发到生产质检，再到供应链管理，全面提升效率与安全性。
          </motion.p>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Solution 1 */}
          <div className="glass-card p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center group">
            <div className="flex-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <Factory className="w-8 h-8 text-cyan-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">黑灯工厂与智能制造</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                基于数字孪生技术与工业互联网，实现食品加工车间的全自动化运行。AI算法实时调节温度、湿度与混合比例，确保批次间质量绝对一致，降低能耗30%以上。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> 生产线数字孪生建模</li>
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> 边缘计算实时参数调优</li>
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> 预测性设备维护</li>
              </ul>
              <button className="btn-primary">获取实施方案</button>
            </div>
            <div className="flex-1 w-full h-80 rounded-xl bg-[url('https://picsum.photos/seed/factory-ai/800/600')] bg-cover bg-center border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
          </div>

          {/* Solution 2 */}
          <div className="glass-card p-8 md:p-12 flex flex-col md:flex-row-reverse gap-10 items-center group">
            <div className="flex-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-6">
                <ShieldCheck className="w-8 h-8 text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">全天候食品安全风控</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                结合高光谱成像与深度学习视觉模型，在流水线上以毫秒级速度剔除异物、检测微生物污染及化学残留。系统自动生成符合FDA/CFDA标准的合规报告。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-purple-400" /> 高光谱异物检测</li>
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-purple-400" /> 微生物污染早期预警</li>
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-purple-400" /> 自动化合规审计</li>
              </ul>
              <button className="btn-primary">获取实施方案</button>
            </div>
            <div className="flex-1 w-full h-80 rounded-xl bg-[url('https://picsum.photos/seed/security-ai/800/600')] bg-cover bg-center border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
          </div>

          {/* Solution 3 */}
          <div className="glass-card p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center group">
            <div className="flex-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-6">
                <Truck className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">区块链透明供应链</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                为每一件产品赋予独一无二的数字身份。从种子播种到超市货架，所有流转节点数据自动加密上链。提升消费者信任度，并在召回事件中实现秒级定位。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-blue-400" /> 一物一码溯源体系</li>
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-blue-400" /> 智能合约自动结算</li>
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-blue-400" /> 冷链温度实时监控</li>
              </ul>
              <button className="btn-primary">获取实施方案</button>
            </div>
            <div className="flex-1 w-full h-80 rounded-xl bg-[url('https://picsum.photos/seed/logistics-ai/800/600')] bg-cover bg-center border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
