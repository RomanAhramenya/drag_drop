import React,{useState} from 'react'

function CardPageForm({text,createCardAfterAC}) {
    const [value, setValue] = useState("");
    const Submit = (e) => {
        e.preventDefault();
        createCardAfterAC(text, value);
      };
  return (
    <>
    <h2>{text}</h2>
      <form onSubmit={Submit}>
        <input
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
      </form>
    </>
  )
}

export default CardPageForm