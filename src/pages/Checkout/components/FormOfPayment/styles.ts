import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const FormOfPaymentContainer = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: ${({ theme }) => theme['base-card']};
  border-radius: 6px;
`

export const FormOfPaymentHeader = styled.header`
  display: flex;
  gap: 0.5rem;

  > svg {
    color: ${({ theme }) => theme.purple};
  }

  h3 {
    color: ${({ theme }) => theme['base-subtitle']};
    font-size: 1rem;
    font-weight: 400;
  }

  > p {
    font-size: 0.875rem;
  }
`

export const FormOfPaymentContent = styled(RadioGroup.Root)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const FormOfPaymentSelect = styled(RadioGroup.Item)`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: 1rem;
  border-radius: 6px;
  background: ${({ theme }) => theme['base-button']};
  border: 1px solid transparent;

  > span {
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 1.6;
    color: ${({ theme }) => theme['base-text']};
  }

  > svg {
    color: ${({ theme }) => theme.purple};
  }

  &:hover {
    background: ${({ theme }) => theme['base-hover']};
  }

  &[data-state='checked'] {
    border-color: ${({ theme }) => theme.purple};
    background: ${({ theme }) => theme['purple-light']};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme['purple-dark']};
  }
`
