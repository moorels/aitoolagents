import { generateSecurityMetadata } from '../../metadata-config';

export const metadata = generateSecurityMetadata();

export default function SecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
