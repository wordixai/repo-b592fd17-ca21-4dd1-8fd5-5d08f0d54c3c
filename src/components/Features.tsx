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
  Zap
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Calendar,
      title: '智能预订管理',
      description: '多平台订单统一管理，自动同步房态，避免超订风险',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: BarChart3,
      title: '数据分析报表',
      description: '实时收益分析，入住率统计，帮助优化定价策略',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Users,
      title: '客户关系管理',
      description: '客户信息管理，自动化营销，提升客户满意度',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: CreditCard,
      title: '财务管理',
      description: '收支记录，税务管理，财务报表一键生成',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: Smartphone,
      title: '移动端管理',
      description: '手机APP随时管理，消息推送及时提醒',
      color: 'bg-pink-100 text-pink-600',
    },
    {
      icon: Shield,
      title: '安全保障',
      description: '数据加密存储，权限管理，保障信息安全',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: MessageSquare,
      title: '智能客服',
      description: '24小时在线客服，快速响应客户需求',
      color: 'bg-cyan-100 text-cyan-600',
    },
    {
      icon: FileText,
      title: '合同管理',
      description: '电子合同签署，租赁协议管理，法务支持',
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      icon: Zap,
      title: '自动化流程',
      description: '智能房务分配，自动发送入住指南，提升运营效率',
      color: 'bg-indigo-100 text-indigo-600',
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            全方位的
            <span className="gradient-text">管理功能</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            从预订管理到财务分析，宿来云为您提供民宿经营所需的所有工具，让您专注于为客人提供优质服务
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="card-hover border-0 shadow-soft"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${feature.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}