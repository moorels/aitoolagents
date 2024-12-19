import { generateAIAgentsMetadata } from '../../metadata-config';

export const metadata = generateAIAgentsMetadata();

export default function AIAgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
