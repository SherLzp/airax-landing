// src/components/Footer.tsx
import React from 'react';
import Logo from './Logo';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#00153a] py-16 border-t border-[#00C2FF]/10">
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-y-12">
        
        {/* 左側セクション（ロゴと説明） */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="w-24 h-24 mb-6">
            <Logo className="w-full h-full" />
          </div>
          <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
            多言語AIで、企業のフロント対応を自動化・効率化。
          </p>
        </div>

        {/* 右側セクション（連絡先） */}
        <div className="text-center md:text-right">
          <h4 className="text-white font-bold mb-6 tracking-wider text-lg">お問い合わせ</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li>
              <Link href="mailto:lzp.sher@gmail.com" className="hover:text-[#00C2FF] transition-colors duration-300 block py-1">
                lzp.sher@gmail.com
              </Link>
            </li>
            {/* 住所を更新しました */}
            <li className="py-1 leading-relaxed">
              住所: 東京都港区三田三丁目2-1<br />弓和三田レジデンス805
            </li>
          </ul>
        </div>
      </div>

      {/* コピーライト */}
      <div className="mt-16 pt-8 border-t border-[#00C2FF]/10 text-center text-xs text-gray-500">
        © {currentYear} AIRAX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;