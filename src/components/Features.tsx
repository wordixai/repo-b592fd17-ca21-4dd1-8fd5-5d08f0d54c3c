import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Calendar, 
  BarChart3, 
  Users, 
  CreditCard, 
  Smartphone, 
  Shield,
  MessageSquare,
  FileText,
  Zap,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Calendar,
      title: '智能预订管理',
      description: '多平台订单统一管理，AI智能防超订，实时房态同步，让您告别手忙脚乱',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      benefits: ['多平台同步', '智能防超订', '自动确认']
    },
    {
      icon: BarChart3,
      title: '数据洞察分析',
      description: '实时收益分析、入住率预测、竞品对比，用数据驱动您的每一个决策',
      gradient: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      benefits: ['实时报表', '预测分析', '竞品监控']
    },
    {
      icon: Users,
      title: '客户关系管理',
      description: '360°客户画像，智能营销触达，个性化服务推荐，提升客户终身价值',
      gradient: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-50',
      iconColor: 'text-violet-600',
      benefits: ['客户画像', '智能营销', '个性推荐']
    },
    {
      icon: CreditCard,
      title: '智能财务管理',
      description: '自动记账、税务合规、成本分析、收益优化，让财务管理变得简单透明',
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      benefits: ['自动记账', '税务合规', '成本分析']
    },
    {
      icon: Smartphone,
      title: '移动优先体验',
      description: '专业移动App，随时随地管理，消息推送及时提醒，工作生活两不误',
      gradient: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
      benefits: ['移动管理', '实时推送', '离线功能']
    },
    {
      icon: Shield,
      title: '企业级安全',
      description: '银行级数据加密，多层权限控制，隐私保护合规，让您的数据安全无忧',
      gradient: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      benefits: ['数据加密', '权限控制', '合规保护']
    },
    {
      icon: MessageSquare,
      title: 'AI智能客服',
      description: '24小时AI客服，多语言支持，智能问答系统，客户满意度提升40%',
      gradient: 'from-cyan-500 to-teal-500',
      bgColor: 'bg-cyan-50',
      iconColor: 'text-cyan-600',
      benefits: ['24小时在线', '多语言', '智能问答']
    },
    {
      icon: FileText,
      title: '合同数字化',
      description: '电子合同签署，法务条款审核，风险预警提醒，让法务管理更专业',
      gradient: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      benefits: ['电子签署', '法务审核', '风险预警']
    },
    {
      icon: Zap,
      title: '运营自动化',
      description: '智能房务分配，自动入住指南，退房流程优化，运营效率提升3倍',
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      benefits: ['智能分配', '自动化流程', '效率提升']
    }
  ];

  return (
    <section id="features" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-violet-100 rounded-full text-violet-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            产品功能
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            一站式民宿管理
            <span className="block gradient-text">让经营更简单</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            从预订到收益，从客户到运营，宿来云为您提供民宿经营所需的所有工具，让您专注于为客人创造美好体验
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group relative card-hover border-0 shadow-lg bg-white/70 backdrop-blur-sm overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                
                <CardHeader className="relative z-10 pb-4">
                  {/* Icon */}
                  <div className={`feature-icon ${feature.bgColor} ${feature.iconColor}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 space-y-4">
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  
                  {/* Benefits */}
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-700">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${feature.gradient} rounded-full mr-3`}></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                  
                  {/* Learn More Link */}
                  <div className="pt-2">
                    <div className="inline-flex items-center text-sm font-medium text-violet-600 group-hover:text-violet-700 cursor-pointer">
                      了解更多
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">还有更多强大功能等您发现</p>
          <div className="inline-flex items-center space-x-4">
            <div className="flex -space-x-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full border-2 border-white shadow-sm" />))}
            </div>
            <span className="text-sm text-gray-600">10,000+ 民宿主正在使用</span>
          </div>
        </div>
      </div>
    </section>
  );
}