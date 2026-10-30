---
title: "Tarayıcı Üzerinde Gerçek Zamanlı El ve Yüz İzleme: ENSIGHT Nasıl Çalışıyor?"
date: "2026-03-15T12:00:00Z"
description: "Web kamerası görüntülerini hiçbir harici sunucuya göndermeden, tamamen istemci tarafında MediaPipe ve donanım hızlandırmalı WebGL ile gerçek zamanlı işleme mimarisi."
coverImage: ""
category: "Yapay Zeka & Görüntü İşleme"
tags: ["Computer Vision", "JavaScript", "Real-Time", "ENSIGHT"]
draft: false
---

## Giriş

Günümüzde bilgisayarlı görü (computer vision) çözümleri genellikle yüksek GPU maliyetine sahip uzak sunucularda çalıştırılır. Ancak kullanıcı gizliliği ve sıfır gecikme söz konusu olduğunda, tüm işlemin **doğrudan tarayıcıda** yapılması çok daha avantajlıdır.

Geliştirdiğim **ENSIGHT** projesi, kamera görüntüsünü hiçbir harici sunucuya iletmeden doğrudan cihaz üzerinde işleyen bir jest tanıma ve yüz takip sistemidir.

## Mimari ve Temel Bileşenler

Sistem temelde 3 ana ayaktan oluşur:

1. **Giriş Katmanı:** WebRTC ve `navigator.mediaDevices.getUserMedia` ile video akışının alınması.
2. **Yapay Zeka Modeli:** Tarayıcıda WebGL donanım hızlandırmasından faydalanan 21 eklemli el iskeleti tespiti.
3. **Jest Ayrıştırma Motoru:** Açı ve mesafe vektörlerini gerçek zamanlı hesaplayarak parmak kıvrımlarını aksiyona dönüştürme.

```javascript
// Örnek: Başparmak ve işaret parmağı mesafesiyle 'Tıklama' jesti tespiti
function detectPinch(thumbTip, indexTip) {
  const distance = Math.hypot(
    thumbTip.x - indexTip.x,
    thumbTip.y - indexTip.y,
    thumbTip.z - indexTip.z
  );
  return distance < 0.05; // 5cm eşik değeri
}
```

## Sonuç

ENSIGHT sayesinde havada çizim yapabilir, sadece elinizi kaydırarak slayt değiştirebilir veya göz kırparak fotoğraf çekebilirsiniz. Hem sıfır sunucu maliyeti hem de mutlak gizlilik garanti edilmiş olur.
