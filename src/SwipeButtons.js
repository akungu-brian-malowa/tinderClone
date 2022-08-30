import styled from 'styled-components';
import './SwipeButtons.css'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';


function SwipeButtons() {
  return (
    <Swipebuttons>

       <MuiIcon><IconButton className='repeat'fontSize="large" ><ReplayIcon /></IconButton></MuiIcon> 
        <MuiIcon><IconButton className='left' fontSize="large"><CloseIcon /></IconButton></MuiIcon>
        <MuiIcon><IconButton className='star' fontSize="large"><StarRateIcon /></IconButton></MuiIcon>
        <MuiIcon><IconButton className='right' fontSize="large"><FavoriteIcon/></IconButton></MuiIcon>
        <MuiIcon><IconButton className='lightning' fontSize="large"><FlashOnIcon /></IconButton></MuiIcon>
        
        
    </Swipebuttons>
  )
}

const Swipebuttons = styled.div`
position: fixed;
bottom:3vh;
display:flex;
width:100%;
justify-content:space-evenly;

`;

const MuiIcon = styled.a`
    background-color:white;
    box-shadow:0px 10px 53px 0px rgba(0, 0, 0, 0.3) !important;
    border-radius: 50% ;
`;

export default SwipeButtons