import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addItemEventCard} from './../redux/reducer/mainPageReducer'
import style from './cardsPage.module.scss'
function TittleCardPage() {
    const [value,setValue] = useState('');
    const mainPage = useSelector(state=>state.currentState.mainPage)
    const dispatch = useDispatch()
    const HandleSubmit = (e) => {
        e.preventDefault();
        dispatch(addItemEventCard({mainPage,value}))
        setValue('')
    }
  return (
    <div className={style.wraper_tittle}>
        <h4>{mainPage}</h4>
        <form onSubmit={HandleSubmit}>
            <input value={value} onChange={(e)=>setValue(e.currentTarget.value)}/>
        </form>
    </div>
  )
}

export default TittleCardPage