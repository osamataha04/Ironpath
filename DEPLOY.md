# 🚀 دليل النشر على GitHub Pages - أوامر جاهزة للنسخ

## الخطوة 1: ادخل لمجلد المشروع
```bash
cd /home/osama-taha/Documents/Ironpath
```

## الخطوة 2: تأكد إن Git مثبت
```bash
git --version
```
لو ظهر رقم (مثل: git version 2.43.0)، يبقى Git شغال ✅

**لو Git مش مثبت، نزله بالأمر ده:**
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install git

# Fedora
sudo dnf install git
```

## الخطوة 3: هيّأ Git في المجلد
```bash
git init
```

## الخطوة 4: ضيف كل الملفات
```bash
git add .
```

## الخطوة 5: اعمل commit (احفظ التغييرات)
```bash
git commit -m "IronPath - Gym & Diet Planner"
```

## الخطوة 6: غيّر اسم الـ branch لـ main
```bash
git branch -M main
```

## الخطوة 7: اربط المشروع بالـ Repository على GitHub
```bash
git remote add origin https://github.com/osamataha04/Ironpath.git
```

## الخطوة 8: ارفع الكود!
```bash
git push -u origin main
```

---

## 🔑 لما Git يسألك عن Username و Password:

### Username:
```
osamataha04
```

### Password:
**لازم تعمل Personal Access Token (مش الباسورد العادي)**

#### طريقة عمل Token:

1. افتح اللينك ده في المتصفح:
   ```
   https://github.com/settings/tokens
   ```

2. اضغط **"Generate new token (classic)"**

3. في خانة **"Note"** اكتب:
   ```
   Ironpath
   ```

4. في **"Expiration"** اختار:
   ```
   90 days
   ```

5. علّم على **"repo"** (كل الخيارات تحته)

6. اضغط **"Generate token"** في الأسفل

7. **انسخ التوكن اللي ظاهر** (هيظهر مرة واحدة بس!)
   - التوكن بيبدأ بـ `ghp_`
   - احفظه في مكان آمن

8. لما Git يسألك عن **Password**، الصق التوكن هنا

---

## 🚀 الخطوة 9: فعّل GitHub Pages

### الطريقة الأولى: من الموقع (أسهل)

1. افتح اللينك ده:
   ```
   https://github.com/osamataha04/Ironpath/settings/pages
   ```

2. تحت **"Source"** اختار:
   ```
   GitHub Actions
   ```

3. استنى 1-2 دقيقة

4. الموقع هيكون جاهز على:
   ```
   https://osamataha04.github.io/Ironpath/
   ```

---

## 📱 الخطوة 10: شارك الموقع!

**اللينك بتاعك:**
```
https://osamataha04.github.io/Ironpath/
```

شاركه مع أي حد - يشتغل على تليفون، تابلت، ولابتوب! 🎉

---

## 🔄 لو عايز تعدّل حاجة بعدين:

### عدّل الكود، ثم:
```bash
git add .
git commit -m "وصف التعديل"
git push
```

GitHub هيعمل build و deploy تلقائي خلال 1-2 دقيقة!

---

## ❌ لو حصل خطأ:

### خطأ: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/osamataha04/Ironpath.git
```

### خطأ: "Authentication failed"
- تأكد إنك استخدمت Personal Access Token (مش الباسورد)
- اعمل Token جديد من: https://github.com/settings/tokens

### خطأ: "Updates were rejected"
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

---

## 📋 ملخص الأوامر (كلها مرة واحدة):

```bash
# ادخل للمجلد
cd /home/osama-taha/Documents/Ironpath

# هيّأ Git
git init
git add .
git commit -m "IronPath - Gym & Diet Planner"
git branch -M main

# اربط بـ GitHub
git remote add origin https://github.com/osamataha04/Ironpath.git

# ارفع الكود
git push -u origin main
```

---

## ✅ بعد ما تخلص:

1. روح على: https://github.com/osamataha04/Ironpath/settings/pages
2. اختار **"GitHub Actions"** من Source
3. استنى 1-2 دقيقة
4. افتح: https://osamataha04.github.io/Ironpath/

**مبروك! 🎉 الموقع بتاعك دلوقتي على الإنترنت!**

---

## 💡 نصائح:

- **لو نسيت الـ Token:** اعمل واحد جديد من نفس اللينك
- **لو عايز تغير اسم الـ Repository:** غيّر `base: '/Ironpath/'` في vite.config.js
- **لو الموقع مش شغال:** شوف الـ Actions tab في GitHub: https://github.com/osamataha04/Ironpath/actions

---

**أي مشكلة؟ قولي وأنا هساعدك! 💪**
