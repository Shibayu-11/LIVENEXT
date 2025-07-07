import React from 'react';
import { Sparkles, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-pink-500" />
              </div>
              <span className="text-xl font-bold">EntertainPro</span>
            </div>
            <p className="text-pink-100 mb-6 max-w-md">
              エンターテイメント業界の課題解決パートナーとして、
              クライアントの成功を共に実現します。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">サービス</h4>
            <ul className="space-y-2 text-pink-100">
              <li><a href="#" className="hover:text-white transition-colors">事業推進支援</a></li>
              <li><a href="#" className="hover:text-white transition-colors">マーケティング</a></li>
              <li><a href="#" className="hover:text-white transition-colors">収益最大化</a></li>
              <li><a href="#" className="hover:text-white transition-colors">イベント企画</a></li>
              <li><a href="#" className="hover:text-white transition-colors">次世代エンタメ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">会社情報</h4>
            <ul className="space-y-2 text-pink-100">
              <li><a href="#" className="hover:text-white transition-colors">会社概要</a></li>
              <li><a href="#" className="hover:text-white transition-colors">代表メッセージ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">採用情報</a></li>
              <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-pink-100">
          <p>&copy; 2024 EntertainPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;