import { generateCustomerCareMetadata } from '../../metadata-config';

export const metadata = generateCustomerCareMetadata();

export default function CustomerCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
