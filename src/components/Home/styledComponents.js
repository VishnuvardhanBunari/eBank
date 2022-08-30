import styled from 'styled-components'

export const MainDiv = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  height: 110vh;
  background-color: #152850;
  display: flex;
`

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 60px;
  width: 90%;
`

export const LogoImg = styled.img`
  height: 100%;
`
export const LogoutBtn = styled.button`
  background-color: transparent;
  border: 1px solid #ffffff;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  height: 40px;
  width: 120px;
  cursor: pointer;
`
export const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`
export const HomeH1 = styled.h1`
  font-size: 44px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 40px;
`
export const HomeCardImg = styled.img`
  width: 60%;
`
