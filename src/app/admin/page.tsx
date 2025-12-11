"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminRootRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect admin root to pengaduan management page
    router.replace("/admin/pengaduan");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-60">
      <p className="text-gray-600">Mengalihkan ke halaman Pengaduan...</p>
    </div>
  );
}
