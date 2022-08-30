import styled from "styled-components";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';


function Header() {
  return (
    <Nav>
        <IconButton>
            <PersonIcon fontSize="large" />
        </IconButton>

        <Logo>
        <img src="/images/tinder.svg" alt="Disney+" />
       </Logo>

        <IconButton>
        <ForumIcon fontSize="large"/>
        </IconButton>
        

        


    </Nav>
  )
}

const Nav = styled.div`


 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 100;


`;
const Logo = styled.a`
padding-top: 0px;
width: 80px;
margin-top: 0px;
max-height: 30px;
font-size: 0;
display: inline-block;

img {
  display: block;
  width: 100%;
}


`;


export default Header