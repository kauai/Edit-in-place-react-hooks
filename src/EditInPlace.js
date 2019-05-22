import React,{ useState,useEffect, useRef } from 'react'

export const TextArea = ({ value,onChangeValue,viewAs = 'h1'}) => {
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
   ? <textarea ref={ inputref } onBlur={ done }>{value}</textarea> 
   : React.createElement(viewAs,{
       onClick:edit,
       className:"edit-InPlace",
       children:value
   })}
}



export const Input = ({ value,onChangeValue,viewAs = 'h1'}) => {
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
     : React.createElement(viewAs,{
         onClick:edit,
         className:"edit-InPlace",
         children:value
     })}
}

export default Input