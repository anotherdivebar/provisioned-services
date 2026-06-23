"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Upload } from "lucide-react";
import {
  vendorApplicationSchema,
  type VendorApplicationFormData,
} from "@/lib/schemas/vendor-application-schema";
import {
  BUSINESS_TYPES,
  VENDOR_TRADES,
} from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormSection,
  VENDOR_FORM_SECTIONS,
} from "@/components/form-section";
import { FadeUp } from "@/components/motion/animations";
import { cn } from "@/lib/utils";

const TOTAL = VENDOR_FORM_SECTIONS.length;

function YesNoSelect({
  id,
  value,
  onChange,
  error,
}: {
  id: string;
  value?: string;
  onChange: (value: "yes" | "no") => void;
  error?: string;
}) {
  return (
    <div className="space-y-2">
      <Select onValueChange={onChange} value={value}>
        <SelectTrigger id={id} aria-invalid={!!error}>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectContent>
      </Select>
      {error ? (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function UploadPlaceholder({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-dashed border-navy-200 bg-off-white p-6 text-center">
      <Upload className="mx-auto h-8 w-8 text-steel-400" aria-hidden="true" />
      <p className="mt-3 text-sm font-medium text-navy-950">{label}</p>
      <p className="mt-1 text-xs text-steel-500">
        Upload UI placeholder — file storage not connected yet
      </p>
      <Button type="button" variant="outline" size="sm" className="mt-4" disabled>
        Choose file
      </Button>
      {/* TODO: Wire file uploads to Supabase Storage, S3, UploadThing, or similar */}
    </div>
  );
}

export function VendorApplicationForm() {
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<VendorApplicationFormData>({
    resolver: zodResolver(vendorApplicationSchema),
    defaultValues: {
      trades: [],
      confirmAccurate: undefined,
      understandNoGuarantee: undefined,
      agreeToContact: undefined,
      website: "",
    },
  });

  const selectedTrades = watch("trades") ?? [];

  async function onSubmit(data: VendorApplicationFormData) {
    setSubmitState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/vendor-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setSubmitState("error");
        setErrorMessage(result.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitState("success");
      reset();
    } catch {
      setSubmitState("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  function toggleTrade(trade: (typeof VENDOR_TRADES)[number]) {
    const current = selectedTrades;
    if (current.includes(trade)) {
      setValue(
        "trades",
        current.filter((t) => t !== trade),
        { shouldValidate: true }
      );
    } else {
      setValue("trades", [...current, trade], { shouldValidate: true });
    }
  }

  if (submitState === "success") {
    return (
      <FadeUp>
        <div
          className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-10 text-center shadow-sm"
          role="status"
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-2xl font-bold text-emerald-600">
            ✓
          </div>
          <h3 className="text-2xl font-bold text-navy-950">Thanks for applying.</h3>
          <p className="mx-auto mt-3 max-w-md text-steel-600">
            Our team will review your information and follow up if your services
            align with current client needs.
          </p>
        </div>
      </FadeUp>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-start">
      <aside className="order-first hidden lg:order-last lg:block">
        <div className="sticky top-24 rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-600">
            Application overview
          </p>
          <p className="mt-2 text-sm text-steel-600">
            Complete all sections below. Required fields are marked with *.
          </p>
          <ol className="mt-6 space-y-3">
            {VENDOR_FORM_SECTIONS.map((section, i) => (
              <li key={section} className="flex items-center gap-3 text-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-950 text-[10px] font-bold text-amber-400">
                  {i + 1}
                </span>
                <span className="text-steel-700">{section}</span>
              </li>
            ))}
          </ol>
          <div className="mt-6 rounded-lg border border-navy-100 bg-off-white p-4 text-xs leading-relaxed text-steel-500">
            Document uploads are optional for now. File storage will be connected
            in a future update.
          </div>
        </div>
      </aside>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <Label htmlFor="website">Website</Label>
        <Input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <FormSection
        step={1}
        totalSteps={TOTAL}
        title="Company Information"
        helperText="Legal business name and primary contact details."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="companyName">Company name *</Label>
            <Input id="companyName" {...register("companyName")} />
            {errors.companyName ? (
              <p className="text-sm text-red-600">{errors.companyName.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="dba">DBA, if applicable</Label>
            <Input id="dba" {...register("dba")} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="companyWebsite">Website</Label>
            <Input id="companyWebsite" {...register("companyWebsite")} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactName">Primary contact name *</Label>
            <Input id="contactName" {...register("contactName")} />
            {errors.contactName ? (
              <p className="text-sm text-red-600">{errors.contactName.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactTitle">Contact title *</Label>
            <Input id="contactTitle" {...register("contactTitle")} />
            {errors.contactTitle ? (
              <p className="text-sm text-red-600">{errors.contactTitle.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" {...register("email")} />
            {errors.email ? (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input id="phone" type="tel" {...register("phone")} />
            {errors.phone ? (
              <p className="text-sm text-red-600">{errors.phone.message}</p>
            ) : null}
          </div>

          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="streetAddress">Street address *</Label>
            <Input id="streetAddress" {...register("streetAddress")} />
            {errors.streetAddress ? (
              <p className="text-sm text-red-600">{errors.streetAddress.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="city">City *</Label>
            <Input id="city" {...register("city")} />
            {errors.city ? (
              <p className="text-sm text-red-600">{errors.city.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="state">State *</Label>
            <Input id="state" {...register("state")} />
            {errors.state ? (
              <p className="text-sm text-red-600">{errors.state.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="zip">ZIP *</Label>
            <Input id="zip" {...register("zip")} />
            {errors.zip ? (
              <p className="text-sm text-red-600">{errors.zip.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="serviceRadius">Service radius / coverage area *</Label>
            <Input id="serviceRadius" {...register("serviceRadius")} />
            {errors.serviceRadius ? (
              <p className="text-sm text-red-600">{errors.serviceRadius.message}</p>
            ) : null}
          </div>

          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="statesServed">States served *</Label>
            <Input id="statesServed" {...register("statesServed")} />
            {errors.statesServed ? (
              <p className="text-sm text-red-600">{errors.statesServed.message}</p>
            ) : null}
          </div>
        </div>
      </FormSection>

      <FormSection
        step={2}
        totalSteps={TOTAL}
        title="Business Details"
        helperText="Licensing, insurance, and business structure."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="yearsInBusiness">Years in business *</Label>
            <Input id="yearsInBusiness" {...register("yearsInBusiness")} />
            {errors.yearsInBusiness ? (
              <p className="text-sm text-red-600">{errors.yearsInBusiness.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="employeeCount">Number of employees/technicians *</Label>
            <Input id="employeeCount" {...register("employeeCount")} />
            {errors.employeeCount ? (
              <p className="text-sm text-red-600">{errors.employeeCount.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="businessType">Business type *</Label>
            <Controller
              name="businessType"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger id="businessType">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {BUSINESS_TYPES.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.businessType ? (
              <p className="text-sm text-red-600">{errors.businessType.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="licensed">Licensed where required? *</Label>
            <Controller
              name="licensed"
              control={control}
              render={({ field }) => (
                <YesNoSelect
                  id="licensed"
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.licensed?.message}
                />
              )}
            />
          </div>

          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="licenseDetails">License numbers / states</Label>
            <Input id="licenseDetails" {...register("licenseDetails")} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="insured">Insured? *</Label>
            <Controller
              name="insured"
              control={control}
              render={({ field }) => (
                <YesNoSelect
                  id="insured"
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.insured?.message}
                />
              )}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="liabilityCoverage">General liability coverage amount</Label>
            <Input id="liabilityCoverage" {...register("liabilityCoverage")} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="workersComp">Workers comp coverage? *</Label>
            <Controller
              name="workersComp"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger id="workersComp">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                    <SelectItem value="na">Not applicable</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.workersComp ? (
              <p className="text-sm text-red-600">{errors.workersComp.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="canProvideCoi">Can provide Certificate of Insurance? *</Label>
            <Controller
              name="canProvideCoi"
              control={control}
              render={({ field }) => (
                <YesNoSelect
                  id="canProvideCoi"
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.canProvideCoi?.message}
                />
              )}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="w9Available">W-9 available? *</Label>
            <Controller
              name="w9Available"
              control={control}
              render={({ field }) => (
                <YesNoSelect
                  id="w9Available"
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.w9Available?.message}
                />
              )}
            />
          </div>
        </div>
      </FormSection>

      <FormSection
        step={3}
        totalSteps={TOTAL}
        title="Services & Trades"
        description="Select all trades and services your company provides."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {VENDOR_TRADES.map((trade) => (
            <label
              key={trade}
              className={cn(
                "flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm transition-colors",
                selectedTrades.includes(trade)
                  ? "border-amber-300 bg-amber-50 text-navy-950"
                  : "border-navy-100 bg-off-white text-steel-700 hover:border-navy-200"
              )}
            >
              <Checkbox
                checked={selectedTrades.includes(trade)}
                onCheckedChange={() => toggleTrade(trade)}
              />
              {trade}
            </label>
          ))}
        </div>
        {errors.trades ? (
          <p className="mt-3 text-sm text-red-600">{errors.trades.message}</p>
        ) : null}
      </FormSection>

      <FormSection
        step={4}
        totalSteps={TOTAL}
        title="Operational Fit"
        helperText="Help us understand your availability and experience."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="emergencyResponse">Emergency response? *</Label>
            <Controller
              name="emergencyResponse"
              control={control}
              render={({ field }) => (
                <YesNoSelect
                  id="emergencyResponse"
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.emergencyResponse?.message}
                />
              )}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="typicalResponseTime">Typical response time</Label>
            <Input id="typicalResponseTime" {...register("typicalResponseTime")} />
          </div>

          {(
            [
              ["afterHours", "Available after hours? *"],
              ["weekends", "Available weekends? *"],
              ["willingToTravel", "Willing to travel? *"],
              ["activeBusinessEnvironments", "Work in active/open business environments? *"],
              ["restaurantExperience", "Experience with restaurants? *"],
              ["retailExperience", "Experience with retail? *"],
              ["multiSiteExperience", "Experience with national-account or multi-site work? *"],
            ] as const
          ).map(([fieldName, label]) => (
            <div key={fieldName} className="space-y-2">
              <Label htmlFor={fieldName}>{label}</Label>
              <Controller
                name={fieldName}
                control={control}
                render={({ field }) => (
                  <YesNoSelect
                    id={fieldName}
                    value={field.value}
                    onChange={field.onChange}
                    error={errors[fieldName]?.message}
                  />
                )}
              />
            </div>
          ))}

          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="experienceDescription">
              Briefly describe your relevant experience *
            </Label>
            <Textarea
              id="experienceDescription"
              {...register("experienceDescription")}
            />
            {errors.experienceDescription ? (
              <p className="text-sm text-red-600">
                {errors.experienceDescription.message}
              </p>
            ) : null}
          </div>
        </div>
      </FormSection>

      <FormSection step={5} totalSteps={TOTAL} title="References">
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            ["reference1Company", "Reference 1 company *"],
            ["reference1Contact", "Reference 1 contact *"],
            ["reference1Info", "Reference 1 phone/email *"],
            ["reference2Company", "Reference 2 company *"],
            ["reference2Contact", "Reference 2 contact *"],
            ["reference2Info", "Reference 2 phone/email *"],
          ].map(([field, label]) => (
            <div key={field} className="space-y-2">
              <Label htmlFor={field}>{label}</Label>
              <Input id={field} {...register(field as keyof VendorApplicationFormData)} />
              {errors[field as keyof VendorApplicationFormData] ? (
                <p className="text-sm text-red-600">
                  {
                    errors[field as keyof VendorApplicationFormData]?.message as string
                  }
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </FormSection>

      <FormSection
        step={6}
        totalSteps={TOTAL}
        title="Documents"
        description="Upload placeholders — file storage not connected yet."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <UploadPlaceholder label="Certificate of Insurance" />
          <UploadPlaceholder label="W-9" />
          <UploadPlaceholder label="Licenses" />
          <UploadPlaceholder label="Capability statement" />
        </div>
      </FormSection>

      <FormSection step={7} totalSteps={TOTAL} title="Agreement">
        <div className="space-y-4">
          {(
            [
              ["confirmAccurate", "I confirm the information provided is accurate."],
              [
                "understandNoGuarantee",
                "I understand this application does not guarantee work.",
              ],
              [
                "agreeToContact",
                "I agree that Provisioned may contact me about vendor opportunities.",
              ],
            ] as const
          ).map(([fieldName, label]) => (
            <div key={fieldName} className="flex items-start gap-3">
              <Controller
                name={fieldName}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id={fieldName}
                    checked={field.value === true}
                    onCheckedChange={(checked) =>
                      field.onChange(checked === true ? true : undefined)
                    }
                  />
                )}
              />
              <Label htmlFor={fieldName} className="cursor-pointer leading-relaxed">
                {label}
              </Label>
            </div>
          ))}
          {errors.confirmAccurate || errors.understandNoGuarantee || errors.agreeToContact ? (
            <p className="text-sm text-red-600">
              Please confirm all compliance items before submitting.
            </p>
          ) : null}
        </div>
      </FormSection>

      {submitState === "error" ? (
        <p className="text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <Button type="submit" size="lg" className="w-full sm:w-auto shadow-lg shadow-amber-500/15" disabled={submitState === "loading"}>
        {submitState === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Vendor Application"
        )}
      </Button>
    </form>
    </div>
  );
}
