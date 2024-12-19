import { generateAiIntegrationsMetadata } from '../../metadata-config';

export const metadata = generateAiIntegrationsMetadata();

export default function AIIntegrationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
