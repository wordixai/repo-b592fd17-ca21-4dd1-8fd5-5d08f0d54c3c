import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Zap, Crown, ArrowRight, Sparkles, Gift } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: '入门版',
      price: '免费',
      period: '永久免费',
      description: '适合刚起步的民宿主，核心功能完全免费使用',
      icon: Star,
      gradient: 'from-gray-500 to-gray-600',
      features: [
        '最多3间房源管理',
        '基础预订管理',
        '简单财务记录',
        '移动端APP',
        '邮件客服支持',
        '基础数据报表'
      ],
      buttonText: '立即开始',
      popular: false,
      highlight: false,
      savings: null
    },
    {
      name: '专业版',
      price: '¥299',
      originalPrice: '¥399',
      period: '/月',
      description: '适合成长期民宿，功能全面性价比最高',
      icon: Zap,
      gradient: 'from-violet-500 to-purple-600',
      features: [
        '无限房源管理',
        '智能预订系统',
        '完整财务分析',
        '客户关系管理',
        '多平台订单同步',
        'AI智能客服',
        '高级数据分析',
        '营销自动化工具',
        '24/7 技术支持',
        '定制化报表'
      ],
      buttonText: '开始30天免费试用',
      popular: true,
      highlight: true,
      savings: '限时7折'
    },
    {
      name: '企业版',
      price: '¥799',
      originalPrice: '¥999',
      period: '/月',
      description: '适合连锁民宿和大型经营者，提供企业级解决方案',
      icon: Crown,
      gradient: 'from-orange-500 to-red-500',
      features: [
        '专业版全部功能',
        '多品牌统一管理',
        '高级预测分析',
        'API接口开放',
        '专属客户经理',
        '定制化功能开发',
        '数据安全审计',
        '优先技术支持',
        '专业培训服务',
        '法务合规支持'
      ],
      buttonText: '联系专属顾问',
      popular: false,
      highlight: false,
      savings: '限时8折'
    }
  ];

  const faqs = [
    {
      question: '免费版本有使用时间限制吗？',
      answer: '没有时间限制！免费版可以永久使用，适合小规模民宿测试和使用。'
    },
    {
      question: '可以随时升级或降级套餐吗？',
      answer: '当然可以！您可以随时升级或降级，费用按比例计算，无任何额外费用。'
    },
    {
      question: '支持什么付款方式？',
      answer: '支持微信支付、支付宝、银行转账等多种付款方式，企业客户支持月付、季付、年付。'
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-br from-orange-100 to-red-100 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-6">
            <Gift className="w-4 h-4 mr-2" />
            限时优惠中
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            选择最适合的
            <span className="block gradient-text">价格方案</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            从免费开始，按需升级。无隐藏费用，随时可取消，让您轻松开启数字化民宿管理之旅
          </p>
          
          {/* Pricing Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-2xl p-1">
            <button className="px-6 py-3 rounded-xl bg-white shadow-sm text-sm font-medium text-gray-900">
              月付
            </button>
            <button className="px-6 py-3 rounded-xl text-sm font-medium text-gray-600 relative">
              年付
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                8折
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={index}
                className={`relative group card-hover border-0 overflow-hidden ${
                  plan.popular 
                    ? 'lg:scale-105 shadow-2xl bg-gradient-to-br from-violet-50 to-purple-50' 
                    : 'shadow-lg bg-white'
                } ${plan.highlight ? 'ring-2 ring-violet-200' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      🔥 最受欢迎
                    </div>
                  </div>
                )}

                {/* Savings Badge */}
                {plan.savings && (
                  <div className="absolute top-6 right-6 z-10">
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {plan.savings}
                    </div>
                  </div>
                )}

                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full -translate-y-16 translate-x-16 opacity-30"></div>

                <CardHeader className="relative z-10 text-center pb-8 pt-12">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-600 mb-6 max-w-xs mx-auto">
                    {plan.description}
                  </CardDescription>
                  
                  {/* Pricing */}
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center space-x-2">
                      {plan.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">
                          {plan.originalPrice}
                        </span>
                      )}
                      <span className={`${plan.popular ? 'text-5xl' : 'text-4xl'} font-bold gradient-text`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-500">
                        {plan.period}
                      </span>
                    </div>
                    {plan.originalPrice && (
                      <div className="text-sm text-green-600 font-medium">
                        立省 ¥{parseInt(plan.originalPrice.replace('¥', '')) - parseInt(plan.price.replace('¥', ''))} / 月
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 px-8 pb-8">
                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'btn-primary text-lg py-4' 
                        : 'btn-secondary text-lg py-4'
                    } group`}
                    size="lg"
                  >
                    {plan.buttonText}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  
                  {/* Additional Info */}
                  {plan.popular && (
                    <div className="text-center mt-4">
                      <div className="text-sm text-gray-600">
                        30天免费试用 • 随时取消 • 无设置费
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enterprise CTA */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white mb-16">
          <div className="max-w-3xl mx-auto">
            <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">需要定制化解决方案？</h3>
            <p className="text-xl text-gray-300 mb-8">
              我们为大型连锁民宿和企业客户提供专业的定制化服务，包括专属功能开发、数据迁移、员工培训等
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl">
                联系企业顾问
              </Button>
              <Button variant="outline" className="border-gray-300 text-white hover:bg-white/10 px-8 py-4 rounded-xl">
                下载企业方案书
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">常见问题</h3>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}