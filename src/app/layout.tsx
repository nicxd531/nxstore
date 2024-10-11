import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "../utils/ThemeRegistry";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { Container } from "@mui/material";
import AppBarMain from "@/components/appBar/AppBarMain";
import Footer from "@/components/footer/Footer";
import NextTopLoader from "nextjs-toploader";
import "rsuite/dist/rsuite.min.css";
import SessionWrapper from "@/components/reuseables/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NX store",
  description: "an ecomerce store developed by ola olasunkanmi.",
  icons: {
    icon: "/images/logo-colored.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <head>
          {/* <link rel="shortcut icon" href={favicon} /> */}
          <link rel="icon" href="/images/logo-colored.png" />
        </head>
        <ThemeRegistry>
          <body suppressHydrationWarning={true} className={inter.className}>
            <ScopedCssBaseline>
              <Container
                maxWidth="xl"
                className="p_cancel"
                sx={{ width: "100%", px: 0 }}
              >
                <AppBarMain />
                <NextTopLoader />
                {children}
                <Footer />
              </Container>
            </ScopedCssBaseline>
          </body>
        </ThemeRegistry>
      </html>
    </SessionWrapper>
  );
}
