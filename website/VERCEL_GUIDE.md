# Panduan Menghosting Website di Vercel dengan Domain Kustom

## Langkah 1: Membuat Akun Vercel

1. Kunjungi [Vercel](https://vercel.com)
2. Klik "Sign Up" di pojok kanan atas
3. Daftar dengan GitHub, GitLab, atau email Anda
4. Ikuti langkah-langkah untuk menyelesaikan pendaftaran

## Langkah 2: Membuat Repository GitHub

1. Buat akun [GitHub](https://github.com) jika belum memilikinya
2. Buat repository baru untuk website Anda
3. Upload semua file website ke repository tersebut (atau clone repository terlebih dahulu, lalu push perubahan)

## Langkah 3: Deploy Website ke Vercel

1. Di dashboard Vercel, klik "New Project"
2. Pilih "Import Git Repository" dan pilih repository GitHub yang berisi website Anda
3. Jika diminta, berikan akses Vercel ke repository GitHub Anda
4. Pada halaman konfigurasi:
   - Framework Preset: Other
   - Root Directory: ./website (jika website berada dalam folder website)
   - Build Command: biarkan kosong
   - Output Directory: biarkan kosong
5. Klik "Deploy"

## Langkah 4: Mendapatkan Domain Kustom Gratis

### Opsi 1: Menggunakan Subdomain Vercel Gratis

Vercel secara otomatis menyediakan domain untuk proyek Anda dalam format: `nama-proyek.vercel.app`. Ini sudah disertakan secara gratis.

### Opsi 2: Menggunakan Domain Freenom Gratis

1. Kunjungi [Freenom](https://www.freenom.com)
2. Cari domain dengan TLD gratis (.tk, .ml, .ga, .cf, atau .gq)
3. Pilih domain dan daftarkan secara gratis (hingga 12 bulan)
4. Lengkapi proses pendaftaran

## Langkah 5: Menghubungkan Domain Kustom ke Vercel

### Jika menggunakan subdomain Vercel:

Tidak perlu melakukan apa-apa karena sudah otomatis terhubung.

### Jika menggunakan domain Freenom:

1. Di dashboard Vercel, pilih proyek website Anda
2. Buka tab "Settings" lalu "Domains"
3. Masukkan domain dari Freenom, misalnya "namaanda.tk" dan klik "Add"
4. Vercel akan memberikan dua opsi konfigurasi DNS:
   
   #### Opsi A: Konfigurasi "A Records"
   Tambahkan record A berikut di pengaturan DNS Freenom:
   ```
   A @ 76.76.21.21
   ```

   #### Opsi B: Konfigurasi "Nameserver" (Direkomendasikan)
   Ubah nameserver di pengaturan Freenom dengan nameserver Vercel:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```

5. Di Vercel, aktifkan "Secure with HTTPS" (biasanya otomatis)

## Langkah 6: Verifikasi Konfigurasi Domain

1. Di dashboard Vercel, pada halaman Domains, domain Anda akan menunjukkan status "Valid Configuration" setelah pengaturan DNS selesai
2. Propagasi DNS bisa memakan waktu hingga 48 jam, tapi biasanya jauh lebih cepat

## Kelebihan Menggunakan Vercel

1. **Deployment Otomatis**: Perubahan yang di-push ke GitHub akan otomatis di-deploy
2. **SSL Gratis**: HTTPS otomatis diaktifkan untuk semua situs
3. **Integrasi GitHub**: Mudah untuk melakukan deployment dari repository
4. **Preview untuk Pull Request**: Setiap pull request mendapatkan URL preview sendiri
5. **Analytics Dasar**: Melihat kinerja dan pengunjung website

## Cara Memperbaharui Website

1. Lakukan perubahan pada file website di repository GitHub Anda
2. Commit dan push perubahan ke GitHub
3. Vercel akan otomatis melakukan deployment ulang dengan perubahan terbaru

## Penting untuk Diingat

- Domain gratis dari Freenom biasanya hanya gratis hingga 12 bulan dan perlu diperpanjang
- Pastikan untuk login secara berkala ke akun Freenom untuk mempertahankan domain Anda
- Vercel memiliki batasan untuk akun gratis (50GB bandwidth/bulan), tapi ini cukup untuk website personal 