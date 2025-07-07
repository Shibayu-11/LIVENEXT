import React from 'react';
import { Rocket, Megaphone, TrendingUp, Calendar, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Rocket,
      title: '事業推進支援',
      subtitle: 'Business Development Support',
      description: 'エンターテイメント企業の事業成長を専任チームが包括的にサポートします。戦略策定から実行まで、クライアントと密に連携しながらプロジェクトを成功に導きます。',
      features: [
        '専任プロジェクトチーム編成',
        '事業戦略策定・実行支援',
        'プロジェクト管理・進捗監視',
        'リスク管理・課題解決',
        'ステークホルダー調整',
        '成果測定・改善提案'
      ],
      process: [
        '現状分析・課題整理',
        '戦略策定・ロードマップ作成',
        'チーム編成・役割分担',
        '実行支援・進捗管理',
        '効果測定・継続改善'
      ],
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50'
    },
    {
      icon: Megaphone,
      title: 'マーケティング・プロモーション',
      subtitle: 'Marketing & Promotion',
      description: '戦略的なマーケティング・プロモーション活動により、ブランド価値の向上と認知度拡大を実現します。デジタルとリアルを融合した効果的な施策を展開します。',
      features: [
        'ブランド戦略策定',
        'デジタルマーケティング',
        'SNS運用・コンテンツ制作',
        'PR・メディア戦略',
        'イベント・キャンペーン企画',
        '効果測定・分析レポート'
      ],
      process: [
        'ターゲット分析・ペルソナ設定',
        'ブランド戦略・メッセージ策定',
        'チャネル選定・施策企画',
        'コンテンツ制作・配信',
        '効果測定・最適化'
      ],
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'from-purple-50 to-indigo-50'
    },
    {
      icon: TrendingUp,
      title: '収益最大化コンサルティング',
      subtitle: 'Revenue Optimization',
      description: '売上・利益の最大化を目指し、事業効率化と新たな収益源の創出をサポートします。データ分析に基づいた戦略的アプローチで持続的な成長を実現します。',
      features: [
        '収益構造分析・最適化',
        '新規事業開発支援',
        'コスト削減・効率化',
        '価格戦略策定',
        'パートナーシップ構築',
        'KPI設定・モニタリング'
      ],
      process: [
        '現状の収益構造分析',
        '改善ポイント特定',
        '最適化戦略策定',
        '施策実行・モニタリング',
        '継続的な改善・拡大'
      ],
      color: 'from-pink-500 to-purple-500',
      bgColor: 'from-pink-50 to-purple-50'
    },
    {
      icon: Calendar,
      title: 'イベント・フェス企画運営',
      subtitle: 'Event & Festival Management',
      description: '大規模イベントやフェスティバルの企画から運営まで、トータルサポートを提供します。集客戦略から当日運営まで、成功に必要なすべてを網羅します。',
      features: [
        'イベント企画・コンセプト設計',
        '会場選定・設営計画',
        '集客戦略・チケット販売',
        '出演者・スポンサー調整',
        '当日運営・進行管理',
        '事後分析・改善提案'
      ],
      process: [
        'コンセプト策定・企画立案',
        '予算計画・スケジュール作成',
        '会場・出演者確保',
        'プロモーション・集客活動',
        '当日運営・フォローアップ'
      ],
      color: 'from-rose-500 to-pink-500',
      bgColor: 'from-rose-50 to-pink-50'
    },
    {
      icon: Zap,
      title: '次世代エンタメ創造',
      subtitle: 'Next-Gen Entertainment',
      description: 'リアルとバーチャルを融合した革新的なエンターテイメント体験を創造します。最新技術を活用し、従来の枠を超えた新しい価値を提供します。',
      features: [
        'VR/AR技術活用',
        'メタバース空間構築',
        'ライブ配信・ハイブリッドイベント',
        'NFT・ブロックチェーン活用',
        'AI・機械学習導入',
        '新技術トレンド調査・導入'
      ],
      process: [
        '技術トレンド調査・選定',
        'コンセプト設計・プロトタイプ',
        'システム開発・テスト',
        'コンテンツ制作・配信',
        '効果測定・改善・拡張'
      ],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-500 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              包括的な
              <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                ソリューション
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-pink-100">
              エンターテイメント企業の成長を支える5つの主要サービス
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`bg-gradient-to-br ${service.bgColor} rounded-3xl p-8 md:p-12`}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                    <div className={isEven ? '' : 'lg:col-start-2'}>
                      <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-6`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg text-gray-600 mb-6 font-medium">
                        {service.subtitle}
                      </p>
                      <p className="text-gray-700 mb-8 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">主要サービス内容</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className={isEven ? '' : 'lg:col-start-1'}>
                      <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">推進プロセス</h3>
                        <div className="space-y-4">
                          {service.process.map((step, stepIndex) => (
                            <div key={stepIndex} className="flex items-center space-x-4">
                              <div className={`w-8 h-8 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                                {stepIndex + 1}
                              </div>
                              <span className="text-gray-700 font-medium">{step}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-8 pt-6 border-t border-gray-200">
                          <button className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}>
                            <span>詳細相談・お問い合わせ</span>
                            <ArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            プロジェクトのご相談はお気軽に
          </h2>
          <p className="text-xl mb-8 text-pink-100 max-w-2xl mx-auto">
            専門スタッフがお客様の課題をお聞きし、最適なソリューションをご提案いたします
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
            無料相談を申し込む
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;