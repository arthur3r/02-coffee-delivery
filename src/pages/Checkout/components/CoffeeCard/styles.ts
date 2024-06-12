import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 368px;
  padding: 0.5rem 0.25rem;
  background: ${({ theme }) => theme['base-card']};

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  > span {
    font-weight: 700;
  }
`

export const CoffeeCardInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  > img {
    width: 64px;
    height: 64px;
  }
`

export const CoffeeCardDetails = styled.div`
  width: 170px;

  > h3 {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 2rem;
  }
`

export const RemoveButton = styled.button`
  flex: 1;
  height: 100%;
  padding: 0 0.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme['base-button']};
  color: ${({ theme }) => theme['base-text']};
  border: 0;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  font-size: 0.75rem;
  line-height: 1.6;
  text-transform: uppercase;

  cursor: pointer;

  > svg {
    color: ${({ theme }) => theme.purple};
  }

  &:hover {
    background: ${({ theme }) => theme['base-hover']};
    transition: background-color 0.2s;
  }
`
