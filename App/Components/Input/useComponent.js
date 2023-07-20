import React, { useState } from 'react'

const Input = (props: any) => {
  const { onChangeValue, secureTextEntry } = props
  const [value, setValue] = useState<string>()
  const [showInput, setShowInput] = useState(secureTextEntry || true)

  const onChangeText = (value: string) => {
    onChangeValue && onChangeValue(value)
    setValue(value)
  }

  return {
    onChangeText,
  }
}

export default Input




