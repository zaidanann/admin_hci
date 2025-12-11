// Tipe untuk Struktur Organisasi
export interface OrganizationMember {
  id: string;
  name: string;
  position: string;
  education: string;
  level: number; // 1 = ketua, 2 = sekretaris, 3 = staff, dst
  department: string;
  order: number;
}

// Tipe untuk Publikasi
export interface Publication {
  id: string;
  title: string;
  category: "tulisan" | "laporan";
  author: string;
  description: string;
  link?: string;
  date: string;
  order: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

// Tipe untuk pengaduan (complaint)
export interface Complaint {
  id: string;
  reporterName: string;
  reporterContact?: string;
  reporterStatus?: string;
  victimName?: string;
  victimContact?: string;
  incidentDescription: string;
  incidentDate?: string;
  attachments?: string[]; // file URLs or names (if implemented later)
  status: "baru" | "diproses" | "selesai" | "ditolak";
  createdAt: string;
  updatedAt?: string;
}
