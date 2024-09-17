"use client"

import { UserProvider } from "@/context/userContext";
import { ReactNode } from "react";


export default function Home({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}
