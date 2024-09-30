import './globals.css';

export const metadata = {
  title: '이소은 이력서',
  description: '이소은의 이력서',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Hahmlet:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
