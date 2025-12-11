# Panduan Menggunakan Admin Panel PPKPT

## 🔑 Akses Admin Panel

1. Buka aplikasi di browser: `http://localhost:3000`
2. Klik tombol "Admin Panel" di header
3. Atau langsung ke: `http://localhost:3000/admin`

## 📊 Dashboard Admin

Menampilkan:
- Total anggota organisasi
- Total publikasi
- Quick links ke halaman manajemen

## 👥 Mengelola Struktur Organisasi

### Melihat Daftar Anggota
- Halaman menampilkan semua anggota dalam bentuk tabel
- Kolom: No, Nama, Posisi, Pendidikan, Divisi, Aksi

### Menambah Anggota Baru
1. Klik tombol **"+ Tambah Anggota"**
2. Isi form dengan data:
   - **Nama Lengkap**: Nama lengkap dengan gelar (contoh: "Tia Rahmania, M.Psi")
   - **Posisi**: Posisi dalam organisasi (contoh: "Ketua", "Sekretaris")
   - **Pendidikan**: Gelar pendidikan (contoh: "S.Psi", "M.Psi", "S.Pd")
   - **Divisi**: Divisi/departemen tempat bekerja
   - **Level**: 
     - Level 1 = Ketua & Sekretaris (di atas)
     - Level 2 = Tim Utama/Kepala Divisi
     - Level 3 = Staff
   - **Urutan**: Nomor urutan tampilan (1, 2, 3, dst)
3. Klik **"Tambah"**
4. Data akan tersimpan dan muncul di tabel

### Mengedit Data Anggota
1. Cari anggota di tabel
2. Klik tombol **"Edit"** pada baris tersebut
3. Modal akan terbuka dengan data terisi
4. Ubah data yang diperlukan
5. Klik **"Update"** untuk menyimpan

### Menghapus Anggota
1. Cari anggota di tabel
2. Klik tombol **"Hapus"** pada baris tersebut
3. Konfirmasi penghapusan dengan klik "OK"
4. Anggota akan dihapus dari sistem

⚠️ **Catatan**: Penghapusan tidak bisa dibatalkan, data akan hilang permanen.

## 📄 Mengelola Publikasi

### Melihat Publikasi
- Ada dua tab: **Publikasi Tulisan** dan **Publikasi Laporan**
- Klik tab untuk melihat publikasi sesuai kategori
- Tabel menampilkan: No, Judul, Penulis, Tanggal, Aksi

### Menambah Publikasi
1. Klik tombol **"+ Tambah Publikasi"**
2. Isi form dengan data:
   - **Judul**: Judul publikasi
   - **Kategori**: Pilih "Tulisan" atau "Laporan"
   - **Penulis**: Nama penulis/institusi
   - **Deskripsi**: Deskripsi atau ringkasan isi (lebih baik detail)
   - **Link** (Opsional): URL untuk akses full text
   - **Tanggal**: Tanggal publikasi (YYYY-MM-DD)
   - **Urutan**: Nomor urutan tampilan
3. Klik **"Tambah"**

### Mengedit Publikasi
1. Pilih tab kategori yang sesuai
2. Cari publikasi di tabel
3. Klik tombol **"Edit"**
4. Ubah data yang diperlukan
5. Klik **"Update"**

### Menghapus Publikasi
1. Cari publikasi di tabel
2. Klik tombol **"Hapus"**
3. Konfirmasi penghapusan
4. Publikasi akan dihapus

## 👀 Melihat Hasil di Halaman Utama

Setelah menambah/mengedit data:

1. Buka halaman utama: `http://localhost:3000`
2. Data organisasi akan ditampilkan dalam struktur organisasi
3. Data publikasi akan ditampilkan di bagian publikasi

**Catatan**: Mungkin perlu refresh halaman untuk melihat perubahan terbaru (F5 atau Ctrl+R)

## 💾 Penyimpanan Data

- Data disimpan secara **otomatis** di localStorage browser
- Data akan tetap ada meski browser ditutup
- Data akan hilang jika:
  - Cache browser dihapus
  - Gunakan mode Incognito/Private
  - Browser settings dihapus

## 🎨 Tata Letak Organisasi di Halaman Utama

Data ditampilkan sesuai level:

```
Level 1 (Top): Ketua & Sekretaris
    ↓
Level 2 (Middle): Tim Utama/Kepala Divisi (grid 4 kolom)
    ↓
Level 3 (Bottom): Staff (grid 4 kolom)
```

## 📱 Responsive Design

- **Desktop**: Tampilan optimal di desktop
- **Tablet**: Menyesuaikan dengan ukuran tablet
- **Mobile**: Responsif di smartphone (tabel bisa discroll)

## ❓ Tips & Trik

1. **Urutan Tampilan**: Gunakan nomor yang konsisten agar mudah diatur ulang. Contoh: 1, 2, 3, 4 (bukan 10, 20, 30)

2. **Format Nama**: Untuk nama dengan gelar, gunakan format:
   - "Nama, Gelar Pendidikan, Spesialisasi"
   - Contoh: "Tia Rahmania, M.Psi, Psikologi"

3. **Deskripsi Publikasi**: Semakin detail deskripsi, semakin menarik di halaman utama

4. **Link Publikasi**: Pastikan URL valid dan berfungsi dengan baik sebelum disimpan

5. **Kategori Publikasi**: 
   - **Tulisan**: Artikel, makalah, panduan
   - **Laporan**: Laporan kinerja, evaluasi, dokumentasi kegiatan

## 🆘 Troubleshooting

### Data tidak muncul di halaman utama
- Refresh halaman dengan Ctrl+F5 (hard refresh)
- Pastikan data sudah disimpan di admin panel

### Form tidak bisa disubmit
- Pastikan semua field yang required sudah diisi
- Cek console browser untuk error details (F12 → Console)

### Data hilang setelah tutup browser
- Periksa apakah browser menggunakan private/incognito mode
- Cek pengaturan cache dan cookie browser

### Button tidak responsif
- Refresh halaman
- Cek koneksi internet
- Bersihkan cache browser (Ctrl+Shift+Del)

---

**Perlu bantuan lebih lanjut? Hubungi: satgas.ppkpt@paramedina.ac.id**
