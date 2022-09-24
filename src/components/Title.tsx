import styled from 'styled-components'

interface TitleProps {
  txt: string
}

const StyledTitle = styled.h1`
  font-size: var(--title-size);
  color: var(--first-color);
`

const Title = ({ txt }: TitleProps) => {
  return <StyledTitle>{txt}</StyledTitle>
}

export default Title
