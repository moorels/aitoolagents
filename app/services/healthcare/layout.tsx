import { generateHealthcareMetadata } from '../../metadata-config';

export const metadata = generateHealthcareMetadata();

export default function HealthcareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
