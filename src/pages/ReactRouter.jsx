import React from 'react'
import AppLink from '../components/AppLink'

export default function ReactRouter() {
  return (
    <>
      <h2>React Router</h2>

      <p>
        <AppLink name="React Router" to="https://reactrouter.com" />
        bekerja untuk mengatur alur "lalu lintas" di dalam aplikasi yang
        kita kembangkan. <strong>Note: pada notes di sini akan menggunakan
        React Router v6.</strong>
      </p>

      <p>
        Cara kerjanya adalah, ketika user mengakses sebuah URL (contoh:
        <code>https://linkedin.com/in/someone</code> -- asumsikan LinkedIn
        menggunakan React Router ya :D), React Router akan menangkap URL
        tersebut untuk menyocokkan dengan path yang tersedia.
      </p>

      <p>
        Jika path-nya sesuai, maka component React yang sesuai dengan
        path tersebut akan ditampilkan. Dalam contoh di atas, maka kita
        akan mendapatkan profil LinkedIn dari username <code>someone</code>.
      </p>

      <p>
        Pada notes ini, hanya akan di-cover tentang bagaimana kita melakukan
        navigasi dengan component <code>Link</code>, dan menerapkan routing
        React Router. Namun, teman-teman bisa menggunakan beberapa fungsi React
        Router lainnya, beberapa di antaranya dengan melihat dokumentasi
        <AppLink name="di sini" to="https://reactrouter.com/docs/en/v6/examples/auth" type="external" />
        dan <AppLink name="di sini" to="https://reactrouter.com/docs/en/v6/examples/custom-filter-link" type="external" />.
        Bahkan <AppLink
          name="kita bisa melakukan lazy loading di dalam React Router"
          type="external"
          to="https://reactrouter.com/docs/en/v6/examples/lazy-loading"
        />.
      </p>

      <p>
        Source code dan bagaimana cara kerja React Router pada Notes di sini,
        teman-teman dapat melihatnya pada beberapa file berikut:
      </p>

      <ul>
        <li><code>/src/App.jsx</code> - Routes dan juga main routine React Router</li>
        <li><code>/src/components/AppLink.jsx</code> - Berisi component Link yang merupakan bagian dari React Router.</li>
        <li><code>/src/pages/ReactRedux.jsx</code> - Berisi route dengan <code>Outlet</code> untuk menampilkan output dari sub-route.</li>
      </ul>
    </>
  )
}
