import { generateRetailAutomationMetadata } from '../../metadata-config';

export const metadata = generateRetailAutomationMetadata();

export default function RetailAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
