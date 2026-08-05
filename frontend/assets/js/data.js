/*
 * İhsan Web Sitesi — Canlı Veri Katmanı
 * ======================================
 * Bu dosya, sitedeki üç canlı-aday veri kümesinin TEK bağlantı noktasıdır:
 *   1) stats    → üst şerit istatistikleri (yıl, şehir, aktif kullanıcı, sorgu adetleri)
 *   2) reviews  → Google yorumları carousel'i
 *   3) cities   → Türkiye kapsama haritası (şehir + aktif kullanıcı sayısı)
 *   4) branches → Otonom Agent "Sigorta Çözümlerimiz" branş listesi
 *
 * NASIL CANLIYA ALINIR?
 * ---------------------
 * Sayfadan ÖNCE config.js yüklenir; orada tek satır doldurulur:
 *
 *     window.IHSAN_API_BASE = "https://ihsan.sigorta.online/api/website";
 *
 * Bu tanımlıysa veriler şu uçlardan JSON olarak çekilir:
 *     GET {IHSAN_API_BASE}/stats
 *     GET {IHSAN_API_BASE}/reviews
 *     GET {IHSAN_API_BASE}/cities
 *     GET {IHSAN_API_BASE}/branches
 *
 * IHSAN_API_BASE tanımlı DEĞİLSE (şu anki durum), sayfa gömülü statik verilerle
 * sorunsuz çalışır. Yani bu dosya bağlanmadan da site çalışmaya devam eder;
 * API bağlandığında hiçbir arayüz kodu değişmeden veriler canlıya geçer.
 *
 * BEKLENEN JSON ŞEKİLLERİ
 * -----------------------
 * /stats  → { "experienceYears":21, "cityCount":43, "activeUsers":6551,
 *             "trafficM":105, "kaskoM":11 }
 *
 * /reviews → [ { "name":"Ad Soyad", "time":"3 ay önce",
 *               "isNew":false, "text":"Yorum metni..." }, ... ]
 *
 * /cities → [ { "name":"İstanbul", "lat":41.01, "lng":28.98, "count":84 }, ... ]
 *           (Harita için lat/lng zorunludur.)
 *
 * /branches → [ { "name":"Kasko", "desc":"Aracınıza tam koruma." }, ... ]
 *             (Sadece isim de olur: [ "Kasko", "Trafik", ... ])
 *
 * ÖNEMLİ (CORS): Uç, bu sitenin alan adına izin veren şu başlığı döndürmelidir:
 *     Access-Control-Allow-Origin: <bu-sitenin-alan-adı>   (veya *)
 */
(function () {
  async function load(kind, fallback) {
    var base = window.IHSAN_API_BASE;
    if (!base) return fallback;                 // API bağlı değil → statik veri
    try {
      var res = await fetch(base.replace(/\/+$/, '') + '/' + kind, {
        headers: { 'Accept': 'application/json' }
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      var data = await res.json();
      return (data == null) ? fallback : data;
    } catch (e) {
      console.warn('[IhsanData] "' + kind + '" API\'den alınamadı, statik veriye dönülüyor.', e);
      return fallback;
    }
  }
  window.IhsanData = { load: load };
})();
