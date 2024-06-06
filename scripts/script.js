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
function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=function(){
        if(read=="mread")
            return true;
        else
            return false;
    }
}
mread.addEventListener("click",()=>{
    read="mread";
});
nread.addEventListener("click",()=>{
    read="nread";
});
function display(){
    myLibrary.map((obj)=>{
        if(obj.read()){
            obj.read="Mark as Read";
        }
        else{
            console.log(obj.read());
            obj.read="Mark as not read";
            console.log("hi")
        }
            let book=document.createElement("div");
    book.classList.add("book-c");
    book.innerHTML=`
    <div class="img-c">
      <img src="./images/book-img.png" alt="some">
    </div>
    <div class="book-t">${obj.title}</div>
    <div class="by">by</div>
    <div class="book-a">${obj.author}</div>
    <div class="book-p">No of pages: ${obj.pages}</div>
    <button class="markread">${obj.read}</button>
    `;
    library.appendChild(book);
    });
}
submit.addEventListener("click",()=>{
    if(title.value && author.value && pages.value){
        myLibrary.push(new Book(title.value,author.value,pages.value,read));
    }
    clear();
    library.innerHTML="";
    display();
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