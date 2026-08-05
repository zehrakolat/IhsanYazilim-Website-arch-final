const SOURCE_URL = 'https://ihsan.sigorta.online/';
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 dakika

// Site şu an ulaşılamazsa veya ayrıştırma başarısız olursa kullanılan yedek liste
const FALLBACK = [
  { name: 'Multi Sorgu', desc: 'Tek ekrandan birden fazla sigorta türü için aynı anda teklif alın.' },
  { name: 'Trafik Sigortası', desc: 'Yasal zorunluluğunuzu en uygun fiyatlarla karşılayın.' },
  { name: 'Tamamlayıcı Sağlık Sigortası', desc: 'Sağlık güvencenizi tamamlayın, kaliteli hizmet alın.' },
  { name: 'DASK', desc: 'Zorunlu deprem sigortası.' },
  { name: 'İhtiyari Mali Mesuliyet', desc: 'Aracınıza kaza durumunda ekstra güvence sağlayın.' },
  { name: 'Kasko', desc: 'Aracınıza tam koruma sağlayın.' },
  { name: 'Konut Sigortası', desc: 'Eviniz ve eşyalarınız güvende olsun.' },
  { name: 'Seyahat Sağlık', desc: 'Yurt dışı seyahatlerinizde sağlık güvencesi.' },
  { name: 'Yabancı Sağlık', desc: "Türkiye'de ikamet eden yabancılar için sağlık sigortası." },
  { name: 'Ferdi Kaza Sigortası', desc: 'Kazalardan sonra vefat, maluliyet ya da yaralanma gibi durumlarda size veya yakınınıza maddi destek sağlar.' },
];

let cache = { data: null, ts: 0 };

function stripTags(html) {
  return html
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseBranches(html) {
  // Ürün kartları "Sigorta Çözümlerimiz" başlığından sonraki <h3> (isim) + ilk <p> (açıklama)
  // ikilileriyle yer alıyor; "Neden X?" alt başlıkları <h4> olduğu için eşleşmeye girmiyor.
  const results = [];
  const re = /<h3[^>]*>([\s\S]*?)<\/h3>\s*(?:<p[^>]*>([\s\S]*?)<\/p>)?/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const name = stripTags(m[1]);
    const desc = m[2] ? stripTags(m[2]) : '';
    if (!name || name.length > 60) continue;
    results.push({ name, desc });
  }
  return results;
}

module.exports = {
  async findAll() {
    const now = Date.now();
    if (cache.data && now - cache.ts < CACHE_TTL_MS) return cache.data;
    try {
      const res = await fetch(SOURCE_URL, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (!res.ok) throw new Error('status ' + res.status);
      const html = await res.text();
      const parsed = parseBranches(html);
      if (parsed.length >= 3) {
        cache = { data: parsed, ts: now };
        return parsed;
      }
      throw new Error('parse yielded too few items');
    } catch (err) {
      // Canlı site alınamazsa önbellek varsa onu, yoksa statik yedeği döndür
      return cache.data || FALLBACK;
    }
  },
};
