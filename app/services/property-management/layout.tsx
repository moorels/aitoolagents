import { generatePropertyManagementMetadata } from '../../metadata-config';

export const metadata = generatePropertyManagementMetadata();

export default function PropertyManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
