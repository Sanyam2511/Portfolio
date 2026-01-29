// app/layout.tsx
import "./globals.css";
import { BackgroundGrid } from "@/components/ui/background-grid";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased text-white">
        <BackgroundGrid />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}