# İhsan Web Sitesi — Backend API Şartnamesi

Bu klasör, `frontend/`'in canlı veri için beklediği API sözleşmesini tanımlar. Site backend olmadan da tam çalışır (statik gömülü veriyle); backend bağlanınca arayüz kodu değişmeden canlıya geçer.

## Bağlama
`frontend/config.js` içindeki tek satırı doldurun:
```js
window.IHSAN_API_BASE = "https://ihsan.sigorta.online/api/website";
```

## Uçlar (hepsi GET, JSON, CORS açık olmalı)

### `{BASE}/stats`
```json
{ "experienceYears": 21, "cityCount": 43, "activeUsers": 6551, "trafficM": 105, "kaskoM": 11 }
```

### `{BASE}/reviews`
```json
[{ "name": "Ad Soyad", "time": "3 ay önce", "isNew": false, "text": "Yorum metni..." }]
```
Not: İsimler arayüzde KVKK gereği bulanıklaştırılır — ham isim döndürün.

### `{BASE}/cities`
```json
[{ "name": "İstanbul", "lat": 41.01, "lng": 28.98, "count": 84 }]
```
`lat`/`lng` harita konumlandırma için zorunlu.

### `{BASE}/branches`
```json
[{ "name": "Kasko", "desc": "Aracınıza tam koruma." }]
```
Sadece isim dizisi de kabul edilir: `["Kasko", "Trafik", ...]`

## Davranış sözleşmesi
- Herhangi bir uç yanıt vermez/hata dönerse `frontend/data.js` otomatik olarak statik veriye düşer — site bozulmaz.
- `Access-Control-Allow-Origin` başlığı sitenin alan adına (veya `*`) izin vermeli.
- Backend teknolojisi serbesttir (.NET/Node/PHP) — sözleşme sadece bu JSON şekilleri.

## Genişletme
İleride form gönderimi, acente girişi veya teklif motoru istenirse aynı `IHSAN_API_BASE` altında yeni uçlar eklenir; bu klasöre şartname olarak eklenmelidir.
