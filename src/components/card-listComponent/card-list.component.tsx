// import { Component } from "react";
import Card from "../cardComponent/card.component";
import { Monster } from "../../App";
import "./card-list.styles.css"


type CardListProps = {
  monsters: Monster[];
}

const CardList = ({ monsters }: CardListProps) => {

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return (
          <div key={monster.id}>
            <Card monster={monster} />
          </div>
        );
      })}
    </div>
  );
}


// class component

// class CardList extends Component {

//   render() { 
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map(monsters => {
//           const { email, id, name } = monsters;
//           return (
//             <div>
//               <Card
//                 monsterEmail={email}
//                 monsterId={id}
//                 monsterName={name}
//               />
//             </div>
//           )
//         })}
//       </div>
//     )  
//   }
// }

export default CardList;