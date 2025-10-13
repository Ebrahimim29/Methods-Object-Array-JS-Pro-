// //238-  معرفی فرمتهای مختلف جهت سریالاز کردن دیتاهای فرم
// const form = document.getElementById("myForm");
// console.log(form.elements);
// console.log([...form]); //آماده سازی برای ارسال به سمت سرور

// const formData = new FormData(form);
// console.log(formData);
// console.log([...formData]);

// fetch("/upload",{
//     method: "POST",
//     body: formData
// })
// .then(response => response.text())
// .then(data => console.log("سرور جواب داد:", data))
// .catch(error=>console.error(":خطا", error));

// // 239-سریالاز کردن داده های فرم و تبدیل به فرمت JSON , Encoded

// const params = new URLSearchParams(formData); //برای مدیریت و ساخت query String استفاده می شود
// console.log(params.toString()); //Url Encoded:آبجکت تبدیل به استرینگ می شود.برای قابل استفاده بودن
// params.append("country","iran");
// params.set("age","31");
// params.delete("city");
// console.log(params.toString());

// const obj = Object.fromEntries([...formData]); //متدی برای ساختن آبجکت از جفتهای کلید /مقدار
// //[...formData]: داده های فرم رو از حالت ایتریبل به یک آرایه از جفت ها در میاره
// const json = JSON.stringify(obj);
// console.log(json);

// //formData.entries(): کارش اینه که تمام فیلدهای فرم را به صورت یک ایتریبل از جفتهای کلید/مقدار بر می گرداند
// // formData.append(key,value):اضافه کردن
// // formData.get(key):گرفتن اولین مقدار
// // formData.getAll(key):گرفتن همه مقادیر
// // formData.set(key,value):جایگزینی مقدار 
// // formData.delete(key):حذف مقدار
// // formData.has(key):بررسی وجود


// // 240-Array Methods:

// console.log(Array(5));
// console.log(Array.of(1,2,'3'));

// console.log(Array.from([1,2,3], x=>x*2)); //تبدیل itrable به آرایه
// console.log(Array.from({lenght:3}, (_,i)=>i+1));

// const fd = new FormData();
// fd.append('name','Abbas');
// fd.append('age','30');
// console.log(fd);
// console.log([...fd]);
// console.log(fd.entries());
// console.log(Array.from(fd.entries())); 
// console.log(Array.from(fd.entries(),([key,value])=>`${key}:${value}`));

// console.log([1,[2,[3,[4]]]].flat(2));
// console.log([1,[2,[3,[4]]]].flat(Infinity));

// console.log(['hi','bye'].flatMap(w=>w.split('')));
// console.log([1,2,3].flatMap(x=>(x%2===0)? [] : x));

// console.log([10,2,1].sort((a,b)=>a-b));
// console.log(['b','c','a'].sort());

// let a = [1,2,3,4];
// a.fill(0,1,2); //fill(مقدار جایگزین , from Index , to Index)
// console.log(a);

// let b = new Array(3).fill({x:1});
// b[0].x = 10;
// console.log(b);

// let z = [10,20,30,40,50];
// z.copyWithin(0,3); //copyWithin(اندیس مورد نظر , Index target)
// console.log(z);

// let o = [{id:1},{id:2},{id:3}];
// o.copyWithin(0,2);
// console.log(o);

// 241-یادآوری آبجکتهای سراسری و معرفی متدهای Array
const a1 = [1,2,3];
console.log(a1.toString());

const b1= [typeof("1",["2","3"],"4")];
console.log(b1.toString());

const c1 = [1,undefined,null,4];
console.log(c1.toString());

const arr1 = [123456.78, new Date('2020-01-01T00:00:00Z')];
console.log(arr1.toLocaleString('fa-IR'));
console.log(arr1.toLocaleString('en-US'));
console.log(arr1.toLocaleString('ar-EG'));

const obj1 = {};
console.log(obj1);

Object.defineProperty(obj1, "x" , {
    value:20,
    writable:false, //نمی توان تغییر داد
    enumerable:true,
    configurable: true //می توان بعدا حذف یا دوباره تعریف کرد
});
obj1.x = 30;
obj1.y = 40;
console.log(obj1);

// 242-معرفی متدهای آبجکت و مفاهیم کاربردی در آبجکتها

const obj2 = {z:9};
obj2.a = 2;
obj2['b']='hassan';
Object.defineProperties(obj2, {c:{value:2, enumerable:false}, d: {value:3, enumerable:true}});
console.log(obj2);
console.log(Object.keys(obj2));
console.log(Object.values(obj2));

const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 === sym2); //false

obj2[sym1] = 'hidden';
console.log(Object.keys(obj2));
console.log(Object.getOwnPropertyNames(obj2)); //symbol را نمایش نمیده
console.log(Object.getOwnPropertySymbols(obj2));

console.log(delete obj2.a); //delete object.property:true/false
console.log(obj2.a); //undefined

Object.defineProperty(obj2, 'b', {configurable:false});
console.log(delete obj2.b); //false

const target = {a:1};
const src = {b:2 , c:{d:3}};
Object.assign(target, src); //ادغام کردن
console.log(target);

const d = {a:1, b:{c:2}};
Object.freeze(d); //shallow(سطحی): یعنی رو پراپرتی a فریز انجام میشه ولی روی b فریز انجام نمیشه
d.a = 100;
console.log(d);
delete d.a;
d.b.c = 20;
console.log(d);

const e = {a:1};
Object.seal(e);
//یک آبجکت رو مهر و موم می کنه،یعنی نمی تونی پراپرتی جدید بهش اضافه یا حذف کنی ولی می تونی مقدار پراپرتی های موجود رو تغییر بدی
e.a=2;
console.log(e);
delete e.a; //false
console.log(e);
e.b=5;
console.log(e);

//243-معرفی protoType و کاربرد آن در جاوااسکریپت
//یک آبجکت پشت صحنه است و مثل یک والد نامرئی برای آبجکت ها ست

const parent = {z:10};
const obj3 = Object.create(parent); //ساخت آبجکت با لینک به parent
obj3.a = 11;
console.log(obj3);
console.log(obj3.z);
console.log(obj3.toString());
console.log(Object.keys(obj3).toString());

//روش جایگزینی تعریف پراپرتی در Prototype
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    return `Hello ${this.name}`;
}
const user = new Person("Kami");
console.log(user.sayHello());

//-obj.in
const k = {s:20}; 
console.log('s' in k); //true
console.log('toString' in k); //true
console.log('a' in k); //false

//-obj.hasOwnProperty
const parent1 = {l:30};
const jj = Object.create(parent1);
jj.a = 40;
console.log(jj.hasOwnProperty('a')); //true: پراپرتی مستقیم
console.log(jj.hasOwnProperty('l')); //false: پراپرتی موجود در پروتوتایپ
console.log(jj.hasOwnProperty('toString')); //false


























