import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Register page of this app",
};

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
