import React from 'react'
import AppLink from '../components/AppLink'

export default function ReactConcepts() {
  return (
    <>
      <h2>React Introduction</h2>

      <p>
        React adalah <strike>framework</strike> <strong>library</strong> untuk front-end
        untuk membangun sebuah tampilan antarmuka pengguna (user interface).
        React memanfaatkan Virtual DOM yang (notabene) akan meningkatkan
        performa render sebuah DOM, dikarenakan data yang diubah tidak
        langsung diubah ke dalam DOM.
      </p>

      <p>
        Saat ini React memiliki 2 jenis component:
      </p>

      <ul>
        <li>
          Class Component - Sesuai namanya, Class Component menggunakan
          pendekatan OOP di dalamnya.
        </li>
        <li>
          Functional Component - Sebelum React 16.8, disebut sebagai
          Stateless Component yang menerima props dari Parent Component.
          Semenjak React 16.8 dirilis, Functional Component dapat
          berfungsi sama seperti Class Component, berkat bantuan
          <AppLink name="React Hooks" to="https://reactjs.org/docs/hooks-intro.html" type="external" />.
        </li>
      </ul>

      <h2>Data Flow in React</h2>

      <p>
        Di sini, kita mempelajari tentang data flow di dalam
        aplikasi React kita. Flow ini bersifat satu arah, membuat
        React menjadi predictable. Predictable dalam artian, kita
        dapat memprediksi ke manakah data tersebut dilempar.
      </p>

      <p>
        React ada 3 alur data:
      </p>

      <ul>
        <li>
          View - merupakan tempat di mana sebuah state ditampilkan.
          Jika user men-trigger event, maka View akan "menyuruh"
          sebuah Action untuk mengubah data pada Store.
        </li>
        <li>
          Action - merupakan tempat sebuah request dari View diterima.
          Tujuannya apa dengan adanya Action ini? Hanya satu: untuk
          mengolah data yang kemudian hasilnya diserahkan kepada Store.
        </li>
        <li>
          Store - tempat di mana state disimpan. Ketika Store menerima
          data dari Action, maka Store akan mengubah state dengan data
          yang diterima dari Action tersebut. Setelah itu, data baru
          tersebut akan dilempar kembali ke View.
        </li>
      </ul>
    </>
  )
}
