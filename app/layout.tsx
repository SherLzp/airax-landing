import type { Metadata } from 'next';
// 1. 移除 Inter，引入 Noto Sans JP 日文字体
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';

// 2. 配置 Noto Sans JP
const notoSansJP = Noto_Sans_JP({
  // 'latin' 是基础字符集，包含数字和英文字母，必须包含
  subsets: ['latin'],
  // 加载我们需要的字重：常规(400), 粗体(700), 特粗(900)
  weight: ['400', '700', '900'],
  // 设置一个 CSS 变量名，方便 Tailwind 使用
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  title: 'AIRAX | 多言語AI自動化フロント対応',
  description: 'Automating enterprise front-line interactions with multilingual AI. 多言語AIで、企業のフロント対応を自動化する。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 3. 设置语言为日语 "ja"
    // 4. 添加 suppressHydrationWarning={true} 来压制插件导致的报错
    // 5. 将字体的变量名添加到 className 中
    <html lang="ja" suppressHydrationWarning={true} className={notoSansJP.variable}>
      {/* 将 body 的默认字体设置为我们定义的 sans */}
      <body className="font-sans">{children}</body>
    </html>
  );
}