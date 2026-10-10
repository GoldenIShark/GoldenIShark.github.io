# Daftar fitur

Status berikut didasarkan pada source code yang diperiksa di repository pada
**2026-10-10**. “Source diperiksa” tidak berarti alur sudah diuji langsung di
browser. Tidak ada fitur yang diklaim lulus uji runtime di dokumen ini.

## Tersedia — keberadaan diperiksa di source

| ID | Fitur | Deskripsi | Manfaat | Prioritas | Status | File terkait | Catatan pemeriksaan |
| --- | --- | --- | --- | --- | --- | --- | --- |
| FIT-001 | Halaman utama dan bagian layanan | Halaman utama statis memuat beranda, jasa, alasan memilih layanan, paket, portofolio, dan kontak. | Memberi pengunjung ringkasan layanan dan jalur informasi. | Tinggi | Tersedia di source | `index.html`, `style.css` | Struktur section dan tautan diperiksa; belum diuji seluruh interaksi. |
| FIT-002 | Navigasi utama responsif | Tombol menu mengubah kelas menu dan `aria-expanded`; tautan internal mengarah ke section. | Membantu menemukan bagian situs, khususnya layar sempit. | Tinggi | Tersedia di source | `index.html`, `style.css`, `script.js` | Ada markup, aturan layar kecil, dan handler; belum dilakukan uji keyboard/browser pada semua ukuran. |
| FIT-003 | Daftar proyek portofolio | Halaman utama menampilkan kartu proyek dan tautan menuju demo yang dirujuknya. | Memberi contoh tampilan proyek. | Sedang | Tersedia di source | `index.html`, `portofolio/` | Source mencantumkan empat kartu; target dan isi proyek tetap perlu diperiksa saat QA. |
| FIT-004 | Data dan tampilan paket | JavaScript memuat `data/packages.json`, merender kartu, dan menyediakan fallback jika pemuatan data gagal. | Menyajikan paket dan jalur pemesanan dari data terpisah. | Tinggi | Tersedia di source | `data/packages.json`, `script.js`, `index.html` | Nama, harga, estimasi, badge, dan daftar fitur ada pada data lokal; bukan verifikasi kesesuaian harga dengan kesepakatan bisnis. |
| FIT-005 | Pesan paket melalui WhatsApp | Handler membuat tautan `wa.me` dengan isi pesan berdasarkan paket. | Memudahkan calon pelanggan memulai konsultasi/pemesanan. | Tinggi | Tersedia di source | `script.js` | Tautan dan penyusunan pesan terlihat di source; alur aplikasi WhatsApp tidak dijalankan dalam pemeriksaan ini. |
| FIT-006 | Formulir Brief Website | Formulir mengumpulkan kebutuhan dan menyimpan/memulihkan draft melalui cookie browser dengan masa kedaluwarsa yang diinformasikan. | Memungkinkan pengunjung menyiapkan brief dan melanjutkan draft di browser yang sama. | Sedang | Tersedia di source | `brief.html`, `brief.js`, `brief.css` | Source menyebut penyimpanan lokal dua hari; privasi dan alur lengkap belum diuji end-to-end. Jangan anggap data dikirim atau tersimpan di server. |
| FIT-007 | Formulir saran/laporan masalah | Validasi isi, panduan berdasarkan jenis laporan, lalu membuka aplikasi email melalui `mailto:`. | Mengarahkan masukan tanpa backend formulir yang teridentifikasi. | Sedang | Tersedia di source | `feedback.html`, `feedback.js`, `feedback.css` | Source menjelaskan email baru terkirim setelah pengguna menekan Kirim di aplikasi email; alur email belum diuji. |
| FIT-008 | Tombol kembali ke atas dan reveal | JavaScript mengatur tombol atas dan mengamati elemen `.reveal` menggunakan `IntersectionObserver`. | Memberikan navigasi halaman dan efek tampilan yang sudah ada. | Rendah | Tersedia di source | `index.html`, `style.css`, `script.js` | Ini perilaku source yang ada, bukan fitur baru dari rencana; belum diuji ulang pada semua kondisi. |

## Sedang dikembangkan

| ID | Fitur | Deskripsi | Manfaat | Prioritas | Status | File terkait | Catatan pengujian |
| --- | --- | --- | --- | --- | --- | --- | --- |
| FIT-009 | Bagian Tentang teknisi-modern | Konten baru diminta, tetapi heading `<h2>` pada source yang diperiksa kosong dan eyebrow masih “Tentang Saya”. | Menjelaskan fokus layanan dan batas frontend/backend dengan jelas. | Tinggi | Belum lengkap | `index.html`, `style.css` | Dicatat sebagai masalah [MAS-001](./daftar-masalah.md); judul akhir, tampilan, dan responsivitas belum lulus verifikasi. |

## Direncanakan

| ID | Fitur | Deskripsi | Manfaat | Prioritas | Status | File terkait | Catatan pengujian |
| --- | --- | --- | --- | --- | --- | --- | --- |
| FIT-010 | Revisi satuan berbayar | Pencatatan revisi dengan cakupan, harga, dan estimasi yang disepakati sebelum mulai. | Membuat ekspektasi revisi jelas per permintaan. | Tinggi | Direncanakan; kebijakan dicatat, implementasi operasional belum ada | [daftar-revisi.md](./daftar-revisi.md) | Belum ada permintaan pelanggan atau uji proses tercatat. |
| FIT-011 | Paket token revisi | Kemungkinan paket token untuk penggunaan mendatang. | Akan dievaluasi setelah kebutuhan penggunaan diketahui. | Rendah | Direncanakan untuk masa depan | Belum ditentukan | Bukan fitur aktif; belum ada implementasi atau pengujian. |
| FIT-012 | Portal login pelanggan | Portal untuk melihat proyek, statistik token, dan riwayat revisi. | Memberi akses terpusat jika kebutuhan backend kelak disetujui. | Rendah | Direncanakan untuk evaluasi masa depan | Belum ditentukan | Bukan fitur aktif; belum ada portal/backend yang teridentifikasi. |

## Memerlukan evaluasi

| ID | Fitur | Deskripsi | Manfaat | Prioritas | Status | File terkait | Catatan pengujian |
| --- | --- | --- | --- | --- | --- | --- | --- |
| FIT-013 | Rincian biaya jasa, domain, dan hosting | Menjelaskan komponen biaya secara terpisah berdasarkan kebijakan yang disetujui. | Mencegah anggapan keliru bahwa domain atau hosting selalu termasuk. | Tinggi | Perlu evaluasi dan konfirmasi informasi bisnis | `data/packages.json`, `index.html` | Tidak menambah nominal sebelum dikonfirmasi. |
| FIT-014 | Penyempurnaan informasi paket | Menilai kejelasan cakupan Basic, Popular, Premium, dan Custom serta istilah revisi/hosting. | Membantu pelanggan membandingkan paket berdasarkan kebutuhan. | Tinggi | Perlu evaluasi | `data/packages.json`, `script.js` | Data paket ada; kesesuaian ruang lingkup belum dinilai atau disetujui. |
| FIT-015 | Pengembangan Brief dan Feedback | Menilai pertanyaan, validasi, aksesibilitas, privasi, serta alur pengiriman. | Membuat komunikasi kebutuhan dan laporan lebih jelas. | Sedang | Perlu evaluasi | `brief.html`, `brief.js`, `feedback.html`, `feedback.js` | Formulir sudah tampak di source, tetapi belum diuji end-to-end. |
| FIT-016 | QA responsivitas, aksesibilitas, performa, dan tautan | Pemeriksaan berkala lintas viewport dan alur halaman. | Mengurangi regresi dan meningkatkan keterjangkauan penggunaan. | Tinggi | Perlu evaluasi/pelaksanaan QA | File halaman dan aset terkait | Belum ada laporan pemeriksaan lengkap pada dokumentasi ini. |
| FIT-017 | Keamanan dan privasi fitur backend masa depan | Evaluasi akses data, autentikasi, pencadangan, dan pemeliharaan jika backend menjadi kebutuhan. | Mengurangi risiko sebelum menyimpan atau menyajikan data pelanggan. | Tinggi | Evaluasi bersyarat, bukan fitur berjalan | Belum ditentukan | Backend pelanggan tidak teridentifikasi di website utama yang diperiksa. |

## Ditunda atau dibatalkan

Belum ada fitur yang secara eksplisit ditandai ditunda atau dibatalkan. Portal
dan token berada pada bagian **Direncanakan**, bukan fitur aktif.
