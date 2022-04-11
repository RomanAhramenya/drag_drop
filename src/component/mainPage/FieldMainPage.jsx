import React from 'react'
import style from './mainPage.module.scss'
function FieldMainPage({value,addItem,setValue}) {
  return (
    <div className={style.feield}>
        <input value={value} onChange={(e) => setValue(e.currentTarget.value)} />
        <button onClick={addItem}>add</button>
    </div>
  )
}

export default FieldMainPage