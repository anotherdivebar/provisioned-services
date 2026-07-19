import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { ContactForm } from "@/components/contact-form";
import { FeatureList } from "@/components/enterprise/feature-list";
import { CONTACT_ASSURANCES, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request facility support from Provisioned Services. Maintenance, emergency repairs, rollouts, flooring, cooler and freezer work, and multi-location coordination.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request service"
        description="Tell us what is happening, where it is happening, and how quickly you need support."
      />

      <SectionShell tone="light" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-xl font-bold text-navy-950">
                  Service request form
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">
                  A few essentials are enough to get the conversation started.
                  Required fields are marked with *.
                </p>
              </div>
              <ContactForm />
            </div>

            <aside className="lg:col-span-2">
              <div className="enterprise-card bg-off-white p-6">
                <SectionHeading title="Direct contact" />
                <dl className="mt-6 space-y-5 text-sm">
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-steel-500">
                      Email
                    </dt>
                    <dd className="mt-1.5">
                      <a
                        href={`mailto:${SITE.email}`}
                        className="inline-flex min-h-11 items-center py-2 font-medium text-navy-950 hover:text-amber-600"
                      >
                        {SITE.email}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="enterprise-card mt-6 p-6">
                <SectionHeading title="What to expect" />
                <FeatureList items={CONTACT_ASSURANCES} className="mt-4" />
              </div>
            </aside>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
