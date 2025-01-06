document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");
  const sidebar = document.getElementById("sidebar");
  const labButtons = document.querySelectorAll(".lab-buttons button");

  const labData = {
    lab1: [
      {
        title: "Опис предметного середовища",
        content: `<p>
        <h3>Тема:</h3>Веб-застосунок онлайн магазин кросівок. 
        
  
        <h3>Мета:</h3>
        Створити зручний сайт онлайн магазину кросівок
 
        <h3>Опис Бізнес логіки:</h3>
        Вебсайт має інтуітивно зрозумілий та зручний інтерфейс. На головній сторінці показані новинки та популярні одиниці товару.
        Є окремі категорії з популярними брендами.Також є розділ з лімітованими та ексклюзивними кросівками. 
        Крім того є сторінка з товарами за знижками. 
        Кожен екземпляр представлений катринкою ,назвою та його ціною.
        коли користувач перходить на сторінку товару він може побачити більшу кількість фото,відгуки 
        ,сітку розмірів і кольрів, після чого він може додати товар у корзину в певній кількості 
        і пізніше або замовити товар що знаходиться в корзині або ж видалити його з неї. 
        Є відповідна вкладка , де можна знайти більше іншформації про магазин , електронну адресу 
        та номер для зв'язку. і пізніше або замовити товар що знаходиться в корзині або 
        ж видалити його з неї.Є відповідна вкладка , де можна знайти більше іншформації про магазин ,
        електронну адресу та номер для зв'язку.
        <h3>Скріншот макету головної сторінки</h3>
        <img src="./imglab1/MainScreen.png" alt="">
        </p>`,
      },
      {
        title: "Тема Мета Місце розташування лаби №1",
        content: `<p>
        <h3>Тема:</h3>СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ. РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ в HTML-ДОКУМЕНТІ.
        <h3>Мета:</h3>придбати практичні навички роботи з HTML-документом, таблицями, , зображеннями, посиланнями, списками, формами Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт
        <h3>Місце розташування ЛР №1</h3><a href="https://github.com/romkas228/IS-31_Danuliyk_Roman_Lab1">https://github.com/romkas228/IS-31_Danuliyk_Roman_Lab1</a>
        <h3>Сайт</h3><a href="https://romkas228.github.io/IS-31_Danuliyk_Roman_Lab1/">https://romkas228.github.io/IS-31_Danuliyk_Roman_Lab1/</a>
        <h3>Місце розташування звітнього HTML-документу</h3><a href="https://github.com/romkas228/IS-31_Danuliyk_Roman_updatedReport">https://romkas228.github.io/IS-31_Danuliyk_Roman_updatedReport/</a>
        <h3>Сайт звітнього HTML-документу:</h3><a href="https://romkas228.github.io/IS-31_Danuliyk_Roman_updatedReport/">https://romkas228.github.io/IS-31_Danuliyk_Roman_updatedReport/</a>
        <h3>Місце розташування самостійної роботи №1:</h3><a href="https://github.com/romkas228/IS-31_Danuliyk_Roman_SR1">https://github.com/romkas228/IS-31_Danuliyk_Roman_SR1</a>
        <h3>Сайт самостійної роботи №1:</h3><a href="https://romkas228.github.io/IS-31_Danuliyk_Roman_SR1/">https://romkas228.github.io/IS-31_Danuliyk_Roman_SR1/</a>
        </p>`,
      },
      {
        title: "СТРУКТУРА ДОКУМЕНТА",
        content: `<p>
        <h3>Структура документа Index.html</h3>
        <img src="./imglab1/StructScreen1.png" alt="">
        <img src="./imglab1/StructScreen2.png" alt="">
        <h3>Структура документа Basket.html</h3>
        <img src="./imglab1/SctructScreen3.png" alt="">
        </p>`,
      },
      {
        title: "HTML-код ТАБЛИЦЬ",
        content: `<p>
        <img src="./imglab1/Table code.png" alt=""><br>
        <img src="./imglab1/TableCode3.png" alt=""><br>
        <img width = 70% src="./imglab1/tableCode2.png" alt=""><br>
        <h3>Теорія про теги та атрибути, які застосовуються при створенні таблиць</h3>
        Тег table визначає HTML таблицю. Кожен рядок таблиці визначається тегом tr. Кожен заголовок таблиці визначається тегом th. Кожна чарунка з даними таблиці визначається тегом td.<br>
        За замовчуванням текст в елементах td є звичайним і вирівняним за лівим краєм.<br>
        Щоб зробити чарунку, що охоплює більше одного стовпця, використовуйте атрибут colspan.<br>
        Щоб зробити чарунку, яка охоплює більше одного рядка, використовуйте атрибут rowspan.<br>
        Щоб додати підпис до таблиці, використовуйте тег caption.<br>
        Щоб визначити спеціальний стиль для однієї конкретної таблиці, додайте до таблиці атрибут id.<br>
        Щоб встановити ширину таблиці, додайте атрибут style до елементу table.<br>
        Щоб встановити розмір визначеного стовпця, додайте атрибут style до елементів th або td.<br>
        Щоб встановити висоту визначеного рядка, додайте атрибут style до елемента tr.СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ. РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ в HTML-ДОКУМЕНТІ.<br>
        За замовчуванням текст в елементах th виділений жирним шрифтом і відцентрований.<br>

        </p>`,
      },
      {
        title: "HTML-код ФОРМИ",
        content: `<p>
        <img src="./imglab1/Formcode1.png" alt=""><br>
        <img src="./imglab1/Formcode2.png" alt=""><br>
        <img src="./imglab1/Formcode3.png" alt=""><br>
        <h3>Теорія про теги та атрибути, які застосовуються при створенні списків</h3>
        Невпорядкований список починається з тега ul. Кожний елемент списку починається з тега li. Елементи списку будуть помічені маркерами (маленькі чорні кола) за замовчуванням.<br>
        Атрибут style використовується для визначення стиля маркера елемента списку lt CSS властивість list-style-type використовується для визначення стиля маркера елемента списку:<br>
        disc - Встановлює маркер елемента списка як маленьке чорне коло (за замовчуванням)<br>
        circle - Встановлює маркер елемента списка у вигляді маленького пустого кола<br>
        square - Встановлює маркер елемента списка у вигляді квадрата<br>
        none - Елементи списка не будуть відмічені (маркери відсутні)<br>
        Впорядкований список починається з тега ol. Кожний елемент списку починається з тега li. Елементи списку будуть помічені номерами за замовчуванням.<br>
        Атрибут type тега ol визначає тип маркера елемента списка:<br>
        type="1" - Елементи списка будуть пронумеровані цифрами (за замовчуванням)<br>
        type="A" - Елементи списка будуть пронумеровані заглавними літерами<br>
        type="a" - Елементи списка будуть пронумеровані рядковими літерами<br>
        type="I" - Елементи списка будуть пронумеровані великими римськими цифрами<br>
        type="i" - Елементи списка будуть пронумеровані маленькими римськими цифрами<br>


        
        </p>`,
      },
      {
        title: "HTML-код ЗОБРАЖЕННЯ",
        content: `<p>
        <h3>Теорія про теги та атрибути, які застосовуються при роботі з зображенням</h3>
        В HTML зображення визначаються за допомогою тега . Тег  пустий, містить лише атрибути і не має закриваючого тега. Атрибут src вказує URL (вебадресу) зображення. Атрибут alt надає альтернативний текст для зображення,<br>
        Значення атрибута alt має описувати зображення. Якщо браузер не може знайти зображення, він відображає значення атрибута alt. Ви можете використовувати атрибут style для вказівки ширини та висоти зображення.<br>
        Крім того, ви можете використовувати атрибути width та height. Атрибути width та height завжди визначають ширину і висоту зображення в пікселях. Однак краще використовувати атрибут style.<br>
        Це перешкоджає тому, щоб таблиці стилів змінили розмір зображень.<br>
        якщо користувач з якоїсь причини не може його переглянути: через повільне підключення до Інтернету, помилки в атрибуті src або якщо користувач використовує програму читання з екрана (скрінрідер).<br>
        <img src="./imglab1/imgcode1.png" alt=""><br>
        <img src="./imglab1/imgcode2.png" alt=""><br>

        
        </p>`,
      },
      {
        title: "ВИСНОВКИ",
        content: `<p>
        <h3>Висновки</h3>
        Виконуючи лабораторну роботу з теми Структура html-документа. Вибір предметної галузі. Робота з посиланнями, таблицями, зображеннями, списками в html-документі, були придбані практичні навички роботи з HTML-документом, таблицями, зображеннями, посиланнями, списками, формами. Також було створено шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.
        </p>`,
      },
    ],
    lab2: [
      {
        title: "Тема,Мета ЛР2 Місцерозсташування сайту,звіту",
        content: `<p>
        <h3>Тема:</h3>КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ. 
        
  
        <h3>Мета:</h3>
        Придбати практичні навички роботи з селекторами, ідентифікаторами, списками, різноманітними властивостями кольору і фону, зовнішними та внутрішними відступами, плаваючими елементами, оформленням текстових елементів
        <h3>Місце розташування ЛР №2</h3><a href="https://github.com/romkas228/IS-31_Danuliyk_Roman_Lab2">https://github.com/romkas228/IS-31_Danuliyk_Roman_Lab2</a>
        <h3>Сайт</h3><a href="https://romkas228.github.io/IS-31_Danuliyk_Roman_Lab4//">https://romkas228.github.io/IS-31_Danuliyk_Roman_Lab4/</a>
        <h3>Місце розташування звітнього HTML-документу</h3><a href="https://github.com/romkas228/IS-31_Danuliyk_Roman_updatedReport">https://romkas228.github.io/IS-31_Danuliyk_Roman_updatedReport/</a>
        <h3>Сайт звітнього HTML-документу:</h3><a href="https://romkas228.github.io/IS-31_Danuliyk_Roman_updatedReport/">https://romkas228.github.io/IS-31_Danuliyk_Roman_updatedReport/</a>
        <h3>Місце розташування самостійної роботи №2:</h3><a href="https://github.com/romkas228/IS-31_Danuliyk_Roman_SR2">https://github.com/romkas228/IS-31_Danuliyk_Roman_SR2</a>
        <h3>Сайт самостійної роботи №2:</h3><a href="https://romkas228.github.io/IS-31_Danuliyk_Roman_SR2/">https://romkas228.github.io/IS-31_Danuliyk_Roman_SR2/</a>

        </p>`,
      },
      {
        title: "Способи підключення стилів",
        content: `<p>
        <h3>1. Inline-стилі (вбудовані стилі):</h3>
        CSS стилі додаються безпосередньо до HTML-елементів через атрибут style.<br>
        <img src="./imglab1/1typeofcon.png" alt=""><br>
        <h3>2. Internal-стилі (внутрішні стилі):</h3>
        CSS стилі визначаються в межах HTML-документа в секції head за допомогою тегу style.<br>
        <img src="./imglab1/2typeofcon.png" alt=""><br>
        <h3>3. External-стилі (зовнішні стилі):</h3>
        CSS стилі знаходяться в окремому файлі, який підключається до HTML-документа за допомогою тегу link в секції head.<br>
        <img src="./imglab1/3typeofcon.png" alt=""><br>


        </p>`,
      },
      {
        title: "Селектори",
        content: `<p>
        <h3>1. Селектори за тегом (Type Selector):</h3>
        Вибирають елементи HTML за назвою тегу.<br>
        <img src="./imglab1/selectortype1.png" alt=""><br>
        <h3>2. Селектори за класом (Class Selector):</h3>
        Вибирають елементи HTML з певним класом, використовуючи крапку перед назвою класу.<br>
        <img src="./imglab1/Selectortype2.png" alt=""><br>
        <h3>3. Селектори за ідентифікатором (ID Selector):</h3>
        Вибирають елементи з певним значенням атрибута id, використовуючи решітку перед ідентифікатором.<br>
        <img src="./imglab1/Selectortype3.png" alt=""><br>
        <h3>4. Атрибутні селектори (Attribute Selector):</h3>
        Застосовуються до елементів із певними атрибутами або значеннями атрибутів.<br>
        <img src="./imglab1/Atribsel.png" alt=""><br>
        <h3>5. Універсальний селектор (Universal Selector):</h3>
        Застосовуються до елементів із певними атрибутами або значеннями атрибутів.<br>
        <img src="./imglab1/UNI.png" alt=""><br>


        </p>`,
      },
      {
        title: "Селектори тегу",
        content: `<p>
        <h3>CSS код селектору класу:</h3>
        <img src="./imglab1/TagSelCSS.png" alt=""><br>
        
        <h3>Відображення елементу в браузері(забирає відступи по краям сторінки):</h3>
        <img width=600px src="./imglab1/TagSelWeb.png" alt=""><br>


        </p>`,
      },
      {
        title: "Селектори класу",
        content: `<p>
        <h3>HTML код елементу з класом "pagination":</h3>
        <img src="./imglab1/ClassSelhtml.png" alt=""><br>
        
        <h3>CSS код елементу з класом "pagination":</h3>
        <img  src="./imglab1/СlassSelCSS.png" alt=""><br>

        <h3>Відображення елементу в браузері:</h3>
        <img  src="./imglab1/ClassSelWeb.png" alt=""><br>
        
        </p>`,
      },
      {
        title: "Селектори ідентифікаторів",
        content: `<p>
        <h3>HTML код елементу з ідентифікатором "banner":</h3>
        <img src="./imglab1/IDSelHTML.png" alt=""><br>
        
        <h3>CSS код елементу з ідентифікатором "banner":</h3>
        <img  src="./imglab1/IDSelCSS.png" alt=""><br>

        <h3>Відображення елементу в браузері:</h3>
        <img  src="./imglab1/IDSelWEB.png" alt=""><br>
        

        
        </p>`,
      },
      {
        title: "Інші селектори",
        content: `<p>
         <h3>Комбінований селектор:</h3>
        <img src="./imglab1/COMBSEL.png" alt=""><br>
        
        <h3>Псевдокласовий селектор:</h3>
        <img  src="./imglab1/PSeudoSEL.png" alt=""><br>

        <h3>Груповий селектор:</h3>
        <img  src="./imglab1/GroupSel.png" alt=""><br>
        </p>`,
      },
      {
        title: "СSS Шрифти Текст Таблиці Фон Контур Списки CSS Просунутий",
        content: `<p>
        <h3>Цей елемент Section використовує стилізацію шрифтів, контурів, фону та кольору тексту</h3>
        <img src="./imglab1/Advanced1.png" alt=""><br>
        <img src="./imglab1/Advanced2.png" alt=""><br>
        <img width=600px src="./imglab1/Advanced2.5.png" alt=""><br>
        
        <h3>Цей Список стилізований під навігаційну панель та додано анімації</h3>
        <img src="./imglab1/Advanced3.png" alt=""><br>
        <img src="./imglab1/Advanced4.png" alt=""><br>
        <img  width=600px src="./imglab1/Advanced5.png" alt=""><br>

        <h3>Додано пагінацію та анімації для неї</h3>
        <img src="./imglab1/Advanced6.png" alt=""><br>
        <img src="./imglab1/Advanced7.png" alt=""><br>
        <img src="./imglab1/Advanced8.png" alt=""><br>

        
        </p>`,
      },
      {
        title: "ВИСНОВКИ",
        content: `<p>
        <h3>ВИСНОВКИ</h3>
       Робота з каскадними таблицями стилів (CSS) та їх селекторами дозволяє ефективно стилізувати HTML-документи, надаючи їм чіткого, привабливого вигляду та зручного для користувача інтерфейсу. Селектори — це ключовий інструмент для вибору елементів сторінки, що дає змогу гнучко керувати стилями. Вивчення селекторів, таких як селектори тегів, класів, ідентифікаторів, дочірніх та сусідніх елементів, дозволяє розробникам створювати структури, які легко підтримувати та змінювати.
        </p>`,
      },
    ],
    lab3: [
      {
        title: "Тема,Мета, Місце розсташування сайту,звіту",
        content: `<p>
        <h3>Тема:</h3>ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА. ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX. 
        
  
        <h3>Мета:</h3>
         придбати практичні навички роботи верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок
         • придбати практичні навички роботи верстки сторінок засобами CSS та FLEXBOX
        <h3>Місце розташування ЛР №3</h3><a href="https://github.com/romkas228/IS-31_Danuliyk_Roman_Lab3">https://github.com/romkas228/IS-31_Danuliyk_Roman_Lab3</a>
        <h3>Сайт</h3><a href="https://romkas228.github.io/IS-31_Danuliyk_Roman_Lab3/">https://romkas228.github.io/IS-31_Danuliyk_Roman_Lab3/</a>
        <h3>Місце розташування звітнього HTML-документу</h3><a href="https://github.com/romkas228/IS-31_Danuliyk_Roman_updatedReport">https://romkas228.github.io/IS-31_Danuliyk_Roman_updatedReport/</a>
        <h3>Сайт звітнього HTML-документу:</h3><a href="https://romkas228.github.io/IS-31_Danuliyk_Roman_updatedReport/">https://romkas228.github.io/IS-31_Danuliyk_Roman_updatedReport/</a>
        

        </p>`,
      },
      {
        title: "ЗАВДАННЯ№1 Зовнішній вигляд макету.Код макету",
        content: `<p>
        Для гнучкого розташування елементів використовується Flexbox, що спрощує вирівнювання та розміщення контенту всередині цих блоків.
        Деякі ключові моменти:
        Flexbox використовується для вирівнювання елементів всередині секцій:
        У header та навігації Flexbox використовується для центрування контенту і розміщення елементів.
        В основному блоці каталогу (section#catalog) Flexbox забезпечує рівномірне розподілення карток товарів.
        Використання CSS для стилізації:
        Чітко визначені відступи, кольори, шрифти та інші стилі для створення візуальної ієрархії.
        Анімації при наведенні (hover ефекти), наприклад, зміна кольору елементів навігації.
        Основні компоненти сайту організовані за допомогою блоків, які структурно поділяють вміст на секції, такі як header, nav, main, footer.
        <img style="width: 70%;" src="./imglab3/Lab3.ex1.1.png" alt=""><br>
        <img style="width: 70%;" src="./imglab3/Lab3.ex1.2.png" alt=""><br>
        <img style="width: 70%;" src="./imglab3/Lab3.ex1.3.png" alt=""><br>
        

        </p>`,
      },
      {
        title: "ЗАВДАННЯ№2",
        content: `<p>
        Розмітку за допомогою таблиці (номер варіанта – остання цифра у списку групи)<br>
        Фіксована таблична верстка<br>
        Гумова таблична верстка<br>
        Розмітку за допомогою блоків (плаваючих елементів) (номер варіанта – остання цифра у списку групи + 1)<br>
        Фіксована блокова верстка<br>
        Гумова блокова верстка<br>
        Засобами HTML та CSS виконати Завдання №2, в саме: створити окремі веб-сторінки, а саме:<br>
        <img  src="./imglab3/Lab3.ex2.png" alt=""><br>

        </p>`,
      },
      {
        title: "Фіксована таблична верстка",
        content: `<p>
        <img  src="./imglab3/Lab3.fixedtable1.png" alt=""><br>
        <img  src="./imglab3/Lab3.fixedtable2.png" alt=""><br>
        <img  src="./imglab3/Lab3.fixedtable3.png" alt=""><br>

        </p>`,
      },
      {
        title: "Гумова таблична верстка",
        content: `<p>
        <img  src="./imglab3/Lab3.unfixedtable1.png" alt=""><br>
        <img  src="./imglab3/Lab3.unfixedtable2.png" alt=""><br>
        <img  src="./imglab3/Lab3.unfixedtable3.png" alt=""><br>
        
        </p>`,
      },
      {
        title: "Фіксована блокова верстка",
        content: `<p>
        <img  src="./imglab3/Lab3.fixedblock1.png" alt=""><br>
        <img  src="./imglab3/Lab3.fixedblock2.png" alt=""><br>
        <img  src="./imglab3/Lab3.fixedblock3.png" alt=""><br>
        
        
        </p>`,
      },
      {
        title: "Гумова блокова верстка",
        content: `<p>
        <img  src="./imglab3/Lab3.unfixedblock1.png" alt=""><br>
        <img  src="./imglab3/Lab3.unfixedblock2.png" alt=""><br>
        <img  src="./imglab3/Lab3.unfixedblock3.png" alt=""><br>
        <img  src="./imglab3/Lab3.unfixedblock4.png" alt=""><br>
        </p>`,
      },
      {
        title: "ЗАВДАННЯ№3",
        content: `<p>
        Кожному студенту виконати свій номер варіанта Завдання №3, за технологією FLEXBOX та засобами CSS.
        Номер варіанта відповідає останній цифрі студента у списку групи. Наприклад, Студент 18 за списком – буде виконувати 8 варіант
        <img  src="./imglab3/Lab3.ex3 copy.png" alt=""><br>

        
        </p>`,
      },
      {
        title: "Скріншот сторінки",
        content: `<p>
        <img width="60%" src="./imglab3/Lab3.screen1.png" alt=""><br>
        <img width="60%" src="./imglab3/Lab3.screen2.png" alt=""><br>
        
        </p>`,
      },
      {
        title: "HTML-код",
        content: `<p>
        <img width="60%" src="./imglab3/Lab3.html1.png" alt=""><br>
        <img width="60%" src="./imglab3/Lab3.html2.png" alt=""><br>
        <img width="60%" src="./imglab3/Lab3.html3.png" alt=""><br>
        
        </p>`,
      },
      {
        title: "CSS-код",
        content: `<p>
        <pre>* 
                {
                     box-sizing: border-box;
                }
                html, body{
                    margin: 0;
                    padding: 0;
                }
                
                 body
                 {
                    
                 }
                
                 header{
                    background-color: rgb(48, 50, 51);
                 }
                 header h2{
                    margin: 0;
                   text-align: center;
                   color: white;
                   font-family: "Dela Gothic One", sans-serif;
                   font-weight: 400;
                   font-style: normal;
                 }
                 header h1{
                    margin: 0;
                    text-align: center;
                    color: orange;
                    font-family: "Dela Gothic One", sans-serif;
                    font-weight: 400;
                    font-style: normal;
                  }
                  #top{
                    background-color: rgb(48, 50, 51);
                    display:flex;
                    justify-content: left;
                    padding-top: 3%;
                    padding-bottom: 2%;
                    
                  }
                  #topleft , #topright{
                    width: 50%;
                    color: white;
                  }
                  #topleft {
                    padding-left: 5px;
                    padding-right: 10%;
                  }
                  #topleft p
                  {
                    font-family: "Mulish", sans-serif;
                    font-optical-sizing: auto;
                    font-weight: 200;
                  }
                  #topleft ul li {
                    margin-bottom: 30px;
                    
                    font-family: "Mulish", sans-serif;
                    font-optical-sizing: auto;
                    font-weight: 800;
                  }
                  #topleft ul li::marker{
                    color: #2e9aff;
                  }
                  #topright{
                    
                    
                  } 
                  #topright button{
                    font-family: "Mulish", sans-serif;
                    font-optical-sizing: auto;
                    font-weight: 800;
                    border: none;
                    background-color: yellow;
                    width: 30%;
                    height: 10%;
                    margin-top: 1%;
                    border-radius: 5px;
                  }
                  #middle h2{
                    margin: 0;
                    margin-top: 1.5%;
                    color: rgb(2, 147, 214);
                    text-align: center;
                    font-family: "Dela Gothic One", sans-serif;
                   font-weight: 400;
                   font-style: normal;
                  }
                  #middle h1
                  {
                    margin: 0;
                    text-align: center;
                    font-family: "Dela Gothic One", sans-serif;
                   font-weight: 400;
                   font-style: normal;
                  }
                  #categories
                  {
                
                    margin-top: 3%;
                    display: flex;
                    justify-content:space-around;
                  }
                  #categories div{
                    border: 1px solid #2e9aff;
                    border-radius: 20px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 13%;
                    font-family: "Dela Gothic One", sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    
                    color: rgb(2, 147, 214);
                
                  }
                  #categories div button{
                    background-color: #bcd3e7;
                    width: 100%;
                    height: 4vh;
                    border-radius: 0 0 20px 20px;
                    border: none;
                    margin-top: 15%;
                    font-family: "Mulish", sans-serif;
                    font-optical-sizing: auto;
                    font-weight: 800;
                
                  }
                  #categories div img{
                    border: 1px solid #2e9aff;
                    border-radius: 30%;
                    width: 40px;
                    position: relative;
                    bottom: 20px;
                  }
                  #bottom{
                    display: flex;
                    justify-content: left;
                    margin-top: 5%;
                    padding-bottom: 2%;
                    width: 100%;
                    background-color:#bcd3e7 ;
                  }
                  #bottomleft{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                    width: 30%;
                    font-family: "Mulish", sans-serif;
                    font-optical-sizing: auto;
                    font-weight: 200;
                
                  }
                  
                  #bottomleft iframe{
                    margin: 10% 0 3% 7%;
                    width: 100%;
                  }
                  #bottomright{
                    width: 70%;
                    padding-top: 1.5%;
                  }
                  #bottomright h3{
                    margin: 0;
                    text-align: center;
                    font-family: "Dela Gothic One", sans-serif;
                   font-weight: 400;
                   font-style: normal;
                  }
                    
                  #bottomright h1{
                    margin: 0;
                    color: rgb(2, 147, 214);
                    text-align: center;
                    font-family: "Dela Gothic One", sans-serif;
                   font-weight: 400;
                   font-style: normal;
                   font-size: 25px;
                  }
                  
                
                  #partners{
                    padding-left: 5%;
                    width: 100%;
                    height: 80%;
                    display:flex;
                    flex-wrap:wrap;
                    justify-content:center;
                    
                    
                    
                  }
                  #partners img{
                    width: 25%;
                    height: 10vh;
                  }
                  #footer{
                    display: flex;
                    width: 100%;
                    background-color: black;
                    
                    color: white;
                    font-family: "Mulish", sans-serif;
                    font-optical-sizing: auto;
                    font-weight: 300;
                
                  }
                  #copyrighticon{
                    padding-left: 10px;
                    display: flex;
                    align-items: center;
                    width: 20%;
                  }
                  #footer span{
                    
                  }
                  #footer ul{
                    width: 100%;
                    display: flex;
                    justify-content: end;
                    list-style-type: none;
                  }
                  #footer ul li a img{
                    width: 50px;
                    height: 40px;
                    
                  }
                    </pre>
        
        </p>`,
      },
      {
        title: "ВИСНОВКИ",
        content: `<p>
        У ході виконання лабораторної роботи я здобув практичні навички верстки веб-сторінок за допомогою CSS,
        а також навчився працювати з плаваючими елементами та Flexbox.
        Використання таблиць для верстки:
        Переваги:
        Структурованість: Таблиці дозволяють чітко розташувати елементи у рядках та стовпцях, що підходить для створення добре структурованих макетів.<br>
        Сумісність з браузерами: Таблиці мають високу підтримку у всіх браузерах, навіть у старих версіях.<br>
        Зручність для табличних даних: Ідеально підходять для відображення табличної інформації, такої як звіти або складні дані.<br>
        Недоліки:<br>
        Негнучкість макета: Таблиці погано адаптуються до різних розмірів екранів і пристроїв, що ускладнює створення адаптивних веб-додатків.<br>
        Низька продуктивність: Табличні макети можуть бути "важкими" для рендерингу, що сповільнює завантаження сторінки.<br>
        Складність підтримки: Важче редагувати та підтримувати, оскільки внесення змін до структури таблиці може вимагати переписування значної частини HTML-коду.<br>
        Поганий вплив на SEO: Табличні структури не надають чіткої семантичної інформації про вміст, що негативно впливає на оптимізацію для пошукових систем.<br>
        Використання плаваючих блоків (float):<br>
        Переваги:<br>
        Гнучкість розташування: Плаваючі блоки дозволяють створювати більш гнучкі макети з можливістю обтікання текстом або іншими елементами.<br>
        Краща адаптивність: У порівнянні з таблицями, плаваючі блоки дозволяють створювати адаптивніші макети, які краще підходять для різних розмірів екранів.<br>
        Модульність: Блоки легко переміщувати, змінювати їхній розмір, додавати або видаляти, що спрощує розробку та підтримку сторінок.<br>
        >Семантика: Використання блоків для верстки зберігає семантичну структуру HTML, що сприяє кращій оптимізації для пошукових систем.<br>
        Недоліки:<br>
        Складність контролю: Плаваючі елементи можуть інколи виходити з потоку документа, що призводить до складності в управлінні вирівнюванням та розташуванням інших елементів.<br>
        Неочевидність очищення: Для правильної роботи плаваючих елементів часто необхідно застосовувати додаткові техніки для "очищення" потоку (наприклад, clear), що може ускладнювати роботу.<br>
        Відсутність централізованого вирівнювання: Float не дозволяє легко центрувати елементи, що потребує додаткових CSS-рішень для вирівнювання.<br>
        У ході виконання лабораторної роботи я здобув практичні навички верстки веб-сторінок за допомогою CSS,<br>
        
        </p>`,
      },
    ],
    lab4: [
      {
        title: "Тема,Мета, Місце розсташування сайту,звіту",
        content: `<p>
        <h3>Тема:</h3>АДАПТИВНА ВЕРСТКА. МЕДІА-ЗАПИТИ. МЕТАТЕГ VIEWPORT. СТРАТЕГІЯ MOBILE FIRST. 
        
  
        <h3>Мета:</h3>
        Адаптивна верстка. Медіа-запити. Медіа-типи. Медіа-функції.Метатег viewport. Інструменти розробника. Стратегія Mobile First.
        <h3>Місце розташування ЛР №4</h3><a href="https://github.com/romkas228/IS-31_Danuliyk_Roman_Lab4">https://github.com/romkas228/IS-31_Danuliyk_Roman_Lab4</a>
        <h3>Сайт</h3><a href="https://romkas228.github.io/IS-31_Danuliyk_Roman_Lab4/">https://romkas228.github.io/IS-31_Danuliyk_Roman_Lab4/</a>
        <h3>Місце розташування звітнього HTML-документу</h3><a href="https://github.com/romkas228/IS-31_Danuliyk_Roman_updatedReport">https://romkas228.github.io/IS-31_Danuliyk_Roman_updatedReport/</a>
        <h3>Сайт звітнього HTML-документу:</h3><a href="https://romkas228.github.io/IS-31_Danuliyk_Roman_updatedReport/">https://romkas228.github.io/IS-31_Danuliyk_Roman_updatedReport/</a>
        

        </p>`,
      },
      {
        title: "Десктопна версія",
        content: `<p>
        <img style="width: 60%;" src="./imglab4/lab4desktop.png" alt=""><br>


        </p>`,
      },
      {
        title: "Планшетна версія",
        content: `<p>
        •Макет: трохи спрощений варіант десктопної версії, може бути зменшена кількість колонок.<br>
        •Медіа: зображення можуть бути трохи стиснені, щоб зменшити вагу сторінки.<br>
        •Ширина екрану: зазвичай від 768 до 1024 пікселів.<br>
        
        <img style="width: 60%;" src="./imglab4/lab4mobile.png" alt=""><br>
        <img  src="./imglab4/lab4mobile2.png" alt=""><br>

        </p>`,
      },
      {
        title: "Мобільна версія",
        content: `<p>
        •Макет: одно- або двоколонковий дизайн, який підлаштовується під вузький екран.<br>
        •Медіа: зображення та відео часто оптимізуються для швидкого завантаження і можуть мати нижчу якість.<br>
        •Текст: має бути добре читаємим, великі заголовки та інтервали між елементами для легкого натискання пальцями.<br>
        <img style="width: 60%;" src="./imglab4/lab4tablet.png" alt=""><br>
        <img  src="./imglab4/lab4tablet2.png" alt=""><br>



        </p>`,
      },
      
      {
        title: "ВИСНОВКИ",
        content: `<p>
        <h3>ВИСНОВКИ</h3>
       Під час роботи я навчився створювати адаптивні веб-сторінки, використовуючи медіа-запити, медіа-типи та функції.
       Навчився користуватися інструментами розробника для перевірки адаптивності сайту.
       Опанував метатег viewport для налаштування вигляду на мобільних пристроях і застосування стратегії Mobile First.
        </p>`,
      },
    ],
    lab5: [
      {
        title: "Тема,Мета, Місце розсташування сайту,звіту",
        content: `<p>
        <h3>Тема:</h3>ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ.ВИКОРИСТАННЯ МАСИВІВ У JS-СЦЕНАРІЯХ. РЕАЛІЗАЦІЯ ПРОГРАМ ЗАСОВАМИ МОВИ JAVASCRIPT 
        
  
        <h3>Мета:</h3>
        Придбати практичні навички роботи з конструкціями мови JS, масивами та фугкціями у js-сценаріях.
        Реалізація програм засовами мови JAVASCRIPT
        <h3>Місце розташування ЛР №5</h3><a href="https://github.com/romkas228/IS-31_Danuliyk_Roman_Lab5">https://github.com/romkas228/IS-31_Danuliyk_Roman_Lab5</a>
        <h3>Сайт</h3><a href="https://romkas228.github.io/IS-31_Danuliyk_Roman_Lab5/">https://romkas228.github.io/IS-31_Danuliyk_Roman_Lab5/</a>
        <h3>Місце розташування звітнього HTML-документу</h3><a href="https://github.com/romkas228/IS-31_Danuliyk_Roman_updatedReport">https://romkas228.github.io/IS-31_Danuliyk_Roman_updatedReport/</a>
        <h3>Сайт звітнього HTML-документу:</h3><a href="https://romkas228.github.io/IS-31_Danuliyk_Roman_updatedReport/">https://romkas228.github.io/IS-31_Danuliyk_Roman_updatedReport/</a>
        

        </p>`,
      },
      {
        title: "ЗАВДАННЯ№1",
        content: `<p>
        <img  src="./imglab5/lab5ex1.2.png" alt=""><br>
        <img  src="./imglab5/lab5ex1.5.png" alt=""><br>
        <img  src="./imglab5/lab5ex1.1.png" alt=""><br>


        </p>`,
      },
      {
        title: "ЗАВДАННЯ№2",
        content: `<p>
        <img  src="./imglab5/lab5ex2.1.png" alt=""><br>
        <img  src="./imglab5/lab5ex2.5.png" alt=""><br>
        <img  src="./imglab5/lab5ex2.2.png" alt=""><br>

        </p>`,
      },
      {
        title: "ЗАВДАННЯ№3",
        content: `<p>
        <img  src="./imglab5/lab5ex3.1.png" alt=""><br>
        <img  src="./imglab5/lab5ex3.5.png" alt=""><br>
        <img  src="./imglab5/lab5ex3.2.png" alt=""><br>


        </p>`,
      },
      {
        title: "ЗАВДАННЯ№4",
        content: `<p>
        <img  src="./imglab5/lab5ex4.1.png" alt=""><br>
        <img  src="./imglab5/lab5ex4.5.png" alt=""><br>
        <img  src="./imglab5/lab5ex4.2.png" alt=""><br>


        </p>`,
      },
      {
        title: "ЗАВДАННЯ№5",
        content: `<p>
        <img  src="./imglab5/lab5ex5.1.png" alt=""><br>
        <img  src="./imglab5/lab5ex5.2.png" alt=""><br>


        </p>`,
      },
      {
        title: "ВИСНОВКИ",
        content: `<p>
        <h3>ВИСНОВКИ</h3>
       Під час виконання лабораторної роботи придбав практичні навички роботи з конструкціями мови JS, масивами та фугкціями у js-сценаріях.
        </p>`,
      },
    ],
    lab6: [
      {
        title: "Тема Мета Місце розташування сайту, звіту",
        content: `<p>
        <h3>Тема:</h3>ОБ'ЄКТ. МЕТОДИ ОБ'ЄКТА. МАСИВ ОБ'ЄКТІВ. ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ. 
        CALLBACK. СТРІЛОЧНІ ФУНКЦІЇ. СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ.
  
        <h3>Мета:</h3>
        придбати практичні навички роботи з об'єктами. Методи об'єкта.. Callback. 
        Стрілочні функції. Стрілочні функції як колбеки. Реалізація програм засовами мови JAVASCRIPT
 
        <h3>Місце розташування сайту:</h3>
        github:<br>
        https://github.com/romkas228/IS-31_Danuliyk_Roman_Lab6<br>
        Жива сторінка:<br>
        https://romkas228.github.io/IS-31_Danuliyk_Roman_Lab6/<br>
        <h3>Місце розташування звіту:</h3>
        github:<br>
        https://github.com/romkas228/IS-31_Danuliyk_Roman_updatedReport<br>
        Жива сторінка:<br>
        https://romkas228.github.io/IS-31_Danuliyk_Roman_updatedReport/<br>
        </p>`,
      },
      {
        title: "ЗАВДАННЯ №1",
        content: `<p>
        <p>Напишіть функцію getProductDetails, яка приймає ідентифікатор товару productId та дві колбек-функції successCallback та errorCallback. <br>
        // Функція getProductDetails повинна отримати деталі про вказаний товар та передати їх у successCallback. <br>
        // У випадку якщо товар не знайдено, викликається errorCallback і передається повідомлення про помилку.</p>
        <img style="width: 50%" src="./imglab6/ex1.1.png" /> <br>
        <img src="./imglab6/ex1.2.png" />
        </p>`,
      },
      {
        title: "ЗАВДАННЯ №2",
        content: `<p>
        <p>З об'єкту concerts отримати масив, який буде містити лише імена міст. <br>
             З масиву потрібно прибрати міста, в яких концерт  уже пройшов і   відсортувати їх у хронологічному порядку. <br>
             Результат вивести у консоль. <br>
             Очікуваний результат ["Одеса", "Умань", "Харків"] <br>
             Застосувати стрілочні функції <br>
             const concerts = { <br>
             Київ: new Date("2020-04-01"), <br>
             Умань: new Date("2025-07-02"), <br> 
             Вінниця: new Date("2020-04-21"),<br> 
             Одеса: new Date("2025-03-15"), <br>
             Хмельницький: new Date("2020-04-18"), <br> 
             Харків: new Date("2025-07-10"), <br>
             };
            </p>
        <img style="width: 300px" src="./imglab6/ex2.1.png" /><br> 
        <img src="./imglab6/ex2.2.png" />
        </p>`,
      },
      {
        title: "ЗАВДАННЯ №3",
        content: `<p>
        <p>Напишіть функцію, яка приймає массив об'єктів і повертає новий массив <br> 
        об'єктів,у якому є знижка на  30 % на всі медикаменти ціна, яких перевищує 300 грн у масиві <br> 
        Надайте ід для кожного медикамента <br> 
              
              
        const medicines = [ <br> 
            { name: "Noshpa", price: 170 }, <br> 
            { name: "Analgin", price: 55 }, <br> 
            { name: "Quanil", price: 310 }, <br> 
            { name: "Alphacholine", price: 390 }, <br> 
          ]; <br> 
            </p> <br> 
          <img  src="./imglab6/ex3.1.png" /> <br> 
          <img src="./imglab6/ex3.2.png" /> <br> 
        </p>`,
      },
      {
        title: "ЗАВДАННЯ №4",
        content: `<p>
        <p>
        Напиши функцію конструктор Storage який створює об'єкти <br> 
        Для управління складом товарів. <br> 
        При виклику отримуватиме один агрумент - початковий масив товарів,  і записувати їх у властивість items. <br> 
              
         Додай методи класу: <br> 
         getItems() - повертайте масив товарів <br> 
         addItems(item) - отримує новий товар та додає його до поточних <br> 
         removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних <br> 
              
        const arr = ["apple", "banana", "mango"] <br> 

            </p> 
        <img src="./imglab6/ex4.1.png" >
        
        </p>`,
      },
      {
        title: "ЗАВДАННЯ №5",
        content: `<p>
        <p>
        Поверніть об'єкт, в якому вказано кількість тегів.<br>
        Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}<br>

         const tweets = [<br>
            { id: "000", likes: 5, tags: ["js", "nodejs"] },<br>
            { id: "001", likes: 2, tags: ["html", "css"] },<br>
            { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },<br>
            { id: "003", likes: 8, tags: ["css", "react"] },<br>
            { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },<br>
            ];<br>

            </p> 
        <img  src="./imglab6/ex5.1.png" /><br>
        <img src="./imglab6/Ex5.2.png" />
        </p>`,
      },
      {
        title: "ЗАВДАННЯ №6",
        content: `<p>
        <p>Напишіть функцію checkBrackets(str) яка приймає рядок жс коду (someFn)  і перевіряє правильність закриття дужок () {} [] <br>
          Якщо рядок містить коректний код функція повертає true.<br>
          В іншому випадку повертає false</p> 
        <img  src="./imglab6/Ex6.1.png" /><br>
        <img src="./imglab6/Ex6.2.png" />
        </p>`,
      },
      {
        title: "ВИСНОВКИ",
        content: `<p>
        При виконанні лабораторної роботи я навчився працювати з об'єктами в JavaScript, 
        створювати їх і змінювати властивості, а також використовувати методи об'єкта для 
        зручної обробки даних. Я засвоїв, як застосовувати колбек-функції, що дозволяють 
        виконувати інші функції всередині методів, таких як map, filter та reduce. Окрім 
        цього, я опанував використання стрілочних функцій як колбеків, що допомагає 
        зробити код компактнішим і більш зрозумілим. Це практичне завдання значно 
        поглибило моє розуміння мови JavaScript і підготувало до вирішення більш складних 
        завдань у майбутньому.
        </p>`,
      },
    ],
    lab7: [
      {
        title: "Тема Мета Місце розташування сайту, звіту",
        content: `<p>
        <h3>Тема:</h3>КЛАСИ. ОБ'ЄКТНА МОДЕЛЬ ДОКУМЕНТА (DOM). ПОДІЇ. ОБ'ЄКТ ПОДІЇ.  
  
        <h3>Мета:</h3>
        придбати практичні навички роботи з об'єктами. Методи об'єкта.. Callback. Стрілочні функції. Стрілочні функції як колбеки​.
        . Реалізація програм засовами мови JAVASCRIPT
 
        <h3>Місце розташування сайту:</h3>
        github:<br>
        https://github.com/romkas228/IS-31_Danuliyk_Roman_Lab7<br>
        Жива сторінка:<br>
        https://romkas228.github.io/IS-31_Danuliyk_Roman_Lab7/<br>
        <h3>Місце розташування звіту:</h3>
        github:<br>
        https://github.com/romkas228/IS-31_Danuliyk_Roman_updatedReport<br>
        Жива сторінка:<br>
        https://romkas228.github.io/IS-31_Danuliyk_Roman_updatedReport/<br>
        </p>`,
      },
      {
        title: "ЗАВДАННЯ №1",
        content: `<p>
        <img src="./imglab7/ex1.1.png" alt=""><br>
        <img src="./imglab7/ex1.2.png" alt="">
        </p>`,
      },
      {
        title: "ЗАВДАННЯ №2",
        content: `<p>
        <img src="./imglab7/ex2.1.png" alt=""><br>
        <img src="./imglab7/ex2.2.png" alt="">
        </p>`,
      },
      {
        title: "ЗАВДАННЯ №3",
        content: `<p>
         <img src="./imglab7/ex3.1.png" alt=""><br>
         <img src="./imglab7/ex3.2.png" alt="">
        </p>`,
      },
      {
        title: "ЗАВДАННЯ №4",
        content: `<p>
        <img src="./imglab7/ex4.1.png" alt=""><br>
        <img src="./imglab7/ex4.2.png" alt="">
        </p>`,
      },
      {
        title: "ЗАВДАННЯ №5",
        content: `<p>
        <img src="./imglab7/ex5.1.png" alt=""><br>
        <img src="./imglab7/ex5.2.png" alt="">
        </p>`,
      },
      {
        title: "ЗАВДАННЯ №6",
        content: `<p>
        <img src="./imglab7/ex6.1.png" alt=""><br>
        <img src="./imglab7/ex6.2.png" alt="">

        </p>`,
      },
      {
        title: "ЗАВДАННЯ №7",
        content: `<p>
        <br>
        <img src="./imglab7//ex7.1.png" alt=""><br>
        <img src="./imglab7//ex7.2.png" alt="">

        </p>`,
      },
      {
        title: "ВИСНОВКИ",
        content: `<p>
       У результаті виконання цієї мети було набуто практичні навички роботи з об'єктами в JavaScript, зокрема освоєно використання методів об'єктів. Вивчено принципи та особливості застосування стрілочних функцій, а також їх використання як callback-функцій. Це дозволило поглибити розуміння асинхронного програмування, оптимізації коду та його читабельності. Завдяки отриманим знанням реалізовано програми різного рівня складності із застосуванням сучасних можливостей мови JavaScript, що підвищило компетентність у розробці ефективних і масштабованих веб-додатків.
        </p>`,
      },
    ],
    lab8: [
      {
        title: "Тема Мета Місце розташування сайту, звіту",
        content: `<p>
        <h3>Тема:</h3>WEB-СХОВИЩЕ. WEB STORAGE API. МОДУЛЬНОСТЬ  КОДУ. СТВОРЕННЯ МОДАЛЬНОГО ВІКНА. ДЕЛЕГУВАННЯ ПОДІЙ.  
  
        <h3>Мета:</h3>
        придбати практичні навички роботи створення модального вікна; повторити процес створення макету, 
        зокрема створення макету галереї довільних зображень; закріпити навички роботи з делегуванням подій.
 
        <h3>Місце розташування сайту:</h3>
        github:<br>
        https://github.com/romkas228/IS-31_Danuliyk_Roman_Lab8<br>
        Жива сторінка:<br>
        https://romkas228.github.io/IS-31_Danuliyk_Roman_Lab8/<br>
        <h3>Місце розташування звіту:</h3>
        github:<br>
        https://github.com/romkas228/IS-31_Danuliyk_Roman_updatedReport<br>
        Жива сторінка:<br>
        https://romkas228.github.io/IS-31_Danuliyk_Roman_updatedReport/<br>
        </p>`,
      },
      {
        title: "ЗАВДАННЯ №1",
        content: `<p>
        <img src="./imglab8/ex1.1.png" alt=""><br>
        <img src="./imglab8/ex1.2.png" alt=""><br>
        <img src="./imglab8/ex1.3.png" alt=""><br>
        <img src="./imglab8/ex1.4.png" alt="">
        </p>`,
      },
      {
        title: "ЗАВДАННЯ №2",
        content: `<p>
        <img src="./imglab8/ex2.1.png" alt=""><br>
        <img src="./imglab8/ex2.2.png" alt=""><br>
        <img src="./imglab8/ex2.3.png" alt=""><br>
        
        </p>`,
      },
      {
        title: "ВИСНОВКИ",
        content: `<p>
       У результаті виконання цієї мети було набуто практичні навички створення модального вікна, опанування процесу розробки макетів (зокрема галереї довільних зображень) та закріплення роботи з делегуванням подій дозволяють ефективно створювати інтерактивні веб-інтерфейси. Ці завдання розвивають вміння організовувати структуру коду, підвищують рівень роботи з DOM-елементами та сприяють більш глибокому розумінню динамічної взаємодії користувача з елементами сторінки. Закріплення цих знань є ключовим етапом для розвитку професійних компетенцій у веб-розробці.
        </p>`,
      },
    ],
  };

  function updateSidebar(labId) {
    sidebar.innerHTML = "";
    const selectedLab = labData[labId];

    selectedLab.forEach((item) => {
      const button = document.createElement("button");
      button.textContent = item.title;
      button.addEventListener("click", () => {
        output.innerHTML = item.content;
      });
      sidebar.appendChild(button);
    });
  }

  labButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const labId = e.target.id;
      updateSidebar(labId);
      output.textContent = `Інформація про Лабораторну роботу №${labId.charAt(
        labId.length - 1
      )}`;
    });
  });
});
