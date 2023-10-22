// // deklarasi variable let
// let score;
// console.log(score); //output: undefined

// // Assignment
// // [mengisi nilai ke dalam variabel]
// score = 100;
// console.log(score); //output: 100

// // re assignment
// // [mengisi nilai baru ke dalam variabel]

// score = 90;
// console.log(score); //output: 90

// // deklasari + assignment
// let studentName = "Fulan";
// console.log(studentName); //output: Fulan

// const isDone = false;
// console.log(isDone); //output:false;

// // Operasi Aritmatika
// // Dengan angka langsung

// console.log(1 + 1); //output: 2;

// let angka1 = 10;
// let angka2 = 4;

// // angka dan variable
// console.log(angka1 - 4); //output: 6

// // variable dan variable

// console.log(angka1 * angka2); //output: 40

// let count = 1;

// // equal to count = count + 1
// count++; //increment
// console.log(count); //output: 2;

// // equal to count = count - 1
// count--; //decrement
// console.log(count); //output: 1;

// // addition to assignment (+=)
// // equal to count = count + 3
// count += 3;
// console.log(count); //output: 4;

// langsung menampilkan sebuah string
// console.log("Hacktiv8");
// console.log("Hacktiv8");

// // Beda kutip di dalam string
// console.log('<div class="blue"></div>');
// // output: <div class="blue"></div>

// // Jika ada kutip yang sama dengan pembatas
// // di dalam sebuah string
// console.log("He's good");
// // output: he's good

// console.log('A: "Hey"');
// // Output : A: "Hey"

// // deklarasi + assignment
// let pet = "Dog";
// console.log(pet); // output : Dog
// pet = "Cat"; // re-assignment
// console.log(pet); // output : Cat
// // menampilkan string dari sebuah variable
// let content = '‹div class "blue"></div>';
// console.log(content);
// // menampilkan jumlah karakter
// // dari sebuah string
// console.log("NodeJS".length); // output: 6
// console.log(pet.length); // output: 3

// // deklarasi + assignment
// let pet = "Dog";
// console.log(pet); // output : Dog
// // menampilkan huruf pertama
// console.log(pet[0]);
// // menampilkan huruf terakhir
// let idx = pet.length - 1; // index terakhir
// console.log(pet[idx]);
// // menampilkan huruf 'o'
// console.log(pet[1]);

// dengan variable
// let firstName = "John";
// let lastName = "Doe";
// let score = 100;
// console.log(firstName + " " + lastName);
// // output : John Doe
// // bantuan variable penampung
// let fullName = firstName + " " + lastName;
// console.log(fullName);
// // output : "John Doe"
// console.log(firstName + " Dane");
// // output: "John Dane";
// console.log("Score is " + score);
// // output :Score is 100

// // Boolean
// // deklarasi + assignment
// let isValid = true;
// console.log(isValid); // output : true

// // re-assignment
// isValid = false;
// console.log(isValid); // output : false

// // re-assignment dengan !
// isValid = !isValid;
// console.log(isValid); // output : true

// // boolean tidak menggunakan tanda kutip
// let foo = "true"; // string
// let bar = false; // boolean

// // ARRAY
// // Deklarasi + assignment
// let arr1 = new Array(10, 20, 30, 40, 50);

// // Deklarasi array dengan panjang 5 dan semua elemen akan berisi undefined secara default
// let arr2 = new Array(5);

// // deklarasi array dengan panjan 1 dan langsung mengisi dengan 1 string
// let arr3 = new Array("FOO");

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// // deklarasi kosongan
// let arr = [];

// // Deklarasi + assignment
// let arrNums = [1, 2, 3, 4, 5];
// let arr_names = ["a", "Agus", "rini"];

// console.log(arrNums);
// console.log(arr_names);

// Insertion

// // deklarasi + assignemnt
// let arrNums = [1, 2, 3, 4, 5];

// // insertion di akhir dengan push
// arrNums.push(6);
// console.log(arrNums);

// // insertion di awal degnan unshift
// arrNums.unshift(0);
// console.log(arrNums);

// // isi di akhir, memanfaatkan index
// let idx = arrNums.length;
// arrNums[idx] = 100;
// console.log(arrNums);

// let arrNums = [1, 2, 3, 4, 5];

// // element pertama, index = 0
// console.log(arrNums[0]);
// // elemen terakhir, index = length - 1
// console.log(arrNums[arrNums.length - 1]);
// // element random index
// console.log(arrNums[3]);
// // akses index  yang tidak ada
// console.log(arrNums[9]);

// // Editing
// let arrNums = [1, 2, 3, 4, 5];

// // array awals
// console.log(arrNums);

// // re-assignment di index tertentu
// arrNums[3] = 99;

// // maka element di index 3 akan berubah
// console.log(arrNums);

// let fruits1 = ["mango", "apple", "orange"];
// let fruits2 = ["papaya", "guava"];
// let fruits3 = ["strawberry", "pineapple"];

// // join fruits 2 to fruits 1
// fruits1.push.apply(fruits1, fruits2);
// console.log(fruits1);

// // menggunakan spread operator
// let allFruits = [...fruits2, ...fruits3];
// console.log(allFruits);

// // tanpa menggunakan spread operator
// let invalidJoin = [fruits2, fruits3];
// console.log(invalidJoin);

// Slice

// let arrNums = [1, 2, 3, 4, 5];

// console.log(arrNums.slice(2));
// // output: [3,4,5]
// console.log(arrNums.slice(2, 4));
// // output: [3,4]
// console.log(arrNums.slice(3, 10));
// // output: [4,5]
// console.log(arrNums.slice(-3));
// // output: [3,4,5]
// console.log(arrNums.slice(1, -1));
// // output:[2,3,4]

// console.log(arrNums);
// // output: [ 1, 2, 3, 4, 5 ]

// let arrNums;

// // Splice untuk mengahpus 1 elemen
// arrNums = [1, 2, 3, 4, 5];
// console.log(arrNums.splice(2, 1));
// console.log(arrNums);

// // Splice untuk mengahpus 3 elemen
// arrNums = [1, 2, 3, 4, 5];
// console.log(arrNums.splice(1, 3));
// console.log(arrNums);

// let months = ["Jan", "March", "April", "June"];

// // menyisipkan tanpa menghapus
// months.splice(1, 0, "Feb");
// console.log(months);

// // menyisipkan sambil menghapus
// months.splice(2, 2, "NewMonth1", "NewMonth2");
// console.log(months);

// let months = ["Jan", "March", "April", "June"];

// months = [];
// console.log(months);

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(arr);

// // baca index ke 0
// console.log(arr[0]);

// // baca index ke 0,0
// console.log(arr[(0, 0)]);

// // push ke element index ke 1
// arr[1].push(24);
// console.log(arr);

// // push ke array utama
// arr.push([10, 20, 30]);
// console.log(arr);
