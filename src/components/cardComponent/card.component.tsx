// import { Component } from "react";
import { Monster } from "../../App";
import "./card.styles.css"

type CardProps = {
  monster: Monster;
}

const Card = ({ monster }: CardProps) => {
  const { email: monsterEmail, id: monsterId, name: monsterName  } = monster;

  return ( 
    <div className="card-container" key={monsterId}>
      <img
        alt={`monster ${monsterName}`}
        src={`https://robohash.org/${monsterId}?set=set2&size=180x180`}
      />
      <h2>{monsterName}</h2>
      <p>{monsterEmail}</p>
    </div>
  );
}

export default Card;

// class component

// class Card extends Component {

//     render() {
          
//         const { monsterEmail, monsterId, monsterName } = this.props;
            
//         return (
//           <div className="card-container" key={monsterId}>
//             <img
//               alt={`monster ${monsterName}`}
//               src={`https://robohash.org/${monsterId}?set=set2&size=180x180`}
//             />
//             <h2>{monsterName}</h2>
//             <p>{monsterEmail}</p>
//           </div>
//         );
//     }
// }
