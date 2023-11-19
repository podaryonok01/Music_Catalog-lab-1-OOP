# Music_Catalog-lab-1-OOP
Данный репозиторий содержит в себе два проекта - клиентскую и серверную части приложения "Каталог музыки".

## MusicCatalogServer
Приложение .NET
Сервер запускается на http://127.0.0.1:2407
Настройки подключения к базе данных: в musicCatalogServer/ConnectionDataBase.

## MusicCatalogClient
React - приложение.
Для установки зависимостей: npm install
Для запуска: npm start

## БД
Используемая СУБД - MySQL.
### Описание структуры БД:
#### Artist
- Id (INT) - PK
- Name (CHAR(30))

#### Album
- Id (INT) - PK
- Name (CHAR(30))
- IdArtist (INT) - FK
- DateRealise (DATE)

#### Genre
- Id (INT) - PK
- Name (CHAR(30))

#### Song
- Id (INT) - PK
- Name (CHAR(30))
- IdGenre (INT) - FK
- IdAlbum (INT) - FK

#### Collection
- Id (INT) - PK
- Name (CHAR(30))

#### Collection_Song
- Id (INT) - PK
- ICollection (INT) - FK
- IdSong (INT) - FK