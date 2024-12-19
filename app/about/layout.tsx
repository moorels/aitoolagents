import { generateAboutMetadata } from '../metadata-config';

export const metadata = generateAboutMetadata();

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
