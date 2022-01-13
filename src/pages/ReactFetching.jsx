import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import { useFetch } from '../hooks/useFetch';

// import CardHeader from 'react-bootstrap'

export default function ReactFetching() {

  // Di sini, kita akan mendemonstrasikan tentang
  // bagaimana kita bisa fetch data di dalam React.
  // Khusus hal ini, kita akan menggunakan Hooks, ya,
  // dan kalau temen-temen belum paham cara kerja Hooks,
  // teman-teman bisa buka bagian "20-Hooks"

  // Di sini, saya mendemonstrasikan 2 hal:
  // - cara memanggil hooks biasa dengan useState dan useEffect, dan
  // - cara membuat custom hooks

  // Penerapan custom hooks bisa kalian lihat seperti berikut.
  // Di sini saya buat useFetch yang memanfaatkan hooks di React.
  // Kalian bisa lihat selengkapnya pada file:
  //   /src/hooks/useFetch.js

  const [ data, loading ] = useFetch('/users/1/todos', {
    method: 'get'
  })

  if((!loading && !data) || (loading && !data)) return (
    <>
      <h3>Data masih loading, ditunggu ya!</h3>
    </>
  )

  return (
    <>
      <h3>Todo list</h3>
      <Row>
        {
          data.map(row => (
            <Col key={row.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>
                    { row.title }
                  </Card.Title>
                  <Card.Text>
                    by {row.userId} {row.completed ? ", completed" : ""}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </>
  )
}
