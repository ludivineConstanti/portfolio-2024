import { metadata as metaDataConstants } from "@/models/constants";

export const metadata = metaDataConstants;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
