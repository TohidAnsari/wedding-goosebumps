import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { Providers } from "@/components/providers";
import Link from "next/link";
import { LayoutDashboard, FileText, Settings, Users, LogOut, MessageSquare } from "lucide-react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <Providers>
      <div className="flex min-h-screen bg-gray-100">
        <aside className="w-64 bg-white shadow-md">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">CMS Panel</h2>
          </div>
          <nav className="mt-6 px-4 space-y-2">
            <Link href="/admin" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <LayoutDashboard className="mr-3 h-5 w-5" />
              Dashboard
            </Link>
            <Link href="/admin/pages" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <FileText className="mr-3 h-5 w-5" />
              Pages
            </Link>
            <Link href="/admin/blog" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <MessageSquare className="mr-3 h-5 w-5" />
              Blog
            </Link>
            <Link href="/admin/leads" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <Users className="mr-3 h-5 w-5" />
              Leads
            </Link>
            <Link href="/admin/seo" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <Settings className="mr-3 h-5 w-5" />
              SEO
            </Link>
          </nav>
          <div className="absolute bottom-0 w-64 p-4">
            <Link href="/api/auth/signout" className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-md">
              <LogOut className="mr-3 h-5 w-5" />
              Sign Out
            </Link>
          </div>
        </aside>
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </Providers>
  );
}
