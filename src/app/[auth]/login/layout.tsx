import { Metadata } from "next";

export const metadata:Metadata = {
    title: "Login",
    description: "Login page of this app",
}

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
