import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Zap, Crown } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: '基础版',
      price: '免费',
      period: '永久免费',
      description: '适合初创民宿，基础功能完全免费',
      icon: Star,
      features: [
        '最多5间房源管理',
        '基础预订管理',
        '简单财务记录',
        '手机端应用',
        '在线客服支持'
      ],
      buttonText: '立即开始',
      popular: false,
      color: 'border-gray-200'
    },
    {
      name: '专业版',
      price: '¥299',
      period: '/月',
      description: '适合中型民宿，功能全面性价比高',
      icon: Zap,
      features: [
        '无限房源管理',
        '智能预订管理',
        '完整财务分析',
        '客户关系管理',
        '数据报表导出',
        '多平台同步',
        '24小时客服',
        '营销工具'
      ],
      buttonText: '免费试用30天',
      popular: true,
      color: 'border-blue-500 ring-2 ring-blue-100'
    },
    {
      name: '企业版',
      price: '¥599',
      period: '/月',
      description: '适合大型民宿集团，定制化解决方案',
      icon: Crown,
      features: [
        '专业版所有功能',
        '多门店统一管理',
        '高级数据分析',
        '定制化报表',
        'API接口开放',
        '专属客户经理',
        '优先技术支持',
        '个性化培训'
      ],
      buttonText: '联系销售',
      popular: false,
      color: 'border-purple-200'
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            选择适合的
            <span className="gradient-text">价格方案</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            灵活的价格方案满足不同规模民宿的需求，30天免费试用，随时可以取消或升级
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={index}
                className={`relative card-hover ${plan.color} ${plan.popular ? 'transform scale-105' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      最受欢迎
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {plan.description}
                  </CardDescription>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 ml-1">
                      {plan.period}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            需要更多功能或有特殊需求？
          </p>
          <Button variant="outline" size="lg">
            联系我们定制方案
          </Button>
        </div>
      </div>
    </section>
  );
}