# PPKPT Admin Dashboard

Sistem manajemen admin untuk mengelola struktur organisasi dan publikasi SATGAS PPKPT Universitas Paramedina.

## 📋 Fitur Utama

### 1. **Dashboard Admin**
- Overview statistik jumlah anggota dan publikasi
- Navigasi cepat ke halaman manajemen

### 2. **Manajemen Struktur Organisasi**
- ✅ **CREATE** - Tambah anggota organisasi baru
- ✅ **READ** - Lihat daftar semua anggota
- ✅ **UPDATE** - Edit data anggota
- ✅ **DELETE** - Hapus anggota dari organisasi

Fitur tambahan:
- Pengorganisasian berdasarkan level (Ketua, Sekretaris, Staff)
- Informasi posisi, pendidikan, dan divisi
- Urutan tampilan yang dapat disesuaikan

### 3. **Manajemen Publikasi**
- ✅ **CREATE** - Tambah publikasi tulisan atau laporan
- ✅ **READ** - Lihat daftar publikasi
- ✅ **UPDATE** - Edit data publikasi
- ✅ **DELETE** - Hapus publikasi

Fitur tambahan:
- Kategori publikasi (Tulisan / Laporan)
- Informasi penulis, tanggal, dan deskripsi
- Link eksternal untuk akses lengkap
- Filter berdasarkan kategori

## 🚀 Quick Start

### Instalasi Dependensi
```bash
npm install
```

### Menjalankan Development Server
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

### Build untuk Production
```bash
npm run build
npm run start
```

## 📁 Struktur Folder

```
src/
├── app/
│   ├── admin/                          # Layout admin
│   │   ├── page.tsx                    # Dashboard admin
│   │   ├── organisasi/
│   │   │   └── page.tsx                # Manajemen organisasi
│   │   ├── publikasi/
│   │   │   └── page.tsx                # Manajemen publikasi
│   │   └── layout.tsx                  # Layout dengan sidebar
│   ├── page.tsx                        # Halaman utama (user view)
│   ├── layout.tsx                      # Root layout
│   └── globals.css                     # Global styles
├── components/                         # Komponen reusable
│   ├── Sidebar.tsx                     # Navigation sidebar
│   ├── Button.tsx                      # Reusable button component
│   └── Modal.tsx                       # Modal dialog component
├── lib/
│   └── storage.ts                      # Data storage & CRUD functions
└── types/
    └── index.ts                        # Type definitions
```

## 🗂️ Tipe Data

### OrganizationMember
```typescript
{
  id: string;                    // Unique identifier
  name: string;                  // Nama lengkap
  position: string;              // Posisi (Ketua, Sekretaris, dll)
  education: string;             // Pendidikan (S.Psi, M.Psi, dll)
  level: number;                 // 1 = Top, 2 = Middle, 3 = Staff
  department: string;            // Divisi/Departemen
  order: number;                 // Urutan tampilan
}
```

### Publication
```typescript
{
  id: string;                    // Unique identifier
  title: string;                 // Judul publikasi
  category: "tulisan" | "laporan"; // Kategori
  author: string;                // Nama penulis
  description: string;           // Deskripsi
  link?: string;                 // URL (opsional)
  date: string;                  // Tanggal publikasi (YYYY-MM-DD)
  order: number;                 // Urutan tampilan
}
```

## 🔄 Alur Kerja CRUD

### Organisasi

**CREATE (Tambah Anggota)**
1. Klik tombol "Tambah Anggota" di halaman organisasi
2. Isi form dengan data lengkap
3. Klik "Tambah"

**READ (Lihat Data)**
- Data ditampilkan otomatis di tabel
- Data tersimpan di localStorage browser

**UPDATE (Edit Anggota)**
1. Klik tombol "Edit" pada baris anggota
2. Form akan terisi dengan data saat ini
3. Ubah data yang diperlukan
4. Klik "Update"

**DELETE (Hapus Anggota)**
1. Klik tombol "Hapus" pada baris anggota
2. Konfirmasi penghapusan
3. Data akan dihapus

### Publikasi

Proses yang sama dengan organisasi, dengan tambahan:
- Pilih kategori (Tulisan atau Laporan)
- Tab untuk filter berdasarkan kategori

## 💾 Penyimpanan Data

Saat ini menggunakan **localStorage** browser untuk penyimpanan data. Data akan tersimpan di browser dan persisten selama cache tidak dihapus.

### Upgrade ke Database
Untuk upgrade ke database sesungguhnya (MongoDB, PostgreSQL, dll):

1. Modifikasi file `src/lib/storage.ts`
2. Ganti fungsi localStorage dengan API calls
3. Buat API routes di `src/app/api/`
4. Implementasikan backend database

Contoh structure untuk API:
```
src/app/api/
├── organisasi/
│   ├── route.ts         # GET all, POST create
│   └── [id]/
│       └── route.ts     # GET one, PUT update, DELETE
└── publikasi/
    ├── route.ts
    └── [id]/
        └── route.ts
```

## 🎨 Styling

Menggunakan **Tailwind CSS v4** untuk styling. Konfigurasi ada di:
- `tailwind.config.ts` - Konfigurasi tema
- `src/app/globals.css` - Global styles
- `postcss.config.mjs` - PostCSS config

## 🔒 Keamanan

Untuk production:
1. Implementasikan authentication/authorization
2. Gunakan database yang aman
3. Validasi input di backend
4. Implement rate limiting
5. Setup HTTPS

## 📱 Responsive Design

Aplikasi dioptimalkan untuk:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

## 🆘 Troubleshooting

### Data tidak tersimpan
- Pastikan localStorage tidak diblokir di browser
- Cek console untuk error messages

### Halaman admin tidak bisa diakses
- Pastikan sudah di http://localhost:3000/admin
- Clear browser cache jika perlu

### Style tidak muncul
- Rebuild project: `npm run dev`
- Clear Tailwind cache: `rm -rf .next`

## 📝 Catatan

- Data menggunakan localStorage, akan hilang jika cache browser dihapus
- Untuk production, gunakan database yang proper
- Tambahkan authentication untuk keamanan
- Backup data secara berkala

## 🚀 Fitur Mendatang (TODO)

- [ ] Authentication & Authorization
- [ ] Database integration
- [ ] Image upload untuk publikasi
- [ ] Export data ke PDF/Excel
- [ ] Analytics dashboard
- [ ] Email notifications
- [ ] Multi-language support
- [ ] Dark mode

## 📞 Support

Untuk pertanyaan atau issue, hubungi: satgas.ppkpt@paramedina.ac.id

---

**Made with ❤️ for SATGAS PPKPT Universitas Paramedina**
