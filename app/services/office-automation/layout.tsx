import { generateOfficeAutomationMetadata } from '../../metadata-config';

export const metadata = generateOfficeAutomationMetadata();

export default function OfficeAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
