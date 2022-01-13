import React from 'react';

import AppLink from '../../components/AppLink';

export default function Redux() {
  return (
    <>
      <h2>Redux</h2>

      <h3>Apa itu Redux?</h3>

      <p>
        Redux merupakan sebuah global state manager, yang didesain bukan
        hanya untuk React, namun juga untuk framework seperti Vue, atau bahkan
        back-end seperti Node.js.
      </p>

      <p>
        Jika kalian sudah mengetahui alur data di dalam React pada&nbsp;
        <AppLink to="/concepts" name="React Concepts" />, maka teman-teman bisa
        melihat kalau Redux akan "duduk" di bagian Actions dan Store.
      </p>

      <ol>
        <li>
          <code>Action</code> - karena Redux akan melakukan pemanggilan,
          kalkulasi, pemanggilan query terhadap external 3rd party, dan semacamnya;
          sebelum data hasil pemrosesan tersebut dimasukkan ke dalam <code>Store</code>.
        </li>
        <li>
          <code>Store</code> - karena Redux akan menyimpan data yang sudah
          diproses ke dalam sebuah state.
        </li>
      </ol>

      <p>
        Redux "menjunjung tinggi" 3 prinsip utama:
      </p>

      <ol>
        <li>
          Predictability -- Artinya, kita dapat memprediksi arah/tujuan
          dari suatu data, ketika kita menggunakan Redux.
        </li>
        <li>
          Immutability -- Artinya, setiap data yang tersimpan pada Redux,
          tidak dapat diubah-ubah/di-mutate. Dengan kata lain, jika
          terjadi perubahan data, maka state lama harus dibuang, dan
          diganti dengan state yang baru.
        </li>
        <li>
          Pure function -- Artinya reducer dalam Redux akan berjalan
          sebagaimana mestinya; tanpa adanya side effects lain (singkatnya,
          tidak memanggil function lain-lain lagi ketika sudah masuk ke dalam
          tahap reducer).
        </li>
      </ol>

      <p>
        Ada beberapa library yang mengimplementasikan Redux, yang teman-teman
        bisa baca dan eksplor:
      </p>

      <ol>
        <li><AppLink name="Redux Toolkit" type="external" to="https://redux-toolkit.js.org/" /></li>
        <li>
          <AppLink name="Rematch" type="external" to="https://rematchjs.org/" />&nbsp;
          -- Notes akan menggunakan ini sebagai contohnya.
        </li>
      </ol>

      <p>
        Di Notes bagian ini, saya menggunakan&nbsp;
        <AppLink name="Axios" type="external" to="https://axios-http.com/" /> sebagai alternatif dari&nbsp;
        <AppLink name="Fetch HTTP" type="external" to="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" /> yang
        saya praktikkan pada bagian React Fetching.
      </p>
    </>
  )
}
