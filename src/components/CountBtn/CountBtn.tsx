import React from 'react'
import { BtnStyled } from './Btn.styles'

const CountBtn = () => {
  const [count, setCount] = React.useState(0)

  return (
    <BtnStyled onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </BtnStyled>
  )
}

export default CountBtn
