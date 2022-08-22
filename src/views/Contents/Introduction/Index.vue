<template>
  <div class="p-5 pt-20 pb-20">
    <h1 class="text-xl text-center font-cff">Introduction</h1>
    <!--Console.log-->
    <div class="mt-8">
      <h2 class="semi-title">Console.log</h2>
      <div class="flex flex-col gap-5 mt-5">
        <pre><prism language="javascript">console.log('Hello World');</prism></pre>
        <pre><prism language="javascript">console.log('Hello', 'World', '!')
console.log('HAPPY', 'NEW', 'YEAR', 2020)
console.log('Welcome', 'to', 30, 'Days', 'Of', 'JavaScript')</prism></pre>
      </div>
      <!--Comments-->
      <div class="mt-8">
        <h2 class="semi-title">Comments</h2>
        <div class="flex flex-col gap-5 mt-5">
          <pre><prism language="javascript"
            >// This is the first comment 
// This is the second comment 
// I am a single line comment 

/* 
This is a multiline
comment Multiline comments can 
take multiple lines JavaScript  
is the language of the web 
*/</prism
          ></pre>
        </div>
      </div>
      <!--Syntax-->
      <div class="mt-8">
        <h2 class="semi-title">Syntax</h2>
        <div class="flex flex-col gap-5 mt-5">
          <p class="p-main indent-8">
            Bahasa pemrograman mirip dengan bahasa manusia. Bahasa Inggris atau
            banyak bahasa lainnya menggunakan kata, frasa, kalimat, kalimat
            majemuk, dan lainnya untuk menyampaikan pesan yang bermakna. Arti
            sintaks dalam bahasa Inggris adalah susunan kata dan frasa untuk
            membuat kalimat yang terbentuk dengan baik dalam suatu bahasa .
            Definisi teknis sintaksis adalah struktur pernyataan dalam bahasa
            komputer. Bahasa pemrograman memiliki sintaks. JavaScript adalah
            bahasa pemrograman dan seperti bahasa pemrograman lainnya memiliki
            sintaks sendiri. Jika kita tidak menulis sintaks yang dipahami
            JavaScript, itu akan menimbulkan berbagai jenis kesalahan. Kami akan
            mengeksplorasi berbagai jenis kesalahan JavaScript nanti. Untuk saat
            ini, mari kita lihat kesalahan sintaks.
          </p>
          <p class="p-main indent-8">
            Saya akan membuat kesalahan yang disengaja. Akibatnya, konsol
            menimbulkan kesalahan sintaks. Sebenarnya, sintaksnya sangat
            informatif. Ini menginformasikan jenis kesalahan apa yang dibuat.
            Dengan membaca pedoman umpan balik kesalahan, kita dapat memperbaiki
            sintaks dan memperbaiki masalah. Proses mengidentifikasi dan
            menghapus kesalahan dari suatu program disebut debugging. Mari kita
            perbaiki kesalahan:
          </p>
          <pre><prism language="javascript">// Kesalahan
console.log(&#x27;Hello, World!&#x22;)
console.log(&#x22;Hello, World!&#x22;)
console.log(&#x60;Hello, World!&#x27;)</prism></pre>
          <pre><prism language="javascript">// Perbaikan
console.log(&#x27;Hello, World!&#x27;)
console.log(&#x22;Hello, World!&#x22;)
console.log(&#x60;Hello, World!&#x60;)</prism></pre>
          <p class="p-main indent-8">
            Sejauh ini, kita telah melihat cara menampilkan teks menggunakan
            ekstensi <span class="text-[#f7df1e]">console.log()</span>. Jika
            kita mencetak teks atau string menggunakan
            <span class="text-[#f7df1e]">console.log()</span>, teks harus berada
            di dalam tanda kutip tunggal, tanda kutip ganda, atau tanda kutip
            balik. Contoh:
          </p>
          <pre><prism language="javascript">console.log(&#x27;Hello, World!&#x27;)
console.log(&#x22;Hello, World!&#x22;)
console.log(&#x60;Hello, World!&#x60;)</prism></pre>
        </div>
      </div>
      <!--Arithmetics-->
      <div class="mt-8">
        <h2 class="semi-title">Arithmetics</h2>
        <div class="flex flex-col gap-5 mt-5">
          <pre><prism language="javascript">console.log(2 + 3) // Addition
console.log(3 - 2) // Subtraction
console.log(2 * 3) // Multiplication
console.log(3 / 2) // Division
console.log(3 % 2) // Modulus - finding remainder
console.log(3 ** 2) // Exponentiation 3 ** 2 == 3 * 3</prism></pre>
        </div>
      </div>
      <!--Adding JavaScript to a Web Page-->
      <div class="mt-8">
        <h2 class="semi-title">Adding JavaScript to a Web Page</h2>
        <div class="flex flex-col gap-5 mt-5">
          <p class="p-main indent-8">
            JavaScript dapat ditambahkan ke halaman web dengan beberapa cara
            berbeda:
          </p>
          <ul class="px-5 list-disc list-inside p-main">
            <li>Skrip Sebaris</li>
            <li>Skrip Internal</li>
            <li>Skrip Eksternal</li>
            <li>Beberapa skrip Eksternal</li>
          </ul>
          <ul class="flex flex-col gap-3 list-disc list-inside p-main">
            <li>Skrip Sebaris</li>
            <pre><prism language="javascript">&#x3C;!DOCTYPE html&#x3E;
&#x3C;html lang=&#x22;en&#x22;&#x3E;
  &#x3C;head&#x3E;
    &#x3C;title&#x3E;30DaysOfScript:Inline Script&#x3C;/title&#x3E;
  &#x3C;/head&#x3E;
  &#x3C;body&#x3E;
    &#x3C;button onclick=&#x22;alert(&#x27;Welcome to 30DaysOfJavaScript!&#x27;)&#x22;&#x3E;Click Me&#x3C;/button&#x3E;
  &#x3C;/body&#x3E;
&#x3C;/html&#x3E;</prism></pre>
            <li class="mt-4">Skrip Internal</li>
            <p class="p-main">
              Skrip internal dapat ditulis dalam
              <span class="text-[#f7df1e]">head</span> atau
              <span class="text-[#f7df1e]">body</span>, tetapi lebih disukai
              untuk meletakkannya di badan dokumen HTML. Pertama, mari kita
              tulis di bagian kepala halaman.
            </p>
            <pre><prism language="javascript">&#x3C;!DOCTYPE html&#x3E;
&#x3C;html lang=&#x22;en&#x22;&#x3E;
  &#x3C;head&#x3E;
    &#x3C;title&#x3E;30DaysOfScript:Internal Script&#x3C;/title&#x3E;
    &#x3C;script&#x3E;
      console.log(&#x27;Welcome to 30DaysOfJavaScript&#x27;)
    &#x3C;/script&#x3E;
  &#x3C;/head&#x3E;
  &#x3C;body&#x3E;&#x3C;/body&#x3E;
&#x3C;/html&#x3E;</prism></pre>
            <p class="p-main">
              Ini adalah cara kami menulis skrip internal sebagian besar waktu.
              Menulis kode JavaScript di bagian tubuh adalah opsi yang paling
              disukai. Buka konsol browser untuk melihat output dari file
              <span class="text-[#f7df1e]">console.log()</span>.
            </p>
            <pre><prism language="javascript">&#x3C;!DOCTYPE html&#x3E;
&#x3C;html lang=&#x22;en&#x22;&#x3E;
  &#x3C;head&#x3E;
    &#x3C;title&#x3E;30DaysOfScript:Internal Script&#x3C;/title&#x3E;
  &#x3C;/head&#x3E;
  &#x3C;body&#x3E;
    &#x3C;button onclick=&#x22;alert(&#x27;Welcome to 30DaysOfJavaScript!&#x27;);&#x22;&#x3E;Click Me&#x3C;/button&#x3E;
    &#x3C;script&#x3E;
      console.log(&#x27;Welcome to 30DaysOfJavaScript&#x27;)
    &#x3C;/script&#x3E;
  &#x3C;/body&#x3E;
&#x3C;/html&#x3E;</prism></pre>
            <li class="mt-4">Skrip Eksternal</li>
            <p class="p-main">
              Mirip dengan skrip internal, tautan skrip eksternal dapat berada
              di header atau badan, tetapi lebih disukai untuk meletakkannya di
              badan. Pertama, kita harus membuat file JavaScript eksternal
              dengan ekstensi .js. Semua file yang diakhiri dengan ekstensi .js
              adalah file JavaScript. Buat file bernama introduction.js di dalam
              direktori proyek Anda dan tulis kode berikut dan tautkan file .js
              ini di bagian bawah isi.
            </p>
            <pre><prism language="javascript">console.log('Hello World');</prism></pre>
            <p class="p-main">Skrip eksternal di head :</p>
            <pre><prism language="javascript">&#x3C;!DOCTYPE html&#x3E;
&#x3C;html lang=&#x22;en&#x22;&#x3E;
  &#x3C;head&#x3E;
    &#x3C;title&#x3E;30DaysOfJavaScript:External script&#x3C;/title&#x3E;
    &#x3C;script src=&#x22;introduction.js&#x22;&#x3E;&#x3C;/script&#x3E;
  &#x3C;/head&#x3E;
  &#x3C;body&#x3E;&#x3C;/body&#x3E;
&#x3C;/html&#x3E;</prism></pre>
            <p class="p-main">Skrip eksternal di body :</p>
            <pre><prism language="javascript">&#x3C;!DOCTYPE html&#x3E;
&#x3C;html lang=&#x22;en&#x22;&#x3E;
  &#x3C;head&#x3E;
    &#x3C;title&#x3E;30DaysOfJavaScript:External script&#x3C;/title&#x3E;
  &#x3C;/head&#x3E;
  &#x3C;body&#x3E;
    &#x3C;!-- JavaScript external link could be in the header or in the body --&#x3E; 
    &#x3C;!-- Before the closing tag of the body is the recommended place to put the external JavaScript script --&#x3E;
    &#x3C;script src=&#x22;introduction.js&#x22;&#x3E;&#x3C;/script&#x3E;
  &#x3C;/body&#x3E;
&#x3C;/html&#x3E;</prism></pre>
            <p class="p-main">
              Buka konsol browser untuk melihat output dari file
              <span class="text-[#f7df1e]">console.log()</span>.
            </p>
            <li class="mt-4">Beberapa skrip Eksternal</li>
            <pre><prism language="javascript">console.log('Hello, World!')</prism></pre>
            <pre><prism language="javascript">&#x3C;!DOCTYPE html&#x3E;
&#x3C;html lang=&#x22;en&#x22;&#x3E;
  &#x3C;head&#x3E;
    &#x3C;title&#x3E;Multiple External Scripts&#x3C;/title&#x3E;
  &#x3C;/head&#x3E;
  &#x3C;body&#x3E;
    &#x3C;script src=&#x22;./helloworld.js&#x22;&#x3E;&#x3C;/script&#x3E;
    &#x3C;script src=&#x22;./introduction.js&#x22;&#x3E;&#x3C;/script&#x3E;
  &#x3C;/body&#x3E;
&#x3C;/html&#x3E;</prism></pre>
          </ul>
        </div>
      </div>
      <!--Introduction to Data types-->
      <div class="mt-8">
        <h2 class="semi-title">Introduction to Data types</h2>
        <div class="flex flex-col gap-5 mt-5">
          <p class="p-main indent-8">
            Dalam JavaScript dan juga bahasa pemrograman lainnya, ada berbagai
            jenis tipe data. Berikut ini adalah tipe data primitif JavaScript:
          </p>
          <ul class="px-5 list-disc list-inside p-main">
            <li>String</li>
            <li>Number</li>
            <li>Boolean</li>
            <li>Undefined</li>
            <li>Null</li>
          </ul>
          <ul class="flex flex-col gap-3 list-disc list-inside p-main">
            <li class="mt-4">String</li>
            <p class="p-main indent-8">
              Kumpulan satu atau lebih karakter di antara dua tanda kutip
              tunggal, tanda kutip ganda, atau tanda kutip balik.
            </p>
            <pre><prism language="javascript">&#x27;a&#x27;
&#x27;Asabeneh&#x27;
&#x22;Asabeneh&#x22;
&#x27;Finland&#x27;
&#x27;JavaScript is a beautiful programming language&#x27;
&#x27;I love teaching&#x27;
&#x27;I hope you are enjoying the first day&#x27;
&#x60;We can also create a string using a backtick&#x60;
&#x27;A string could be just as small as one character or as big as many pages&#x27;
&#x27;Any data type under a single quote, double quote or backtick is a string&#x27;</prism></pre>
            <li class="mt-4">Number</li>
            <ul class="px-5 list-disc list-inside">
              <li>
                Bilangan bulat: Bilangan bulat (negatif, nol dan positif)
                Contoh: ... -3, -2, -1, 0, 1, 2, 3 ...
              </li>
              <li>
                Angka titik-mengambang: Angka desimal Contoh ... -3.5, -2.25,
                -1.0, 0.0, 1.1, 2.2, 3.5 ...
              </li>
            </ul>
            <li class="mt-4">Boolean</li>
            <p class="p-main indent-8">
              Nilai boolean adalah True atau False. Setiap perbandingan
              mengembalikan nilai boolean, yang benar atau salah. Tipe data
              boolean adalah nilai benar atau salah.
            </p>
            <pre><prism language="javascript">true // if the light is on, the value is true
false // if the light is off, the value is false</prism></pre>
            <li class="mt-4">Undefined</li>
            <p class="p-main indent-8">
              Dalam JavaScript, jika kita tidak menetapkan nilai ke variabel,
              nilainya tidak ditentukan. Selain itu, jika suatu fungsi tidak
              mengembalikan apa pun, ia mengembalikan tidak terdefinisi.
            </p>
            <pre><prism language="javascript">let firstName
console.log(firstName) // undefined, because it is not assigned to a value yet</prism></pre>
            <li class="mt-4">Null</li>
            <p class="p-main indent-8">
              Null dalam JavaScript berarti nilai kosong.
            </p>
            <pre><prism language="javascript">let emptyValue = null</prism></pre>
          </ul>
        </div>
      </div>
      <!--Checking Data Types-->
      <div class="mt-8">
        <h2 class="semi-title">Introduction to Data types</h2>
        <div class="flex flex-col gap-5 mt-5">
          <p class="p-main indent-8">
            Untuk memeriksa tipe data dari variabel tertentu, kami menggunakan
            operator typeof . Lihat contoh berikut.
          </p>
          <pre><prism language="javascript">console.log(typeof 'Asabeneh') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined</prism></pre>
        </div>
      </div>
      <!--Comments Again-->
      <div class="mt-8">
        <h2 class="semi-title">Comments Again</h2>
        <div class="flex flex-col gap-5 mt-5">
          <p class="p-main indent-8">
            Ingat bahwa berkomentar dalam JavaScript mirip dengan bahasa
            pemrograman lain. Komentar penting dalam membuat kode Anda lebih
            mudah dibaca. Ada dua cara berkomentar:
          </p>
          <ul class="px-5 list-disc list-inside p-main">
            <li>Komentar Satu Baris</li>
            <li>Komentar Multibaris</li>
          </ul>
          <ul class="flex flex-col gap-3 list-disc list-inside p-main">
            <li>Komentar Satu Baris</li>
            <pre><prism language="javascript">// Commenting the code itself with a single comment
// let firstName = 'Asabeneh'; single line comment
// let lastName = 'Yetayeh'; single line comment</prism></pre>
            <li class="mt-4">Komentar Multibaris</li>
            <pre><prism language="javascript">/*
let location = 'Helsinki';
let age = 100;
let isMarried = true;
This is a Multiple line comment
*/</prism></pre>
          </ul>
        </div>
      </div>
      <!--Variables-->
      <div class="mt-8">
        <h2 class="semi-title">Variables</h2>
        <div class="flex flex-col gap-5 mt-5">
          <p class="p-main indent-8">
            Variabel adalah wadah data. Variabel digunakan untuk menyimpan data
            di lokasi memori. Ketika sebuah variabel dideklarasikan, lokasi
            memori dicadangkan. Ketika sebuah variabel ditetapkan ke suatu nilai
            (data), ruang memori akan diisi dengan data tersebut. Untuk
            mendeklarasikan variabel, kita menggunakan kata kunci var , let ,
            atau const.
          </p>
          <p class="p-main indent-8">
            Untuk variabel yang berubah pada waktu yang berbeda, kami
            menggunakan let . Jika data tidak berubah sama sekali, kami
            menggunakan const . Misalnya, PI, nama negara, gravitasi tidak
            berubah, dan kita dapat menggunakan const . Kami tidak akan
            menggunakan var dalam tantangan ini dan saya tidak menyarankan Anda
            untuk menggunakannya. Ini adalah cara yang rawan kesalahan untuk
            mendeklarasikan variabel yang memiliki banyak kebocoran. Kami akan
            berbicara lebih banyak tentang var, let, dan const secara rinci di
            bagian lain (lingkup). Untuk saat ini, penjelasan di atas sudah
            cukup.
          </p>
          <p class="p-main indent-8">
            Nama variabel JavaScript yang valid harus mengikuti aturan berikut:
          </p>
          <ul class="px-5 list-disc list-inside p-main">
            <li>Nama variabel JavaScript tidak boleh dimulai dengan angka.</li>
            <li>
              Nama variabel JavaScript tidak mengizinkan karakter khusus kecuali
              tanda dolar dan garis bawah.
            </li>
            <li>Nama variabel JavaScript mengikuti konvensi camelCase.</li>
            <li>
              Nama variabel JavaScript tidak boleh memiliki spasi di antara
              kata-kata.
            </li>
          </ul>
          <pre><prism language="javascript">firstName
lastName
country
city
capitalCity
age
isMarried

first_name
last_name
is_married
capital_city

num1
num_1
_num_1
$num1
year2020
year_2020</prism></pre>
          <p class="p-main indent-8">
            Mari kita mendeklarasikan variabel dengan tipe data yang berbeda.
            Untuk mendeklarasikan variabel, kita perlu menggunakan kata kunci
            let atau const sebelum nama variabel. Mengikuti nama variabel, kami
            menulis tanda sama dengan (operator penugasan), dan nilai (data yang
            ditetapkan).
          </p>
          <pre><prism language="javascript">// Syntax
let nameOfVariable = value</prism></pre>
          <p class="p-main indent-8">
            NameOfVriable adalah nama yang menyimpan data nilai yang berbeda.
            Lihat di bawah untuk contoh detail.
          </p>
          <h2 class="font-cff">Contoh variabel yang dideklarasikan :</h2>
          <pre><prism language="javascript">// Declaring different variables of different data types
let firstName = 'Asabeneh' // first name of a person
let lastName = 'Yetayeh' // last name of a person
let country = 'Finland' // country
let city = 'Helsinki' // capital city
let age = 100 // age in years
let isMarried = true

console.log(firstName, lastName, country, city, age, isMarried)</prism></pre>
          <pre><prism language="javascript">Asabeneh Yetayeh Finland Helsinki 100 true</prism></pre>
          <pre><prism language="javascript">// Declaring variables with number values
let age = 100 // age in years
const gravity = 9.81 // earth gravity  in m/s2
const boilingPoint = 100 // water boiling point, temperature in °C
const PI = 3.14 // geometrical constant
console.log(gravity, boilingPoint, PI)</prism></pre>
          <pre><prism language="javascript">9.81 100 3.14</prism></pre>
          <pre><prism language="javascript">// Variables can also be declaring in one line separated by comma, however I recommend to use a seperate line to make code more readble
let name = 'Asabeneh', job = 'teacher', live = 'Finland'
console.log(name, job, live)</prism></pre>
          <pre><prism language="javascript">Asabeneh teacher Finland</prism></pre>
          <p class="p-main">Jalankan file index.html</p>
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
