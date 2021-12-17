# HTML Reserved Colors

![Cover](https://cdn.dribbble.com/users/3800131/screenshots/17078957/___2021-12-05___10.44.52.png)

[> HTML Reserved Colors](https://color-names.netlify.app/)

### 簡介
雖然知道可以透過 HTML 的 red, white, black 等顏色單字而非色票 (color code) 來使用顏色，一直以來開發上都是在找好適合的顏色後，使用 Sass 將色票紀錄到變數再做使用，不過最近接觸到 w3schools 的 [HTML Color Names](https://www.w3schools.com/tags/ref_colornames.asp) 才知道有將近 140 種網頁保留色，覺得似乎記住或是有系統的管理這些顏色有助於提升開發效率，因此決定做一個能夠幫助開發、同時也能作為美術作品來展示的 web app。色卡的外觀設計上，聯想到在 2020 年風靡一時的新擬物風格 Neumorphism (即 New Skeuomorphism)，對於使用亮暗陰影就能做出 3D 視覺效果而深受啟發，未曾嘗試過的好奇心驅使我完成了這次的作品。

### 外觀與互動設計
- 以 Neumorphism 新擬物風格作為主視覺，再加上可愛的圓角，呈現出比 [Pantone 色票](https://www.pantone.com/media/wysiwyg/pantone-color-swatches-palette-fashion-color-report-fall-2017-new-york.jpg) 更為討喜、耐看的色票卡片
- 顏色名稱的字體大小和上下間距，依照長度做三段漸進調整
- 封鎖不必要的文字選取、拖拉和右鍵點擊操作，並設計雙擊左鍵 (觸控設備點兩下) 直達頁首
- 在鼠標碰觸到顏色名稱、HEX/RBG 碼時，更換鼠標為滴管圖案以提示可複製區域，同時也將預設和客製化鼠標改得稍大一些，且統一顏色為較淡一點的黑色 (`#222`)
- 點擊複製顏色名稱、HEX/RBG 碼時，加入複製成功的音效，提升使用體驗
- 將網站設計為可在網址後加入 Query String 參數 `colors`，實現方便的顏色分享功能 ([範例](https://color-names.netlify.app/?colors=darkorange+indianred+sandybrown+seagreen+darkseagreen+lightslategray))

### 開發紀錄
- 自製 [色彩資料 API](https://raw.githubusercontent.com/rayc2045/html-reserved-colors/main/src/api/colors.json)
- 使用大小僅 5.6kb 的 [petite-vue](https://github.com/vuejs/petite-vue)，開發無需 build
- 排版採手機優先 (mobile first)，並使用 Flexbox 讓色票卡片達到自適應效果，以及使用 `rem` 和 `em` 作為元件單位，達成在任何尺寸裝置上 (120 吋超大螢幕也 ok！)，保持一致絕佳比例的響應式設計
- 將網頁元素預設為不可見 (`opacity: 0`)，等資料掛載後再配合動畫做淡入 (fade in)，讓動畫的銜接更為順暢
- 使用優雅的無聲定時播放音效方式來製造音檔緩存