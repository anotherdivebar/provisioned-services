This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Create a local `.env.local` file with the Cloudflare Turnstile keys and the
Resend credentials used by both website forms:

```bash
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key
TURNSTILE_SECRET_KEY=your_secret_key
RESEND_API_KEY=your_resend_api_key
CONTACT_FORM_FROM_EMAIL="Provisioned Services Website <website@send.provisioned.net>"
```

`CONTACT_FORM_FROM_EMAIL` is the verified sender shown in the email's From
field; it is not the destination inbox. Add the same variables to the Vercel
project before deploying. The vendor application fails closed when either
Turnstile key is unavailable, sends applications to `info@provisioned.net`, and
does not write application details to runtime logs. The service-request form
sends to `sales@provisioned.net`. Both forms return an actionable error instead
of reporting a false success when email delivery is not configured.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
