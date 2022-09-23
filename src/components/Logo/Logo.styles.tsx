import styled, { keyframes } from 'styled-components'

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LogoStyled = styled.a`
  img {
    height: 6em;
    padding: 1.5em;
    will-change: filter;

    &:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    &.react:hover {
      filter: drop-shadow(0 0 2em #61dafbaa);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    .react {
      animation: ${logoSpin} infinite 10s linear;
    }
  }
`
