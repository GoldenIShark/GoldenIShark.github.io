# Daftar masalah

Pisahkan temuan yang dapat ditunjukkan langsung dari dugaan yang belum
direproduksi. Perbarui status dan solusi setelah perubahan diverifikasi; sebutkan
apakah verifikasi hanya lewat source code atau juga melalui runtime.

## Terverifikasi

| ID masalah | Ringkasan masalah | Dampak | Cara memeriksa/mereproduksi | File terkait | Prioritas | Status | Solusi dan hasil pengujian |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MAS-001 | Heading utama section Tentang kosong; eyebrow masih bertuliskan “Tentang Saya”, sementara subjudul berada pada elemen `<h3>`. | Judul section yang terlihat tidak mencerminkan judul yang diminta dan hierarki heading section tidak lengkap. | Buka section `#about` pada source halaman utama; periksa `.section-heading`: teks eyebrow “Tentang Saya”, `<h3>` berisi subjudul, dan `<h2>` kosong. Ini temuan inspeksi source, bukan klaim uji browser. | [`index.html`](../index.html), [`style.css`](../style.css) | Sedang | Terbuka | Belum diperbaiki atau diuji setelah perbaikan. Rencana terkait: [REN-001](./daftar-rencana.md). |

## Dugaan yang perlu diperiksa

Belum ada dugaan tambahan yang dicatat. Tambahkan dugaan hanya jika ada gejala
atau bukti awal, lalu dokumentasikan cara mereproduksinya sebelum mengubah
status menjadi terverifikasi.
