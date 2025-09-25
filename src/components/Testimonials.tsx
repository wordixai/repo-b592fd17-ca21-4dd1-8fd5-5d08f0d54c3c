import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: '李明',
      role: '杭州西湖民宿主',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: '使用宿来云后，我的民宿入住率提升了35%，管理效率大幅提高。特别是智能预订系统，再也不用担心重复预订的问题了。',
      rating: 5
    },
    {
      name: '张小慧',
      role: '丽江古城民宿经营者',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b0c1?w=150&h=150&fit=crop&crop=face',
      content: '财务管理功能特别实用，每月的收支报表清晰明了，税务申报也变得简单。客服团队响应很快，解决问题很专业。',
      rating: 5
    },
    {
      name: '王建华',
      role: '成都民宿连锁创始人',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      content: '管理多家民宿变得轻松多了，统一的管理后台让我能够实时掌握每家店的运营状况。数据分析功能帮助我优化了定价策略。',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            客户的
            <span className="gradient-text">真实反馈</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            来自全国各地民宿经营者的真实使用体验，见证宿来云如何助力民宿业务成长
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="card-hover border-0 shadow-soft bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-6 h-6 text-blue-500 mr-2" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}