'use client'
import { useState, useEffect } from 'react'

import Values from "../../components/Values"

function SelectedValuesPage() {

  const [selected, setSelected] = useState([])
  useEffect(() => {
    const fetchSelected = async () => {
        const res = await fetch('/api/values')
        const data = await res.json()
        setSelected(data)
        console.log(data)
        // setDescription(data)
    }
    fetchSelected()
  })

  const selectedValues = selected.map(value => {
    return (
        value.selected === true
    )
})
  return (
    <div>{selectedValues}</div>
  )
}

export default SelectedValuesPage