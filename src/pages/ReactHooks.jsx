import React from 'react';
import { Col, Row } from 'react-bootstrap';

import AppLink from '../components/AppLink';
import StatefulComponent from '../components/session20/StatefulComponent';

export default function ReactHooks() {
  return (
    <>
      <h2>React Hooks</h2>

      <h3>Apa bedanya Stateful dan Stateless Component?</h3>

      <p>
        tl;dr: Bedanya adalah, Stateful Component memiliki state-nya
        sendiri, sementara Stateless Component tidak -- dan harus
        bergantung pada props yang dilempar oleh Parent Component.
      </p>

      <Row>
        <Col>
          <StatefulComponent />
        </Col>
      </Row>

      <p>
        Ketika temen-temen melihat source code dari component ini,
        maka temen-temen akan melihat bahwa ini adalah isi dari
        Stateful Component saja. Namun, ada Stateless Component di
        dalamnya yang merupakan child component dari Stateful Component.
      </p>

      <h3>Lalu, apa itu Hooks?</h3>

      <p>
        Sesuai namanya yang berarti "kait", Hooks dapat "mengaitkan"
        berbagai event di dalam sebuah component. Semenjak React 16.8
        ini, React Hooks diperkenalkan untuk mem-buff Functional
        Component yang sebelumnya Stateless Component saja.
      </p>

      <p>
        Untuk lebih jelasnya bagaimana hooks bekerja, kalian bisa buka
        halaman <AppLink to="/fetching" name="React Fetching" />.
      </p>

      <h4>Sekarang, mengapa Functional Component?</h4>

      <p>
        Karena <AppLink
          to="https://reactjs.org/docs/hooks-intro.html#motivation"
          type="external"
          name="ada 3 hal utama pendekatan functional lebih baik daripada pendekatan secara OOP"
        />.
      </p>

      <p>
        Ketika kalian melihat isi source code, kalian akan melihat bahwa
        saya menerapkan Functional Component di seluruh component di React.
      </p>
    </>
  )
}
