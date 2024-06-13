import styled from 'styled-components'

export const SuccessContainer = styled.div`
  max-width: 70rem;
  margin: 5rem auto;
`

export const SuccessHeader = styled.header`
  margin-bottom: 2.5rem;

  > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${({ theme }) => theme['yellow-dark']};
    margin-bottom: 0.25rem;
  }

  > p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const SuccessContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6.38rem;
`

export const OrderInfo = styled.div`
  width: 100%;
  padding: 2.5rem;
  background: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  gap: 2rem;

  position: relative;
  border-top-left-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  border-bottom-right-radius: 6px;

  &::before {
    content: '';
    background: linear-gradient(
      90deg,
      rgba(219, 172, 44, 1) 0%,
      rgba(128, 71, 248, 1) 35%
    );
    position: absolute;
    inset: 0;
    z-index: -1;
    margin: -1px;

    border-top-left-radius: 6px;
    border-top-right-radius: 44px;
    border-bottom-left-radius: 44px;
    border-bottom-right-radius: 6px;
  }
`
