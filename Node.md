# Node.js Proje Fikirleri

## 🚀 Başlangıç Seviyesi (Temel Konseptler & Basit Projeler)
Bu seviyede temel Node.js, Express.js, REST API, CRUD işlemleri ve dosya okuma/yazma gibi konulara odaklanabilirsin.

### 1. Not Defteri API (Basit CRUD API)
**Kullanılan Teknolojiler:** Node.js, Express.js, JSON dosyası  
**Özellikler:**
- Kullanıcılar not ekleyebilir, silebilir ve düzenleyebilir.
- Notlar JSON dosyasında saklanır.

**Geliştirme Konuları:**
- Express.js ile REST API oluşturma
- Dosya işlemleri (fs modülü)
- Middleware kullanımı

### 2. Terminal To-Do Uygulaması
**Kullanılan Teknolojiler:** Node.js (fs modülü, process.argv)  
**Özellikler:**
- Kullanıcılar terminal üzerinden görev ekleyebilir/silebilir.
- Veriler bir JSON dosyasında tutulur.

**Geliştirme Konuları:**
- CLI uygulaması geliştirme
- JSON verileri okuma/yazma
- Komut satırı argümanlarını kullanma

### 3. Hava Durumu API (API Entegrasyonu)
**Kullanılan Teknolojiler:** Node.js, Axios, OpenWeatherMap API  
**Özellikler:**
- Kullanıcı bir şehir adı girerek hava durumunu öğrenebilir.

**Geliştirme Konuları:**
- Harici API'lere istek yapma (Axios)
- JSON verisi işleme
- Çevresel değişkenler (dotenv kullanımı)

---

## 🔥 Orta Seviye (Gerçek Dünya Senaryoları & Veritabanı Kullanımı)
Bu seviyede MongoDB, PostgreSQL, Authentication, WebSockets gibi konulara odaklanabilirsin.

### 4. Blog API (JWT Authentication ile Kullanıcı Yönetimi)
**Kullanılan Teknolojiler:** Node.js, Express.js, MongoDB (Mongoose), JWT  
**Özellikler:**
- Kullanıcılar kayıt olabilir, giriş yapabilir.
- JWT token ile kimlik doğrulama yapılır.
- Kullanıcılar blog yazıları oluşturabilir.

**Geliştirme Konuları:**
- MongoDB ile veri saklama
- JWT ile kimlik doğrulama
- Middleware kullanımı (auth middlewares)

### 5. Gerçek Zamanlı Chat Uygulaması (WebSocket ile)
**Kullanılan Teknolojiler:** Node.js, Express.js, Socket.io  
**Özellikler:**
- Kullanıcılar gerçek zamanlı mesajlaşabilir.
- Her kullanıcı için özel bir rumuz belirlenebilir.

**Geliştirme Konuları:**
- WebSocket kullanımı (Socket.io ile gerçek zamanlı iletişim)
- Oturum yönetimi
- Basit frontend entegrasyonu (HTML, CSS, JavaScript)

### 6. URL Kısaltma Servisi (Bit.ly Klonu)
**Kullanılan Teknolojiler:** Node.js, Express.js, MongoDB  
**Özellikler:**
- Kullanıcılar uzun URL'leri kısaltabilir.
- Kısaltılan URL'ler veritabanında saklanır.

**Geliştirme Konuları:**
- Veritabanı CRUD işlemleri (MongoDB)
- Express router ile REST API geliştirme
- URL yönlendirme işlemleri

---

## 🚀 İleri Seviye (Büyük Ölçekli Sistemler & Mikroservisler)
Bu seviyede Redis, RabbitMQ, Mikroservisler, Docker, Kubernetes, GraphQL gibi ileri düzey konulara odaklanabilirsin.

### 7. E-Ticaret API (Sepet & Ödeme Sistemi Entegrasyonu)
**Kullanılan Teknolojiler:** Node.js, Express.js, PostgreSQL, Redis, Stripe  
**Özellikler:**
- Kullanıcı kayıt/giriş işlemleri
- Ürün ekleme/çıkarma
- Sepet yönetimi
- Stripe ile ödeme işlemleri

**Geliştirme Konuları:**
- PostgreSQL ile ilişkisel veritabanı kullanımı
- Redis ile önbellekleme
- Stripe entegrasyonu

### 8. Mikroservis Mimarisi ile Araç Takip Sistemi
**Kullanılan Teknolojiler:** Node.js, Express.js, RabbitMQ, PostgreSQL, Redis, Kafka  
**Özellikler:**
- 25.000 araç belirli aralıklarla konum bilgisi gönderir.
- Mikroservisler ile veriler işlenir ve saklanır.
- Belirli tarihler arasında hangi aracın geçtiği sorgulanabilir.

**Geliştirme Konuları:**
- Mikroservis mimarisi
- RabbitMQ veya Kafka ile mesaj kuyruğu yönetimi
- Redis ile veri önbellekleme
- Grafana + Prometheus ile sistem izleme

### 9. Gerçek Zamanlı Kripto Para Takip Uygulaması
**Kullanılan Teknolojiler:** Node.js, Express.js, WebSockets, Binance API  
**Özellikler:**
- Gerçek zamanlı fiyat değişimlerini gösterir.
- Kullanıcı belirli bir fiyata ulaştığında bildirim alabilir.

**Geliştirme Konuları:**
- WebSockets ile canlı veri yayını
- Dış API verisi çekme ve işleme
- Redis ile cache yönetimi

### 10. Yapay Zeka Destekli Chatbot (OpenAI API ile)
**Kullanılan Teknolojiler:** Node.js, Express.js, OpenAI API (GPT), MongoDB  
**Özellikler:**
- Kullanıcının sorularını yanıtlayan bir AI botu.
- OpenAI API üzerinden yanıtlar alınıyor.

**Geliştirme Konuları:**
- API entegrasyonu (OpenAI API)
- MongoDB ile kullanıcı geçmişi saklama
- Gerçek zamanlı yanıtlar (WebSockets ile)

