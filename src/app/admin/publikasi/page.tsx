"use client";

import { useState, useEffect } from "react";
import { Publication } from "@/types";
import {
  getPublications,
  addPublication,
  updatePublication,
  deletePublication,
} from "@/lib/storage";
import Button from "@/components/Button";
import Modal from "@/components/Modal";

export default function PublikasiPage() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"tulisan" | "laporan">("tulisan");
  const [formData, setFormData] = useState<{
    title: string;
    category: "tulisan" | "laporan";
    author: string;
    description: string;
    link: string;
    date: string;
    order: number;
  }>({
    title: "",
    category: "tulisan",
    author: "",
    description: "",
    link: "",
    date: new Date().toISOString().split("T")[0],
    order: 1,
  });

  useEffect(() => {
    setPublications(getPublications());
  }, []);

  const filteredPublications = publications.filter(
    (p) => p.category === activeTab
  );

  const handleOpenModal = (publication?: Publication) => {
    if (publication) {
      setEditingId(publication.id);
      setFormData({
        title: publication.title,
        category: publication.category,
        author: publication.author,
        description: publication.description,
        link: publication.link || "",
        date: publication.date,
        order: publication.order,
      });
    } else {
      setEditingId(null);
      setFormData({
        title: "",
        category: activeTab,
        author: "",
        description: "",
        link: "",
        date: new Date().toISOString().split("T")[0],
        order: publications.length + 1,
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      updatePublication(editingId, formData);
    } else {
      addPublication(formData);
    }
    setPublications(getPublications());
    handleCloseModal();
  };

  const handleDelete = (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus publikasi ini?")) {
      deletePublication(id);
      setPublications(getPublications());
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "order" ? parseInt(value) : name === "category"
          ? (value as "tulisan" | "laporan")
          : value,
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Publikasi</h1>
          <p className="text-gray-600 mt-1">Kelola publikasi tulisan dan laporan</p>
        </div>
        <Button onClick={() => handleOpenModal()}>+ Tambah Publikasi</Button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b">
        <button
          onClick={() => setActiveTab("tulisan")}
          className={`px-4 py-2 border-b-2 font-medium transition-colors ${
            activeTab === "tulisan"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          Publikasi Tulisan ({publications.filter((p) => p.category === "tulisan").length})
        </button>
        <button
          onClick={() => setActiveTab("laporan")}
          className={`px-4 py-2 border-b-2 font-medium transition-colors ${
            activeTab === "laporan"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          Publikasi Laporan ({publications.filter((p) => p.category === "laporan").length})
        </button>
      </div>

      {/* Tabel Publikasi */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {filteredPublications.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <p className="mb-4">Belum ada publikasi {activeTab}</p>
            <Button onClick={() => handleOpenModal()}>Tambah Publikasi Pertama</Button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    No
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Judul
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Penulis
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Tanggal
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredPublications.map((publication, index) => (
                  <tr key={publication.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {publication.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {publication.author}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(publication.date).toLocaleDateString("id-ID")}
                    </td>
                    <td className="px-6 py-4 text-center space-x-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleOpenModal(publication)}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => handleDelete(publication.id)}
                      >
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

      {/* Modal Form */}
      <Modal
        isOpen={isModalOpen}
        title={editingId ? "Edit Publikasi" : "Tambah Publikasi"}
        onClose={handleCloseModal}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Judul
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Masukkan judul publikasi"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Kategori
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="tulisan">Tulisan</option>
              <option value="laporan">Laporan</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Penulis
            </label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              placeholder="Masukkan nama penulis"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Deskripsi
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Masukkan deskripsi publikasi"
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Link (Opsional)
            </label>
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleInputChange}
              placeholder="https://example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Tanggal
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Urutan
              </label>
              <input
                type="number"
                name="order"
                value={formData.order}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1">
              {editingId ? "Update" : "Tambah"}
            </Button>
            <Button
              type="button"
              variant="secondary"
              className="flex-1"
              onClick={handleCloseModal}
            >
              Batal
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
