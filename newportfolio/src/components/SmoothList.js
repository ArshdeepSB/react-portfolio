import List from 'react-smooth-draggable-list'
import React from "react";
import '../Styles/SmoothList.css'

function SmoothList(items) {

    return(
  <div>
    <List rowHeight={60} rowWidth={220} onReOrder={order => console.log(order)}>
      {items.items.map((item, idx) => (
        <List.Item key={idx} className='langlist'>
          {item}
        </List.Item>
      ))}
    </List>
  </div>
    )
}

export default SmoothList;
