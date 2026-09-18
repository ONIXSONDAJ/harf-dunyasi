# Harf Dünyası 🦉

1. sınıfa yeni başlayan çocuklar için harf öğrenme uygulaması. Hem ders hem oyun.

## Nasıl açılır?

`index.html` dosyasına çift tıklayın. Chrome veya Edge ile açılması yeterlidir, kurulum ve internet gerekmez.
(Yazı tipi internet varsa Google Fonts üzerinden gelir, yoksa sistem yazı tipi kullanılır.)

Tablet veya telefonda kullanmak için klasörü telefona kopyalayıp `index.html` dosyasını Chrome ile açabilirsiniz.

## Neler var?

**Harfleri Öğren (ders)**
- Harfler MEB 1. sınıf ilk okuma-yazma programındaki grup sırasıyla dizili:
  1. e l a k i n
  2. o m u t ü y
  3. ö r ı d s b
  4. z ç g ş c p
  5. h v ğ f j
- Her harfte: büyük/küçük hali, sesli/sessiz rozeti, sesini dinleme, 3 örnek kelime (resimli, dokununca okunur)
- Harfi yazma alanı: gri harfin üstünden parmakla veya fareyle geçilir
- Öğrendim butonu ile yıldız kazanılır

**Oyunlar**
- 🔊 Sesi Dinle, Harfi Bul: söylenen harfi 4 seçenekten bul
- 🖼️ Hangi Harfle Başlar: resimdeki şeyin baş harfini bul
- 🃏 Büyük-Küçük Eşleştir: hafıza oyunu, büyük harfi küçüğüyle eşleştir
- 🎈 Balon Patlat: 45 saniyede hedef harfli balonları patlat

Her oyun sonunda 1-3 yıldız kazanılır, yıldızlar ve öğrenilen harfler tarayıcıda saklanır.

**Ayarlar**
- Çocuğun adı (ana ekranda selamlama)
- Okulda kaçıncı harf grubunda oldukları: oyunlarda yalnızca o gruba kadar olan harfler çıkar
- Türkçe sesli okuma kontrolü

## Sesli okuma

Uygulama harfleri ve kelimeleri Windows üzerindeki Türkçe sesle okur (Microsoft Tolga).
Başka bir bilgisayarda Türkçe ses yoksa: Windows Ayarlar → Zaman ve Dil → Dil → Türkçe dil paketini
"Metin okuma" seçeneğiyle yükleyin.

## Dosyalar

- `index.html` – ekranlar
- `style.css` – görünüm
- `app.js` – harf verisi, ders ve oyun mantığı

Örnek kelimeleri değiştirmek için `app.js` içindeki `KELIMELER` listesini düzenlemeniz yeterli.
