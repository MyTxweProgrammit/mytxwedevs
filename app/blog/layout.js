import "../globals.css";

export const metadata = {
  title: "MyTxweDEVS - Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo_dark.png"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}