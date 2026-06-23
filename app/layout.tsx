import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE } from "@/lib/constants";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Facility Maintenance, Repairs & Vendor Coordination`,
    template: `%s | ${SITE.shortName}`,
  },
  description:
    "Provisioned Services supports restaurants, retailers, franchise groups, and multi-site operators with facility maintenance, emergency repairs, installations, cooler/freezer work, flooring, rollouts, and vendor coordination.",
  metadataBase: new URL("https://provisionedservices.com"),
  openGraph: {
    title: `${SITE.name} | Facility Maintenance, Repairs & Vendor Coordination`,
    description:
      "Responsive facility support for restaurants, retailers, and multi-site operators.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
