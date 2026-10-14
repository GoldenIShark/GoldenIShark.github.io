# Pusat catatan AD Sharks Studio

Folder `list/` menyimpan data dokumentasi dalam JSON. Halaman [Pusat Catatan](../../note.html)
membaca katalog di `index.json`, menampilkan kartu daftar, dan membuka isi catatan
menggunakan JavaScript. Gunakan server statis lokal atau GitHub Pages; halaman
mengambil data dengan `fetch()` sehingga pembukaan langsung melalui `file://`
tidak didukung.

## Struktur data

| Berkas | Kegunaan |
| --- | --- |
| [index.json](../../list/index.json) | Katalog judul, kategori, deskripsi, dan path setiap catatan yang dapat dibuka. |
| [daftar-fitur.json](../../list/daftar-fitur.json) | Inventaris fitur dan catatan pengujiannya. |
| [daftar-masalah.json](../../list/daftar-masalah.json) | Masalah terverifikasi dan dugaan yang perlu diperiksa. |
| [daftar-pelanggan.json](../../list/daftar-pelanggan.json) | Kebijakan privasi, status, dan format pencatatan pelanggan. |
| [daftar-proyek.json](../../list/daftar-proyek.json) | Website internal serta proyek demo/portofolio yang diketahui. |
| [daftar-rencana.json](../../list/daftar-rencana.json) | Tujuan, prioritas, status, langkah, ketergantungan, dan hasil rencana. |
| [daftar-revisi.json](../../list/daftar-revisi.json) | Aturan revisi satuan berbayar dan format log revisi. |
| [rangkuman-skill.json](../../list/rangkuman-skill.json) | Skill, teknologi, pustaka, template, dan alat yang dipertimbangkan. |
| [arsip/README.md](./arsip/README.md) | Aturan pengarsipan catatan historis yang tidak lagi aktif. |

## Membuka dan menambah catatan

1. Buka `note.html` melalui GitHub Pages atau server lokal yang melayani root
   repository.
2. Untuk menambah daftar, buat file JSON dengan ID unik huruf kecil/kebab-case,
   metadata `id`, `title`, `category`, `description`, dan `sections`, lalu
   tambahkan metadata beserta path file yang benar ke `list/index.json`.
3. Gunakan struktur `sections` dengan `title`, serta bila diperlukan
   `description`, `paragraphs`, `lists`, `fields`, dan `items`. Item dapat
   memiliki `id`, `title`, `status`, `priority`, dan properti deskriptif lain.
   Halaman menampilkan isi sebagai teks, daftar, label, dan kartu; JSON tidak
   ditampilkan mentah.
4. Validasi semua file dengan parser JSON dan pastikan ID catatan cocok antara
   katalog serta file data. Path katalog harus mengarah ke `list/<id>.json`.
5. Pertahankan isi historis, ID lintas catatan, status, tanggal, dan keterangan
   yang masih relevan. Jangan mengubah status hanya karena rencana dicatat.

## Privasi dan akurasi

GitHub Pages menyajikan file sebagai konten publik. Halaman yang tidak tertaut
tetap dapat diakses jika URL atau path diketahui. Jangan menyimpan nama/kontak
pelanggan, alamat, kata sandi, token, API key, rahasia, atau rincian pembayaran
sensitif dalam file JSON publik. Data administrasi yang perlu dibatasi harus
disimpan di lokasi privat yang tidak diterbitkan oleh repository/hosting.

Jangan membuat data pelanggan, harga, tenggat, persetujuan, pembayaran, hasil
pengujian, tautan demo, atau fakta lain. Gunakan nilai kosong/null atau
“Belum diketahui” jika informasinya belum tersedia. Bedakan inspeksi source
dari uji runtime. Revisi awal menggunakan satuan berbayar dengan cakupan, harga,
dan estimasi yang disepakati sebelum mulai; token revisi dan portal login
pelanggan tetap rencana masa depan, bukan fitur aktif.

Jangan menambah framework, library, atau dependensi ke website tanpa evaluasi
kompatibilitas, ukuran, keamanan, dan kebutuhan aktual serta persetujuan.
Simpan catatan lama yang masih bermakna menggunakan aturan di `arsip/README.md`.
