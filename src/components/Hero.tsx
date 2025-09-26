import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Star, Users, Calendar, Sparkles, CheckCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 mesh-gradient opacity-40"></div>
      <div className="absolute inset-0 hero-pattern"
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-violet-400 to-purple-400 rounded-full opacity-20 floating-animation"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full opacity-20 floating-animation-delayed"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 floating-animation"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-violet-200 shadow-sm">
              <Sparkles className="w-4 h-4 text-violet-600 mr-2" />
              <span className="text-violet-700 text-sm font-medium">已服务</span>
              <span className="text-violet-900 text-sm font-bold mx-1">10,000+</span>
              <span className="text-violet-700 text-sm font-medium">民宿主</span>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                重新定义
                <span className="block gradient-text">民宿经营</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"></div>
            </div>
            
            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              用智能化的方式管理您的民宿业务。从预订到收益，从客户到运营，宿来云让一切变得简单而高效。
            </p>
            
            {/* Key Benefits */}
            <div className="space-y-3">
              {[
                '30秒快速接入，无需复杂配置',
                '收益平均提升35%，客户满意度提升40%',
                '7×24小时智能客服，从不遗漏任何商机'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-primary text-lg px-10 py-5 group">
                开启免费试用
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button variant="outline" className="btn-secondary text-lg px-10 py-5 group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                观看产品演示
              </Button>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center space-x-8 pt-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>30天免费试用</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>随时取消</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4" />
                <span>5分钟上手</span>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="relative perspective-1000">
            <div className="relative transform-gpu">
              {/* Main Dashboard */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-purple-600/5 rounded-3xl"></div>
                
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">实时数据中心</h3>
                    <p className="text-gray-500">今日运营概览</p>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full pulse-slow"></div>
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 card-hover">
                    <div className="text-3xl font-bold text-blue-600">42</div>
                    <div className="text-blue-700 font-medium">新预订</div>
                    <div className="text-xs text-green-600 mt-1">↗ +18%</div>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 card-hover">
                    <div className="text-3xl font-bold text-emerald-600">¥24,680</div>
                    <div className="text-emerald-700 font-medium">今日收入</div>
                    <div className="text-xs text-green-600 mt-1">↗ +12%</div>
                  </div>
                </div>
                
                {/* Chart Area */}
                <div className="h-32 bg-gradient-to-r from-violet-100 via-purple-100 to-pink-100 rounded-2xl relative overflow-hidden">
                  <div className="absolute inset-0 shimmer"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-end space-x-2">
                      {[40, 65, 45, 80, 60, 90, 75].map((height, index) => (
                        <div 
                          key={index}
                          className="bg-gradient-to-t from-violet-500 to-purple-500 rounded-t opacity-80"
                          style={{ 
                            height: `${height}%`, 
                            width: '100%',
                            animationDelay: `${index * 0.1}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Analytics Card */}
              <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-xl p-6 transform -rotate-6 hover:rotate-0 transition-transform duration-500 floating-animation">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-800">入住率</span>
                </div>
                <div className="text-3xl font-bold gradient-text">96.8%</div>
                <div className="text-xs text-green-600 font-medium mt-1">↗ +15% 本月</div>
              </div>

              {/* Notification Card */}
              <div className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500 floating-animation-delayed">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">5</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">新消息</div>
                    <div className="text-xs text-gray-500">2分钟前</div>
                  </div>
                </div>
              </div>

              {/* Revenue Trend Card */}
              <div className="absolute top-1/2 -left-12 bg-white rounded-2xl shadow-xl p-4 transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="text-xs text-gray-500 mb-1">月收益增长</div>
                <div className="text-lg font-bold text-green-600">+42.5%</div>
                <div className="w-16 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
