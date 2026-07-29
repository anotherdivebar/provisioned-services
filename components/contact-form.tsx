"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import {
  contactSchema,
  type ContactFormData,
} from "@/lib/schemas/contact-schema";
import { URGENCY_OPTIONS } from "@/lib/constants";
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
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
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
          Thanks for Reaching Out.
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
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div
        hidden
        aria-hidden="true"
      >
        <input
          type="text"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          {...register("website")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            autoComplete="name"
            {...register("name")}
            aria-invalid={!!errors.name}
          />
          {errors.name ? (
            <p className="text-sm text-red-600" role="alert">
              {errors.name.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">
            Company <span className="text-steel-400">(optional)</span>
          </Label>
          <Input
            id="company"
            autoComplete="organization"
            {...register("company")}
            aria-invalid={!!errors.company}
          />
          {errors.company ? (
            <p className="text-sm text-red-600" role="alert">
              {errors.company.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Work email *</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
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
          <Label htmlFor="phone">
            Phone <span className="text-steel-400">(optional)</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            {...register("phone")}
            aria-invalid={!!errors.phone}
          />
          {errors.phone ? (
            <p className="text-sm text-red-600" role="alert">
              {errors.phone.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-2 sm:max-w-xs">
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
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">What do you need help with? *</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Include the location, issue, and any timing or access details."
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

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        disabled={submitState === "loading"}
      >
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
