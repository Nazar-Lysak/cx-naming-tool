# Naming Tool Widget

React віджет з множинними варіантами білду для різних сценаріїв використання.

## 📦 Структура білдів

Проект підтримує 3 варіанти білду з одного вихідного файлу (`src/main.tsx`):

1. **CDN (IIFE)** - автономний bundle з усіма залежностями
2. **Standalone** - SPA білд для окремого застосунку  
3. **Demo** - SPA білд для демо-сторінки

## 🚀 Команди

### Розробка
```bash
npm run dev          # Запустити dev сервер
npm run lint         # Перевірити код
```

### Білд
```bash
npm run build:cdn         # Зібрати CDN версію
npm run build:standalone  # Зібрати Standalone версію
npm run build:demo        # Зібрати Demo версію
npm run build:all         # Зібрати всі версії паралельно
npm run clean             # Очистити dist папку
```

### Перегляд
```bash
npm run preview          # Переглянути SPA білд
npm run preview:cdn      # Переглянути CDN версію
npx serve dist/standalone # Запустити тестовий standalone
npx serve dist/demo      # Запустити демо
```

## 🔧 Використання CDN версії

Підключіть один скрипт та контейнер:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Naming Tool Widget - Standalone</title>
    <link rel="stylesheet" href="dist/cdn/namingToolWidget.css">
  </head>
  <body>
    <div id="naming-tool-widget"></div>

    <script 
        src="dist/cdn/namingToolWidget.iife.js"
        type="text/javascript" 
        data-domain-script="01951312-f7ae-74cf-bb0c-c2442167448c"
        data-language="en-gb"  
        defer
    ></script>
  </body>
</html>
```

Віджет автоматично рендериться у контейнер з `id="naming-tool-widget"` або `id="root"`.

### Структура після білду

```
dist/
├── cdn/
│   ├── namingToolWidget.iife.js
│   └── namingToolWidget.css
├── standalone/
│   ├── index.html
│   ├── index.js
│   └── index.css
└── demo/
    ├── index.html
    ├── index.js
    └── index.css
```

### Варіанти деплою

#### 1. **Netlify / Vercel**

```bash
# 1. Зберіть всі версії
npm run build:all

```
