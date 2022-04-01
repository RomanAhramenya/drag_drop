import React, { useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {createMainPageCardAC} from '../../redux/reducers/dataCardreducer'
import style from './mainPage.module.scss'
function AddCardMainPage({dataCard,createMainPageCardAC}) {
    const [value,setValue] = useState('');
    const addCard = () => {
        createMainPageCardAC(value);
    }
  return (
    <div className={style.wraper}>
        <input value={value} onChange={(e)=>setValue(e.currentTarget.value)}/>
        <button onClick={addCard}>add</button>
        {dataCard && Object.keys(dataCard).map((item,index)=>{
          return <NavLink key={index} to={`/${index}`}><div key={index}>{item}</div></NavLink>
        })}
    </div>
  )
}

let mapStateToProps = (state) => ({
    dataCard:state.dataCard.ListCard
})


export default connect(mapStateToProps,{createMainPageCardAC})(AddCardMainPage)