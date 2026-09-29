# Petunjuk Copilot untuk repository HOME

## Konteks proyek
- Ini adalah situs Shark Studio berbahasa Indonesia. Halaman utama berada di `index.html`; interaksi di `script.js`; gaya di `style.css`; aset situs utama berada di `assets/`.
- `portofolio/` berisi situs-situs portofolio yang dapat memiliki struktur dan aset masing-masing. Perlakukan setiap subfolder situs sebagai proyek mandiri dan periksa struktur aktual sebelum mengubahnya.
- Deliverable utama adalah website statis/display-only yang cocok di-hosting pada static hosting. Gunakan HTML, CSS, dan Vanilla JavaScript; pertahankan implementasi situs yang ada.
- Jangan memakai framework atau library besar kecuali benar-benar diperlukan untuk memenuhi kebutuhan yang dinyatakan. Jelaskan kebutuhan tersebut dan dapatkan persetujuan sebelum menambahkannya; jangan menambahkan paket, dependensi, backend, atau build step secara otomatis.

## Prioritas pengerjaan
1. Penuhi tujuan pengguna dan kebutuhan audiens terlebih dahulu; kejelasan, kegunaan, aksesibilitas, dan kepercayaan lebih penting daripada dekorasi.
2. Pertahankan identitas dan konten yang sudah ada. Jangan mengarang klaim bisnis, testimoni, harga, data, atau tautan. Tanyakan atau tandai informasi yang belum tersedia.
3. Buat perubahan sekecil mungkin pada file yang relevan. Jangan mengubah situs utama ketika permintaan hanya menyasar situs di `portofolio/`, atau sebaliknya.
4. Utamakan pendekatan mobile-first, performa ringan, HTML semantik, interaksi keyboard yang dapat digunakan, serta pengalaman yang konsisten pada berbagai ukuran layar.
5. Jangan menghapus atau mengganti aset asli sebelum pengganti dan semua referensinya tervalidasi. Pertahankan nama, struktur, dan path relatif yang bekerja.

## Cara bekerja
- Sebelum mengedit, baca file dan pola di area sasaran; periksa status Git agar perubahan yang sudah ada tidak tertimpa. Jangan mengedit `.git/`.
- Untuk website baru atau perombakan besar, pahami proyek dan susun rencana sebelum mulai coding. Pengecualian: perubahan kecil yang terfokus pada situs yang sudah ada boleh langsung dikerjakan setelah memeriksa konteks dan dampaknya.
- Tentukan tujuan halaman, audiens, CTA, hierarki konten, dan batasan sebelum menyusun atau merombak antarmuka.
- Gunakan skill yang paling relevan dari `.github/skills/`; baca seluruh `SKILL.md` skill tersebut sebelum menerapkannya. Untuk permintaan lintas bidang, kombinasikan skill yang diperlukan, bukan semuanya secara otomatis.
- Pertahankan bahasa Indonesia pada antarmuka dan dokumentasi bila sesuai konteks situs. Gunakan label, instruksi, dan pesan kesalahan yang lugas dan konsisten.
- Jangan mengubah file di luar lingkup, menambah dependensi, atau melakukan perubahan destruktif tanpa izin. Jangan mengklaim pengujian telah dilakukan jika belum.
- Setelah perubahan, jalankan validasi paling relevan yang tersedia tanpa instalasi dependensi baru; periksa diff dan pastikan hanya file yang dimaksud berubah. Laporkan keterbatasan pengujian secara jujur.

## Peta skill
- Perencanaan dan struktur halaman: `website-planning`
- Implementasi HTML/CSS/JavaScript: `frontend-development`
- Hierarki visual, estetika, dan UX: `human-ui-design`
- Layout lintas viewport: `responsive-web`
- Transisi dan gerak: `web-animation`
- Copywriting dan struktur pesan: `website-content`
- Gambar, ikon, dan berkas visual: `asset-management`
- Metadata, semantik, dan aksesibilitas: `seo-accessibility`
- Kecepatan dan bobot halaman: `performance`
- Pemeriksaan perilaku dan regresi: `website-testing`
- Operasi Git/GitHub dan tinjauan perubahan: `github-management`
- Pemeliharaan, audit, dan perbaikan bertahap: `website-maintenance`

## Aturan khusus aset portofolio
Untuk pekerjaan gambar pada situs di `portofolio/`, gunakan skill `asset-management` dan patuhi `.github/skills/convert-images-to-webp/SKILL.md` bila konversi relevan. Periksa hanya folder aset situs yang sedang dikerjakan (`portofolio/<kategori>/<website>/assets/`, atau `portofolio/<kategori>/assets/` jika situs berada langsung di kategori). Jangan mengubah `assets/` situs utama kecuali diminta. Jangan mengonversi SVG secara otomatis atau meratakan GIF animasi.
