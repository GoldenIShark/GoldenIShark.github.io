# Catatan Teknis Lintas Agent

Tanggal: 2026-10-25

## Area
- Konfigurasi native Antigravity workspace: `.agents/` (`.agents/skills/` dan `.agents/agents/`).

## Fakta dan keputusan
- Direktori native `.agents/` dibuat di root repository sesuai standar Antigravity Customization Discovery.
- Seluruh skill dari `.github/skills/` disalin ke `.agents/skills/`.
- Seluruh definisi agent dari `.github/agents/` disalin ke `.agents/agents/`.
- File asli di `.github/` dan kode website tidak diubah sama sekali.

## Dampak
- Antigravity kini dapat langsung mendeteksi dan memuat skills serta agents melalui jalur discovery native workspace `.agents/`.

## Status
- Struktur `.agents/skills/` dan `.agents/agents/` lengkap dan terverifikasi via PowerShell.

## Command dan batasan
- `Copy-Item -Path ".github\skills" -Destination ".agents\skills" -Recurse -Force` dan `Copy-Item -Path ".github\agents" -Destination ".agents\agents" -Recurse -Force` berhasil dieksekusi.
- `Get-ChildItem -Path .agents -Recurse` mengonfirmasi seluruh 12 folder skill dan 4 file agent tersalin dengan utuh.

---

Tanggal: 2026-10-24

## Area
- Judul kartu demo pada bagian Portofolio halaman utama (`index.html`).

## Fakta dan keputusan
- Lima judul kartu disamakan dengan identitas demo dan kategori paket: Aura Rasa — Basic, Ruang Rasa — Popular, NAYA SUPPLY — Premium, SMA Cakrawala Nusa — Premium, dan NEXORA Business — Popular.
- Judul aksesibel pada iframe pratinjau juga diperbarui. Path demo dan urutan kartu dipertahankan.

## Dampak
- Pengunjung dapat mengenali nama demo dan kategori paket pada daftar portofolio beranda.

## Status
- Pemeriksaan DOM browser lulus untuk kelima judul, judul aksesibel iframe, path pratinjau, dan tautan langsung.

## Command dan batasan
- `git status --short` sebelum edit tidak menampilkan perubahan lokal.
- Nama dan tujuan demo dicocokkan dengan file HTML masing-masing di `portofolio/`.
- Pemeriksaan PowerShell dengan pencocokan literal Unicode menghasilkan false negative; pemeriksaan ulang melalui DOM browser lulus untuk seluruh lima kartu.

---

Tanggal: 2026-10-24

## Area
- Website demo restoran `portofolio/restoran-basic/` (HTML, CSS, JavaScript, README).

## Fakta dan keputusan
- Alur halaman disusun menjadi Beranda, Tentang, Menu, Galeri, Lokasi/Kontak, dan Footer; navigasi menggunakan anchor internal.
- Nama Aura Rasa dipertahankan sebagai identitas demo yang tertera pada README. Harga, hidangan, cerita, alamat, jam buka, nomor WhatsApp, dan URL peta lama dihapus karena tidak memiliki sumber terverifikasi.
- Satu-satunya gambar, `assets/images/preview.webp` (10.720 byte), adalah ilustrasi abstrak NFShark, bukan foto restoran. Slot hero dan galeri ditandai perlu materi; aset tidak diubah.
- Palet hangat dan font sistem bersifat sementara; font eksternal dan tautan layanan yang tidak valid dihapus. Tidak ada dependensi atau backend baru.

## Dampak
- Pengunjung dapat menavigasi semua section dan melihat dengan jelas informasi restoran yang masih menunggu konfirmasi, tanpa klaim bisnis atau CTA eksternal palsu.
- Menu mobile menyampaikan state aksesibel dan dapat ditutup dengan Escape atau setelah tautan dipilih.

## Status
- Selesai. Browser lokal menguji lebar 320, 375, 390, 414, 768, 1024, dan 1280 px tanpa horizontal overflow.
- Navigasi diuji dengan keyboard: Enter membuka, Escape menutup dan mengembalikan fokus, tautan menutup menu serta menuju anchor yang benar. Tidak ada console error atau request eksternal.
- Satu `h1`, semua target anchor, metadata halaman, dan status reduced motion terverifikasi. Rasio kontras label aksen terhadap latar terang 5,52:1.
- Foto tidak dapat diverifikasi karena tidak ada foto restoran tersedia; halaman memakai placeholder berlabel materi dan tidak memiliki elemen gambar yang rusak.

## Command dan batasan
- Status Git sebelum edit bersih. `Get-Item` mengonfirmasi aset `preview.webp` berukuran 10.720 byte.
- `node --check portofolio/restoran-basic/script.js` lulus. Pemeriksaan browser dilakukan pada file lokal `index.html`.
- Belum ada data restoran maupun foto autentik yang dapat dimasukkan; materi tersebut tetap perlu dikonfirmasi pemilik.

---

Tanggal: 2026-10-23

## Area
- Kartu portofolio situs restoran Basic di halaman utama (`index.html`).

## Fakta dan keputusan
- Demo `portofolio/restoran-basic/index.html` ditambahkan sebagai kartu tersendiri setelah demo restoran yang sudah ada.
- Kartu mengikuti struktur portofolio beranda: pratinjau iframe, deskripsi, dan tautan langsung. Toggle tidak perlu diubah karena batas tampilnya 10 kartu.

## Dampak
- Pengunjung dapat melihat pratinjau dan membuka demo Aura Rasa dari bagian Portofolio halaman utama.

## Status
- Implementasi selesai; `portofolio/restoran-basic/index.html` terverifikasi ada, dengan satu pratinjau iframe dan satu tautan langsung pada beranda.

## Command dan batasan
- `git status --short` dijalankan sebelum edit dan tidak menampilkan perubahan lokal.
- Pemeriksaan PowerShell `Test-Path` dan pencocokan pola pada `index.html` lulus. Pemeriksaan tampilan browser belum dilakukan.
- `git -c core.whitespace=cr-at-eol diff --check` lulus; pemeriksaan standar menandai CRLF file sebagai trailing whitespace.

## Area
- Pengaturan instruksi repository `.github/copilot-instructions.md`.
- Penambahan skill & tooling baru di `.github/skills/skill-creator/` dan `.github/skills/convert-images-to-webp/`.
- Pemisahan portofolio restoran:
  - `portofolio/restoran/`: Dikembalikan ke versi asli (Ruang Rasa - gaya Popular/Premium dengan animasi, filter menu, dan lightbox).
  - `portofolio/restoran-basic/`: Dibuat folder baru khusus untuk demo Paket Basic NFShark (Aura Rasa).

## Fakta dan keputusan
- Folder `portofolio/restoran/` (Ruang Rasa) dipertahankan 100% utuh tanpa perubahan sedikit pun dari versi asli repository (`git checkout HEAD`).
- Folder baru `portofolio/restoran-basic/` (Aura Rasa) resmi ditambahkan khusus untuk mendemonstrasikan **Paket Basic NFShark**:
  - Struktur 1 halaman fokus, cepat, dan responsif.
  - Slogan performa NFShark: *"Website Cepat, Ringan & Responsif — Mengutamakan Performa untuk Bisnis Nyata"*.
  - Palet warna: Biru Gelap Luar Angkasa (`#0B1325`), Hijau Segar (`#10B981`), Biru Langit (`#38BDF8`), dengan 3 warna pelengkap: Mint Ice (`#F0FDF4`), Slate Gray (`#94A3B8`), dan Soft White (`#F8FAFC`).
  - Gambar produk menggunakan satu gambar pratinjau tunggal teroptimasi WebP seragam: `preview.webp` (~10 KB).
  - Vanilla JS ultra-ringan tanpa library berat, ramah aksesibilitas keyboard (Escape & fokus).
- Tooling otomatis WebP: Tersedia script Python CLI yang reusable (`.github/skills/convert-images-to-webp/convert_to_webp.py`).
- Skill Creator: Panduan pembuatan skill baru didokumentasikan di `.github/skills/skill-creator/SKILL.md`.
- Aturan pencatatan file: Setiap perubahan file di repository wajib dicatat di `/catatan.md`.

## Dampak
- Folder portofolio asli `restoran/` tetap aman dan tidak mengalami modifikasi.
- Portofolio baru `restoran-basic/` tersedia mandiri sebagai representasi akurat website Paket Basic NFShark.

## Status
- `git diff portofolio/restoran/` bersih tanpa perubahan (0 diff).
- `node --check portofolio/restoran/script.js` dan `node --check portofolio/restoran-basic/script.js` lulus validasi sintaks.
- Script python `convert_to_webp.py` terverifikasi.

## Command dan batasan
- `git checkout HEAD -- portofolio/restoran/` sukses memulihkan seluruh file asli `portofolio/restoran/`.
- `git status --short` mengonfirmasi `portofolio/restoran/` tidak termodifikasi, dan `portofolio/restoran-basic/` telah ditambahkan.

---

Tanggal: 2026-10-18

## Area
- Situs utama NFShark: fondasi UI, pratinjau portofolio, dan pemuatan paket.
- Instruksi repository dan pemeriksaan teknis sesi ini.

## Fakta dan keputusan
- Stack situs utama tetap HTML, CSS, dan Vanilla JavaScript; tidak ada dependensi baru.
- Pengingat: jika ditanya apa saja yang diminta untuk diingat, ingatkan bahwa pratinjau portofolio bukan lewat tombol, melainkan melalui elemen gambar seperti pada lampiran (`div.portfolio-image` pada kartu portofolio).
- `css/common.css` menjadi fondasi token, reset, container, header/nav, tombol, footer, serta kontrol bersama. `css/common-animasi.css` memuat gerak ulang pakai; animasi paket dan layout beranda tetap di `css/style.css`.
- Tombol primary root memakai fill grass; secondary root transparan dengan border putih dan berubah grass saat interaksi. Preview `ui-components.css` memakai fill grass dan border putih untuk secondary/outline serta glass pada permukaan terang agar kontrasnya terjaga; markup `ui-preview.html` tetap terisolasi.
- Halaman utama, FAQ, Brief, dan Feedback memuat stylesheet dalam urutan `common.css`, `common-animasi.css`, lalu stylesheet halaman.
- Pratinjau demo memakai dialog native. `iframe` hanya menerima `src` setelah tombol pratinjau ditekan; event `load` tidak dipakai sebagai bukti keberhasilan dan tautan langsung tetap tersedia.
- Daftar paket memberikan status loading dan fallback Basic pada kegagalan. Skeleton tidak dipakai karena jeda fetch yang berarti belum dibuktikan.
- CSS reveal beranda progresif: item hanya disembunyikan setelah observer melaporkan item tidak terlihat. Tanpa JavaScript, `IntersectionObserver`, atau saat reduced motion aktif, konten tetap terlihat.
- Folder `portofolio/`, markup `ui-preview.html`, URL/kontak/akun, dan monogram demo tidak diubah. Pada tugas warna tombol, `css/ui-components.css` hanya diubah untuk varian tombol.

## Dampak
- Empat halaman utama sekarang berbagi fondasi CSS; komponen dan animasi khusus halaman tetap di stylesheet pemiliknya.
- Dialog pratinjau dapat dihentikan saat ditutup, memberi timeout dan pesan yang tidak mengklaim status demo, serta mempertahankan fallback buka langsung.
- Animasi bersama menghormati `prefers-reduced-motion` tanpa selector universal atau override `!important`.

## Status
- Implementasi selesai. Pemeriksaan editor dan `node --check js/script.js` tidak menemukan error.
- Empat halaman utama diperiksa pada lebar 320, 375, 390, 414, 768, 1024, dan 1280 px. Semua stylesheet termuat dalam urutan yang dimaksud dan tidak ditemukan overflow horizontal atau error console pada halaman utama.
- Dialog diuji dengan aktivasi keyboard, Escape, tombol tutup, pemulihan fokus, fallback link, pemuatan lokal, route gagal, timeout 12 detik, dan buka-tutup cepat. Dialog tidak overflow pada ketujuh lebar yang diuji.
- Fetch paket diuji sukses dan gagal; masing-masing mengakhiri `aria-busy=false`, dengan empat paket atau fallback Basic. Reduced motion, menu keyboard, screenshot beranda desktop 1280 px, dan modal mobile 375 px juga diperiksa.
- Warna tombol diperiksa pada halaman root: primary hijau; secondary transparan dengan teks/border putih; hover/active hijau. Preview terisolasi diuji untuk secondary, outline, hover, pressed, glass terang, dan disabled.
- Server lokal mencatat 404 untuk permintaan otomatis browser ke `/favicon.ico`; tidak ada referensi favicon yang ditambahkan dalam tugas ini dan temuan tersebut tidak diubah karena di luar file sasaran.
- Skeleton sengaja tidak ditambahkan karena latensi fetch yang bermakna belum terukur.

## Command dan batasan
- `git status --short --branch`, `git diff --stat`, dan `git diff --name-only` tersedia dan berhasil dijalankan sebelum edit.
- Perubahan lokal yang teramati sebelum tugas: `.github/agents/website-developer.agent.md` berubah; `css/ui-components.css` dan `ui-preview.html` belum dilacak. CSS preview kemudian diubah hanya untuk warna tombol sesuai permintaan; markup preview dan semua demo portofolio dipertahankan.
- `node --check js/script.js` tersedia dan berhasil. `git diff --check` default melaporkan karakter CR pada akhir baris file CRLF; pemeriksaan read-only `git -c core.whitespace=cr-at-eol diff --check` selesai tanpa temuan.
- Tidak ada command yang diblokir atau tidak tersedia pada sesi ini. Jika command kelak tidak tersedia, gunakan pemeriksaan read-only editor/VS Code dan catat sebagai keterbatasan, bukan sebagai command yang gagal.