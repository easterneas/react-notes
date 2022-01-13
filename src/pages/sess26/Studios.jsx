import React from 'react';
import { useSelector } from 'react-redux';

export default function Studios() {
  const studios = useSelector(({ studios }) => studios.list)
  return (
    <>
      <h3>
        Studios List
      </h3>

      <ul>
        {
          studios.map(studio => (
            <li>{ studio.name }</li>
          ))
        }
      </ul>
    </>
  )
}
