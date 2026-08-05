## İhsan AI — Sigorta Acenteleri Platformu

Sigorta acentelerinin sorgu, teklif, poliçeleştirme ve muhasebe süreçlerini yapay zeka destekli tek platformda topladığını anlatan kurumsal tanıtım sitesi.

## Proje Yapısı

```
frontend/   Statik tanıtım sitesi (backend olmadan da tam çalışır)
backend/    Express API iskeleti — canlı veri (istatistik, harita, yorumlar) için
uploads/    Kullanıcı tarafından yüklenen görseller
```

Detaylar için ilgili klasördeki README'ye bakın: `frontend/README.md`, `backend/README.md`.

## Ürünler

- **Masaüstü Hızlı Teklif** — tüm anlaşmalı şirketlerden tek ekranda karşılaştırmalı teklif
- **Otonom Agent** — sorgudan teklife uçtan uca yapay zeka
- **Muhasebe** — poliçe, tahsilat ve komisyon takibi
- **Sesli Asistan (Ceyda)** — 7/24 yapay zeka destekli çağrı karşılama

## Hızlı Başlangıç

Sadece frontend'i görüntülemek için `frontend/Anasayfa.dc.html` dosyasını açmak yeterli — canlı veri API'si yoksa statik verilere düşer.

Backend ile birlikte çalıştırmak için:
```
cd backend
cp .env.example .env
npm install
npm run dev
```
Sonra `frontend/config.js`'te `IHSAN_API_BASE`'i API adresine ayarlayın.

## Canlı Veri Entegrasyonu

Şehir dağılımı, istatistikler ve Google yorumları gibi veriler şu an statik/mock; gerçek veritabanına bağlanmak için `backend/API-SPEC.md`'deki sözleşmeyi ve `backend/README.md`'deki adımları izleyin.
