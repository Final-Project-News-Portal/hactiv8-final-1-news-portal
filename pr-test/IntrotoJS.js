// // deklarasi object kosong
// let obj = {};

// // deklarasi + assignment disebut juga inisiasi
// let student = {
//   name: "Fulan",
//   major: "IT",
//   gpa: 3.5,
//   "passed classes": ["Programming Basic", "Database Basi", "Computer Network"],
// };

// // print out
// console.log(obj);
// console.log(student);

// // Deklarasi object kosong
// let obj = {};

// // cara 1 :
// // langsung dengan nama key
// obj.name = "Fulana";

// console.log(obj);

// // Deklarasi object kosong
// let obj = {};

// // Cara 2 :
// // Nama key, dalam kurung [], dalam bentuk string

// obj["address"] = "on earth";
// obj["year of birth"] = 1990;

// console.log(obj);

// let obj = {};

// // cara 3 :
// // nama key dalam sebuah variable dan masukkan dalam kurung [] tanpa kutip
// let key = "phone";
// obj[key] = "0812345";
// console.log(obj);

// let campus = {};

// // deklarasi key 'students' dan assign sebuah array engan isi 'Andy'
// campus.students = ["Andy"];

// // menambah data pada key students
// // note : key students adalah array
// campus.students.push("Brad");
// campus.students.push("Cindy");

// console.log(campus);
// // menghitung panjang array
// console.log(campus.students.length);

// let student = {};

// // deklarasi key 'name' da assign sebuah object kosong
// student["name"] = {};
// student["name"].first = "John";
// student["name"].last = "Doe";

// console.log(student);
// // menampilakn semua key dalam bentuk array
// console.log(Object.keys(student.name));

// let obj = {};

// obj[1] = "1";
// obj[15] = 15;
// obj[2] = "2";
// obj["2ahey"] = "Something";
// obj[11] = true;
// console.log(obj);

// let obj = {
//   theKey: "the value",
// };

// // cara 1 : dot with key name
// console.log(obj.theKey);

// // cara 2 : key name as string, with []
// console.log(obj["theKey"]);

// // Cara 3 : variable containing key name with []]
// let targetKey = "theKey";
// console.log(obj[targetKey]);

// // Function sebagai prosedur yaitu function yang tidak melakukan return apapun
// function show1() {
//   // tanpa parameter
//   console.log("Show Function");
// }

// function show2(str) {
//   //dengan parameter
//   console.log("Str =", str);
// }

// show1();
// show2("Hello There");

// // Function dengan return
// function show3() {
//   // tanpa parameter
//   return "Show function";
// }
// function show4(str) {
//   //dengan parameter
//   return `Str = ${str}`;
// }

// console.log(show3());
// console.log(show4("Good Day"));

// Deklarasi function sebagai variable
// const tambah = function (num1, num2) {
//   return num1 + num2;
// };
// const kalkulasi = function (arrNum, plus) {
//   let res1 = plus(arrNum[0], arrNum[1]);
//   let res2 = plus(arrNum[2], arrNum[3]);

//   return res1 + res2;
// };

// let data = [1, 2, 3, 4];

// // Function tambah dikirim sebagai parameter

// let hasil = kalkulasi(data, tambah);

// console.log(hasil);

// const fn1 = () => {
//   console.log("Hello world");
// };

// const fn2 = (num) => {
//   console.log("Num is", num);
// };

// fn1();
// fn2(24);

// const fn1 = () => {
//   return "Hello, world";
// };

// const fn2 = (num) => {
//   return "Num is " + num;
// };

// console.log(fn1());
// console.log(fn2(24));

// const tambah = (num1, num2) => {
//   return num1 + num2;
// };

// const kalkulasi = (arrNum, plus) => {
//   let res1 = plus(arrNum[0], arrNum[1]);
//   let res2 = plus(arrNum[2], arrNum[3]);
//   return res1 + res2;
// };

// let data = [1, 2, 3, 4];

// // function tambah dikirim sebagai parameter
// let hasil = kalkulasi(data, tambah);

// console.log(hasil);

// // arrow function untuk implicit return hasil
// // hasil expresi yang ada di kanan => akan langsung di return
// const tambah = (a, b) => a + b;
// const square = (x) => x * x;
// const three = () => 3;
// console.log(tambah(2, 3));
// console.log(square(10));
// console.log(three());

// // Arrow function sebagai nameless function
// // Disebut nameless karena tidak diberikan nama pada function tersebut
// setTimeout(() => {
//   console.log("Tulisan yang muncul 2 detik kemudian");
// }, 2000);

// // Destructuring Object
// let arr = [1, 2, 3, 4, 5];
// let obj = {
//   name: "Foo",
//   age: 30,
// };
// console.log(typeof arr);
// console.log(typeof obj);

// let res = ["John", "Doe", "Jakarta"];

// let [firstName1, lastName1, city1] = res;

// let firstName2 = res[0];
// let lastName2 = res[1];
// let city2 = res[2];

// console.log("First Name : ", firstName1, firstName2);
// console.log("Last Name : ", lastName1, lastName2);
// console.log("City : ", city1, city2);

// let [tmp1, tmp2] = res;

// console.log(`${tmp1} ${tmp2}`);

// let res = { firstName: "John", lastName: "Doe", city: "Jakarta" };

// let { firstName, lastName, city } = res;
// let firstName2 = res.firstName;
// let lastName2 = res.lastName;
// let city2 = res.city;

// console.log("First Name : ", firstName, firstName2);
// console.log("Last Name : ", lastName, lastName2);
// console.log("City : ", city, city2);

// let res = { firstName: "John", lastName: "Doe", city: "Jakarta" };
// let { firstName: tmp1, lastName: tmp2 } = res;
// console.log(`${tmp1} ${tmp2}`);

// const findUser = () => {
//   return ["John", "Doe", "Jakarta"];
// };

// let [firstName, lastName, city] = findUser();
// console.log("Full Name: ", firstName, lastName, city);

// const getStudent = () => {
//   return {
//     name: "Fulana",
//     gpa: 3.7,
//   };
// };

// let { name, gpa } = getStudent();
// console.log(`${name} get ${gpa} as his/her GPA`);

// THIS KEYWORD
// // this mengacu pada global variable dari node js
// console.log(">>:", this);

// pada terminal
// let counter = {
//   val: 0,
//   increment: function () {
//     this.val += 1;
//   },
// };
// console.log(counter.val);
// counter.increment();
// console.log(counter.val);

// console.log("›> :", this);
// function first() {
//   console.log(">> first :", this);
// }

// const second = () => {
//   console.log(">> second :", this);
// };
// first();
// second();

// function Counter() {
//   this.val = 0;
//   setInterval(function () {
//     this.val++;
//     console.log(this.val);
//   }, 1000);
// }

// const c = new Counter();

// function Counter() {
//   this.val = 0;
//   setInterval(() => {
//     this.val++;
//     console.log(this.val);
//   }, 1000);
// }

// const c = new Counter();

// const tambah = (num1, num2) => num1 + num2;
// const kali = (num1, num2) => num1 * num2;
// const hasil = (num1) => console.log(num1);
// const formula = (a, b, tambahFn, kaliFn, hasil) => {
//   let hasilKali = kaliFn(a, b);
//   let hasilTambah = tambahFn(hasilKali, 10);
//   hasil(hasilTambah);
// };

// // Formula adalah HOF dari function tambah dan kali

// formula(2, 10, tambah, kali, hasil);

// let animals = [
//   { name: "Fluffy", species: "cat" },
//   { name: "Carlo", species: "cat" },
//   { name: "Sweety", species: "fish" },
//   { name: "Bruno", species: "dog" },
// ];

// let names1 = [];
// // mengumpulkan nama hewan dengan loop
// for (let i = 0; i < animals.length; i++) {
//   names1.push(animals[i].name);
// }
// console.log(names1);
// // Mengumpulkan nama hewan dengan map
// let names2 = animals.map((animal) => animal.name);
// console.log(names2);

// let animals = [
//   { name: "Fluffy", species: "cat" },
//   { name: "Carlo", species: "cat" },
//   { name: "Sweety", species: "fish" },
//   { name: "Bruno", species: "dog" },
// ];

// let cats = [];
// for (let i = 0; i < animals.length; i++) {
//   if (animals[i].species === "cat") {
//     cats.push(animals[i]);
//   }
// }

// console.log(cats);

// // Mengumpulkan cats dengan filter
// let cats2 = animals.filter((animal) => animal.species === "cat");
// console.log(cats2);

// let orders = [{ total: 100 }, { total: 200 }, { total: 300 }];
// let total = 0;
// // menghitung dengan loop
// for (let i = 0; i < orders.length; i++) {
//   total += orders[i].total;
// }
// console.log(total);

// // Menghitung menggunakan reduce
// let total2 = orders.reduce((tmp, order) => tmp + order.total, 0);
// console.log(total2);
// reduce();
