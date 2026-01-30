// app/layout.tsx
import "./globals.css";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { Navbar } from "@/components/ui/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="antialiased text-white">
        <BackgroundGrid />
        <Navbar />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}