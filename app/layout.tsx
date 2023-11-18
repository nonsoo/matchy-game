import "@styles/layout.css";
import { sansita } from "@utils/constants/fonts";

export const metadata = {
  title: "Matchy Matchy -- The word association game with friends",
  description: "The word association game with friends",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sansita.className}>{children}</body>
    </html>
  );
}
