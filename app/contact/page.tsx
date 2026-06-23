import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { FaqAccordion } from "@/components/faq-accordion";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request facility support from Provisioned Services. Maintenance, emergency repairs, rollouts, flooring, cooler/freezer work, and multi-location coordination.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request Service"
        description="Whether you need day-to-day maintenance support, emergency repair coordination, installation work, flooring, cooler/freezer support, rollout help, or a partner for a multi-location project, Provisioned can help."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            <aside className="lg:col-span-2">
              <div className="rounded-xl border border-navy-100 bg-off-white p-6">
                <SectionHeading title="Direct contact" />
                <dl className="mt-6 space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold text-navy-950">Email</dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${SITE.email}`}
                        className="text-amber-600 hover:underline"
                      >
                        {SITE.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy-950">Phone</dt>
                    <dd className="mt-1">
                      <a
                        href={`tel:${SITE.phone.replace(/\D/g, "")}`}
                        className="text-amber-600 hover:underline"
                      >
                        {SITE.phone}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-8 rounded-xl border border-navy-100 bg-white p-6 shadow-sm">
                <SectionHeading title="Common questions" />
                <div className="mt-4">
                  <FaqAccordion />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
