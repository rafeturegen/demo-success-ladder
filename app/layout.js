import "./globals.css";

export const metadata = {
  title: "A Path To Academic Success",
  description: "A right path to academic success",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <div id="spotify-player"></div>
      </body>
    </html>
  );
}
