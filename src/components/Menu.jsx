import React from 'react'
import styled from "styled-components"
import TubeImg from "../img/logo.png"
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import ArticleIcon from '@mui/icons-material/Article';
import HelpIcon from '@mui/icons-material/Help';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReorderIcon from '@mui/icons-material/Reorder';

import { Link } from "react-router-dom"

const Container = styled.div`
    flex: 1;
    background-color: ${({theme})=>theme.bgLighter};
    height: 100vh;
    color: ${({theme})=>theme.text};
    font-size: 14px;
    position: sticky;
    top: 0;
  `

const Wrapper = styled.div`
  padding: 18px 26px;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`
const Img = styled.img`
  height: 25px;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 8px;

  &:hover{
    background-color: ${({theme})=>theme.soft};
    width: 100%; 
  }
`

const Hr = styled.div`
  margin: 15px 0px;
  border: 0.5px solid ${({theme})=>theme.soft};
`

const Login = styled.div``
const Button = styled.div`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`
const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #aaaaaa
`

const Menu = ({darkMode, setDarkMode}) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
        
          <Logo>
            <span style={{display:"flex",paddingRight:"22px"}}><ReorderIcon/></span>
            <Img src={TubeImg}/>
            SmsTube
          </Logo>
        </Link>
        <Item>
          <HomeIcon/>
          Home
        </Item>
        <Item>
          <ExploreIcon/>
          Explore
        </Item>
        <Item>
          <SubscriptionsIcon/>
          Subscriptions
        </Item>
        <Hr/>
        <Item>
          <VideoLibraryIcon/>
          Library
        </Item>
        <Item>
          <HistoryIcon/>
          History
        </Item>
        <Hr/>
        <Login>
          Sign in to like videos, comments, and subscribe.
          <Link to="signin" style={{textDecoration:"none"}}>
            <Button><AccountCircleIcon/>SIGN IN</Button>
          </Link>
          
        </Login>
        <Hr/>
        <Title>MORE FROM SMS</Title>
        <Item>
          <LibraryMusicIcon/>
          Music
        </Item>
        <Item>
          <SportsBasketballIcon/>
          Sports
        </Item>
        <Item>
          <SportsEsportsIcon/>
          Gaming
        </Item>
        <Item>
          <MovieCreationIcon/>
          Movies
        </Item>
        <Item>
          <ArticleIcon/>
          News
        </Item>
        <Item>
          <LiveTvIcon/>
          Live
        </Item>
        <Hr/>
        <Item>
          <SettingsIcon/>
          Settings
        </Item>
        <Item>
          <FlagIcon/>
          Report
        </Item>
        <Item>
          <HelpIcon/>
          Help
        </Item>
        <Item onClick={() =>{setDarkMode(!darkMode)}}>
          <LightModeIcon/>
          {darkMode ? `Light`: `Dark`} Mode
        </Item>
        
        
      </Wrapper>
    </Container>
  )
}

export default Menu
