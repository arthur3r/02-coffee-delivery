import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background: ${({ theme }) => theme['base-card']};
  padding: 1.25rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
  text-align: center;

  > img {
    width: 120px;
    height: 120px;
    margin: -2.25rem 0 0.75rem;
  }

  > h2 {
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    color: ${({ theme }) => theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }

  > p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-label']};
    font-size: 0.875rem;
  }
`

export const CoffeeCardTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  margin-bottom: 1rem;

  .tag {
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    background: ${({ theme }) => theme['yellow-light']};
    color: ${({ theme }) => theme['yellow-dark']};
    text-transform: uppercase;
    font-size: 0.625rem;
    font-weight: 700;
  }
`

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  .price {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    > span:nth-child(1) {
      font-size: 0.875rem;
    }

    > span:nth-child(2) {
      font-family: 'Baloo 2';
      font-size: 1.5rem;
      font-weight: 800;
    }
  }
`

export const BuyActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 2.375rem;

  > button[type='button'] {
    height: 100%;
    padding: 0 0.5rem;
    border-radius: 6px;
    background: ${({ theme }) => theme['purple-dark']};
    border: 0;
    line-height: 0;
    cursor: pointer;

    > svg {
      color: ${({ theme }) => theme.white};
    }
  }
`
