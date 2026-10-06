const hotels=[
{name:"فندق الواحة",city:"طرابلس",price:185,img:"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",tag:"مميز"},
{name:"منتجع البحر الأزرق",city:"مصراتة",price:240,img:"https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80",tag:"عرض"},
{name:"فندق المدينة",city:"بنغازي",price:155,img:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80",tag:"الأكثر حجزًا"},
{name:"دار السفر",city:"تونس",price:210,img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",tag:"جديد"},
{name:"أجنحة النخيل",city:"طرابلس",price:290,img:"https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=80",tag:"فاخر"},
{name:"منتجع الساحل",city:"زوارة",price:175,img:"https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=80",tag:"عرض"}
];
function render(list=hotels){
 const g=document.getElementById("hotelGrid");
 g.innerHTML=list.map((h,i)=>`<article class="hotel">
 <div class="photo" style="background-image:url('${h.img}')"><span class="tag">${h.tag}</span><button class="fav" onclick="this.textContent=this.textContent==='♡'?'♥':'♡'">♡</button></div>
 <div class="hotel-body"><div class="stars">★★★★★</div><h3>${h.name}</h3><div class="city">${h.city}</div>
 <div class="price"><div><strong>${h.price} د.ل</strong><small> / الليلة</small></div><button class="book" onclick="book('${h.name}')">احجز</button></div></div></article>`).join("");
}
function searchHotels(){
 const d=document.getElementById("destination").value.trim();
 if(!d){render();showMessage("اكتب المدينة أو الفندق أولًا.");return}
 const result=hotels.filter(h=>h.city.includes(d)||h.name.includes(d));
 render(result.length?result:hotels);
 showMessage(result.length?`وجدنا ${result.length} خيارات لـ ${d}.`:`لم نجد نتائج لـ ${d}، فعرضنا لك الخيارات المتاحة.`);
 document.getElementById("hotels").scrollIntoView({behavior:"smooth"});
}
function filterAll(){render();showMessage("تم عرض جميع الفنادق.");}
function book(name){showMessage(`تم اختيار ${name}. نظام الدفع يمكن ربطه لاحقًا.`)}
function showMessage(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");clearTimeout(window.tt);window.tt=setTimeout(()=>t.classList.remove("show"),2600)}
render();
