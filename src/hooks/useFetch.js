import { useEffect, useState } from 'react';

// Di sinilah useFetch, sebuah custom hook yang saya buat, bekerja
// di balik layar.

// useFetch ini membutuhkan 2 parameter (kalian bisa set parameter
// sesuai dengan kebutuhan kalian ya): route dan opts
// - route -> route yang akan diambil ketika memanggil fetch()
// - opts  -> opsi yang dibutuhkan oleh fetch():
//            - method : GET, POST, PUT, PATCH, DELETE, OPTIONS
//            - body   : data yang akan dikirimkan ke dalam server
//                       (method POST, PUT, PATCH)
//            - query  : data yang akan dikirimkan ke dalam server
//                       dalam bentuk querysearch (method GET)

export function useFetch(route, opts) {
  // Saya siapkan result dan loading, dan nantinya akan di-return di
  // bagian paling bawah
  const [ result, setResult ] = useState()
  const [ loading, setLoading ] = useState(false)

  // Saya juga useState untuk url agar dapat ditimpa ketika query
  // ditemukan di dalam parameter opts
  const [ url, setUrl ] = useState(route)

  useEffect(() => {
    async function request() {
      try {
        const { method, body, query } = opts
        const fetchOpts = { method: method.toUpperCase() }

        setLoading(true)

        // Jika body tersedia, maka fetchOpts akan ditambahkan
        // dengan property body, yang berisi body yang di-stringify
        // dalam format JSON.
        if(body && !['GET', 'HEAD'].includes(method.toUppercase()))
          fetchOpts.body = JSON.stringify(body)

        // Jika query tersedia, maka url akan dilengkapi dengan query
        // dengan format seperti contoh berikut:
        // http://example.com/route/param?query=1&query=2
        // https://example.com/route/param?querty=1
        if(query){
          const keys = Object.keys(query)
          const querysearch = keys.map(key => `${key}=${query[key]}`).join('&')

          setUrl(`${url}?${querysearch}`)
        }

        const response = await fetch(url, fetchOpts)
        const res = await response.json()

        setResult(res)
      } finally {
        setLoading(false)
      }
    }

    request()
  }, [route])

  // di sinilah state yang saya buat di-return
  return [ result, loading ]
}
