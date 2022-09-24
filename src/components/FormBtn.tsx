import styled from 'styled-components'

interface BtnProps {
  txt: string
}

const StyledBtn = styled.button`
  text-transform: uppercase;
  font-weight: var(--wgt-bold);

  padding: 1rem 2rem;
  background-color: var(--first-color);
  color: var(--second-color);
`

const FormBtn = ({ txt }: BtnProps) => {
  return <StyledBtn>{txt}</StyledBtn>
}

export default FormBtn
