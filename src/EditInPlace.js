import React,{ useState,useEffect, useRef } from 'react'

const EditInPlace = ({ value,onChangeValue }) => {
    const [ isEditing, setIsEditing ] = useState(false)
    const inputref = useRef(null)
    
    const edit = () => setIsEditing(true)
    const done = () => {
        onChangeValue(inputref.current.value)
         setIsEditing(false)
    }
    useEffect(() => {
      if(isEditing){
          inputref.current.focus()
      }
    },[isEditing]);

    {return isEditing 
     ? <input defaultValue={value} ref={ inputref } onBlur={ done }/> 
     : <h1 onClick={edit} className="edit-InPlace">{value}</h1>}
}

export default EditInPlace