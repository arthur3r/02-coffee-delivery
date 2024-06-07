import styled from 'styled-components'

export const CircleInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: fit-content;
`

interface IconContainerProps {
  variant: string
}

export const IconContainer = styled.div<IconContainerProps>`
  padding: 0.5rem;
  border-radius: 50%;
  background: ${({ theme, variant }) => theme[variant]};

  display: flex;
  align-items: center;
  justify-content: space-between;

  > svg {
    color: ${({ theme }) => theme.white};
  }
`
