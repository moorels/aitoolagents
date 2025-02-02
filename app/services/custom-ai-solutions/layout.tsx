import { generateCustomAISolutionsMetadata } from '../../metadata-config';

export const metadata = generateCustomAISolutionsMetadata();

export default function CustomAISolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
