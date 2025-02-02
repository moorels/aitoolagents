import { generateInsuranceMetadata } from '../../metadata-config';

export const metadata = generateInsuranceMetadata();

export default function InsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
