const library=document.querySelector(".library");
const add=document.querySelector(".addbook");
const dialog=document.querySelector("dialog");
const close=document.querySelector("#close");
const myLibrary=[];
function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}
function addToLibrary(){}
function display(){
    myLibrary.map((book)=>{
        library.add
    });
}

add.addEventListener("click", () => {
    dialog.showModal();
    // dialog.style.top=15;
  });
close.addEventListener("click",()=>{
    dialog.close();
  });