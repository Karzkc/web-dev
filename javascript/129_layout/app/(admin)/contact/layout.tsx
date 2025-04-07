
export const metadata = {
    title: "contact",
    description: "Admin Page: Facebook is a social utility that connects people with friends and others who work, study and live around them. People use Facebook to keep up with friends, upload an unlimited number of photos, post links and videos, and learn more about the people they meet.",
};

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <span>Admin navbar</span>
                {children}
                <span>Admin Footer</span>
            </body>
        </html>
    );
}
