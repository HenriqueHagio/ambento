import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./screens/layout/navbar";
import Footer from "./screens/layout/footer";
import { UserProvider } from "@/context/userContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amb.ento",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 
  return (
    <html lang="en">
      <body className={inter.className} style={styles.body}>
        <UserProvider>
          <div style={styles.navbar} >
            <NavBar />
          </div>
          <div style={styles.content}>
            {children}
          </div>
          <div style={styles.footer}>
            <Footer/>
          </div>
        </UserProvider>
      </body>
    </html>
  );
}

import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  navbar: {
    marginBottom: '1rem',
  },
  body: {
    display: 'flex',  
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flex: '1',
    marginTop: '3rem',
    marginBottom: '3rem',
  },
  footer: {
    width: '100%',
    height: '4rem',
  }
};