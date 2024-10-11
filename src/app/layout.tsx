import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./screens/layout/navbar";
import { UserProvider } from "@/context/userContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amb.ento",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <div style={styles.navbar} >
            <NavBar />
          </div>
            {children}
        </UserProvider>
      </body>
    </html>
  );
}

const styles = {
  navbar: {
    marginBottom: '1rem',
  }
}