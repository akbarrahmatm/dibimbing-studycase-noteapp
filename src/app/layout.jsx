import { Providers } from "./providers";

import "./globals.css";

export const metadata = {
  title: "Notes App",
  description: "Write your notes here ✨",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
