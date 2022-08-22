<template>
  <div class="p-5 pt-20 pb-20">
    <h1 class="text-xl text-center font-cff">Data Types</h1>
    <div class="mt-8">
      <div class="flex flex-col gap-5 mt-5">
        <p class="p-main indent-8">
          Pada bagian sebelumnya, kami telah menyebutkan sedikit tentang tipe
          data. Data atau nilai memiliki tipe data. Tipe data menggambarkan
          karakteristik data. Tipe data dapat dibagi menjadi dua:
        </p>
        <ul class="px-5 list-disc list-inside p-main">
          <li>Tipe data primitif</li>
          <li>Tipe data non-primitif (Referensi Objek)</li>
        </ul>
      </div>
      <!--Primitive Data Types-->
      <div class="mt-8">
        <h2 class="semi-title">Primitive Data Types</h2>
        <div class="flex flex-col gap-5 mt-5">
          <ul class="flex flex-col gap-3 list-disc list-inside p-main">
            <p class="p-main indent-8">
              Tipe data primitif dalam JavaScript meliputi:
            </p>
            <ul
              class="flex flex-col gap-3 px-5 list-decimal list-inside p-main"
            >
              <li>
                <span class="underline">Bilangan</span> : Bilangan bulat, float
              </li>
              <li>
                <span class="underline">String</span> : Data apa pun di bawah
                kutipan tunggal, kutipan ganda, atau kutipan backtick
              </li>
              <li>
                <span class="underline">Boolean</span> : Nilai benar atau salah
              </li>
              <li>
                <span class="underline">Null</span> : Nilai kosong atau tidak
                ada nilai
              </li>
              <li>
                <span class="underline">Undefined</span> : Variabel yang
                dideklarasikan tanpa nilai
              </li>
              <li>
                <span class="underline">Simbol</span> : Nilai unik yang dapat
                dihasilkan oleh konstruktor Simbol
              </li>
            </ul>
            <li>Tipe data non-primitif (Referensi Objek)</li>
            <p class="p-main indent-8">
              Sekarang, mari kita lihat apa sebenarnya arti dari tipe data
              primitif dan non-primitif. Tipe data primitif adalah tipe data
              yang tidak dapat diubah (tidak dapat dimodifikasi). Setelah tipe
              data primitif dibuat, kami tidak dapat memodifikasinya.
            </p>
            <pre><prism language="javascript">let word = 'JavaScript'</prism></pre>
            <p class="p-main indent-8">
              Jika kita mencoba untuk mengubah string yang disimpan dalam
              variabel Word , JavaScript akan menimbulkan kesalahan. Setiap tipe
              data di bawah kutipan tunggal, kutipan ganda, atau kutipan
              backtick adalah tipe data string.
            </p>
            <pre><prism language="javascript">word[0] = 'Y'</prism></pre>
            <p class="p-main indent-8">
              Ekspresi ini tidak mengubah string yang disimpan dalam variabel
              Word . Jadi, kita dapat mengatakan bahwa string tidak dapat
              dimodifikasi atau dengan kata lain tidak dapat diubah. Tipe data
              primitif dibandingkan dengan nilainya. Mari kita bandingkan nilai
              data yang berbeda. Lihat contoh di bawah ini:
            </p>
            <pre><prism language="javascript">let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false</prism></pre>
          </ul>
        </div>
      </div>
      <!--Non-Primitive Data Types<-->
      <div class="mt-8">
        <h2 class="semi-title">Non-Primitive Data Types</h2>
        <div class="flex flex-col gap-5 mt-5">
          <p class="p-main indent-8">
            Tipe data non-primitif dapat dimodifikasi atau diubah. Kita dapat
            mengubah nilai tipe data non-primitif setelah dibuat. Mari kita
            lihat dengan membuat array. Array adalah daftar nilai data dalam
            tanda kurung siku. Array dapat berisi tipe data yang sama atau
            berbeda. Nilai array direferensikan oleh indeksnya. Dalam indeks
            array JavaScript dimulai dari nol. Yaitu, elemen pertama dari array
            ditemukan pada indeks nol, elemen kedua pada indeks satu, dan elemen
            ketiga pada indeks dua, dll.
          </p>
          <pre><prism language="javascript">let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)  // [10, 2, 3]</prism></pre>
          <p class="p-main indent-8">
            Seperti yang Anda lihat, sebuah array, yang merupakan tipe data
            non-primitif bisa berubah. Tipe data non-primitif tidak dapat
            dibandingkan berdasarkan nilai. Bahkan jika dua tipe data
            non-primitif memiliki properti dan nilai yang sama, keduanya tidak
            sepenuhnya sama.
          </p>
          <pre><prism language="javascript">let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

console.log(userOne == userTwo) // false</prism></pre>
          <p class="p-main indent-8">
            Aturan praktisnya, kami tidak membandingkan tipe data non-primitif.
            Jangan membandingkan array, fungsi, atau objek. Nilai non-primitif
            disebut sebagai tipe referensi, karena dibandingkan dengan
            referensi, bukan nilai. Dua objek hanya benar-benar sama jika mereka
            merujuk ke objek dasar yang sama.
          </p>
          <pre><prism language="javascript">let nums = [1, 2, 3]
let numbers = nums

console.log(nums == numbers)  // true

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = userOne

console.log(userOne == userTwo)  // true</prism></pre>
        </div>
      </div>
      <!--Number (Mendeklarasikan Tipe Data Angka)-->
      <div class="mt-8">
        <h2 class="semi-title">Number (Mendeklarasikan Tipe Data Angka)</h2>
        <div class="flex flex-col gap-5 mt-5">
          <pre><prism language="javascript">let age = 35
const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72         // mass in Kilogram
const PI = 3.14       // pi a geometrical constant

// More Examples
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37      // oC average human body temperature, which is a constant

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)</prism></pre>
        </div>
      </div>
      <!--Number (Objek Matematika)-->
      <div class="mt-8">
        <h2 class="semi-title">Number (Objek Matematika)</h2>
        <div class="flex flex-col gap-5 mt-5">
          <p class="p-main indent-8">
            Dalam JavaScript, Objek Matematika menyediakan banyak metode untuk
            bekerja dengan angka.
          </p>
          <pre><prism language="javascript">const PI = Math.PI

console.log(PI)                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI))                // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 rounding down

console.log(Math.ceil(PI))                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)</prism></pre>
        </div>
      </div>
      <!--Number (Generator Angka Acak)-->
      <div class="mt-8">
        <h2 class="semi-title">Number (Generator Angka Acak)</h2>
        <div class="flex flex-col gap-5 mt-5">
          <p class="p-main indent-8">
            Objek Matematika JavaScript memiliki generator nomor metode
            <span class="text-[#f7df1e]">random()</span>
            yang menghasilkan angka dari 0 hingga 0,999999999...
          </p>
          <pre><prism language="javascript">let randomNum = Math.random() // generates 0 to 0.999...</prism></pre>
          <p class="p-main indent-8">
            Sekarang, mari kita lihat bagaimana kita dapat menggunakan metode
            <span class="text-[#f7df1e]">random()</span> untuk menghasilkan
            angka acak antara 0 dan 10 :
          </p>
          <pre><prism language="javascript">let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10</prism></pre>
        </div>
      </div>
      <!--String-->
      <div class="mt-8">
        <h2 class="semi-title">String</h2>
        <div class="flex flex-col gap-5 mt-5">
          <p class="p-main indent-8">
            String adalah teks, yang berada di bawah tanda kutip single , double
            , back-tick . Untuk mendeklarasikan string, kita memerlukan nama
            variabel, operator penugasan, nilai di bawah tanda kutip tunggal,
            tanda kutip ganda, atau tanda kutip balik. Mari kita lihat beberapa
            contoh string :
          </p>
          <pre><prism language="javascript">let space = ' '           // an empty space string
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`</prism></pre>
        </div>
      </div>
      <!--String (Penggabungan String)-->
      <div class="mt-8">
        <h2 class="semi-title">String (Penggabungan String)</h2>
        <div class="flex flex-col gap-5 mt-5">
          <p class="p-main indent-8">
            Menghubungkan dua atau lebih string bersama-sama disebut
            concatenation. Menggunakan string yang dideklarasikan di bagian
            String sebelumnya:
          </p>
          <pre><prism language="javascript">let fullName = firstName + space + lastName; // concatenation, merging two string together.
              console.log(fullName);</prism></pre>
          <pre><prism language="javascript">Asabeneh Yetayeh</prism></pre>
          <p class="p-main">
            Kita dapat menggabungkan string dengan cara yang berbeda.
          </p>
        </div>
      </div>
      <!--String (Menggabungkan Menggunakan Operator Penambahan)-->
      <div class="mt-8">
        <h2 class="semi-title">
          String (Menggabungkan Menggunakan Operator Penambahan)
        </h2>
        <div class="flex flex-col gap-5 mt-5">
          <p class="p-main indent-8">
            Menggabungkan menggunakan operator penjumlahan adalah cara lama.
            Cara menggabungkan ini membosankan dan rawan kesalahan. Adalah baik
            untuk mengetahui cara menggabungkan dengan cara ini, tetapi saya
            sangat menyarankan untuk menggunakan string template ES6 (dijelaskan
            nanti).
          </p>
          <pre><prism language="javascript">// Declaring different variables of different data types
let space = ' '
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250


let fullName =firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition

console.log(personInfoOne)</prism></pre>
          <pre><prism language="javascript">Asabeneh Yetayeh. I am 250. I live in Finland</prism></pre>
        </div>
      </div>
      <!--String (String Literal Panjang)-->
      <div class="mt-8">
        <h2 class="semi-title">String (String Literal Panjang)</h2>
        <div class="flex flex-col gap-5 mt-5">
          <p class="p-main indent-8">
            Sebuah string bisa menjadi satu karakter atau paragraf atau halaman.
            Jika panjang string terlalu besar tidak muat dalam satu baris. Kita
            dapat menggunakan karakter garis miring terbalik (\) di akhir setiap
            baris untuk menunjukkan bahwa string akan berlanjut pada baris
            berikutnya. Contoh :
          </p>
          <pre><prism language="javascript">const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)</prism></pre>
        </div>
      </div>
      <!--String (Urutan Escape dalam String)-->
      <div class="mt-8">
        <h2 class="semi-title">String (Urutan Escape dalam String)</h2>
        <div class="flex flex-col gap-5 mt-5">
          <p class="p-main indent-8">
            Dalam JavaScript dan bahasa pemrograman lain \ diikuti oleh beberapa
            karakter adalah urutan pelarian. Mari kita lihat karakter pelarian
            yang paling umum:
          </p>
          <ul class="flex flex-col gap-3 list-disc list-inside p-main">
            <li><span class="underline">\n</span> : baris baru</li>
            <li><span class="underline">\t</span> : Tab, artinya 8 spasi</li>
            <li>
              <span class="underline">\\</span> : Garis miring ke belakang
            </li>
            <li><span class="underline">\'</span> : Tanda kutip tunggal (')</li>
            <li><span class="underline">\"</span> : Tanda kutip ganda (")</li>
          </ul>
          <pre><prism language="javascript">console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')</prism></pre>
          <p class="p-main">Keluaran di konsol:</p>
          <pre><prism language="javascript">I hope everyone is enjoying the 30 Days Of JavaScript challenge.
Do you ?
Days  Topics  Exercises
Day 1 3 5
Day 2 3 5
Day 3 3 5
Day 4 3 5
This is a backslash  symbol (\)
In every programming language it starts with "Hello, World!"
In every programming language it starts with 'Hello, World!'
The saying 'Seeing is Believing' isn't correct in 2020</prism></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "prismjs";
import "prismjs/themes/prism-tomorrow.min.css";
import Prism from "vue-prism-component";

export default {
  data() {
    return {};
  },
  components: {
    Prism,
  },
};
</script>
