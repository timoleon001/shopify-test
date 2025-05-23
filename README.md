# Тестовий Shopify-магазин

Це тестовий проєкт для демонстрації роботи з Shopify CLI, зміни тем, встановлення екстеншенів та реалізації функціоналу "Wishlist".

## Виконані завдання
1. Створено тестовий Shopify-магазин.
2. Встановлено Shopify CLI та підключено до магазину.
3. Внесено базові зміни.
4. Змінено тему на "Sense", додано екстеншен BSS Labels & Badges.
5. Реалізовано функціонал "Wishlist" з використанням localStorage та Shopify AJAX API.
6. Код структуровано, додано коментарі, створено цей README.

## Встановлення
1. Встановіть Shopify CLI: `npm install -g @shopify/cli @shopify/theme`.
2. Виконайте `shopify login` для підключення до магазину.
3. Завантажте тему: `shopify theme pull`.
4. Запустіть локальний сервер: `shopify theme dev`.

## Використання Wishlist
- Натисніть кнопку "Додати до бажаного" на картці товару.
- Перегляньте список на сторінці `/pages/wishlist` посилання є у шапці сайту біля корзини.
- На сторінці бажаного є можливість видалити товар з бажаного.

## Посилання
- Магазин: [\[0avy01-un.myshopify.com\]](https://0avy01-un.myshopify.com/)
- Репозиторій: [\[github\]](https://github.com/timoleon001/shopify-test/)