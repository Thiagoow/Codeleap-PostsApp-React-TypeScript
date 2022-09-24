import styled from 'styled-components'

interface BtnProps {
  txt: string
  link: string
}

const StyledBtn = styled.a`
  text-transform: lowercase;
  color: var(--first-color);
  text-decoration: underline;
  display: flex;
  align-self: end;
`

const TxtBtn = ({ txt, link }: BtnProps) => {
  return <StyledBtn href={link}>{txt}</StyledBtn>
}

export default TxtBtn
