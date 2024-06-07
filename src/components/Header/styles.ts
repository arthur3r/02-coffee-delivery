import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 70rem;
  margin: 0 auto;
  width: 100%;
  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const BaseButton = styled.button`
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.25rem;
  border: 0;
  line-height: 0;
`

export const LocationButton = styled(BaseButton)`
  background: ${({ theme }) => theme['purple-light']};
  color: ${({ theme }) => theme['purple-dark']};

  > svg {
    color: ${({ theme }) => theme.purple};
  }

  > span {
    font-size: 0.875rem;
  }
`

export const CartButton = styled(BaseButton)`
  background: ${({ theme }) => theme['yellow-light']};
  position: relative;

  > svg {
    color: ${({ theme }) => theme['yellow-dark']};
  }

  cursor: pointer;

  > span {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    width: 1.25rem;
    height: 1.25rem;

    font-size: 0.75rem;
    font-weight: bold;

    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme['yellow-dark']};
  }
`
