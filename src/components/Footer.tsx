import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Star, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const footerSections = {
    product: {
      title: '产品',
      links: [
        { name: '功能特性', href: '#features' },
        { name: '价格方案', href: '#pricing' },
        { name: '客户案例', href: '#testimonials' },
        { name: 'API文档', href: '#' },
        { name: '产品更新', href: '#' }
      ]
    },
    solutions: {
      title: '解决方案',
      links: [
        { name: '单体民宿', href: '#' },
        { name: '连锁民宿', href: '#' },
        { name: '民宿管家', href: '#' },
        { name: '房东托管', href: '#' },
        { name: '企业客户', href: '#' }
      ]
    },
    support: {
      title: '支持',
      links: [
        { name: '帮助中心', href: '#' },
        { name: '视频教程', href: '#' },
        { name: '开发者文档', href: '#' },
        { name: '系统状态', href: '#' },
        { name: '联系客服', href: '#' }
      ]
    },
    company: {
      title: '公司',
      links: [
        { name: '关于我们', href: '#' },
        { name: '新闻动态', href: '#' },
        { name: '投资者关系', href: '#' },
        { name: '加入我们', href: '#' },
        { name: '媒体资源', href: '#' }
      ]
    }
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-700' }
  ];

  const achievements = [
    { icon: Star, text: '4.9/5 用户评分' },
    { icon: Award, text: '2024年度最佳SaaS产品' },
    { icon: Home, text: 'ISO 27001 认证' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-violet-900/20 to-purple-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-full blur-3xl"></div>
      
      <div className="relative">
        {/* Newsletter Section */}
        <div className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  订阅我们的
                  <span className="gradient-text">产品动态</span>
                </h3>
                <p className="text-gray-400 text-lg">
                  获取最新的产品更新、行业洞察和民宿经营技巧，助您在竞争中保持领先
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="输入您的邮箱地址"
                    className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  />
                  <Button className="btn-primary px-8 py-4 group">
                    订阅
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  已有 12,000+ 民宿主订阅我们的内容
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl blur opacity-30 animate-pulse"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold gradient-text">宿来云</span>
                  <div className="text-sm text-gray-400">让民宿经营更简单</div>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed max-w-md">
                专业的民宿管理SaaS平台，为全球民宿经营者提供智能化的管理解决方案，助力民宿业务快速发展。
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-5 h-5" />
                  <span>contact@sulaiyun.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-5 h-5" />
                  <span>400-888-9999</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>北京市朝阳区科技园区创新大厦</span>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-2">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                      <Icon className="w-4 h-4 text-yellow-400" />
                      <span>{achievement.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key}>
                <h3 className="text-lg font-semibold mb-6 text-white">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        className="text-gray-400 hover:text-white transition-colors duration-200 group flex items-center"
                      >
                        {link.name}
                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400 text-sm">
                <div>
                  © 2024 宿来云科技有限公司. 保留所有权利.
                </div>
                <div className="flex space-x-6">
                  <a href="#" className="hover:text-white transition-colors duration-200">隐私政策</a>
                  <a href="#" className="hover:text-white transition-colors duration-200">服务条款</a>
                  <a href="#" className="hover:text-white transition-colors duration-200">法律声明</a>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-gray-700 hover:scale-110 hover:-translate-y-1 ${social.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}