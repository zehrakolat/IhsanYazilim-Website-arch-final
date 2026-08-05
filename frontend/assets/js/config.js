/*
 * İhsan Web Sitesi — CANLI VERİ AYARI
 * ===================================
 * Siteyi canlı verilere bağlamak için TEK yapmanız gereken:
 * aşağıdaki satırdaki // işaretini kaldırıp adresi kendi API'nizle değiştirmek.
 *
 * Örnek (İhsan Otonom / sigorta.online altında bir uç yayınlandığında):
 *
 *     window.IHSAN_API_BASE = "https://ihsan.sigorta.online/api/website";
 *
 * Bu uç şu 4 adresi JSON olarak döndürmelidir (detay: data.js başı):
 *     GET .../stats  .../reviews  .../cities  .../branches
 * ve yanıtlarında CORS başlığı bulunmalıdır:
 *     Access-Control-Allow-Origin: *   (veya bu sitenin alan adı)
 *
 * Bu satır KAPALIYKEN site, gömülü güncel listelerle sorunsuz çalışır.
 */

// window.IHSAN_API_BASE = "https://ihsan.sigorta.online/api/website";
