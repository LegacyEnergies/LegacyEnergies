"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HeroBackgroundProvider } from "@/components/HeroBackgroundContext";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <HeroBackgroundProvider>
      <Header />
      {children}
      <Footer />
    </HeroBackgroundProvider>
  );
}
