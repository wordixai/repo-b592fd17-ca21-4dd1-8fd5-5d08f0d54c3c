import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Star, Users, Calendar } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 hero-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              已服务10000+民宿主
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              让民宿经营
              <span className="gradient-text block">更简单高效</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              宿来云为民宿经营者提供全方位的SaaS管理解决方案，从房源管理到财务分析，助您轻松提升运营效率和收益水平。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="btn-primary text-lg px-8 py-4">
                立即免费试用
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 border-2">
                <Play className="w-5 h-5 mr-2" />
                观看演示
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                30天免费试用
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                随时取消
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-white rounded-2xl shadow-strong p-6 transform rotate-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">今日概览</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">28</div>
                    <div className="text-sm text-gray-600">新预订</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">¥12,450</div>
                    <div className="text-sm text-gray-600">今日收入</div>
                  </div>
                </div>
                <div className="w-full h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg"></div>
              </div>

              {/* Floating Analytics Card */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-medium p-4 transform -rotate-6">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-sm font-medium">入住率</span>
                </div>
                <div className="text-2xl font-bold text-purple-600">94.2%</div>
                <div className="text-xs text-green-500">↗ +12%</div>
              </div>

              {/* Notification Card */}
              <div className="absolute -bottom-4 -left-6 bg-white rounded-xl shadow-medium p-4 transform rotate-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span className="text-sm">新消息 (3)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}