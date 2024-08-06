let s1=document.getElementById("sql1");
s1.addEventListener("mouseenter", function(){
 let r=Math.floor(Math.random()*100);
 s1.innerHTML=`<h1>${r}</h1>`;
 s1.style.backgroundColor="gray";
 //s1.style.color="gray-dark";
})
s1.addEventListener("mouseleave",function(){
 s1.innerHTML=`<h1>${1}</h1>`;
 s1.style.backgroundColor="white";
})

// 1st right box
let s2=document.getElementById("sql2");
let clr="red";
s2.addEventListener("mouseenter",function(){
 if(clr=="red"){
  s2.style.backgroundColor="red";
  clr="green";
 }
 else if(clr=="green"){
  s2.style.backgroundColor="green";
  clr="blue";
 }
 else{
  s2.style.backgroundColor="blue";
  clr="red";
 }
})
 s2.addEventListener("mouseleave",function(){
  s2.style.backgroundColor="white";
 })

 // add random color in the circle
 let s3=document.getElementById("sql3");
 s3.addEventListener("mouseenter",function(){
  let r1=Math.floor(Math.random()*255);
  let r2=Math.floor(Math.random()*255);
  let r3=Math.floor(Math.random()*255);
  s3.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
 })
 s3.addEventListener("mouseleave",function(){
  s3.style.backgroundColor="white";
 })

 // circle 4 to click on the cirle fill the color in the all circle.
 let s4=document.getElementById("sql4");
 s4.addEventListener("click",function(){
  let r1=Math.floor(Math.random()*256);
  let r2=Math.floor(Math.random()*256);
  let r3=Math.floor(Math.random()*256);
  s1.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
  s2.style.backgroundColor=`rgb(${r2},${r3},${r1})`;
  s3.style.backgroundColor=`rgb(${r3},${r1},${r2})`;
 })
 s4.addEventListener("mouseleave",function(){
  s1.style.backgroundColor="white";
  s2.style.backgroundColor="white";
  s3.style.backgroundColor="white";
 })