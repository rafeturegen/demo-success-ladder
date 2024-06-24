import "./globals.css";
import Header from "@/components/Header";

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
        <script src="https://sdk.scdn.co/spotify-player.js"></script>
      </body>
    </html>
  );
}
