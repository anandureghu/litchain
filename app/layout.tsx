import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blockchain",
  description:
    "LITCHAIN empowering transactions with blockchain technology. Secure, transparent, and efficient. Join us for the future of trust and decentralization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} relative`}>
        <Navbar />
        <div className="pt-[50px] w-screen overflow-hidden">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
