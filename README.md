# کارت محصول (Product Card)

## اجزای استفاده‌شده:

### 1. **کارت (Card Component)**
- استفاده از کمپوننت `Card` از DIG Design System
- ساختار آمادهٔ سرصفحه، بدنه و پاصفحه
- پشتیبانی از padding و gap پیش‌فرض

### 2. **آیکون سبد خرید (Shopping Cart Icon)**
- آیکون `shopping-cart` از DIGCHE (مختص e-commerce)
- استایل Linear برای سازگاری با UI حرفه‌ای
- رنگ‌پذیری با استفاده از `currentColor`

## ویژگی‌ها:

✅ **عنوان محصول** - در قسمت Header  
✅ **قیمت** - نمایش برجسته در Content  
✅ **توصیف اختیاری** - زیر عنوان  
✅ **دکمهٔ خرید** - با آیکون سبد خرید و متن "خرید"  
✅ **callback کاستم** - `onAddToCart` برای مدیریت کلیک  
✅ **پشتیبانی قالب پول** - پارامتر `currency` قابل تنظیم  
✅ **طراحی React** - `'use client'` برای استفاده در Next.js App Router  

## استفاده:

```tsx
<ProductCard
  title="محصول نمونه"
  price={99.99}
  currency="$"
  description="توصیف مختصر محصول"
  onAddToCart={() => console.log('Added to cart!')}
/>
```