import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: #152850;
  align-items: center;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`
export const LoginCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 80vh;
  background-color: #e0eefe;
  border-radius: 30px;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`
export const LoginImage = styled.img`
  width: 50%;
`
export const LoginFormContainer = styled.form`
  display: flex;
  height: 100%;
  border-radius: 30px;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 40%;
  background-color: #ffffff;
`
export const LoginHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 500;
  color: #183b56;
`
export const InputLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #5a7184;
  margin-bottom: 15px;
`
export const Input = styled.input`
  width: 80%;
  padding-left: 20px;
  font-size: 16px;
  font-weight: 500;
  color: #183b56;
  margin-bottom: 20px;
  background-color: transparent;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #c3cad9;
  outline: none;
`
export const LoginButton = styled.button`
  width: 90%;
  height: 40px;
  background-color: #1565d8;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  margin-top: 15px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #ff0b37;
  align-self: center;
`
