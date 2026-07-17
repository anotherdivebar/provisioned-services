import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  priority?: boolean;
}

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <span
      className={cn(
        "relative block h-12 w-44 shrink-0 overflow-hidden bg-brand-red",
        className
      )}
    >
      <Image
        src="/psi-logo.png"
        alt="Provisioned Services, Inc."
        fill
        priority={priority}
        sizes="(max-width: 640px) 176px, 224px"
        className="object-cover [object-position:center_48%]"
      />
    </span>
  );
}
