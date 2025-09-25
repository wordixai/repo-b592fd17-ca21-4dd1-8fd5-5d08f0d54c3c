import { TrendingUp, Users, Building, Globe } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: Building,
      value: '10,000+',
      label: '服务民宿',
      description: '覆盖全国主要旅游城市'
    },
    {
      icon: Users,
      value: '50,000+',
      label: '活跃用户',
      description: '专业民宿经营者的选择'
    },
    {
      icon: TrendingUp,
      value: '30%',
      label: '平均收益提升',
      description: '使用宿来云后的平均增长'
    },
    {
      icon: Globe,
      value: '99.9%',
      label: '系统稳定性',
      description: '7×24小时稳定运行'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}