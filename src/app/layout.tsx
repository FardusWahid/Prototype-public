import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/lib/fonts";
import { ThemeProvider } from "@/components/Context/theme-provider";
import { Toaster } from "sonner";
export const metadata: Metadata = {
  title: "Simple Prototype For CVIT ",
  description: "Simple Prototype For CVIT made by Fardus wahid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" richColors duration={4000} />
        </ThemeProvider>
      </body>
    </html>
  );
}
