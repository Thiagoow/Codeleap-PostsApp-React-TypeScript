import styled from 'styled-components'
import Title from '../components/Title'
import FormBtn from '../components/FormBtn'
import TxtBtn from '../components/TxtBtn'

const LoginContainer = styled.main`
  display: grid;
  height: 100vh;
  place-items: center;
  background-color: var(--third-color);
`

const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--second-color);
  padding: 1rem;
`

export default function Login() {
  return (
    <LoginContainer>
      <FormLogin>
        <Title txt="Welcome to CodeLeap network!" />
        <FormBtn txt="LogIn" />
        <TxtBtn txt="Forgot password?" link="/forgot-password" />
      </FormLogin>
    </LoginContainer>
  )
}
