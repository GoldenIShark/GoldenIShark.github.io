# Rangkuman skill, alat, dan referensi

Daftar ini mencatat sumber yang tersedia di repository dan keputusan awal,
bukan persetujuan otomatis untuk menambahkan dependensi ke website. Tinjau
kompatibilitas, ukuran, keamanan, pemeliharaan, dan kebutuhan aktual sebelum
mengadopsi library, template, atau alat baru.

## Skill repository

Semua skill di bawah ditemukan di `.github/skills/`. Fungsi diringkas dari nama
dan peta skill pada petunjuk repository; buka file sumber sebelum mengikuti
prosedurnya untuk suatu tugas.

| Nama | URL/sumber | Fungsi | Status evaluasi | Manfaat | Risiko/keterbatasan | Keputusan penggunaan |
| --- | --- | --- | --- | --- | --- | --- |
| asset-management | [SKILL.md](../.github/skills/asset-management/SKILL.md) | Memilih, mengoptimalkan, dan mengelola aset website. | Tersedia di repository; evaluasi per tugas. | Membantu menjaga aset dan path konsisten. | Perubahan aset dapat merusak referensi jika tidak dilacak. | Gunakan saat tugas menyentuh aset; tidak menambahkan dependensi. |
| convert-images-to-webp | [SKILL.md](../.github/skills/convert-images-to-webp/SKILL.md) | Panduan konversi gambar ke WebP. | Tersedia; relevansi bergantung pada aset dan konteks. | Optimasi format gambar bila sesuai. | Jangan konversi SVG otomatis atau meratakan GIF animasi; ikuti petunjuk lengkap skill. | Gunakan hanya jika konversi relevan dan aset tervalidasi. |
| frontend-development | [SKILL.md](../.github/skills/frontend-development/SKILL.md) | Implementasi dan pemeliharaan HTML, CSS, dan JavaScript. | Tersedia di repository; evaluasi per tugas. | Mendorong perubahan kecil sesuai pola proyek. | Bukan alasan untuk menambah framework atau build step. | Gunakan untuk perubahan antarmuka yang diminta. |
| github-management | [SKILL.md](../.github/skills/github-management/SKILL.md) | Pemeriksaan status, diff, staging, commit, dan GitHub. | Tersedia di repository; evaluasi per tugas. | Membantu menjaga perubahan lokal tetap terpisah. | Perintah destruktif dan staging luas harus dihindari. | Gunakan saat tugas melibatkan operasi Git/GitHub. |
| human-ui-design | [SKILL.md](../.github/skills/human-ui-design/SKILL.md) | Hierarki visual, palet, spacing, keterbacaan, dan UX. | Tersedia di repository; evaluasi per tugas. | Menjaga konsistensi visual dan kemudahan penggunaan. | Tidak semua tugas memerlukan perubahan visual. | Gunakan saat kebutuhan desain/UX relevan. |
| performance | [SKILL.md](../.github/skills/performance/SKILL.md) | Diagnosis dan optimasi performa website. | Tersedia di repository; evaluasi per tugas. | Mengarahkan pengukuran pada masalah nyata. | Klaim peningkatan perlu didukung pengukuran. | Gunakan saat performa termasuk cakupan. |
| responsive-web | [SKILL.md](../.github/skills/responsive-web/SKILL.md) | Layout dan navigasi adaptif lintas viewport. | Tersedia di repository; evaluasi per tugas. | Membantu menentukan dan memeriksa perilaku responsif. | Jangan klaim ukuran viewport sudah diuji tanpa pemeriksaan. | Gunakan saat tugas berdampak pada layout responsif. |
| seo-accessibility | [SKILL.md](../.github/skills/seo-accessibility/SKILL.md) | Metadata, semantik, kontras, keyboard, dan aksesibilitas. | Tersedia di repository; evaluasi per tugas. | Membantu pemeriksaan aksesibilitas serta SEO dasar. | Audit lengkap memerlukan pemeriksaan yang sesuai, bukan asumsi. | Gunakan saat metadata, semantik, atau aksesibilitas relevan. |
| web-animation | [SKILL.md](../.github/skills/web-animation/SKILL.md) | Penambahan atau pemeriksaan gerak dan transisi web. | Tersedia di repository; evaluasi per tugas. | Mengarahkan penggunaan gerak yang bertujuan. | Gerak yang tidak diperlukan dapat mengganggu dan menambah beban. | Gunakan hanya bila gerak termasuk kebutuhan. |
| website-content | [SKILL.md](../.github/skills/website-content/SKILL.md) | Penyusunan dan peninjauan konten website. | Tersedia di repository; evaluasi per tugas. | Menjaga konten tetap jelas dan konsisten. | Fakta bisnis tidak boleh direka. | Gunakan untuk perubahan copy/konten. |
| website-maintenance | [SKILL.md](../.github/skills/website-maintenance/SKILL.md) | Diagnosis dan perbaikan lokal website yang ada. | Tersedia di repository; evaluasi per tugas. | Membantu menjaga lingkup perubahan dan regresi. | Perlu bukti sebelum menyebut sesuatu sebagai bug. | Gunakan untuk pemeliharaan yang diminta. |
| website-planning | [SKILL.md](../.github/skills/website-planning/SKILL.md) | Perencanaan struktur, konten, tujuan, dan kriteria. | Tersedia di repository; evaluasi per tugas. | Membuat kebutuhan dan prioritas lebih eksplisit. | Perencanaan harus sedalam kebutuhan proyek. | Gunakan untuk fitur/website baru atau perubahan besar. |
| website-testing | [SKILL.md](../.github/skills/website-testing/SKILL.md) | Pemeriksaan fungsi, tampilan, responsivitas, teknis, dan aksesibilitas. | Tersedia di repository; evaluasi per tugas. | Membantu mencatat cakupan pengujian dengan jujur. | Hasil terbatas tidak membuktikan semua browser atau viewport. | Gunakan untuk perubahan yang perlu validasi. |

## Teknologi, library, template, dan alat

| Nama | URL/sumber | Fungsi | Status evaluasi | Manfaat | Risiko/keterbatasan | Keputusan penggunaan |
| --- | --- | --- | --- | --- | --- | --- |
| HTML, CSS, dan Vanilla JavaScript | File `index.html`, `style.css`, `script.js` serta halaman terkait di root dan `portofolio/`. | Stack yang tampak digunakan oleh situs statis. | Digunakan; keberadaan diperiksa pada source proyek utama. | Sesuai static hosting dan menghindari dependensi framework besar. | Fitur yang memerlukan server tidak tersedia hanya dengan stack ini. | Pertahankan pola yang ada kecuali kebutuhan baru dan persetujuan mengharuskan perubahan. |
| Git | Repository lokal dan aturan di [petunjuk repository](../.github/copilot-instructions.md). | Melacak perubahan kode dan dokumentasi. | Digunakan untuk pengelolaan repository. | Menampilkan perubahan dan riwayat. | Status lokal dapat mencakup pekerjaan yang belum selesai; periksa sebelum mengubah. | Gunakan perintah non-destruktif; jangan staging atau commit tanpa instruksi. |
| Library/framework pihak ketiga | Tidak ada dependensi root yang tercatat pada berkas proyek utama yang diperiksa. | Belum ada kebutuhan/keputusan adopsi yang dicatat. | Belum dipilih atau dievaluasi untuk penambahan. | Dapat memenuhi kebutuhan khusus jika memang terbukti perlu. | Kompatibilitas, ukuran, keamanan, pemeliharaan, dan build perlu dievaluasi. | Jangan menambahkan sebelum ada kebutuhan dan persetujuan. |
| Template UI tambahan | Belum ada template UI terpisah yang teridentifikasi untuk website utama. | Belum ditentukan. | Belum dievaluasi. | Dapat mempercepat pekerjaan jika sesuai kebutuhan. | Risiko duplikasi, aksesibilitas, lisensi, dan ketidakcocokan identitas. | Jangan mengadopsi tanpa evaluasi dan pemeriksaan lisensi/kompatibilitas. |

