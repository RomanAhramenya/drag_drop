import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentEventCard } from "../../redux/reducer/currentState";
import { addParagraph, deleteParagraph } from "../../redux/reducer/mainPageReducer";
import FieldCard from "./FieldCard";
import Item from "./Item";
import style from './../cardsPage.module.scss'
function Card({ name, setDeleteItem ,deleteItem, setValue, value}) {
  const dispatch = useDispatch();
 
  const currentState = useSelector((state) => state.currentState);
  const State = useSelector((state) => state.mainPage.mainPage[currentState.mainPage]);
  const items = useSelector(
    (state) => state.mainPage.mainPage[currentState.mainPage][name]
  );
  const dragHendler =(value,item) => {
   
    setDeleteItem(value)
    setValue(name)
  }
  const dropHendlerItem = (e,mainPage,value,position) => {
    
    e.preventDefault();
    dispatch(deleteParagraph({mainPage,value,position:deleteItem}));
    dispatch(addParagraph({mainPage,value:name,position,text:State[value][deleteItem] }))
  }
  return (
    <div
      onClick={() => dispatch(addCurrentEventCard(name))}
      className={style.card}
    >
     <h5>{name}</h5> 
      <FieldCard
        mainPage={currentState.mainPage}
        value={currentState.eventCard}
      />
      {items &&
        items.map((item, index) => (
          <div draggable 
          onDrop={(e)=> dropHendlerItem(e,currentState.mainPage,value,index)}
          onDragStart={()=>dragHendler(index)}
          onDragOver={e=>e.preventDefault()}
          key={index}>
            <Item text={item} />
          </div>
        ))}
    </div>
  );
}

export default Card;
