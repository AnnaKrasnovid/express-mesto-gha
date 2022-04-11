[![Tests](https://github.com/yandex-praktikum/express-mesto-gha/actions/workflows/tests-13-sprint.yml/badge.svg)](https://github.com/yandex-praktikum/express-mesto-gha/actions/workflows/tests-13-sprint.yml) [![Tests](https://github.com/yandex-praktikum/express-mesto-gha/actions/workflows/tests-14-sprint.yml/badge.svg)](https://github.com/yandex-praktikum/express-mesto-gha/actions/workflows/tests-14-sprint.yml)


# Проектная работа "Mesto" (backend)
Написана в рамках обучения на курсе веб-разработчик [Яндекс-практикума](https://practicum.yandex.ru/profile/web/), 13-14 спринты.

## Описание:
**Mesto** -это  интерактивная страница, куда можно добавлять фотографии, удалять их и ставить лайки.  
Репозиторий для приложения проекта `Mesto` `backend/`. C возможностями: авторизации и регистрации пользователей, операции с карточками и пользователями.

## Функциональность:
* регистрация и авторизация пользователя
* создание и удаление своих карточек с фотографиями
* добавления и удаление лайка
* редактирование профиля и аватарки
* валидация данных с помощью Celebrate и регулярных выражений
* централизованная обработка ошибок

## Используемые технологии: 
* Node.js
* Express.js
* MongoDB
* Mongoose
* Celebrate
* Winston 

## Инструкция по установке:
Клонируем репозиторий:  
```
git clone https://github.com/AnnaKrasnovid/express-mesto-gha
```  
Переходим в папку проекта:  
```
cd express-mesto-gha
```  
Устанавливаем зависимости:  
```
npm install
```  
Запускаем MongoDB:  
```
mongod
```   
Запускаем сервер:  
```
npm run start
```  
Запускаем сервер с hot-reload:  
```
npm run dev
```  
