"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
};

const defaultViewport = { once: true, margin: "-80px" as const };

type RevealVariant = "fadeUp" | "fadeIn" | "scaleIn" | "slideInLeft" | "slideInRight";

type MotionVariant = {
  hidden: Record<string, number>;
  visible: Record<string, number>;
};

const variants: Record<RevealVariant, MotionVariant> = {
  fadeUp,
  fadeIn,
  scaleIn,
  slideInLeft,
  slideInRight,
};

interface RevealProps {
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  children?: ReactNode;
}

export function Reveal({
  variant = "fadeUp",
  delay = 0,
  duration = 0.55,
  className,
  children,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={variants[variant]}
      transition={{ duration, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeUp(props: Omit<RevealProps, "variant">) {
  return <Reveal variant="fadeUp" {...props} />;
}

export function ScaleIn(props: Omit<RevealProps, "variant">) {
  return <Reveal variant="scaleIn" {...props} />;
}

export function SlideInLeft(props: Omit<RevealProps, "variant">) {
  return <Reveal variant="slideInLeft" {...props} />;
}

export function SlideInRight(props: Omit<RevealProps, "variant">) {
  return <Reveal variant="slideInRight" {...props} />;
}

interface StaggerContainerProps {
  stagger?: number;
  delayChildren?: number;
  className?: string;
  children?: ReactNode;
}

export function StaggerContainer({
  stagger = 0.08,
  delayChildren = 0.05,
  className,
  children,
}: StaggerContainerProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.5, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedSection({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <Reveal className={className}>{children}</Reveal>;
}
