import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE } from "@/lib/constants";
import "./globals.css";

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
      "National facility support and vendor coordination for restaurant, retail, and multi-site operators.",
    type: "website",
    images: [
      {
        url: "/psi-logo.png",
        width: 512,
        height: 512,
        alt: "Provisioned Services, Inc.",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#8d1d03",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col bg-background text-foreground antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
