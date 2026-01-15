# Portfolio Melky Raham Ariyanto

Portfolio profesional lengkap untuk **Melky Raham Ariyanto, S.H.** - Junior Programmer bersertifikat BNSP.

## 📋 Fitur Utama

### 1. **Halaman Home (index.html)**
   - Hero section dengan introduction
   - About section
   - Skills showcase
   - Contact information
   - Responsive design

### 2. **Halaman CV (cv.html)**
   - CV profesional lengkap
   - Ringkasan profesional
   - Pengalaman kerja
   - Pendidikan
   - Keahlian teknis
   - Sertifikasi
   - Fitur cetak/simpan PDF

### 3. **Halaman Portfolio (portfolio.html)**
   - Showcase 6+ proyek
   - Filter berdasarkan kategori (Web, Mobile, Desktop)
   - Project cards dengan teknologi yang digunakan
   - Links ke live demo dan GitHub
   - Statistics section
   - CTA (Call to Action)

### 4. **Halaman Surat Lamaran (surat-lamaran.html)**
   - Surat lamaran kerja profesional
   - Template siap pakai dan dapat disesuaikan
   - Contact form untuk menerima pesan
   - Info kontak lengkap
   - Fitur cetak/download

## 🎨 Desain

- **Warna Utama**: Biru (#2563eb)
- **Font**: Segoe UI, Tahoma, Geneva, Verdana
- **Responsive**: Mobile, Tablet, Desktop
- **Modern & Professional**: Design yang clean dan modern

## 📁 Struktur Folder

```
portfolio melky/
├── index.html              # Halaman home
├── cv.html                 # Halaman CV
├── portfolio.html          # Halaman portfolio
├── surat-lamaran.html      # Halaman surat lamaran
│
├── css/
│   ├── style.css           # CSS global
│   ├── cv.css              # CSS untuk halaman CV
│   ├── portfolio.css       # CSS untuk halaman portfolio
│   └── surat-lamaran.css   # CSS untuk halaman surat lamaran
│
├── js/
│   ├── script.js           # JavaScript global
│   ├── portfolio.js        # Functionality portfolio filter
│   └── surat-lamaran.js    # Functionality form & surat
│
└── assets/                 # Folder untuk image/file (opsional)
```

## 🚀 Cara Menggunakan

### 1. Setup Awal
- Download/clone semua file ke folder `portofolio melky`
- Pastikan struktur folder sesuai dengan di atas

### 2. Membuka Portfolio
- Buka file `index.html` di browser
- Atau gunakan Live Server di VS Code untuk live reload

### 3. Navigasi
- Menu navbar untuk pindah antar halaman
- Semua halaman terintegrasi dengan baik

### 4. Customize Data
Edit file HTML sesuai dengan data pribadi Anda:

**Di cv.html:**
- Ganti email: `melky.ariyanto@email.com`
- Ganti nomor telepon: `+62 812-3456-7890`
- Update pengalaman kerja
- Update pendidikan
- Update sertifikasi

**Di surat-lamaran.html:**
- Update data biodata
- Customize isi surat sesuai posisi yang dilamar
- Update info kontak

**Di portfolio.html:**
- Ganti judul proyek
- Update deskripsi proyek
- Ganti teknologi yang digunakan
- Update links ke live demo dan GitHub

## 🎯 Tips Penggunaan

### Cetak/Download CV dan Surat Lamaran
1. Buka halaman CV atau Surat Lamaran
2. Klik tombol "Cetak / Simpan PDF"
3. Pilih "Simpan sebagai PDF" di print dialog

### Fitur Filter Portfolio
- Klik tombol kategori untuk filter proyek
- "Semua" untuk tampilkan semua proyek
- Filter otomatis bekerja dengan JavaScript

### Form Kontak
- Isi form di halaman Surat Lamaran
- Klik "Kirim Pesan" akan membuka email client default
- Alternatif: kirim langsung ke email yang tertera

## 📱 Responsiveness

Portfolio ini fully responsive untuk:
- 📱 Mobile (320px ke atas)
- 📱 Tablet (768px)
- 💻 Desktop (1200px ke atas)

## 🔧 Teknologi yang Digunakan

- **HTML5**: Struktur semantic
- **CSS3**: Styling dan responsive design
- **JavaScript**: Interaktivitas (filter, form validation)
- **No Framework**: Pure HTML/CSS/JS (mudah dikustomisasi)

## 📝 Customization Guide

### Mengubah Warna
Edit variabel CSS di `css/style.css`:
```css
:root {
    --primary-color: #2563eb;      /* Warna biru utama */
    --secondary-color: #1e40af;    /* Warna biru gelap */
    --accent-color: #f59e0b;       /* Warna accent */
    --dark-color: #1f2937;         /* Warna text dark */
}
```

### Menambah Proyek Portfolio
1. Edit `portfolio.html`
2. Copy template `.portfolio-card`
3. Ubah konten sesuai proyek baru
4. Tambahkan `data-category` yang sesuai

### Menambah Pengalaman Kerja
1. Edit `cv.html`
2. Copy template `.cv-item`
3. Sesuaikan dengan pengalaman baru

## ⚠️ Catatan Penting

1. **Update Data Pribadi**: Pastikan semua info sudah update
2. **Links**: Update semua links (LinkedIn, GitHub, email)
3. **Proyek**: Tambahkan proyek nyata dengan deskripsi detail
4. **Photo/Avatar**: Avatar default menggunakan inisial. Bisa ganti dengan foto jika perlu
5. **Domain/Hosting**: Siap untuk di-upload ke hosting atau GitHub Pages

## 🌐 Deploy ke GitHub Pages (Optional)

1. Buat repository `username.github.io`
2. Upload semua file ke repository
3. Repository akan otomatis deploy di `https://username.github.io`

Atau:
1. Buat repository `portofolio`
2. Settings → Pages → Deploy dari branch main
3. Akses di `https://username.github.io/portofolio`

## 📧 Kontak

- **Email**: melky.ariyanto@email.com
- **Phone**: +62 812-3456-7890
- **LinkedIn**: linkedin.com/in/melky
- **GitHub**: github.com/melky

## 📄 Lisensi

Portfolio ini gratis untuk digunakan dan dikustomisasi sesuai kebutuhan.

---

**Created for**: Melky Raham Ariyanto, S.H. - Junior Programmer, Certified BNSP
**Date**: January 5, 2026
