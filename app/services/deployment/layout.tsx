import { generateDeploymentMetadata } from '../../metadata-config';

export const metadata = generateDeploymentMetadata();

export default function DeploymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
