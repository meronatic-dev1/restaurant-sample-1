import React from 'react';
import Providers from './providers';

export const metadata = {
  title: 'Admin Dashboard Sample',
  description: 'Generated to make the UI component runnable natively',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  );
}
