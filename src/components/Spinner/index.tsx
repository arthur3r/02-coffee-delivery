import { CircleNotch } from 'phosphor-react'
import { SpinnerContainer } from './styles'

export function Spinner() {
  return (
    <SpinnerContainer>
      <CircleNotch size={32} />
    </SpinnerContainer>
  )
}
