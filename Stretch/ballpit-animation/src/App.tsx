import React from 'react';
import { World, Item } from "react-dom-box2d";
import logo from './logo.svg';
import './App.css';

interface ball {
  id:number
  bounce: number
  shape: string
  size: number
  position:{left:number, top:number}
  force: {x:number, y:number}
}
/* Ball Data an array of random ball objects based on Dom-Box2d Item
   https://oneto018.github.io/react-dom-box2d/#/Item/
*/
const generateItems = (n:number) => {
  const random = Array.from({length: n}, () => Math.random());
  let balls:ball[]=[];
  random.map((random, index)=>{
    const sign = (Math.random()<.5) ? 1 : -1; // used to set a random positive or negative direction
    const sign2= (Math.random()<.5) ? -1 : 1; // in for both x and y coordinates
    balls.push(
      {
        id:index,
        bounce: random*1.15,
        shape: "circle",
        size: Math.floor(20*random + sign*10 + 80),
        position: {left:1380*random+100, top:580*(index/n)+100},/* Use (index/n) to decouple x and y values*/ 
        force: {x:30*(index/n)*sign, y:50*random*sign2}
      }
    )
  })
  return balls;
}

class App extends React.Component<{}, {}> {
  ballPit:ball[];
  constructor(props){
    super(props);
    this.ballPit = generateItems(50); /* Generate items for the simulated world */
  }
 
  render(){
    return (
      <div className="App">
        <h1>Ball Pit Simulaton using &nbsp;
          <a href="https://github.com/oneto018/react-dom-box2d" target="_blank" rel="noopener noreferrer">
            DOM-Box2d React Component Library</a></h1>
        <main className="App-header">
        {/* Physics world starts here as described in Dom-Box2d World
            https://oneto018.github.io/react-dom-box2d/#/World/ 
            
            You could make this a separate component, passing in World parameters and ball data as props
        */}
        <World
          height={800}
          width={1600}
          gravity={[0,1]}
          className="world"
        >
          {/* Create each item using the item data */
            this.ballPit.map(ball => (
              <Item
                key={ball.id}
                restitution={ball.bounce}
                left={ball.position.left}
                top={ball.position.top}
                height={ball.size}
                width={ball.size}
                shape={ball.shape}
                initialImpulse={[ball.force.x, ball.force.y]} 
              >
                {/* Each "Item" can be any element you want. Once it's inside the "World"*/}
                <img src={logo} alt="logoBall" 
                     style={{border:1, borderStyle:"solid", borderColor:"cyan"}}/>
              </Item>
          ))}
        </World>  
        </main>
      </div>
    );
  }
}

export default App;
