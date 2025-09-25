import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Testimonials() {
  const testimonials = [
    {
      name: '李明',
      role: '杭州西湖民宿主',
      company: '西湖雅居',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: '使用宿来云后，我的民宿入住率从65%提升到96%，月收入增长了40%。最让我惊喜的是智能定价功能，系统会根据节假日、天气、周边活动自动调整价格，完全不用我操心。',
      rating: 5,
      metrics: { bookings: '+40%', revenue: '¥24,680', satisfaction: '4.9/5' },
      featured: true
    },
    {
      name: '张小慧',
      role: '丽江古城民宿经营者',
      company: '古城雅苑',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b0c1?w=150&h=150&fit=crop&crop=face',
      content: '客服功能特别棒！AI客服能够24小时回复客人问题，而且回答得很专业。财务报表也很清晰，每月的收支一目了然，报税变得超级简单。',
      rating: 5,
      metrics: { efficiency: '+60%', response: '2分钟', automation: '90%' }
    },
    {
      name: '王建华',
      role: '成都民宿连锁创始人',
      company: '蜀韵连锁民宿',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      content: '管理15家民宿从未如此轻松！统一的后台让我能实时监控每家店的运营情况，数据分析帮助我优化了选址和定价策略，ROI提升了35%。',
      rating: 5,
      metrics: { properties: '15家', roi: '+35%', growth: '3倍' }
    },
    {
      name: '陈雨薇',
      role: '三亚海景民宿主',
      company: '海之恋民宿',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: '移动端管理太方便了！即使在外旅行也能随时处理预订，客人评价都说服务响应很及时。系统还能预测淡旺季，帮我提前做好运营规划。',
      rating: 5,
      metrics: { mobile: '100%', rating: '4.8/5', planning: '提前30天' }
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            客户成功案例
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            听听他们怎么说
            <span className="block gradient-text">真实的成功故事</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            来自全国各地民宿经营者的真实使用体验，见证宿来云如何助力民宿业务快速成长
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`group relative card-hover border-0 ${
                testimonial.featured 
                  ? 'lg:col-span-2 bg-gradient-to-br from-violet-50 to-purple-50 shadow-xl' 
                  : 'bg-white shadow-lg'
              } overflow-hidden`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Featured Badge */}
              {testimonial.featured && (
                <div className="absolute top-6 right-6">
                  <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    推荐案例
                  </div>
                </div>
              )}

              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <Quote className="w-full h-full text-gray-400" />
              </div>

              <CardContent className={`${testimonial.featured ? 'p-10' : 'p-8'} relative z-10`}>
                {/* Rating */}
                <div className="flex items-center mb-6">
                  <div className="flex space-x-1 mr-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">5.0 满分好评</span>
                </div>
                
                {/* Content */}
                <blockquote className={`${testimonial.featured ? 'text-lg' : 'text-base'} text-gray-700 leading-relaxed mb-8`}>
                  "{testimonial.content}"
                </blockquote>
                
                {/* Metrics */}
                <div className={`grid ${testimonial.featured ? 'grid-cols-3' : 'grid-cols-2'} gap-6 mb-8 p-6 bg-white/70 backdrop-blur-sm rounded-2xl`}>
                  {Object.entries(testimonial.metrics).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-2xl font-bold gradient-text mb-1">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-2xl object-cover shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-xs text-violet-600 font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                  
                  {testimonial.featured && (
                    <Button variant="outline" size="sm" className="group">
                      <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      观看视频
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              加入成功民宿主的行列
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              每天都有新的民宿主选择宿来云，开启他们的数字化经营之路。下一个成功故事，就是您的！
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary group">
                免费开始试用
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button variant="outline" className="btn-secondary">
                预约产品演示
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}