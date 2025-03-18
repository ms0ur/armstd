import type { Metadata } from "next";
import {MainLayout} from "@/layout";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
       <body>
       <MainLayout>{children}</MainLayout>
       </body>
    </html>
  );
}
