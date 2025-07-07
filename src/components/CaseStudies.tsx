import React from 'react';
import { Star, Users, Globe, Sparkles } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      icon: Star,
      title: '個性派プロダクション支援',
      subtitle: '有名タレントを数多く抱える個性派プロダクション',
      challenge: 'タレント戦略最適化',
      solution: '包括的マネジメント支援',
      result: '収益250%アップ',
      description: 'タレントマネジメントから戦略的プロモーションまで一貫サポートし、収益を大幅に向上させました。',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Globe,
      title: '韓国フェス日本開催',
      subtitle: '大規模韓国フェスを日本で開催するエンタメ企業',
      challenge: '大規模国際イベント運営',
      solution: '専門チームによる総合支援',
      result: '来場者数5万人達成',
      description: 'イベント企画から運営まで、日韓文化の架け橋となる大規模プロジェクトを成功に導きました。',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Sparkles,
      title: 'リアル×バーチャルプロダクション',
      subtitle: 'リアル×バーチャルで新しい価値を創造するエンタメプロダクション',
      challenge: '新技術を活用した価値創造',
      solution: '革新的コンテンツ制作支援',
      result: '新しいエンタメ体験創出',
      description: '最新技術を活用し、従来にない革新的なエンターテイメント体験を創造しました。',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              成功事例
            </span>
            のご紹介
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            様々なエンターテイメント企業の課題解決をサポートした実績をご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => {
            const Icon = caseStudy.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${caseStudy.color} rounded-full flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{caseStudy.title}</h3>
                <p className="text-gray-600 mb-6 text-sm">{caseStudy.subtitle}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">課題</span>
                    <span className="text-sm text-gray-800">{caseStudy.challenge}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">解決策</span>
                    <span className="text-sm text-gray-800">{caseStudy.solution}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">成果</span>
                    <span className="text-sm font-bold text-pink-600">{caseStudy.result}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm">{caseStudy.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;