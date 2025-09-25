import { TrendingUp, Users, Building, Globe, Award, Zap } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: Building,
      value: '10,000+',
      label: '服务民宿',
      description: '覆盖全国300+城市',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      value: '50,000+',
      label: '活跃用户',
      description: '专业民宿经营者',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: TrendingUp,
      value: '35%',
      label: '收益提升',
      description: '平均增长率',
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: Award,
      value: '4.9/5',
      label: '客户评分',
      description: '用户满意度',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      value: '99.9%',
      label: '系统稳定性',
      description: '7×24小时在线',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Globe,
      value: '24/7',
      label: '技术支持',
      description: '随时为您服务',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-violet-100 rounded-full text-violet-700 text-sm font-medium mb-4">
            <Award className="w-4 h-4 mr-2" />
            值得信赖的数据
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            用数据说话，用实力证明
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            数万民宿主的共同选择，见证宿来云如何持续创造价值
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <div className="space-y-2">
                  <div className={`stat-number bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-xl font-bold text-gray-900">
                    {stat.label}
                  </div>
                  <div className="text-gray-600">
                    {stat.description}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full opacity-20 group-hover:scale-125 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}