import React from 'react';
import { Rocket, Megaphone, TrendingUp, Calendar, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Rocket,
      title: '事業推進支援',
      description: '専任チーム編成で戦略策定から実行まで一貫サポート',
      features: ['専任チーム編成', '戦略策定から実行まで', 'プロジェクト管理'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Megaphone,
      title: 'マーケティング・プロモーション',
      description: '戦略的プロモーションでブランド価値を最大化',
      features: ['戦略的プロモーション', 'ブランディング支援', 'デジタルマーケティング'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: TrendingUp,
      title: '収益最大化コンサルティング',
      description: '売上・利益最大化のための効率的な事業運営を実現',
      features: ['売上・利益最大化', '事業効率化', '新規事業開発'],
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: Calendar,
      title: 'イベント・フェス企画運営',
      description: '大規模イベントの企画から運営まで総合サポート',
      features: ['大規模イベント企画', '運営管理', '集客戦略'],
      color: 'from-rose-500 to-pink-500'
    },
    {
      icon: Zap,
      title: '次世代エンタメ創造',
      description: 'リアル×バーチャルで新しい価値を創造',
      features: ['リアル×バーチャル', '新技術活用', '革新的コンテンツ制作'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              包括的な
            </span>
            ソリューション
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            エンターテイメント企業の様々な課題に対応する5つの主要サービス
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;