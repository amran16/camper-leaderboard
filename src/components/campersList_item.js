import React from 'react';

const CampersListItem = ({camper, number}) =>{

  return(
    <tr>
      <td>{number}</td>
      <td>
       <a href={`https://freecodecamp.com/${camper.username}`} target="_blank">
        <img src= {camper.img} alt=""/>
        <span>{camper.username}</span>
        </a>
      </td>
      <td>{camper.recent}</td>
      <td>{camper.alltime}</td>
    </tr>
  );
}

export default CampersListItem;
