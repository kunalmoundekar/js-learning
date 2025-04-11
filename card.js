

let a = document.querySelector(".container")

f1("https://picsum.photos/200/300", "New Card", "This is dynamically added.");
f1("https://picsum.photos/200/300", "New Card", "This is dynamically added.");
f1("https://picsum.photos/200/300", "New Card", "This is dynamically added.");

function f1(img, title, text) {
     html = `<div class="card">
             <img src="${img}" alt="img">
              <h1>${title}</h1>
              <p>${text}</p>
         </div>`;
     a.innerHTML += html;
}





















