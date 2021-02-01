import React, { useCallback, useReducer } from 'react'

import './NewPlace.css'
import Input from '../../shared/components/FormElements/Input'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators'

const reducer = (state, action) => {

}

const NewPlace = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    inputs: {
      title: { value: '', isValid: false },
      description: { value: '', isValid: false },
    },
    isValid: true,
  })

  const inputChangeHandler = useCallback((id, value, isValid) => {

  }, [])

  return (
    <form className="place-form">
      <Input id="title" element="input" type="text" label="Title" errorText="Please enter a valid title."
             validators={[VALIDATOR_REQUIRE()]} onInput={inputChangeHandler}/>
      <Input id="description" element="textarea" label="Description"
             errorText="Please enter a valid description (at least 5 characters)."
             validators={[VALIDATOR_MINLENGTH(5)]} onInput={inputChangeHandler}/>
    </form>
  )
}

export default NewPlace
