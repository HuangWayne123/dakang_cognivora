import { motion } from "motion/react";
import { HelpCircle, ChevronDown, MessageSquare, ShieldQuestion, Zap } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

const faqCategories = [
  {
    title: "企业与生态",
    icon: <Zap className="w-5 h-5 text-purple-400" />,
    items: [
      {
        q: "认知黑洞与达康控股的关系是什么？",
        a: "认知黑洞是达康控股旗下的核心科技企业，专注于将前沿AI与数据技术赋能于大健康与食品产业。我们与达康食品股份、达康供应链集团等兄弟公司深度协同，共同构建从研发制造到全球交付的食品科技闭环生态。"
      },
      {
        q: "认知黑洞的定位为什么是“AI公司”而不是“食品公司”？",
        a: "我们不直接生产传统的物理食品，而是输出“定义食品的算法与标准”。我们的核心资产是千亿参数的“食神”大模型、全球食品供应链知识图谱以及边缘计算视觉系统。我们以科技公司的底层逻辑，重构食品工业的研发、制造与风控流程。"
      }
    ]
  },
  {
    title: "核心技术",
    icon: <ShieldQuestion className="w-5 h-5 text-cyan-400" />,
    items: [
      {
        q: "认知黑洞的AI技术如何应用于食品研发？",
        a: "传统研发依赖人工经验和漫长的试错周期。我们的生成式配方引擎基于海量分子结构、营养学数据和消费者偏好，能在数秒内生成上万种创新配方，并在虚拟环境中模拟风味与质地，将研发周期从数月缩短至数周。"
      },
      {
        q: "数据能力如何保障供应链的绝对透明与安全？",
        a: "我们构建了基于区块链和分布式账本技术的溯源网络。每一批次原材料的基因、土壤、农药、加工温度、物流轨迹等数据均被加密上链。数据不可篡改，不仅消费者可扫码溯源，监管机构也能实现穿透式监管。"
      },
      {
        q: "你们的“食神”多模态大模型有什么独特优势？",
        a: "“食神”是全球首个专为食品工业定制的千亿级参数大模型。它不仅能处理文本和图像，还能解析化学分子式、质构仪数据和气味传感器信号，真正实现了跨模态的“机器品尝”与“机器嗅觉”。"
      }
    ]
  },
  {
    title: "解决方案与合作",
    icon: <MessageSquare className="w-5 h-5 text-blue-400" />,
    items: [
      {
        q: "黑灯工厂解决方案的实施周期通常是多久？",
        a: "根据企业规模和现有数字化基础，标准产线的智能化改造周期通常在3-6个月。我们提供从数字孪生建模、边缘计算节点部署到云端算法接入的端到端交钥匙服务。"
      },
      {
        q: "中小型食品企业是否可以接入你们的智能风控系统？",
        a: "完全可以。我们提供基于SaaS模式的轻量级智能风控接口（API）。中小型企业无需自建昂贵的超算中心，只需部署我们的标准化视觉传感器，即可按需调用云端AI算力进行实时质检。"
      },
      {
        q: "如何获取认知黑洞的行业趋势报告或技术白皮书？",
        a: "您可以点击网站顶部的“联系我们”按钮，填写您的企业信息与需求，我们的行业专家团队会在24小时内与您取得联系，并为您定向发送相关的技术白皮书与趋势洞察报告。"
      },
      {
        q: "你们的数据系统是否符合国际隐私与合规标准？",
        a: "是的。我们的数据处理架构严格遵循 GDPR、CCPA 以及中国《个人信息保护法》等相关法律法规。在处理消费者行为图谱时，所有数据均经过脱敏与匿名化处理，确保个人隐私绝对安全。"
      }
    ]
  }
];

export function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>("0-0");

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] -z-10" />
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300 mb-6"
          >
            <HelpCircle className="w-4 h-4" />
            常见问题解答
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            探索认知黑洞的 <span className="text-gradient">技术边界</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            在这里，我们为您解答关于AI赋能、数据安全、生态协同以及行业解决方案的核心疑问。
          </motion.p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-white">{category.title}</h2>
              </div>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const id = `${catIndex}-${itemIndex}`;
                  const isOpen = openItem === id;
                  
                  return (
                    <div 
                      key={itemIndex} 
                      className={cn(
                        "glass-card overflow-hidden transition-all duration-300",
                        isOpen ? "border-purple-500/30 bg-white/10" : ""
                      )}
                    >
                      <button
                        className="w-full px-6 py-5 flex items-center justify-between text-left"
                        onClick={() => setOpenItem(isOpen ? null : id)}
                        aria-expanded={isOpen}
                      >
                        <span className="text-white font-medium pr-8 text-lg">{item.q}</span>
                        <ChevronDown 
                          className={cn(
                            "w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0",
                            isOpen ? "rotate-180 text-purple-400" : ""
                          )} 
                        />
                      </button>
                      <motion.div
                        initial={false}
                        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                          {item.a}
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-white/10 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">没有找到您的问题？</h2>
          <p className="text-gray-400 mb-8">我们的技术专家团队随时准备为您提供深度的定制化解答与咨询服务。</p>
          <button className="btn-primary">联系技术支持</button>
        </div>
      </section>
    </div>
  );
}
