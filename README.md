## Article_django_React
### 主旨
這個一個利用Django做為後端及React作為前端的小型個人專案，旨在讓一個簡單的API方式來串接一個簡單的React前端，藉以來作為簡易練習。

### 使用後端
#### 運行
可以先行使用下列指令安裝python環境確保可以在相同環境中運行。
```
pip install -r requirements.txt
```
在使用上，我們有著前端與後端的區別，運作後端的時候要進到django_map_sea第一層有著manage.py檔的資料夾中，使用下列指令
```
python3 manage.py runserver <port number>
```
一般若沒有指定，django會運行在port 8000上。
#### 建立superuser
若有需要創造一個新的管理者，可以使用下列指令
```
python3 manage.py createsuperuser
```
輸入你的使用者帳號密碼即可，若是輸入沒看到字元這是正常的，這是本來預設的狀況，並不是你的電腦當機。

基本上建立之後你就可以使用整個資料後端API的功能了

### 使用前端
前端的話要進到[book_project](https://github.com/JunLin525/Article-Django-React-/tree/main/book_project)資料夾中，先做下列指令安裝環境
```
npm install
```
等待安裝完成後進到下一階段，使用下列指令就可以運行了。
```
npm start
```
一般而言會運行在port 3000上，若有指令查詢的需求，可以到package.json裡面查看跟修改。


### 介紹

#### [New_book](https://github.com/JunLin525/Article-Django-React-/tree/main/New_book)
主要其中是一個放置讀書摘要的位置，目前裡面可以對個別文章做檢視，旨在建立一個文章的心得摘要整理。目前有利用django api 的filter建立一個簡易的查詢系統。

#### [accounts](https://github.com/JunLin525/Article-Django-React-/tree/main/accounts)
在此專案中建立了一個使用者表單，此處沒有使用Django內建的使用者表單，自己使用額外的，主要用來存取相關客製化使用者的訊息。

#### [book_project](https://github.com/JunLin525/Article-Django-React-/tree/main/book_project)
大部分的前端都建立在此，可以到此資料夾中使用npm start來啟動相關程式，可以在port 3000上面找到這個網站。

#### [books](https://github.com/JunLin525/Article-Django-React-/tree/main/books)
一個推薦新書的app，主要用來建立自己看到的一些新書，把相關資訊出版社的資料整合，放上去可以做相關的資訊統合。

#### [covers](https://github.com/JunLin525/Article-Django-React-/tree/main/covers)
一個可以存取圖片的外部資料夾，透過settings.py裡面設定，目前可以透過後台直接存取圖片，還沒有接上API怎樣存取。

#### [django_map_sea](https://github.com/JunLin525/Article-Django-React-/tree/main/django_map_sea)
主要拿來建立整個專案的Url跟settings.py，若要設定任何東西都可以到此資料夾中的settings.py中新增。

#### [map](https://github.com/JunLin525/Article-Django-React-/tree/main/map)
內部有一個食物店家的api，分別記錄自己喜歡的店家、星等與介紹。目前還沒接到前端上面。


