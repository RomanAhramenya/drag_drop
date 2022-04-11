import React, { useState } from "react";
import TittleCardPage from "./TittleCardPage";
import { useDispatch, useSelector } from "react-redux";
import style from './cardsPage.module.scss'
import {
  addParagraph,
  deleteItemEventCard,
  deleteParagraph,
} from "./../redux/reducer/mainPageReducer";
import Card from "./Card/Card";
function Cardspage() {
  const [value, setValue] = useState("");
  const [deleteItem, setDeleteItem] = useState("");
  const mainPage = useSelector((state) => state.currentState.mainPage);
  const name = useSelector((state) => state.mainPage.mainPage);
  const dispatch = useDispatch();
  const dropHandler = (e, value, position) => {
    e.preventDefault();
    if (position || position === 0) {
      dispatch(deleteParagraph({ mainPage, value, position }));
      return setDeleteItem("");
    }
    dispatch(deleteItemEventCard({ mainPage, value }));
  };
  const dragHandler = (text) => {
    setValue(text);
  };
  const dropHandlerCard = (e, mainPage, value, value2, position) => {
    e.preventDefault();
    if(name[mainPage][value].length === 0 ){
       dispatch(
      deleteParagraph({ mainPage, value: value2, position: deleteItem })
    );
    dispatch(
      addParagraph({
        mainPage,
        value,
        position,
        text: name[mainPage][value2][deleteItem],
      })
    );
    }
   
  };
  return (
    <div className={style.wraper}>
      <TittleCardPage />
      {Object.keys(name[mainPage]).map((item, index) => {
        return (
          <div className={style.cards}
            key={index}
            draggable
            onDrag={(e)=>{
              e.target.className = 'drag';
            }}
            onDragEnd={(e) => {
              e.target.className = 'dragEnd';
            }}
            onDragOver={(e) =>  e.preventDefault()}
            onDragStart={() => dragHandler(item)}
            onDrop={(e) => {
              dropHandlerCard(e, mainPage, item, value, 0);
            }}
          >
            <Card
              deleteItem={deleteItem}
              setValue={setValue}
              value={value}
              setDeleteItem={setDeleteItem}
              name={item}
            />
          </div>
        );
      })}
      <div
          onDragOver={(e) => {
            e.preventDefault();
            e.target.className = `trash dragOver`;
           
          }}
          onDragLeave={(e) => {
            
            e.target.className = `trash`;
           
          }}
        onDrop={(e) => {
          dropHandler(e, value, deleteItem);
          e.target.className = `trash`;
        }}
        className='trash'
      >
        мусор
      </div>
    </div>
  );
}

export default Cardspage;
