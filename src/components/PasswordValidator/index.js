// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  CardContainer,
  Heading,
  Paragraph,
  Password,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [passwordInput, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const errorMessage =
    passwordInput.length < 7
      ? 'Your password must be at least 8 characters'
      : ''
  return (
    <MainContainer>
      <CardContainer>
        <Heading> Password Validator </Heading>
        <Paragraph> Check how strong and secure is your password </Paragraph>
        <Password
          type="password"
          onChange={onChangePassword}
          value={passwordInput}
        />
        <ErrorMessage> {errorMessage} </ErrorMessage>
      </CardContainer>
    </MainContainer>
  )
}

export default PasswordValidator
