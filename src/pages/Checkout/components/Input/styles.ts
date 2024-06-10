import styled from 'styled-components'

export const InputContainer = styled.div`
  padding: 0 0.75rem;
  background: ${({ theme }) => theme['base-input']};
  border: 1px solid ${({ theme }) => theme['base-button']};
  font-size: 0.875rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  > input {
    width: 100%;
    height: 42px;
    font-size: 0.875rem;
    background: none;
    border: none;

    &:focus {
      box-shadow: none;
    }
  }

  > span {
    font-size: 0.75rem;
    font-style: italic;
    color: ${({ theme }) => theme['base-label']};
  }

  &:focus-within {
    border-color: ${({ theme }) => theme['yellow-dark']};
  }

  &::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }
`
