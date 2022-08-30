import styled from "styled-components";
import "./TinderCards.css"
import TinderCard from "react-tinder-card";
import { useEffect, useState } from 'react'; 
import axios from "./axios"; 

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {

      async function fetchData() {
        const req = await axios.get('/tinder/card');

        setPeople(req.data);

      };

      fetchData();

    }, [])

   const swiped =(direction, nameToDelete) => {
     console.log("added:" + nameToDelete + " to basket");
   }

   const outOfFrame = (name) => {
     console.log(name + "left the screen")
   }
  return (
    <Tindercard>
      <CardContainer>
        {people.map((person) => (
        <TinderCard
        className="swipe"
        key={person.name}
        preventSwipe={["up", "down"]}
        onSwipe= {(dir) => swiped(dir, person.name)}
        onCardLeftScreen={() => outOfFrame(person.name)}
        >
        <Card
        style={{backgroundImage: `url(${person.imgUrl})`}}>
        <h3>{person.name}</h3>
        </Card>
        
        </TinderCard>
        ))}

      </CardContainer>
    </Tindercard>
  )
}
const Tindercard = styled.div`
margin-top:0px;


`;

const Card = styled.div`
position: relative;
background-color: #fff;
width: 600px;
padding: 20px;
max-width: 85vw;
height: 50vh;
box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
border-radius: 20px;
background-size: cover;
background-position: center;

backgroundImage {
  width:100%;
  height:100%;
}

h3 {
  position: absolute;
  bottom: 0;
  margin: 10px;
  color: red;
}

`;
const CardContainer = styled.div`
display:flex;
justify-content: center;
margin-top:10vh;

`;
const CardContent = styled.div`
width:100%;
height:100%;
`;

export default TinderCards
