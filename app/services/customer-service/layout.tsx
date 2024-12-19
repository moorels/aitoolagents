import { generateCustomerServiceMetadata } from '../../metadata-config';

export const metadata = generateCustomerServiceMetadata();

export default function CustomerServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
