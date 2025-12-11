"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/admin/pengaduan", label: "Pengaduan", icon: "📣" },
    { href: "/admin/organisasi", label: "Struktur Organisasi", icon: "👥" },
    { href: "/admin/publikasi", label: "Publikasi", icon: "📄" },
  ];

  return (
    <aside className="w-64 bg-blue-900 text-white min-h-screen p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <p className="text-blue-200 text-sm">PPKPT Universitas Paramedina</p>
      </div>

      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              pathname === link.href
                ? "bg-blue-700 text-white"
                : "text-blue-100 hover:bg-blue-800"
            }`}
          >
            <span className="text-xl">{link.icon}</span>
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-8 pt-8 border-t border-blue-700">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-blue-100 hover:bg-blue-800 transition-colors"
        >
          <span className="text-xl">🏠</span>
          <span>Ke Halaman Utama</span>
        </Link>
      </div>
    </aside>
  );
}
