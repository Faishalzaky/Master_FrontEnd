const articles=[

{
title:"Belajar HTML untuk Pemula",
content:"HTML adalah bahasa markup untuk membuat struktur website."
},

{
title:"CSS Grid Layout",
content:"CSS Grid mempermudah membuat layout kompleks."
},

{
title:"JavaScript DOM",
content:"DOM digunakan untuk memanipulasi elemen HTML."
},

{
title:"Flexbox Guide",
content:"Flexbox membuat layout lebih fleksibel."
},

{
title:"Responsive Design",
content:"Responsive membuat website tampil baik di semua device."
}

];

let currentPage=1;

const perPage=3;

function renderArticles(){

const container=document.getElementById("blogContainer");

container.innerHTML="";

const start=(currentPage-1)*perPage;

const end=start+perPage;

const pageArticles=articles.slice(start,end); }

pageArticles.forEach((article,index)=>{

const card=document.createElement("div");

card.className="blog-card";

card.innerHTML=`

<h3>${article.title}</h3>

<p>${article.content.substring(0,60)}...</p>

<button onclick="openArticle(${start+index})">
Baca
</button>

`;

container.appendChild(card);

});


function openArticle(index){

document.getElementById("articleDetail")
.classList.remove("hidden");

document.getElementById("detailTitle")
.innerText=articles[index].title;

document.getElementById("detailContent")
.innerText=articles[index].content;

}

function backToHome(){

document.getElementById("articleDetail")
.classList.add("hidden");

}

document.getElementById("nextBtn")
.onclick=function(){

currentPage++;

renderArticles();

}

document.getElementById("prevBtn")
.onclick=function(){

if(currentPage>1){

currentPage--;

renderArticles();

}

}

renderArticles();