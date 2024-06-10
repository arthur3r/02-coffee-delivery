import styled from 'styled-components'

export const CounterContainer = styled.div`
  flex: 1;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: ${({ theme }) => theme['base-button']};
  border-radius: 6px;

  > span {
    width: 1.25rem;
    color: ${({ theme }) => theme['base-title']};
  }

  > button {
    background: none;
    border: 0;
    cursor: pointer;
    line-height: 0;

    > svg {
      color: ${({ theme }) => theme.purple};

      &:hover {
        color: ${({ theme }) => theme['purple-dark']};
        transition: color 0.2s;
      }
    }
  }
`
