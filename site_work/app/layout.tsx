import type { Metadata } from "next";
import "./globals.css";
import SiteShell from "@/components/SiteShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: site.tagline ? `${site.name} | ${site.tagline}` : site.name,
  description: "Legacy Energies is a global energy trading and logistics platform focused on crude, refined products, gas and LNG value chains, and disciplined execution.",
  icons: [{ rel: "icon", url: "/favicon.ico" }]
};

// Usercentrics Web CMP settings id.
// Cookie consent (Cookiebot by Usercentrics)
// Optional: set NEXT_PUBLIC_COOKIEBOT_ID in .env.local to override
const COOKIEBOT_ID = process.env.NEXT_PUBLIC_COOKIEBOT_ID ?? "8d7f4393-7a53-4b94-994c-299831acebee";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
	  <head>
        {/* Cookie consent (Cookiebot) — place first in <head> */}
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid={COOKIEBOT_ID}
          data-blockingmode="auto"
          type="text/javascript"
          charSet="UTF-8"
          suppressHydrationWarning
        />
      </head>
      <body suppressHydrationWarning>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
