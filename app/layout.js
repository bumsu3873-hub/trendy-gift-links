import './globals.css';

export const metadata = {
  title: '트렌디기프트 | 2030 선물 링크 모음',
  description: '@trendy_gift.98 게시물에 소개한 선물 제품 링크 모음',
};

export const viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
