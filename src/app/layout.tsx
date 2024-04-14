import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "../utils/ThemeRegistry";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { Container } from "@mui/material";
import AppBarMain from "@/components/appBar/AppBarMain";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <ThemeRegistry>
        <body suppressHydrationWarning={true} className={inter.className}>
          <ScopedCssBaseline>
            <Container maxWidth="xl" className="p_cancel" sx={{minHeight:"100vh",width:"100%",px:0}}>
              <AppBarMain />
              {children}
            </Container>
          </ScopedCssBaseline>
        </body>
      </ThemeRegistry>
    </html>
  );
}
