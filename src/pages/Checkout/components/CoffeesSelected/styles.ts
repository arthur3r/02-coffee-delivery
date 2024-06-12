import styled from 'styled-components'

export const CoffeesSelectedContainer = styled.div`
  padding: 2.5rem;
  background: ${({ theme }) => theme['base-card']};

  border-top-left-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  border-bottom-right-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Separator = styled.div`
  background: ${({ theme }) => theme['base-button']};
  width: 100%;
  height: 1px;
`

export const TotalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  p,
  strong {
    display: flex;
    justify-content: space-between;
  }

  > p {
    font-size: 0.875rem;
  }

  > strong {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const ConfirmOrderButton = styled.button`
  padding: 0.75rem 0.5rem;
  background: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.white};
  border: 0;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.6;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme['yellow-dark']};
    transition: background-color 0.2s;
  }
`
