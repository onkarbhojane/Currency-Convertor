import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import useCurrency from './useCurrency';
const Option=(props)=>{
  return <option>{props.val}</option>
}
const App=()=>{
  const [input,setInput]=useState(0.0)
  const [Arr,setArr]=useState([])
  const [selected,setSelected]=useState("")
  const [answer,setAnswer]=useState(0)
  const data=useCurrency('usd');
  console.log(data['ai'])
  useEffect(()=>{
    const arr=[]
    for(let val in data){
      if(val=='inr') arr.push(<Option val={val} selected></Option>)
        else arr.push(<Option val={val}></Option>)
    }
    setArr(arr)
  },[data])
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      marginTop:'200px',
      marginLeft:'500px',
      height:'270px',
      width:'350px',
      alignContent:'center',
      border:'black solid 2px',
      paddingLeft:'100px',
      borderRadius:'10px'
    }}>
      <h1>Currency Convertor</h1>
      <div >
        <input type='number' onChange={(event)=> setInput(event.target.value)} style={{
          width:'180px',
          border:'solid 2px black',
          marginRight:'5px',
          height:'30px',
          textAlign:'center',
          fontSize:'20px'
        }} ></input>
        <select onChange={(event)=> console.log(event.target.value)}>
          {Arr}
        </select>
      </div>
      <br></br>
      <button style={{
        width:'100px',
        position:'relative',
        marginLeft:'40px',
        borderRadius:'7px',
        height:'20px'
      }}>Swap</button>
      <br></br>
      <div style={{
        display:'flex',
        alignItems:'center'
      }}>
        <div style={{
          height:'20px',width:'180px',border:'2px solid black',display:'inline-block',marginRight:'5px',textAlign:'center',height:'30px',fontSize:'20px'
        }}>{answer}</div>
        <select onChange={(event)=> setSelected(event.target.value)}>
          {Arr}
        </select>
      </div>
      <button style={{
        height:'30px',
        width:'180px',
        marginTop:'10px',
        borderRadius:'5px '
      }} onClick={()=>setAnswer(input*data[selected])} >Submit</button>
    </div>
  )
}
ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)

