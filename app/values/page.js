'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import Values from "../components/Values"

function ValuesPage() {

const [values, setValues] = useState([])
const [selectedValues, setSelectedValues] = useState([])

useEffect(() => {
  const fetchValues = async () => {
      const res = await fetch('/api/values')
      const data = await res.json()
      setValues(data)
      // setDescription(data)
  }
  fetchValues()
})
function toggle(id) {
  setSelectedValues(prevSquares => {
      return prevSquares.map((square) => {
          return square.id === id ? {...square, on: !square.on} : square
      })
  })
}

    const valueElements = values.map(value => {
        return (
            <Values 
                key={value.id}
                name={value.name}
                description={value.description}
                on={value.selected}
                toggle={() => toggle(value.id)}
            /> 
        )
    })
  return (
    <div className=' bg-lavender text-charcoal'>
        <h1 className="text-3xl font-bold leading-normal text-center  py-6">Choose the top values that resonate with you</h1>
        <p className="text-lg text-center pb-6">Click once for description, twice to select, and again to deselect</p>
        {valueElements}
      
    </div>
  )
}

export default ValuesPage