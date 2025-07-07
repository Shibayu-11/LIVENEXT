import React from 'react';
import { Target, Users, TrendingUp, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '150+', label: 'プロジェクト実績', icon: Target },
    { number: '50+', label: 'クライアント企業', icon: Users },
    { number: '300%', label: '平均収益向上', icon: TrendingUp },
    { number: '98%', label: '顧客満足度', icon: Award },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            エンターテイメント企業の
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              課題解決パートナー
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            私たちは、エンターテイメント企業の課題解決パートナーとして、独自の専門チームがビジネス成長のための包括的な支援を提供します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">ミッション</h3>
              <p className="text-gray-600">
                エンターテイメント業界の可能性を最大化し、クリエイターと企業の成功を支援する
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">ビジョン</h3>
              <p className="text-gray-600">
                エンタメ業界のデジタル変革を牽引し、新しい価値創造のスタンダードを確立する
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">バリュー</h3>
              <p className="text-gray-600">
                クライアントと同じ熱量でプロジェクトに取り組み、共に成功を実現する
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;