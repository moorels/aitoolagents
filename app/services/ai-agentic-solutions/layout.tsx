import { generateAIAgenticSolutionsMetadata } from '../../metadata-config';

export const metadata = generateAIAgenticSolutionsMetadata();

export default function AIAgenticSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
