# EduConnect Maroc - منصة إدارة المدارس

## 📋 نظرة عامة

EduConnect Maroc هي منصة شاملة لإدارة المدارس في المغرب، مصممة خصيصاً لربط المعلمين والآباء والطلاب من خلال تقنية متطورة وسهلة الاستخدام.

## 🌟 الميزات الرئيسية

- ✅ دعم كامل للغات الثلاث: العربية، الفرنسية، الإنجليزية
- ✅ دعم RTL/LTR تلقائي
- ✅ تصميم متجاوب (Responsive)
- ✅ أنيميشن متقدمة
- ✅ نظام إشعارات
- ✅ واجهة مستخدم حديثة
- ✅ تأثيرات تفاعلية

## 📁 هيكل الملفات

```
educonnect-maroc/
├── index.html          # الصفحة الرئيسية
├── features.html       # صفحة الميزات
├── pricing.html        # صفحة الأسعار
├── contact.html        # صفحة الاتصال
├── main.js            # ملف JavaScript الرئيسي
├── README.md          # هذا الملف
├── .htaccess          # إعدادات Apache
└── resources/         # مجلد الصور (اختياري)
```

## 🚀 التثبيت والتشغيل

### المتطلبات

- خادم ويب (Apache, Nginx, أو أي خادم HTTP)
- متصفح حديث يدعم ES6+
- اتصال بالإنترنت (للمكتبات الخارجية)

### خطوات التثبيت

1. **حمّل جميع الملفات**
   ```bash
   # انسخ جميع الملفات إلى مجلد المشروع
   cp -r educonnect-maroc/ /var/www/html/
   ```

2. **تأكد من الصلاحيات**
   ```bash
   chmod -R 755 /var/www/html/educonnect-maroc/
   ```

3. **افتح في المتصفح**
   ```
   http://localhost/educonnect-maroc/
   أو
   http://yourdomain.com/
   ```

## 🔧 الإعدادات

### تغيير اللغة الافتراضية

في ملف `main.js`، سطر 13:
```javascript
currentLanguage: 'ar',  // غيّر إلى 'en' أو 'fr'
```

### تخصيص الألوان

في أي ملف HTML، قسم `<style>`:
```css
:root {
    --primary-teal: #2C5F5D;    /* اللون الأساسي */
    --terracotta: #C4704A;      /* لون ثانوي */
    --cream: #F7F5F3;           /* لون الخلفية */
    --gold: #D4AF37;            /* لون التمييز */
}
```

## 📚 المكتبات المستخدمة

جميع المكتبات تُحمّل من CDN:

- **Tailwind CSS** v3.x - للتصميم
- **Anime.js** v3.2.1 - للأنيميشن
- **p5.js** v1.7.0 - للخلفيات التفاعلية
- **Splide.js** v4.1.4 - للسلايدر
- **ECharts** v5.4.3 - للرسوم البيانية

## 🌐 دعم المتصفحات

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 📱 التوافق مع الأجهزة

- 📱 موبايل (320px+)
- 📱 تابلت (768px+)
- 💻 ديسكتوب (1024px+)
- 🖥️ شاشات كبيرة (1440px+)

## 🔍 استكشاف الأخطاء

### اللغات لا تتغير

1. تأكد من تحميل `main.js` في نهاية `<body>`
2. افتح Console (F12) وتحقق من الأخطاء
3. تأكد من وجود IDs في HTML

### الأنيميشن لا تعمل

1. تحقق من اتصال الإنترنت (المكتبات من CDN)
2. تأكد من تحميل جميع المكتبات قبل `main.js`

### التصميم يبدو مكسوراً

1. تحقق من تحميل Tailwind CSS
2. امسح الكاش (Ctrl+Shift+R)

## 📞 معلومات الاتصال

- **البريد الإلكتروني**: contact@educonnect.ma
- **الهاتف**: +212 5 22 123 456
- **الموقع**: https://educonnect.ma

## 📄 الترخيص

© 2024 EduConnect Maroc. جميع الحقوق محفوظة.

## 🤝 المساهمة

للمساهمة في تطوير المشروع:

1. Fork المشروع
2. أنشئ فرع جديد (`git checkout -b feature/amazing-feature`)
3. Commit التغييرات (`git commit -m 'Add amazing feature'`)
4. Push إلى الفرع (`git push origin feature/amazing-feature`)
5. افتح Pull Request

## 📝 ملاحظات للتطوير

### إضافة صفحة جديدة

1. انسخ `index.html` كقالب
2. غيّر المحتوى
3. أضف رابط في Navigation
4. أضف الترجمات في `main.js`

### إضافة ترجمة جديدة

في `main.js`:
```javascript
translations: {
    ar: {
        'new-id': 'النص بالعربية'
    },
    en: {
        'new-id': 'English text'
    },
    fr: {
        'new-id': 'Texte français'
    }
}
```

في HTML:
```html
<p id="new-id">النص الافتراضي</p>
```

## 🔐 الأمان

- جميع النماذج تحتاج إلى backend للتعامل مع البيانات
- لا تُخزن بيانات حساسة في JavaScript
- استخدم HTTPS في الإنتاج
- قم بتنظيف المدخلات قبل الإرسال

## ⚡ تحسين الأداء

- استخدم Lazy Loading للصور
- ضغط ملفات CSS و JS في الإنتاج
- تفعيل Gzip على الخادم
- استخدام CDN للملفات الثابتة

## 📊 التحليلات

لإضافة Google Analytics:
```html
<!-- في <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🌍 الاستضافة الموصى بها

- **للتطوير**: XAMPP, WAMP, MAMP
- **للإنتاج**: 
  - Vercel (مجاني)
  - Netlify (مجاني)
  - GitHub Pages (مجاني)
  - DigitalOcean
  - AWS S3 + CloudFront

## 📈 الخطوات القادمة

- [ ] إضافة Backend (Node.js/PHP)
- [ ] نظام تسجيل الدخول
- [ ] قاعدة بيانات
- [ ] API للتواصل
- [ ] لوحة تحكم إدارية
- [ ] تطبيق موبايل

---

صنع بـ ❤️ في المغرب 🇲🇦