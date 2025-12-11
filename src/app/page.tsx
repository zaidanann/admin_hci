"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { OrganizationMember, Publication } from "@/types";
import { getMembers, getPublications } from "@/lib/storage";

export default function Home() {
  const [members, setMembers] = useState<OrganizationMember[]>([]);
  const [publications, setPublications] = useState<Publication[]>([]);

  useEffect(() => {
    setMembers(getMembers());
    setPublications(getPublications());
  }, []);

  const tulsanPublications = publications.filter((p) => p.category === "tulisan");
  const laporanPublications = publications.filter((p) => p.category === "laporan");

  // Group members by level
  const level1Members = members.filter((m) => m.level === 1);
  const level2Members = members.filter((m) => m.level === 2);
  const level3Members = members.filter((m) => m.level === 3);

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-4 border-blue-900">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-blue-900">SATGAS PPKPT</h1>
            <p className="text-blue-600">Universitas Paramedina</p>
          </div>
          <Link
            href="/admin"
            className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium"
          >
            Admin Panel
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Struktur Organisasi Section */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">STRUKTUR ORGANISASI</h2>
            <p className="text-gray-600">Tim profesional PPKPT Universitas Paramedina</p>
          </div>

          {/* Level 1 - Ketua & Sekretaris */}
          {level1Members.length > 0 && (
            <div className="space-y-6">
              <div className="flex justify-center gap-12 flex-wrap">
                {level1Members.map((member) => (
                  <div key={member.id} className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-900 flex items-center justify-center">
                      <span className="text-6xl">👤</span>
                    </div>
                    <p className="font-semibold text-gray-900">{member.name}</p>
                    <p className="text-blue-600 font-bold">{member.position.toUpperCase()}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Level 2 - Staff utama */}
          {level2Members.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 text-center mt-8 mb-6">
                TIM UTAMA
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {level2Members.map((member) => (
                  <div key={member.id} className="text-center p-4 bg-white rounded-lg shadow">
                    <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-4xl">👤</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{member.name}</p>
                    <p className="text-blue-600 text-xs font-bold mt-1">{member.position}</p>
                    <p className="text-gray-600 text-xs mt-2">{member.department}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Level 3 - Staff lainnya */}
          {level3Members.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 text-center mt-8 mb-6">
                STAFF
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {level3Members.map((member) => (
                  <div key={member.id} className="text-center p-4 bg-white rounded-lg shadow">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gray-400 flex items-center justify-center">
                      <span className="text-3xl">👤</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{member.name}</p>
                    <p className="text-blue-600 text-xs font-bold mt-1">{member.position}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Publikasi Section */}
        <section className="space-y-8 mt-16 pt-16 border-t-2 border-blue-200">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">PUBLIKASI</h2>
            <p className="text-gray-600">Tulisan dan laporan dari PPKPT</p>
          </div>

          {/* Publikasi Tulisan */}
          {tulsanPublications.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Publikasi Tulisan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tulsanPublications.slice(0, 6).map((pub) => (
                  <div key={pub.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                    <div className="h-40 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-5xl">📄</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 line-clamp-2">
                      {pub.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {pub.description}
                    </p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>{pub.author}</span>
                      <span>{new Date(pub.date).toLocaleDateString("id-ID")}</span>
                    </div>
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        Baca Selengkapnya →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Publikasi Laporan */}
          {laporanPublications.length > 0 && (
            <div className="space-y-6 mt-12">
              <h3 className="text-2xl font-bold text-gray-900">Publikasi Laporan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {laporanPublications.slice(0, 6).map((pub) => (
                  <div key={pub.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                    <div className="h-40 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-5xl">📋</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 line-clamp-2">
                      {pub.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {pub.description}
                    </p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>{pub.author}</span>
                      <span>{new Date(pub.date).toLocaleDateString("id-ID")}</span>
                    </div>
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        Baca Selengkapnya →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {tulsanPublications.length === 0 && laporanPublications.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg">
              <p className="text-gray-500 text-lg">Belum ada publikasi</p>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-2">SATGAS PPKPT</h3>
              <p className="text-blue-200">Universitas Paramedina</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Alamat</h3>
              <p className="text-blue-200 text-sm">Cipondoh, Jakarta Timur</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Kontak</h3>
              <p className="text-blue-200 text-sm">satgas.ppkpt@paramedina.ac.id</p>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2025 SATGAS PPKPT - Universitas Paramedina</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
