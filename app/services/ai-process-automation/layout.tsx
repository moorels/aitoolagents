import { generateAIProcessAutomationMetadata } from '../../metadata-config';

export const metadata = generateAIProcessAutomationMetadata();

export default function AIProcessAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
