"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

type TurnstileOptions = {
  sitekey: string;
  action: string;
  size: "flexible";
  theme: "light";
  callback: (token: string) => void;
  "expired-callback": () => void;
  "error-callback": () => void;
};

type TurnstileApi = {
  render: (container: HTMLElement, options: TurnstileOptions) => string;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

interface TurnstileCaptchaProps {
  siteKey: string;
  resetKey: number;
  onVerify: (token: string) => void;
  onExpire: () => void;
  onError: () => void;
}

export function TurnstileCaptcha({
  siteKey,
  resetKey,
  onVerify,
  onExpire,
  onError,
}: TurnstileCaptchaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onVerifyRef = useRef(onVerify);
  const onExpireRef = useRef(onExpire);
  const onErrorRef = useRef(onError);
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    onVerifyRef.current = onVerify;
    onExpireRef.current = onExpire;
    onErrorRef.current = onError;
  }, [onError, onExpire, onVerify]);

  useEffect(() => {
    const container = containerRef.current;
    const turnstile = window.turnstile;

    if (!siteKey || !scriptReady || !container || !turnstile) {
      return;
    }

    widgetIdRef.current = turnstile.render(container, {
      sitekey: siteKey,
      action: "vendor_application",
      size: "flexible",
      theme: "light",
      callback: (token) => onVerifyRef.current(token),
      "expired-callback": () => onExpireRef.current(),
      "error-callback": () => onErrorRef.current(),
    });

    return () => {
      if (widgetIdRef.current) {
        turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [resetKey, scriptReady, siteKey]);

  if (!siteKey) {
    return (
      <p className="text-sm text-red-600" role="alert">
        Security verification is not configured. Please try again later or
        contact Provisioned directly.
      </p>
    );
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
        onError={() => onErrorRef.current()}
      />
      <div ref={containerRef} className="min-h-[65px]" />
    </>
  );
}
