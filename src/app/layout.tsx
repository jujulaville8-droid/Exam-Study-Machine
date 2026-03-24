import type { Metadata } from "next";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exam Study Machine | SOSC 3360",
  description:
    "Study tool for Canadian Constitutional Politics — Charter scenarios, quizzes, and flashcards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 pt-20 pb-24 md:pb-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
