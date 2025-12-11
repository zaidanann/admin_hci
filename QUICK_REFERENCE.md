# ⌨️ Quick Reference - Tips & Tricks

## 🖱️ Keyboard Shortcuts

| Shortcut | Fungsi |
|----------|--------|
| `F5` atau `Ctrl+R` | Refresh halaman |
| `Ctrl+Shift+Del` | Buka Clear Cache |
| `F12` | Buka Developer Tools |
| `Ctrl+Shift+I` | Inspect Element |
| `Ctrl+Shift+J` | Buka Console |
| `Tab` | Navigate antar form field |
| `Enter` | Submit form / Click button |
| `Esc` | Close modal |

## 🎨 Browser Developer Tools Tips

### Console Utilities (Ketik di Console)
```javascript
// Reset data ke default
resetAllData()

// Export semua data
exportData()

// Lihat statistik
showStats()

// Hapus data
clearAllStorage()

// Import data (copy JSON di atas)
importData(`{"exportDate":"...","members":[...],"publications":[...]}`)
```

### Local Storage Inspector
1. Buka DevTools (F12)
2. Pergi ke "Application" tab
3. Klik "Local Storage"
4. Lihat keys: `org_members` dan `publications`

## 🎯 Admin Panel Navigation

```
http://localhost:3000/
├── /admin (Dashboard)
├── /admin/organisasi (Manajemen Organisasi)
└── /admin/publikasi (Manajemen Publikasi)
```

## 📝 Form Input Best Practices

### Untuk Organisasi

**Nama Lengkap Format**
```
Nama, Gelar Pendidikan, Spesialisasi
Contoh: Tia Rahmania, M.Psi, Psikologi
```

**Posisi**
```
Ketua, Sekretaris, Riset Pengembangan, dll
```

**Pendidikan**
```
S.Psi, M.Psi, S.H, S.Sos, S.Pd, Dr., dll
```

**Level**
```
1 = Ketua & Sekretaris (Top)
2 = Kepala Divisi / Tim Utama
3 = Staff Regular
```

### Untuk Publikasi

**Judul** - Jelas dan deskriptif
```
❌ "Tulisan"
✅ "Panduan Pelaporan Kasus untuk Korban Kekerasan"
```

**Deskripsi** - Ringkasan singkat 1-2 kalimat
```
"Materi edukasi untuk meningkatkan kesadaran mahasiswa 
tentang pencegahan kekerasan di kampus"
```

**Link** - URL lengkap dengan protocol
```
❌ "example.com/file"
✅ "https://example.com/file.pdf"
```

**Tanggal** - Format YYYY-MM-DD
```
❌ "01/15/2025"
❌ "15 Jan 2025"
✅ "2025-01-15"
```

## 🐛 Troubleshooting Tips

### Data tidak muncul setelah edit
**Solusi:**
1. Refresh browser: `Ctrl+F5` (hard refresh)
2. Clear cache: `Ctrl+Shift+Del`
3. Cek console untuk error: `F12 → Console`

### Form tidak bisa submit
**Solusi:**
1. Pastikan semua field required sudah diisi
2. Pastikan format input benar
3. Cek browser console untuk error details
4. Refresh halaman dan coba lagi

### Data hilang
**Solusi:**
1. Cek apakah menggunakan private/incognito mode
2. Cek browser storage settings
3. Gunakan `exportData()` untuk backup
4. Restart browser dan cek lagi

### Tombol tidak responsif
**Solusi:**
1. Refresh halaman
2. Clear browser cache
3. Cek koneksi internet
4. Cek console untuk error

## 📊 Data Management Tips

### Backup Data Regular
```javascript
// Di browser console
exportData()
// File akan download otomatis
```

### Restore Data
```javascript
// Copy JSON file content
// Paste di sini:
importData('{...paste JSON here...}')
```

### Reset ke Default
```javascript
resetAllData()
// Hanya gunakan jika benar-benar perlu reset
```

## 🎨 Design Guidelines

### Warna Tema
- **Primary**: Blue (`#0066CC` / `bg-blue-600`)
- **Dark**: Dark Blue (`#003366` / `bg-blue-900`)
- **Light**: Light Blue (`#E6F2FF` / `bg-blue-50`)
- **Danger**: Red (`#DC2626` / `bg-red-600`)

### Spacing
- Small: `4px` (p-1)
- Medium: `8px` (p-2)
- Large: `16px` (p-4)
- Extra Large: `32px` (p-8)

### Border Radius
- Small: `4px` (rounded)
- Medium: `8px` (rounded-lg)
- Large: `12px` (rounded-xl)

### Typography
- Heading 1: `text-4xl font-bold`
- Heading 2: `text-2xl font-bold`
- Heading 3: `text-xl font-bold`
- Body: `text-base`
- Small: `text-sm`

## 📱 Responsive Breakpoints

| Breakpoint | Size | Device |
|-----------|------|--------|
| Mobile | 320px-767px | Smartphone |
| Tablet | 768px-1023px | Tablet |
| Desktop | 1024px+ | Desktop |

## 🔗 Useful Links

- 📖 [Next.js Docs](https://nextjs.org/docs)
- 🎨 [Tailwind CSS Docs](https://tailwindcss.com/docs)
- 📘 [TypeScript Docs](https://www.typescriptlang.org/docs)
- 🚀 [React Docs](https://react.dev)

## 💡 Best Practices

### Untuk Admin Users
- 📌 Backup data secara regular
- ✍️ Input data dengan teliti
- 🔄 Jangan hapus data tanpa konfirmasi
- 🔗 Verifikasi link publikasi sebelum simpan
- 📅 Gunakan format tanggal konsisten

### Untuk Developers
- 🔍 Selalu check TypeScript errors
- 🧪 Test di berbagai browser
- 📱 Test responsivitas di mobile
- 💾 Backup kode sebelum push
- 📝 Update dokumentasi jika ada perubahan

## 🚀 Performance Tips

### Optimasi Browser
- Clear cache regularly
- Use modern browser (Chrome, Edge, Firefox)
- Disable extensions jika slow
- Check RAM usage

### Optimasi Data
- Jangan simpan data terlalu banyak
- Gunakan short descriptions
- Avoid long URLs
- Regular cleanup

## 📞 Support & Help

Jika ada masalah:
1. Baca USER_GUIDE.md
2. Baca ADMIN_GUIDE.md
3. Cek FEATURES_CHECKLIST.md
4. Hubungi: satgas.ppkpt@paramedina.ac.id

---

**Happy Managing! 🎉**
