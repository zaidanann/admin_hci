# SATGAS PPKPT - Admin & Public Website

Sistem manajemen website untuk SATGAS PPKPT (Tim Satuan Tugas Pencegahan dan Penanganan Kekerasan) Universitas Paramedina. Aplikasi ini menyediakan halaman publik dan admin panel untuk mengelola struktur organisasi dan publikasi.

## 🎯 Fitur Utama

### 👥 Halaman Publik (User View)
- **Homepage**: Menampilkan struktur organisasi dan publikasi
- **Struktur Organisasi**: Visualisasi hirarki organisasi (Ketua, Tim Utama, Staff)
- **Publikasi**: Daftar tulisan dan laporan dengan kategori terpisah
- **Responsive Design**: Optimal di desktop, tablet, dan mobile

### 🎛️ Admin Panel
- **Dashboard**: Overview statistik
- **Manajemen Organisasi**: CRUD lengkap untuk anggota
- **Manajemen Publikasi**: CRUD lengkap untuk publikasi
- **Sidebar Navigation**: Navigasi mudah antar halaman
- **Modal Forms**: Form untuk create/edit data

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Instalasi

```bash
# Clone atau download project
cd admin_hci

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Akses Admin Panel
- Klik tombol "Admin Panel" di header halaman utama
- Atau langsung ke: http://localhost:3000/admin

## 📁 Struktur Project

```
src/
├── app/
│   ├── admin/                  # Layout & halaman admin
│   │   ├── page.tsx           # Dashboard
│   │   ├── organisasi/        # Manajemen organisasi
│   │   ├── publikasi/         # Manajemen publikasi
│   │   └── layout.tsx         # Admin layout dengan sidebar
│   ├── page.tsx               # Halaman utama (public)
│   ├── layout.tsx             # Root layout
│   └── globals.css            # Global styles
├── components/
│   ├── Sidebar.tsx            # Navigation sidebar
│   ├── Button.tsx             # Custom button component
│   └── Modal.tsx              # Modal dialog
├── lib/
│   ├── storage.ts             # Data storage & CRUD operations
│   ├── exampleData.ts         # Data contoh
│   └── devUtils.ts            # Utility functions untuk development
└── types/
    └── index.ts               # TypeScript type definitions
```

## 📊 Fitur CRUD

### ✅ Organisasi (Create, Read, Update, Delete)
- **CREATE**: Tambah anggota baru dengan form modal
- **READ**: Lihat daftar semua anggota dalam tabel
- **UPDATE**: Edit data anggota yang sudah ada
- **DELETE**: Hapus anggota dari sistem

Data organisasi ditampilkan di halaman publik sesuai level (Level 1, 2, 3).

### ✅ Publikasi (Create, Read, Update, Delete)
- **CREATE**: Tambah publikasi baru (Tulisan atau Laporan)
- **READ**: Lihat publikasi dengan filter kategori
- **UPDATE**: Edit data publikasi
- **DELETE**: Hapus publikasi

Publikasi ditampilkan di halaman publik dalam grid 3 kolom per kategori.

## 💾 Data Storage

Saat ini menggunakan **localStorage** browser:
- ✅ Tidak perlu setup database
- ✅ Data persisten antar session
- ⚠️ Data hanya tersimpan di browser ini
- ⚠️ Akan hilang jika cache browser dihapus

### Upgrade ke Database
Untuk production, implementasikan database dengan:
1. Modifikasi `src/lib/storage.ts`
2. Buat API routes di `src/app/api/`
3. Setup backend database (MongoDB, PostgreSQL, dll)

## 🎨 Teknologi

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Storage**: localStorage (bisa upgrade ke database)

## 📝 Dokumentasi

Lihat file dokumentasi untuk detail lebih lanjut:

- **[ADMIN_GUIDE.md](./ADMIN_GUIDE.md)** - Dokumentasi teknis & struktur kode
- **[USER_GUIDE.md](./USER_GUIDE.md)** - Panduan penggunaan admin panel

## 🛠️ Development

### Run Development Server
```bash
npm run dev
```
Server berjalan di http://localhost:3000

### Build untuk Production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 🧪 Testing & Utilities

Di browser console Anda bisa menggunakan:

```javascript
// Reset semua data ke default
resetAllData()

// Export data ke JSON file
exportData()

// Lihat statistik data
showStats()

// Hapus semua localStorage
clearAllStorage()
```

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔐 Security Notes

Untuk production deployment:
- [ ] Implementasikan authentication/authorization
- [ ] Gunakan database yang aman (MongoDB Atlas, PostgreSQL, dll)
- [ ] Validasi input di backend
- [ ] Implement rate limiting untuk API
- [ ] Setup HTTPS/SSL
- [ ] Environment variables untuk config sensitif
- [ ] CORS configuration
- [ ] Input sanitization

## 📦 Build Output

```bash
# Build project
npm run build

# File output ada di .next/ folder
# Ukuran optimized untuk production
```

## 🚨 Troubleshooting

### Port 3000 sudah terpakai
```bash
npm run dev -- -p 3001
```

### Data tidak tersimpan
- Pastikan localStorage tidak diblokir di browser settings
- Cek apakah menggunakan private/incognito mode
- Clear browser cache dan coba lagi

### Style tidak muncul
```bash
# Rebuild Tailwind
rm -rf .next
npm run dev
```

### Module not found errors
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📞 Kontak & Support

**SATGAS PPKPT - Universitas Paramedina**
- Email: satgas.ppkpt@paramedina.ac.id
- Alamat: Cipondoh, Jakarta Timur

## 📄 License

Project ini dibuat khusus untuk SATGAS PPKPT Universitas Paramedina.

## 🎓 Tech Stack Summary

| Aspek | Technology |
|-------|-----------|
| Framework | Next.js 16 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Runtime | Node.js 18+ |
| Package Manager | npm |
| Storage | localStorage |
| UI Components | Custom React Components |

---

**Made with ❤️ for SATGAS PPKPT Universitas Paramedina**

Last Updated: January 2025
Version: 1.0.0
