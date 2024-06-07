import { CircleInfoContainer, IconContainer } from './styles'
import { ElementType, ReactNode } from 'react'

interface CircleInfoProps {
  variant: string
  text: ReactNode
  icon: ElementType
}

export function CircleInfo({ text, variant, icon: Icon }: CircleInfoProps) {
  return (
    <CircleInfoContainer>
      <IconContainer variant={variant}>
        <Icon weight="fill" />
      </IconContainer>
      {text}
    </CircleInfoContainer>
  )
}
