"use client";

import { useEffect, useState } from "react";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { Complaint } from "@/types";

export default function PengaduanAdminPage() {
  const [items, setItems] = useState<Complaint[]>([]);
  const [selected, setSelected] = useState<Complaint | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  async function fetchList() {
    const res = await fetch("/api/pengaduan");
    const data = await res.json();
    if (data.success) setItems(data.data);
  }

  useEffect(() => {
    fetchList();
  }, []);

  const openDetail = (c: Complaint) => {
    setSelected(c);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelected(null);
  };

  const handleStatusChange = async (status: Complaint["status"]) => {
    if (!selected) return;
    const res = await fetch(`/api/pengaduan/${selected.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    const data = await res.json();
    if (data.success) {
      fetchList();
      closeModal();
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Hapus pengaduan ini?")) return;
    const res = await fetch(`/api/pengaduan/${id}`, { method: "DELETE" });
    const data = await res.json();
    if (data.success) fetchList();
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Manajemen Pengaduan</h1>
        <p className="text-gray-600">Lihat dan kelola pengaduan yang dikirim dari user</p>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {items.length === 0 ? (
          <div className="p-8 text-center text-gray-500">Belum ada pengaduan</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">No</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Pelapor</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Kontak</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Tanggal</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                  <th className="px-6 py-3 text-center text-sm font-semibold">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {items.map((c, i) => (
                  <tr key={c.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm">{i + 1}</td>
                    <td className="px-6 py-4 text-sm font-medium">{c.reporterName}</td>
                    <td className="px-6 py-4 text-sm">{c.reporterContact}</td>
                    <td className="px-6 py-4 text-sm">{new Date(c.createdAt).toLocaleString()}</td>
                    <td className="px-6 py-4 text-sm">{c.status}</td>
                    <td className="px-6 py-4 text-center space-x-2">
                      <Button size="sm" variant="secondary" onClick={() => openDetail(c)}>
                        Detail
                      </Button>
                      <Button size="sm" variant="danger" onClick={() => handleDelete(c.id)}>
                        Hapus
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Modal isOpen={isOpen} title="Detail Pengaduan" onClose={closeModal}>
        {selected && (
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Pelapor</h3>
              <p>{selected.reporterName} — {selected.reporterStatus}</p>
              <p className="text-sm text-gray-500">{selected.reporterContact}</p>
            </div>

            <div>
              <h3 className="font-semibold">Korban</h3>
              <p>{selected.victimName || "-"}</p>
              <p className="text-sm text-gray-500">{selected.victimContact || "-"}</p>
            </div>

            <div>
              <h3 className="font-semibold">Deskripsi Kejadian</h3>
              <p className="text-sm text-gray-700">{selected.incidentDescription}</p>
            </div>

            <div className="flex gap-2">
              <Button onClick={() => handleStatusChange("diproses")}>Tandai Diproses</Button>
              <Button variant="primary" onClick={() => handleStatusChange("selesai")}>Tandai Selesai</Button>
              <Button variant="danger" onClick={() => handleStatusChange("ditolak")}>Tolak</Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
