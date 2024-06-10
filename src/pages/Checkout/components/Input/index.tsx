import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean
}

export function Input({ optional, className, ...rest }: InputProps) {
  return (
    <InputContainer className={className}>
      <input {...rest} type="text" />
      {optional && <span>Opcional</span>}
    </InputContainer>
  )
}
