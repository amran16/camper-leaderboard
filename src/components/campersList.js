import React from 'react';
import CampersListItem from './campersList_item';


const CampersList = (props) => {

  console.log('this is the props: ', props)

  const campers = props.campers

  const items = campers.map((camper, index) =>{
     return < CampersListItem
                 key={index}
                 camper={camper}
                 number={index + 1} />
  });

  return(
  <table className='table table-striped table-inverse'>
   <thead>
    <tr>
      <th>#</th>
      <th>User Name</th>
      <th>Points in past 30 days</th>
      <th>All Time Points</th>
    </tr>
   </thead>
   <tbody>
     {items}
   </tbody>
  </table>
  );

}

export default CampersList;
