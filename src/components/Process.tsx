import React from 'react';
import { Search, Lightbulb, Cog, BarChart } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: 'ヒアリング・課題整理',
      description: 'クライアントの現状と課題を詳しくヒアリングし、問題点を明確にします',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Lightbulb,
      title: '戦略策定・チーム編成',
      description: '最適な戦略を策定し、プロジェクトに最適な専門チームを編成します',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Cog,
      title: '実行・運営サポート',
      description: 'クライアントと密に連携しながら、戦略を実行に移していきます',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: BarChart,
      title: '効果測定・改善',
      description: '結果を定期的に測定し、継続的な改善を行います',
      color: 'from-rose-500 to-pink-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            プロジェクト
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              推進プロセス
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            4つのステップで確実にプロジェクトを成功に導きます
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold text-gray-800">{index + 1}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">なぜ私たちを選ぶのか？</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">専</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">専門性</h4>
              <p className="text-sm text-gray-600">エンタメ業界特化の深い知識</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">実</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">実績</h4>
              <p className="text-sm text-gray-600">150以上の成功事例</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">熱</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">熱量</h4>
              <p className="text-sm text-gray-600">クライアントと同じ熱量</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">包</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">包括性</h4>
              <p className="text-sm text-gray-600">戦略から実行まで一貫サポート</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;