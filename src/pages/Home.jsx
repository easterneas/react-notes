// import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function Home () {
  const dispatch = useDispatch()
  const { title } = useSelector(({ base }) => base)

  useEffect(
    () => dispatch.base.setTitle('React Notes'),
    [
      title,
      dispatch // optional, karena warning exhaustive-deps (bisa di-remove warning ini)
    ]
  )

  return (
    <div className="hero min-h-full">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            React Notes
          </h1>

          <p className="mb-5">
            Hi! 👋🏻
          </p>
          <p>
            Ini adalah catatan lecture untuk referensi kalian untuk ke depannya,
            yang berisi apa yang sudah pelajari dari awal materi hingga selesai.
          </p>
          <p>
            Untuk unit testing, kalian cukup menjalankan <code>npm run test</code>
            atau <code>yarn test</code> (hanya berlaku pada direktori Session 27),
            untuk mendapatkan gambaran dasar mengenai bagaimana unit testing
            bekerja pada React.
          </p>
          <p>
            Hope these helps, and happy coding! 🎉
          </p>

          {/*
            Saya ganti <a> dengan <AppLink> untuk menunjukkan component reusablility.
            Kalian dapat melihat component ini pada file:
            /src/components/AppLink.jsx

            <AppLink
              type="external"
              to="['https://github.com/easterneas/angular-notes']"
              name="'clone this repo @ GitHub'"
            />
          */}
        </div>
      </div>
    </div>
  )
}
