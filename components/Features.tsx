// src/components/Features.tsx
import React from 'react';

// 图标组件保持不变
const IconGlobal = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);

const IconAutomate = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconSmart = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

interface FeatureItem {
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
}

// --- 这里的所有文本都替换成了日语 ---
const featuresData: FeatureItem[] = [
  {
    title: "グローバル多言語対応", // 全球化多语言支持
    description: "言語の壁を取り払い、母国語で世界中の顧客とシームレスにつながり、市場を拡大します。", // 打破语言障碍...
    icon: IconGlobal,
  },
  {
    title: "24時間365日の自動化", // 24/7 全天候自动化
    description: "AIエージェントは眠ることなく稼働し、どのタイムゾーンの顧客にも即座に対応し、満足度を向上させます。", // AI 客服永不休息...
    icon: IconAutomate,
  },
  {
    title: "高度なインテント認識", // 智能意图识别
    description: "キーワードマッチングを超え、顧客の意図を正確に理解し、パーソナライズされた的確な解決策を提供します。", // 超越关键词匹配...
    icon: IconSmart,
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-[#001848]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            AIRAXが選ばれる理由 {/* 为什么选择 AIRAX？ */}
          </h2>
          <p className="text-lg text-gray-300">
            次世代のインテリジェントな顧客体験を構築するコア能力 {/* 打造下一代... */}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuresData.map((feature, index) => (
            <div key={index} className="bg-[#001F5B] p-8 rounded-2xl border border-[#00C2FF]/20 hover:border-[#00C2FF] transition-colors duration-300 group">
              <div className="w-14 h-14 bg-[#00C2FF]/10 rounded-xl flex items-center justify-center text-[#00C2FF] mb-6 group-hover:bg-[#00C2FF] group-hover:text-[#001F5B] transition-all duration-300">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;