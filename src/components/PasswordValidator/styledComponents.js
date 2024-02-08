// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #24263c;
  padding: 100px;
  @media screen and (max-width: 576px) {
    padding: 70px;
  }
`
export const CardContainer = styled.div`
  background-color: #383a4e;
  border-radius: 8px;
  padding: 40px;
  text-align: center;
`
export const Heading = styled.h1`
  color: #f8fafc;
  font-size: 30px;
`
export const Paragraph = styled.p`
  color: #ffffff;
  font-size: 10px;
  padding-bottom: 20px;
`
export const Password = styled.input`
  background-color: #edeeff;
  padding: 5px;
  outline: none;
`
export const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 8px;
`
