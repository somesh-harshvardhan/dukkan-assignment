import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import {IoCloseOutline} from 'react-icons/io5'
import axios from 'axios';
const GeneratorContainer = styled.section`
padding: 0 100px;
position: relative;
background-color: white;

.box{
min-height: 468px;
box-shadow: 0px 2px 8px rgba(26, 24, 30, 0.06);;
position: relative;
bottom: 120px;
background-color: white;
border-radius: 8px;
padding: 80px 100px;
}
.box h1 {
    font-size: 2.2rem;
    font-weight: 800;
}
.box p{
    margin: 1.5rem 0 ;
    color: #4d4d4d;
    font-size: 1.1rem;
    font-weight: 300;
}
.box-form{
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 50%;
    position: relative;
}
.box-form-input{
    border-radius: 4px;
    padding: 11px 16px;
    border: 1px solid #d9d9d9;
    color: #1a181e;
    font-size: 16px;
    width: 100%;
    line-height: 24px;
    margin: 1rem 0;
}
.box-form button{
    padding: 10px;
    font-size: 1rem;
    background-color: #146eb4;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 2rem;
    :hover{
        filter: brightness(95%);
    }
}
.clear-input{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 28%;
    right: 15px;
    cursor: pointer;
   
}
.results{
    padding-top : 50px ;
    display: grid;
  
}
hr{
    margin-bottom: 3rem;
}
.results-container{
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    column-gap: 1rem;
    row-gap: 1rem;
   
}
.results-container li {
    flex-basis: 45%;
    max-width: 45%;
    list-style: none;
    background-color: #F2F2F2;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
}
.results-container li span{
    position: absolute;
    display: inline-block;
    color: white;
    background-color: #141414;
    padding: 5px;
    font-size: 10px;
    border-radius: 4px;
    left : -21%;
    top: 37%;
}
.results-container li p,.results-container li h4{
    margin: 0;
}
@media (max-width : 900px){
    .box{
        padding: 50px 20px;
    }
}
@media (max-width : 768px){
    padding : 20px;
    .box-form {
        width: 100%;
    }
    .results-container li {
        flex-basis: 100%;
        max-width: 100%;
    }
    .results-container li span{
        display: none;
    }
}
`

const Generator = () => {
    const [input,setInput] = useState("");
    const [APIData, setAPIData] = useState([]);


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => {
                const res = response.data.map(item=>({name : item.name,email : item.email , isHovered : false,isCopied : false}))
                setAPIData(res)
            })
    }, [])

    function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
          return  navigator.clipboard.writeText(text);
        } 
      }
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
   const handleMouseEnter = (indx)=>{
       const oldApi = [...APIData];
       oldApi[indx]= {name : oldApi[indx].name, email : oldApi[indx].email , isHovered : true , isCopied : oldApi[indx].isCopied};
       setAPIData([...oldApi])
   }
  const handleMouseLeave = (indx)=>{
    const oldApi = [...APIData];
    oldApi[indx]= {name : oldApi[indx].name, email : oldApi[indx].email , isHovered : false,isCopied : false};
    setAPIData([...oldApi])
  }
  const handleClick = async (indx)=>{
    const oldApi = [...APIData];
    await copyTextToClipboard(oldApi[indx].name)
    oldApi[indx]= {name : oldApi[indx].name, email : oldApi[indx].email , isHovered :  oldApi[indx].isHovered , isCopied : true};
    setAPIData([...oldApi])
  }
  return (
    <GeneratorContainer>
        <div className="box" onSubmit={handleSubmit}>
        <h1>Free Slogan Generator</h1>
        <p>Simply enter a term that describes your business or service, and generate catchy slogans.</p>

        <form action="" className="box-form">
            <label htmlFor="">Word for your slogan</label>
            <input type="text" className='box-form-input' value={input} onChange={e=>setInput(e.target.value)} placeholder='Enter a slogan'/>

            <button type='submit'>Generate Slogans</button>
           {input.length > 0 && <span className="clear-input"><IoCloseOutline fontSize={22} color='#4d4d4d' onClick={()=>setInput("")}/></span>}
        </form>
        <div className="results">
          <hr />
          <h3>We have generated {APIData.length} results</h3>
          
          <div className="results-container">
            {
                APIData.map((item,indx)=><li key={indx} onClick={()=>handleClick(indx)} onMouseOver={()=>{handleMouseEnter(indx)}} onMouseLeave={()=>handleMouseLeave(indx)}>
                    <h4>{item.name}</h4>
                    <p>{item.email}</p>
                   {item.isHovered && (item.isCopied ? <span>Copied</span> : <span>Click to copy</span>)}
                </li>)
            }
          </div>

        </div>
        </div>

    </GeneratorContainer>
  )
}

export default Generator