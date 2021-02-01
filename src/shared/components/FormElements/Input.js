import { useReducer, useEffect } from 'react'

import './Input.css'
import { validate } from '../../util/validators'

// reducer
const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return { ...state, value: action.payload, isValid: validate(action.payload, action.validators) }
    case 'TOUCH':
      return { ...state, isTouched: true }
    default:
      return state
  }
}

// component
const Input = ({ element, id, type, placeholder, rows, label, errorText, validators, onInput }) => {
  const [state, dispatch] = useReducer(inputReducer, { value: '', isTouched: false, isValid: false })

  useEffect(() => {
    onInput(id, state.value, state.isValid)
  }, [id, state, onInput])

  const onChangeHandle = (e) => {
    dispatch({
      type: 'CHANGE',
      payload: e.target.value,
      validators,
    })
  }

  const onBlurHandle = (e) => {
    dispatch({
      type: 'TOUCH',
    })
  }

  const inputElement = element === 'input'
    ? <input id={id} type={type} placeholder={placeholder} onBlur={onBlurHandle} onChange={onChangeHandle}
             value={state.value}/>
    : <textarea id={id} rows={rows || 3} onBlur={onBlurHandle} onChange={onChangeHandle} value={state.value}/>

  return (
    <div className={`form-control ${!state.isValid && state.isTouched && 'form-control--invalid'}`}>
      <label htmlFor={id}>{label}</label>
      {inputElement}
      {!state.isValid && state.isTouched && <p>{errorText}</p>}
    </div>
  )
}

export default Input
