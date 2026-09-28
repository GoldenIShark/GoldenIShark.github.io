---
name: responsive-web
description: "Gunakan saat membangun atau mengaudit tampilan mobile, tablet, dan desktop, breakpoint, navigasi kecil, overflow, target sentuh, atau perilaku layout adaptif."
---

# Website Responsif

## Pendekatan
- Mulai dari konten dan layar sempit, lalu perluas layout saat ruang tersedia. Jangan menganggap breakpoint perangkat tertentu sebagai satu-satunya ukuran.
- Periksa CSS yang ada sebelum menambah media query. Pilih breakpoint ketika konten mulai sesak atau komposisi perlu berubah, bukan berdasarkan daftar perangkat.
- Gunakan grid/flex yang lentur, ukuran relatif dan batas lebar yang masuk akal; hindari lebar/tinggi tetap yang memotong konten.
- Pastikan gambar menyusut dengan rasio benar, teks dapat membungkus, kontrol tidak bertumpuk, dan tidak ada scroll horizontal yang tidak disengaja.
- Navigasi mobile harus mudah ditemukan, dapat dibuka/ditutup, menyampaikan state dengan tepat (misalnya `aria-expanded`), serta tidak menjebak fokus.
- Beri jarak dan ukuran target sentuh yang nyaman. Jangan mengandalkan hover untuk mengungkap informasi penting.

## Pemeriksaan lintas viewport
Tinjau setidaknya viewport sempit sekitar 320–375 px, tablet sekitar 768 px, dan desktop sekitar 1280 px, disesuaikan dengan kebutuhan konten. Uji juga lebar di antaranya jika ada breakpoint kritis. Periksa:
- urutan dan keterbacaan konten, heading panjang, navigasi, CTA, form, dan footer;
- grid/kartu, margin tepi, gambar, rasio media, overflow, serta perubahan orientasi bila relevan;
- ukuran teks/target sentuh, fokus keyboard, dan keadaan menu terbuka;
- konsistensi visual tanpa menyembunyikan fungsi penting pada mobile.

Catat lingkungan atau keterbatasan pratinjau; jangan menyatakan semua perangkat telah diuji bila hanya memeriksa beberapa ukuran. Gunakan `website-testing` untuk validasi perilaku.
