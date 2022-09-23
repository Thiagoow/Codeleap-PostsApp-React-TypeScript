import { LogoStyled } from './Logo.styles'

interface LogoProps {
  link: string
  name: string
  img: string
}

const Logo = ({ link, name, img }: LogoProps) => {
  return (
    <LogoStyled href={link} target="_blank">
      <img src={img} className={`${name}`} alt="React logo" />
    </LogoStyled>
  )
}

export default Logo
