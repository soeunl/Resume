import './globals.css';

export const metadata = {
  title: '이소은 이력서',
  description: '이소은의 이력서',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
