import './globals.css'; // Aapke global styles

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Main content yahan render hoga */}
        {children}
      </body>
    </html>
  );
}