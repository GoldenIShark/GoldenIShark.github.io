# Dokumentasi internal AD Sharks Studio

Folder `list/` adalah pusat catatan internal untuk perencanaan, proyek, fitur,
pelanggan, revisi, masalah, dan referensi pengembangan AD Sharks Studio. Folder
ini hanya berisi dokumentasi Markdown; folder ini tidak mengubah website atau
menyimpan data operasional pelanggan secara otomatis.

## Panduan isi

| Berkas | Kegunaan |
| --- | --- |
| [daftar-pelanggan.md](./daftar-pelanggan.md) | Catatan pelanggan dan kebutuhan proyek yang benar-benar dikonfirmasi. |
| [daftar-rencana.md](./daftar-rencana.md) | Rencana pengembangan, prioritas, status, langkah, dan ketergantungan. |
| [daftar-fitur.md](./daftar-fitur.md) | Inventaris fitur berdasarkan kondisi yang terlihat di repository. |
| [daftar-revisi.md](./daftar-revisi.md) | Kebijakan revisi satuan berbayar dan log permintaan revisi. |
| [daftar-proyek.md](./daftar-proyek.md) | Website internal, proyek portofolio/demo, dan proyek pelanggan yang teridentifikasi. |
| [rangkuman-skill.md](./rangkuman-skill.md) | Skill, alat, pustaka, dan referensi yang tersedia atau dipertimbangkan. |
| [daftar-masalah.md](./daftar-masalah.md) | Masalah teknis terverifikasi dan dugaan yang masih perlu diperiksa. |
| [arsip/README.md](./arsip/README.md) | Aturan pengarsipan catatan yang tidak lagi aktif. |

## Aturan pembaruan

1. Baca dokumentasi terkait dan periksa repository sebelum menambah atau
   mengubah catatan. Gunakan ID yang sudah ada dan tautkan catatan lintas berkas
   dengan ID tersebut agar informasi tidak digandakan.
2. Gunakan bahasa Indonesia yang ringkas dan faktual. Bedakan keadaan yang
   ditemukan di source code dari perilaku yang sudah diuji di browser atau
   perangkat.
3. Perbarui status, tanggal pembaruan, file terkait, dan hasil pengujian hanya
   jika didukung bukti repository atau konfirmasi pengguna. Sebutkan batasan
   pemeriksaan secara terbuka.
4. Jangan membuat pelanggan, harga, tenggat, persetujuan, pembayaran, hasil
   pengujian, tautan demo, atau klaim bisnis. Jika belum diketahui, isi `Belum
   diketahui` atau biarkan kolom kosong.
5. Catat pelanggan dengan ID proyek yang tidak mengungkap nomor identitas.
   Simpan hanya informasi yang perlu untuk mengelola pekerjaan. Jangan
   mencatat kata sandi, token, API key, data pembayaran sensitif, atau data
   pribadi yang tidak diperlukan.
6. Status rencana bukan bukti bahwa fitur telah tersedia. Catat fitur sebagai
   aktif hanya setelah keberadaannya diperiksa; sebutkan apakah pemeriksaannya
   terbatas pada source code atau mencakup uji perilaku.
7. Catat harga revisi, cakupan, estimasi, persetujuan, dan pembayaran hanya
   setelah ada kesepakatan. Sistem awal menggunakan revisi satuan berbayar;
   token revisi dan portal pelanggan bukan fitur aktif.
8. Jangan mengubah kode website untuk pekerjaan yang hanya meminta pembaruan
   dokumentasi. Pertahankan dokumentasi proyek yang sudah ada di folder
   masing-masing.

Status umum:

- **Belum dimulai** — belum ada pekerjaan yang terverifikasi.
- **Sedang dikerjakan** — ada pekerjaan aktif yang terlihat atau telah
  dikonfirmasi.
- **Selesai** — kriteria pekerjaan telah dipenuhi dan hasilnya diperiksa.
- **Ditunda** — ada keputusan untuk menangguhkan pekerjaan.

Keberadaan file atau contoh di folder portofolio tidak dengan sendirinya
membuktikan bahwa proyek tersebut dipesan pelanggan atau sedang dipelihara.
