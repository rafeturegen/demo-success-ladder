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
      </body>
    </html>
  );
}
