'use Client'
import { useState } from "react"

function Values(props) {
const[showDescription, setShowDescription] = useState(false)
const[selectValues, setSelectValues] = useState(false)

function flip(){
    if(showDescription)
    {return setShowDescription(false), select()
    }
    else if(!showDescription && selectValues){
        return setShowDescription(false), select()
    }else {
        return setShowDescription(prev => !prev)
    }
    }

function select(){
    setSelectValues(prev => !prev)
}

const styles = {
    backgroundColor: selectValues ? "#BFA2DB" : "#F3F1F5"
}
  return (
    <div style={styles} onClick={flip} className="inline-grid justify-center place-content-center w-64 h-28 m-4 p-4 rounded-2xl text-charcoal drop-shadow-md hover:scale-105 " >
        <h3 className="justify-center align-middle text-center text-2xl font-semibold m-auto" >{!showDescription && props.name}</h3>
        <p className="justify-center align-middle text-center text-base m-auto"> {showDescription && props.description}</p>
    </div>
  )
}

export default Values