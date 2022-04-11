import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  addItemMainPage,
  deleteItemMainPage,
} from "./../redux/reducer/mainPageReducer";
import { addCurrentMainPage } from "./../redux/reducer/currentState";
import CardMainPage from "./CardMainPage";
import FieldMainPage from "./FieldMainPage";
import style from "./mainPage.module.scss";
function MainPage() {
  useEffect(() => {});
  const [value, setValue] = useState("");
  const [drag, setDrag] = useState("");
  const items = useSelector((state) => state.mainPage.mainPage);
  const dispatch = useDispatch();
  const addItem = () => {
    if (value) {
      dispatch(addItemMainPage(value));
    }

    setValue("");
  };
  const dropHandler = (drag) => {
    dispatch(deleteItemMainPage(drag));
  };
  const gragHandler = (e, text) => {
    setDrag(text);
  };
  return (
    <div className={style.wraper}>
      <FieldMainPage value={value} setValue={setValue} addItem={addItem} />
      <div className={style.cardsGroup}>
        {Object.keys(items).map((item, index) => {
          return (
            <NavLink
              onClick={() => dispatch(addCurrentMainPage(item))}
              to={`/${index}`}
              key={index}
            >
              {" "}
              <div
                draggable
                onDragStart={(e) => {
                  gragHandler(e, item)}}
                onDrag={(e)=>{
                  e.target.className = 'drag';
                }}
                onDragEnd={(e) => {
                  e.target.className = 'dragEnd';
                }}
              >
                <CardMainPage name={item} />
              </div>
            </NavLink>
          );
        })}
      </div>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          e.target.className = `trash dragOver`;
         
        }}
        onDragLeave={(e) => {
          
          e.target.className = `trash`;
         
        }}
        onDrop={(e) => {
          e.preventDefault();
          e.target.className = `trash`;
          dropHandler(drag);
        }}
        className='trash'
      >
        мусор
      </div>
    </div>
  );
}

export default MainPage;
