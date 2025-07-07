import React from 'react';
import { Target, Users, TrendingUp, Award, MapPin, Phone, Mail, Calendar, Sparkles } from 'lucide-react';

const CompanyPage = () => {
  const stats = [
    { number: '150+', label: 'プロジェクト実績', icon: Target },
    { number: '50+', label: 'クライアント企業', icon: Users },
    { number: '300%', label: '平均収益向上', icon: TrendingUp },
    { number: '98%', label: '顧客満足度', icon: Award },
  ];

  const timeline = [
    {
      year: '2020',
      title: '会社設立',
      description: 'エンターテイメント業界の課題解決を目指し、EntertainProを設立'
    },
    {
      year: '2021',
      title: '事業拡大',
      description: '大手プロダクション・イベント会社との提携開始、実績を積み重ね'
    },
    {
      year: '2022',
      title: '国際展開',
      description: '韓国フェス日本開催支援など、国際的なプロジェクトに参画'
    },
    {
      year: '2023',
      title: '技術革新',
      description: 'VR/AR、メタバースなど次世代技術を活用したサービス開始'
    },
    {
      year: '2024',
      title: '更なる成長',
      description: '業界トップクラスの実績と信頼を獲得、新たなステージへ'
    }
  ];

  const team = [
    {
      name: '代表取締役 CEO',
      role: '田中 太郎',
      description: 'エンターテイメント業界歴15年。大手芸能事務所での経験を活かし、業界の課題解決に取り組む。',
      expertise: ['事業戦略', 'プロジェクト管理', '業界ネットワーク']
    },
    {
      name: 'マーケティング責任者',
      role: '佐藤 花子',
      description: 'デジタルマーケティングのスペシャリスト。数多くのヒットコンテンツのプロモーションを手がける。',
      expertise: ['デジタルマーケティング', 'ブランディング', 'SNS戦略']
    },
    {
      name: 'テクノロジー責任者',
      role: '山田 次郎',
      description: '最新技術を活用したエンタメ体験の創造に従事。VR/AR、AIなどの技術導入をリード。',
      expertise: ['VR/AR技術', 'システム開発', 'AI・機械学習']
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-500 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-pink-500" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                EntertainPro
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-pink-100">
              エンターテイメント業界の課題解決パートナー
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  私たちについて
                </span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                EntertainProは、エンターテイメント業界の課題解決を専門とするソリューション企業です。
                独自の専門チームがクライアントのビジネス成長のための包括的な支援を提供し、
                共に成功を実現することを使命としています。
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                戦略策定から実行まで一貫したサポートを行い、クライアントと同じ熱量でプロジェクトに取り組みます。
                エンターテイメント業界の可能性を最大化し、新しい価値創造のスタンダードを確立することを目指しています。
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">2020</div>
                  <div className="text-gray-600">設立年</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-gray-600">従業員数</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">企業理念</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">ミッション</h4>
                  <p className="text-gray-600">
                    エンターテイメント業界の可能性を最大化し、クリエイターと企業の成功を支援する
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">ビジョン</h4>
                  <p className="text-gray-600">
                    エンタメ業界のデジタル変革を牽引し、新しい価値創造のスタンダードを確立する
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">バリュー</h4>
                  <p className="text-gray-600">
                    クライアントと同じ熱量でプロジェクトに取り組み、共に成功を実現する
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              数字で見る
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                EntertainPro
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                会社の歩み
              </span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-600 rounded-full"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-pink-500 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                経営陣
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              豊富な経験と専門知識を持つメンバーがチームを牽引します
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{member.name}</h3>
                <p className="text-pink-600 font-medium mb-4 text-center">{member.role}</p>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{member.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-bold text-gray-800 text-sm">専門分野</h4>
                  {member.expertise.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-3"></div>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                会社情報
              </span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">基本情報</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs font-bold">社</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">会社名</p>
                      <p className="text-gray-600">株式会社EntertainPro</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Calendar className="w-6 h-6 text-pink-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">設立</p>
                      <p className="text-gray-600">2020年4月1日</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Users className="w-6 h-6 text-purple-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">従業員数</p>
                      <p className="text-gray-600">52名（2024年1月現在）</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <TrendingUp className="w-6 h-6 text-pink-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">資本金</p>
                      <p className="text-gray-600">1億円</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">アクセス</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-pink-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">本社所在地</p>
                      <p className="text-gray-600">
                        〒150-0001<br />
                        東京都渋谷区神宮前1-2-3<br />
                        エンタメビル10F
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-purple-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">電話番号</p>
                      <p className="text-gray-600">03-1234-5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-pink-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">メールアドレス</p>
                      <p className="text-gray-600">info@entertainpro.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyPage;