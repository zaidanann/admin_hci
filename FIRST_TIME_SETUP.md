# ✅ FIRST TIME SETUP CHECKLIST

Ikuti checklist ini saat pertama kali menggunakan PPKPT Admin Panel.

## 📋 Pre-Installation

- [ ] Pastikan Node.js 18+ sudah terinstall
  ```bash
  node --version  # Harus 18.x atau lebih tinggi
  ```

- [ ] Pastikan npm terinstall
  ```bash
  npm --version
  ```

- [ ] Clone/download project ke komputer

---

## 📦 Installation

### Step 1: Navigate to Project
```bash
cd admin_hci
```

### Step 2: Install Dependencies
```bash
npm install
```
⏱️ Waktu: ~2-3 menit (pertama kali)

**Expected output**: 
```
added XXX packages in Xs
```

### Step 3: Verify Installation
```bash
npm list next react typescript
```

Pastikan tidak ada error.

---

## 🚀 Running the Application

### Option A: Using npm (Recommended)
```bash
npm run dev
```

### Option B: Using Quick Start Script
**Windows:**
```bash
start.bat
```

**Linux/Mac:**
```bash
bash start.sh
```

⏱️ Waktu: ~15-30 detik untuk start

**Expected output:**
```
- Local:        http://localhost:3000
- Environments: .env.local
```

---

## 🌐 Accessing the Application

### Public Home Page
1. Open browser
2. Go to: **http://localhost:3000**
3. You should see the PPKPT homepage

### Admin Panel
1. Open browser
2. Go to: **http://localhost:3000/admin**
3. You should see the admin dashboard

---

## 📖 First Things to Do

### 1. Read Documentation
- [ ] Read **START_HERE.md** (5 min)
- [ ] Read **USER_GUIDE.md** (10 min) or **ADMIN_GUIDE.md** (15 min)

### 2. Explore the Interface
- [ ] Click around the public homepage
- [ ] Navigate the admin dashboard
- [ ] Check the sidebar menu

### 3. Test Create Function
- [ ] Go to Admin → Organisasi
- [ ] Click "+ Tambah Anggota"
- [ ] Fill in sample data
- [ ] Click "Tambah"
- [ ] Verify data appears in table

### 4. Test Read Function
- [ ] View the table with data
- [ ] Check that sorting works
- [ ] Go to public homepage and verify data displays

### 5. Test Update Function
- [ ] Go to Admin → Organisasi
- [ ] Find your sample data
- [ ] Click "Edit"
- [ ] Change something
- [ ] Click "Update"
- [ ] Verify changes in table

### 6. Test Delete Function
- [ ] Click "Hapus" on sample data
- [ ] Confirm deletion
- [ ] Verify data is removed

### 7. Test Publication Management
- [ ] Repeat steps 3-6 for Admin → Publikasi
- [ ] Test both "Tulisan" and "Laporan" categories

---

## 🛠️ Verification Checklist

### Browser Console (F12 → Console)
- [ ] No JavaScript errors
- [ ] No network errors
- [ ] Try running: `showStats()`

### Visual Inspection
- [ ] Pages load correctly
- [ ] Buttons are clickable
- [ ] Forms appear in modals
- [ ] Tables display properly
- [ ] Colors and layout look good

### Data Persistence
- [ ] Close browser
- [ ] Reopen to same URL
- [ ] Data should still be there

### Responsiveness
- [ ] [ ] Open DevTools (F12)
- [ ] [ ] Toggle device toolbar (Ctrl+Shift+M)
- [ ] [ ] Test mobile view (375px)
- [ ] [ ] Test tablet view (768px)
- [ ] [ ] Test desktop view (1920px)

---

## 💡 Useful Commands

### Stop Development Server
```bash
Ctrl + C  (in terminal)
```

### Restart Development Server
```bash
npm run dev
```

### Clear Node Modules & Reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build for Production
```bash
npm run build
npm start
```

### Run Linter
```bash
npm run lint
```

---

## 🔧 Troubleshooting First Setup Issues

### Issue: "npm not found"
**Solution**: Install Node.js from https://nodejs.org/

### Issue: "Port 3000 already in use"
**Solution**: 
```bash
npm run dev -- -p 3001
```
(uses port 3001 instead)

### Issue: "npm install fails"
**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Issue: "Can't access http://localhost:3000"
**Solution**:
1. Check if `npm run dev` is still running
2. Try refreshing browser (F5)
3. Try http://127.0.0.1:3000 instead
4. Check if another app uses port 3000

### Issue: "Styles not loading"
**Solution**:
```bash
rm -rf .next
npm run dev
```

### Issue: Data not appearing
**Solution**:
1. Hard refresh: Ctrl+F5
2. Clear cache: Ctrl+Shift+Del
3. Check console for errors: F12
4. Check localStorage: F12 → Application → Local Storage

---

## 📚 Documentation Path for First-Timers

**Just want to use it?**
```
START_HERE.md → USER_GUIDE.md → Start using!
```

**Want to understand code?**
```
START_HERE.md → README_PPKPT.md → PROJECT_ARCHITECTURE.md
```

**Need quick help?**
```
QUICK_REFERENCE.md
```

---

## 🎯 Success Indicators

You're all set when:
- ✅ npm install completed without errors
- ✅ npm run dev starts without errors
- ✅ http://localhost:3000 loads the homepage
- ✅ http://localhost:3000/admin shows dashboard
- ✅ Can add/edit/delete members
- ✅ Can add/edit/delete publications
- ✅ Public page displays the data
- ✅ All buttons are responsive
- ✅ No errors in browser console

---

## 🔐 Security Reminder

⚠️ **Important**: This application uses localStorage for storage.

For production use, you must:
- [ ] Add authentication
- [ ] Setup proper database
- [ ] Implement backend validation
- [ ] Enable HTTPS
- [ ] Add rate limiting

See **COMPLETION_REPORT.md** → Security Considerations section.

---

## 📞 Need Help?

### Self-Help Resources
1. Read **QUICK_REFERENCE.md**
2. Check troubleshooting section below
3. Open browser DevTools (F12)
4. Check console for error messages

### Contact Support
- Email: satgas.ppkpt@paramedina.ac.id
- Include error messages from console

---

## ✨ Next Steps After Setup

1. **Learn the system**
   - Read USER_GUIDE.md
   - Explore all features
   - Practice adding/editing data

2. **Customize data**
   - Add your organization members
   - Add your publications
   - Adjust information as needed

3. **Deploy** (future)
   - Setup production server
   - Configure database
   - Deploy to hosting

4. **Maintenance**
   - Regular backups
   - Monitor performance
   - Update content

---

## 📝 Setup Completion Form

Print this section and fill it out when done:

```
Project Name: PPKPT Admin Panel
Setup Date: _______________
Setup By: _______________

✅ All checks passed:   [ ] Yes  [ ] No
✅ App is running:      [ ] Yes  [ ] No
✅ Admin accessible:    [ ] Yes  [ ] No
✅ CRUD working:        [ ] Yes  [ ] No
✅ Public page shows:   [ ] Yes  [ ] No

Notes: _______________________________________________
```

---

## 🎊 You're Ready!

Congratulations! Your PPKPT Admin Panel is now:
- ✅ Installed
- ✅ Running
- ✅ Tested
- ✅ Ready to use

**Start by reading:**
- USER_GUIDE.md (if you want to use it)
- ADMIN_GUIDE.md (if you want to develop it)

**Questions?** Check START_HERE.md or INDEX.md

---

**Happy managing! 🚀**

Last updated: January 2025
