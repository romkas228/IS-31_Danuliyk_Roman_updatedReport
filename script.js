document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");
  const sidebar = document.getElementById("sidebar");
  const labButtons = document.querySelectorAll(".lab-buttons button");

  const labData = {

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
