import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "../utils/ThemeRegistry";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { Container } from "@mui/material";
import AppBarMain from "@/components/appBar/AppBarMain";
import Footer from "@/components/footer/Footer";
import NextTopLoader from 'nextjs-toploader'
import 'rsuite/dist/rsuite.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NX store",
  description: "an ecomerce store developed by ola olasunkanmi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <ThemeRegistry>
        <body suppressHydrationWarning={true} className={inter.className} >
          <ScopedCssBaseline>
            <Container maxWidth="xl" className="p_cancel" sx={{width:"100%",px:0}}>
              <AppBarMain />
              <NextTopLoader />
              {children}
              <Footer/>
            </Container>
          </ScopedCssBaseline>
        </body>
      </ThemeRegistry>
    </html>
  );
}
