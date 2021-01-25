import { useReducer } from 'react'

import './Input.css'

// reducer
const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return { ...state, value: action.payload, isValid: true }
    default:
      return state
  }
}

// component
const Input = ({ element, id, type, placeholder, rows, label, errorText }) => {
  const [state, dispatch] = useReducer(inputReducer, { value: '', isValid: false })

  const onChangeHandle = (e) => {
    dispatch({
      type: 'CHANGE',
      payload: e.target.value,
    })
  }

  const inputElement = element === 'input'
    ? <input id={id} type={type} placeholder={placeholder} onChange={onChangeHandle} value={state.value}/>
    : <textarea id={id} rows={rows || 3} onChange={onChangeHandle} value={state.value}/>

  return (
    <div className={`form-control ${!state.isValid && 'form-control--invalid'}`}>
      <label htmlFor={id}>{label}</label>
      {inputElement}
      {!state.isValid && <p>{errorText}</p>}
    </div>
  )
}

export default Input
