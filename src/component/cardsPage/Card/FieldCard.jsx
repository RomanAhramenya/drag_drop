import React , { useState }from 'react'
import { useDispatch } from 'react-redux';
import { addParagraph } from '../../redux/reducer/mainPageReducer';

function FieldCard({mainPage,value}) {
  
    const [text,setText] = useState('');
    
    const dispatch = useDispatch()
    const HandleSubmit = (e) => {
        e.preventDefault();
        dispatch(addParagraph({mainPage,value,text}))
        setText('')
        
    }
  return (
    <div >
    <form onSubmit={HandleSubmit}>
        <input value={text} onChange={(e)=>setText(e.currentTarget.value)}/>
    </form>
</div>
  )
}

export default FieldCard