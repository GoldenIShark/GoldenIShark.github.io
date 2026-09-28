---
name: website-testing
description: "Gunakan saat memvalidasi halaman, layout, tautan, aset, navigasi, formulir, JavaScript, aksesibilitas dasar, atau memastikan tidak ada regresi setelah perubahan."
---

# Pengujian Website

## Rencana uji terarah
1. Hubungkan setiap perubahan dengan hasil yang diharapkan dan kemungkinan regresi.
2. Periksa hanya halaman dan perilaku yang terdampak, lalu uji alur kritis end-to-end yang relevan.
3. Jalankan validasi statis/sintaks yang tersedia tanpa menambah dependensi.
4. Jika tersedia, buka situs/pratinjau dan periksa console serta network untuk error baru.

## Daftar periksa
- Struktur halaman tampil; tidak ada teks terpotong, overflow horizontal, link rusak, atau aset hilang.
- Navigasi desktop/mobile bekerja, termasuk buka/tutup menu dan state aksesibelnya.
- CTA, tombol, tautan, form, validasi, status sukses/error, serta tujuan eksternal sesuai dengan harapan.
- Layout diuji setidaknya pada layar sempit, tablet, dan desktop; konten dan target sentuh tetap nyaman.
- Keyboard dapat mencapai kontrol dalam urutan wajar, fokus terlihat, heading/label jelas, dan gerak menghormati reduced motion bila terkait.
- Tidak ada perubahan tak sengaja pada halaman, file, atau interaksi di luar lingkup.

## Pelaporan
Bedakan pemeriksaan yang benar-benar dilakukan dari saran yang belum diuji. Catat browser/perangkat/viewport dan keterbatasan penting. Jika pemeriksaan gagal, laporkan reproduksi dan hasilnya; perbaiki regresi lingkup pekerjaan lalu jalankan ulang uji yang terdampak. Hindari klaim “semua berfungsi” dari pemeriksaan visual saja.
