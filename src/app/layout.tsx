import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { darkTheme, lightTheme } from "@/lib/theme";
import { ThemeProvider } from "@/components/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resume Master",
  description: "Let's take a step forward towards getting a job.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider>
        <html lang="en">
            <body
              className={`${inter.className}`}
              >
              <ThemeProvider>
                <Header/>
                {children}
              </ThemeProvider>
            </body>
        </html>
    </ClerkProvider>
  );
}
