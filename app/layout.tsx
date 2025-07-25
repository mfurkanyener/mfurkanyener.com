import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="tr">
        <head>
            <title>Furkan Yener – Kişisel Web Sitesi</title>
        </head>
        <body className="bg-black text-white font-sans antialiased">
        {children}
        </body>
        </html>
    );
}
