/**
 * Di sini saya akan menggunakan Functional Component. Class Component
 * hanya ada Stateful Component saja, namun dapat berlaku di sini.
 */

import React, { useState } from 'react'
import StatelessComponent from './StatelessComponent'

export default function StatefulComponent() {
  const [ message ] = useState('Hi, ini adalah pesan dari bapakmu.')
  return (
    <>
      <h2>Stateful Component</h2>

      <p>
        Di bawah ini terdapat Stateless Component. Untuk lebih jelasnya,
        kalian dapat lihat pada file <code>src/components/session20/StatefulComponent.jsx</code>.
      </p>

      <StatelessComponent message={message} />
    </>
  )
}
