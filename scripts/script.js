// document.addEventListener("DOMContentLoaded", () => {

const library=document.querySelector(".library");
const add=document.querySelector(".addbook");
const dialog=document.querySelector("dialog");
const close=document.querySelector("#close");
const btitle=document.querySelector("#title");
const bauthor=document.querySelector("#author");
const selectedRadio = document.querySelector('input[type="radio"]');
const submit=document.querySelector("#submit");
const bpages=document.querySelector("#pages");
let myLibrary=[];
function Books(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}
function addToLibrary(title,author,pages,selectedValue){
    myLibrary.push(new Books(title,author,pages,selectedValue));
}
submit.addEventListener("click",()=>{
    let title=btitle.value;
    let author=bauthor.value;
    let pages=bpages.value;
    let selectedValue = selectedRadio.value;
    if (selectedValue==="mread") {
        selectedValue="Marked as Read";
    } else {
        selectedValue="Marked as Not Read";
    }
    addToLibrary(title,author,pages,selectedValue);
    let bookc=document.createElement("div");
    bookc.classList.add("book-c");
    bookc.innerHTML=`<div class="book-c">
    <div class="img-c">
      <img src="./images/book-img.png" alt="some">
    </div>
    <div class="book-t">${title}</div>
    <div class="by">by</div>
    <div class="book-a">${author}</div>
    <div class="book-p">No of pages: ${pages}</div>
    <button class="markread">${selectedValue}</button>
  </div>
    `;
    dialog.close();
    library.appendChild(bookc);
    clearfield();
    console.log(myLibrary);
});
function clearfield(){
    btitle.value="";
    bauthor.value="";
    bpages.value="";
    selectedRadio.value=none;
}
add.addEventListener("click", () => {
    dialog.showModal();
  });
close.addEventListener("click",()=>{
    dialog.close();
  });
