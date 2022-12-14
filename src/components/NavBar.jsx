import React from 'react'
import styled from "styled-components"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color:  ${({theme})=>theme.bgLighter};
  height: 56px;
  padding: 0px 20px;
  position: relative;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
`
const Search = styled.div`
  width: 40%;
  position: relative;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: ${({theme})=>theme.text};
`

const Input = styled.input`
  border: none;
  background-color: transparent;
  color: ${({theme})=>theme.text};
  width: 100%;
  display: flex;
  &:focus{
    outline: none;
  }
`

const Button = styled.div`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`

const NavBar = () => {
  return (
    <Container>
        <Wrapper>
            <Search>

              <Input placeholder="Search" />
              <SearchIcon/>
            </Search>
                          
            <Button><AccountCircleIcon/>SIGN IN</Button>
           
        </Wrapper>

    </Container>
  )
}

export default NavBar