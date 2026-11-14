# İlk Ders: Claude Code ile İlk 15 Dakika

Claude Code öğrenmeye başlamak için büyük bir projeye ihtiyacın yok. Bu kısa
ders, temiz bir klasörde güvenli bir ilk çalışma akışı kurar.

## Bu derste ne öğreneceksin?

- Claude Code'u bir proje klasöründe başlatmayı
- Projeye kalıcı bağlam eklemek için `CLAUDE.md` oluşturmayı
- İlk isteği küçük ve doğrulanabilir bir görev olarak yazmayı
- Yapılan değişikliği kontrol edip bir sonraki adıma geçmeyi

## 1. Proje klasörünü hazırla

```bash
mkdir claude-ilk-proje
cd claude-ilk-proje
claude
```

Claude Code açıldığında önce projeyi tanımasını iste:

```text
Bu klasörü kısaca incele. Henüz dosya değiştirme; mevcut yapıyı ve dikkat etmem gereken noktaları özetle.
```

## 2. Kalıcı bağlam ekle

```text
Bu proje için kısa bir CLAUDE.md oluştur. Ama önce önerdiğin kuralları listele ve onayımı bekle.
```

`CLAUDE.md`, tekrar eden tercihleri ve proje kurallarını her oturumda yeniden
anlatmak zorunda kalmamanı sağlar.

## 3. İlk görevi küçük tut

```text
README.md dosyasına projenin amacını anlatan üç cümle ekle.
Değişiklikten önce planı göster, sonra dosyayı güncelle ve sonucu özetle.
```

İyi bir ilk görev; kapsamı belli, sonucu gözle görülebilen ve kolayca geri
alınabilen bir görevdir. İlk oturumda büyük bir refaktör istemek yerine küçük
bir döngüyü tamamlamak daha öğreticidir.

## 4. Kontrol listesi

- [ ] Claude'dan değişiklik öncesi kısa plan istedim.
- [ ] `CLAUDE.md` kurallarını projeme göre düzenledim.
- [ ] Değişen dosyaları ve diff'i kontrol ettim.
- [ ] Uygun test veya doğrulama komutunu çalıştırdım.

## English: Your first 15 minutes with Claude Code

You do not need a large project to start. Open a clean folder, ask Claude Code
to inspect it without editing, then create a small `CLAUDE.md` with the rules
you want to keep across sessions.

Keep the first task narrow and verifiable:

```text
Add three sentences to README.md describing this project.
Show me a short plan first, then make the change and summarize the result.
```

The goal of this first lesson is not to automate everything. It is to complete
one safe loop: inspect, plan, change, and verify.
