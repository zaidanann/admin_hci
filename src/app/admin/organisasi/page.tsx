"use client";

import { useState, useEffect } from "react";
import { OrganizationMember } from "@/types";
import {
  getMembers,
  addMember,
  updateMember,
  deleteMember,
} from "@/lib/storage";
import Button from "@/components/Button";
import Modal from "@/components/Modal";

export default function OrganisasiPage() {
  const [members, setMembers] = useState<OrganizationMember[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    education: "",
    level: 1,
    department: "",
    order: 1,
  });

  useEffect(() => {
    setMembers(getMembers());
  }, []);

  const handleOpenModal = (member?: OrganizationMember) => {
    if (member) {
      setEditingId(member.id);
      setFormData({
        name: member.name,
        position: member.position,
        education: member.education,
        level: member.level,
        department: member.department,
        order: member.order,
      });
    } else {
      setEditingId(null);
      setFormData({
        name: "",
        position: "",
        education: "",
        level: 1,
        department: "",
        order: members.length + 1,
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
      updateMember(editingId, formData);
    } else {
      addMember(formData);
    }
    setMembers(getMembers());
    handleCloseModal();
  };

  const handleDelete = (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus anggota ini?")) {
      deleteMember(id);
      setMembers(getMembers());
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "level" || name === "order" ? parseInt(value) : value,
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Struktur Organisasi</h1>
          <p className="text-gray-600 mt-1">Kelola anggota organisasi</p>
        </div>
        <Button onClick={() => handleOpenModal()}>+ Tambah Anggota</Button>
      </div>

      {/* Tabel Anggota */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {members.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <p className="mb-4">Belum ada anggota organisasi</p>
            <Button onClick={() => handleOpenModal()}>Tambah Anggota Pertama</Button>
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
                    Nama
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Posisi
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Pendidikan
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Divisi
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {members.map((member, index) => (
                  <tr key={member.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                      {member.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {member.position}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {member.education}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {member.department}
                    </td>
                    <td className="px-6 py-4 text-center space-x-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleOpenModal(member)}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => handleDelete(member.id)}
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
        title={editingId ? "Edit Anggota" : "Tambah Anggota"}
        onClose={handleCloseModal}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Masukkan nama lengkap"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Posisi
            </label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              placeholder="Contoh: Ketua, Sekretaris"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Pendidikan
            </label>
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleInputChange}
              placeholder="Contoh: S.Psi, M.Psi"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Divisi
            </label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              placeholder="Contoh: Leadership, Rehabilitas"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Level
              </label>
              <select
                name="level"
                value={formData.level}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value={1}>Level 1 (Top)</option>
                <option value={2}>Level 2</option>
                <option value={3}>Level 3</option>
              </select>
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
