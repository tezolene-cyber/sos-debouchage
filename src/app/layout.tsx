import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SOS Débouchage - Artisan fiable en 30 minutes",
  description: "Trouvez un artisan pour vos problèmes de débouchage, curage, inspection caméra en Île-de-France",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="bg-white shadow p-4 flex justify-between">
          <a href="/" className="font-bold text-xl">SOS Débouchage</a>
          <div className="space-x-4">
            <a href="/auth/login" className="text-blue-500">Connexion Artisan</a>
            <a href="/auth/signup" className="bg-blue-500 text-white px-4 py-2 rounded">Inscription</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}