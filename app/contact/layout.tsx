import { generateContactMetadata } from '../metadata-config';

export const metadata = generateContactMetadata();

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
