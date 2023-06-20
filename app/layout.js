import './globals.css'


export const metadata = {
  title: 'Manage Landing Page',
  description: 'a landing page for company called Manage',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
