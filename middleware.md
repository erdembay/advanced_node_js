**Middleware Çeşitleri**

- ***Global Middleware:*** Tüm rotalarda çalışan middleware'ler. `app.use()` ile tanımlanır. 
- ***Route-Spesific Middleware:*** Sadece belirli bir rotada çalışan middleware'ler.
```
app.get('/route', (req, res, next) => {
    console.log('Bu sadece /route için çalışır');
    next();
});
```