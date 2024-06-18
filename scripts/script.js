const addBook=document.querySelector(".addbook");
const dialog=document.querySelector("dialog");
const close=document.querySelector("#close");
const title=document.querySelector("#title");
const author=document.querySelector("#author");
const pages=document.querySelector("#pages");
// const selectedRadio=document.querySelectorAll("input[type='radio']");
const mread=document.querySelector("#mread");
const nread=document.querySelector("#nread");
const submit=document.querySelector("#submit");
const library=document.querySelector(".library");
let read="nread";
let myLibrary=[];
let bookid=0;
class Book{
    constructor(title,author,pages,read){
      this.title = title;   
      this.author = author; 
      this.pages = pages;   
      this.read = (read === "mread") ? true : false;
    }
  }
mread.addEventListener("click",()=>{
    read="mread";
    // Book.setread();
});
nread.addEventListener("click",()=>{
    read="nread";
});
function display(){
    myLibrary.map((obj)=>{
        if(obj.read){
            obj.read="Mark as not Read";
        }
        else{
            console.log(obj.read);
            obj.read="Mark as read";
            console.log("hi")
        }
            let book=document.createElement("div");
    book.classList.add("book-c");
    book.id=`book-${bookid}`;
    book.innerHTML=`
    <div class="img-c">
      <img src="./images/book-img.png" alt="some">
    </div>
    <div class="book-t">${obj.title}</div>
    <div class="by">by</div>
    <div class="book-a">${obj.author}</div>
    <div class="book-p">No of pages: ${obj.pages}</div>
    <button class="markread">${obj.read}</button>
    <button class="remove" onclick="removebutt(${bookid})">Remove</button>
    `;
    bookid++;
    library.appendChild(book);
    });
}
function removebutt(id){
    const bookDiv=document.getElementById(`book-${id}`);
    bookDiv.remove();
}
submit.addEventListener("click",()=>{
    if(title.value && author.value && pages.value){
        myLibrary.push(new Book(title.value,author.value,pages.value,read));
    }
    clear();
    library.innerHTML="";
    display();
    // saveLibrary();
});
addBook.addEventListener("click",()=>{
    dialog.showModal();
});
close.addEventListener("click",()=>{
    dialog.close();
});
function clear(){
    if(title.value && author.value && pages.value){
    title.value="";
    author.value="";
    pages.value="";
    read="";
    dialog.close();
    }
}
document.addEventListener('DOMContentLoaded', () => {
    // loadLibrary();
    library.addEventListener("click", (event) => {
        event.target.style.cursor="pointer";
        if (event.target && event.target.classList.contains("markread")) {
            if (event.target.innerHTML === "Mark as Read") {
                event.target.style.backgroundColor = "green";
                event.target.innerHTML = "Mark as not Read";
            } else {
                event.target.style.backgroundColor = "red";
                event.target.innerHTML = "Mark as Read";
            }
        }
    });
});
// function saveLibrary() {
//     localStorage.setItem('myLibrary',JSON.stringify(myLibrary));
// }
// function loadLibrary() {
//     const storedLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [];
//     storedLibrary.forEach(book => {
//         myLibrary.push(book);
//         createBookDiv(book);
//     });
// }
// // `JSON.stringify(myLibrary)` converts the `myLibrary` array to a JSON string.
// // `localStorage.setItem('myLibrary', JSON.stringify(myLibrary))` saves this JSON string in localStorage under the key 'myLibrary'.
// // `localStorage.getItem('myLibrary')` retrieves the JSON string from localStorage.
//     // `JSON.parse(localStorage.getItem('myLibrary'))` converts the JSON string back into a JavaScript object (array).
//     // If there's no stored data, it defaults to an empty array `[]`//