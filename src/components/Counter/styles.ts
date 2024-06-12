import styled from 'styled-components'

export const CounterContainer = styled.div`
  flex: 1;
  height: 100%;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  background: ${({ theme }) => theme['base-button']};
  border-radius: 6px;
  text-align: center;

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
