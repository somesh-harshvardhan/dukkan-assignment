import React from 'react'
import styled from 'styled-components';

const ContainerHeader = styled.header`
height: 328px;
background-color: #146EB4;
padding: 0 100px;
.nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
}
.other{
    display: flex;
    align-items: center;
    justify-content: center;
}
p{
    margin : 0 2rem 0 0 ;

    a{
        text-decoration: none;
        color: white;

        :hover{
            text-decoration: underline;

        }
    }
}
button{
    padding: .6rem 1rem;
    background-color: white;
    font-size: 1rem;
    border: none;
    color: #146EB4;
    border-radius: 4px;
    transition: transform .2s ease;
    :hover{
        transform: translateY(-3px);
        filter: brightness(80%);
        cursor: pointer;
    }
}
@media (max-width : 900px) {
    padding:  0 50px;
}
@media (max-width : 768px){
    padding: 0 20px;

}
@media (max-width : 576px){
    padding: 0 20px;

}
@media (max-width : 500px){
    .other{
        flex-direction: column;
        position: relative;
    }
    .other p {
        margin-top: 2rem;
    }
    .other button{
     position: relative;
     bottom: -20px;

    }
}
`

const Header = () => {
  return (
   <ContainerHeader>
    <div className="nav">
        <div className="logo">
            <img src="/white.svg" alt=""  height={44}/>
        </div>
        <div className="other">
         <p><a href="https://web.mydukaan.io/login?gs=0">Sign in</a></p>
         <button>Download for PC</button>
        </div>
    </div>
   </ContainerHeader>
  )
}

export default Header