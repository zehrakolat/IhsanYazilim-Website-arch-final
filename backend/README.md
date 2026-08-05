# İhsan Web Sitesi — Backend (Express iskeleti)

`API-SPEC.md`'deki sözleşmeyi karşılayan başlangıç iskeleti. Şu an mock veri döndürüyor (`src/models/*`) — gerçek DB bağlanınca sadece model dosyaları güncellenir, controller/route/service katmanları değişmez.

## Kurulum
```
cd backend
cp .env.example .env
npm install
npm run dev
```
API `http://localhost:4000/api/website/*` altında yayınlanır.

## Klasör yapısı
```
src/
├── config/        # env, db bağlantısı
├── controllers/    # HTTP istek/yanıt
├── services/       # iş mantığı
├── models/         # veri erişimi (şu an mock, DB bağlanınca güncellenir)
├── middlewares/     # error handler, 404, validation
├── routes/         # endpoint tanımları
├── utils/          # logger, asyncHandler
└── server.js       # giriş noktası
```

## Canlıya alma
1. `models/*Model.js` dosyalarını gerçek DB sorgularıyla değiştirin.
2. `.env`'e `DATABASE_URL` (ve varsa `REDIS_URL`) ekleyin, `config/db.js`'i doldurun.
3. `frontend/config.js`'te `IHSAN_API_BASE`'i bu API'nin canlı adresine ayarlayın.
