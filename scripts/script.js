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
function addToLibrary(){}
function display(){
    myLibrary.map((book)=>{
        
    });
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
    myLibrary.push(new Books(title,author,pages,selectedValue));
    console.log(myLibrary);
});
add.addEventListener("click", () => {
    dialog.showModal();
  });
close.addEventListener("click",()=>{
    dialog.close();
  });