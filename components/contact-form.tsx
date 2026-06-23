"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import {
  contactSchema,
  type ContactFormData,
} from "@/lib/schemas/contact-schema";
import { INDUSTRY_OPTIONS, URGENCY_OPTIONS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      website: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    setSubmitState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
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

  if (submitState === "success") {
    return (
      <div
        className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center"
        role="status"
      >
        <h3 className="text-xl font-semibold text-navy-950">
          Thanks for reaching out.
        </h3>
        <p className="mt-3 text-steel-600">
          Our team will review your request and follow up shortly.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitState("idle")}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <Label htmlFor="website">Website</Label>
        <Input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input id="name" {...register("name")} aria-invalid={!!errors.name} />
          {errors.name ? (
            <p className="text-sm text-red-600" role="alert">
              {errors.name.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company *</Label>
          <Input id="company" {...register("company")} aria-invalid={!!errors.company} />
          {errors.company ? (
            <p className="text-sm text-red-600" role="alert">
              {errors.company.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email ? (
            <p className="text-sm text-red-600" role="alert">
              {errors.email.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" type="tel" {...register("phone")} aria-invalid={!!errors.phone} />
          {errors.phone ? (
            <p className="text-sm text-red-600" role="alert">
              {errors.phone.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="locations">Number of locations *</Label>
          <Input
            id="locations"
            {...register("locations")}
            placeholder="e.g. 12"
            aria-invalid={!!errors.locations}
          />
          {errors.locations ? (
            <p className="text-sm text-red-600" role="alert">
              {errors.locations.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="industry">Industry *</Label>
          <Controller
            name="industry"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id="industry" aria-invalid={!!errors.industry}>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  {INDUSTRY_OPTIONS.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.industry ? (
            <p className="text-sm text-red-600" role="alert">
              {errors.industry.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="serviceNeed">Service need *</Label>
        <Input
          id="serviceNeed"
          {...register("serviceNeed")}
          placeholder="Maintenance, emergency repair, rollout, flooring, etc."
          aria-invalid={!!errors.serviceNeed}
        />
        {errors.serviceNeed ? (
          <p className="text-sm text-red-600" role="alert">
            {errors.serviceNeed.message}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="urgency">Urgency *</Label>
        <Controller
          name="urgency"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger id="urgency" aria-invalid={!!errors.urgency}>
                <SelectValue placeholder="Select urgency" />
              </SelectTrigger>
              <SelectContent>
                {URGENCY_OPTIONS.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.urgency ? (
          <p className="text-sm text-red-600" role="alert">
            {errors.urgency.message}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Tell us about your locations, timeline, and what you need coordinated."
          aria-invalid={!!errors.message}
        />
        {errors.message ? (
          <p className="text-sm text-red-600" role="alert">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      {submitState === "error" ? (
        <p className="text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={submitState === "loading"}>
        {submitState === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Request"
        )}
      </Button>
    </form>
  );
}
