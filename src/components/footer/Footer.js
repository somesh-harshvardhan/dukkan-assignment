import React, { useState } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
background-color: #1a181e;
padding: 50px 100px;


.logo-link-wrapper{
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(255,255,255,.2);
}
.link-wrapper {
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    color: white;
    font-size: 1.1rem;
}
.link-wrapper ul {
    list-style: none;
    margin-top: 30px;
   
}
.link-wrapper ul li{
    margin: 1rem 0 ;
    cursor: pointer;
    :hover{
     text-decoration   : underline;
    }
}
.copywright-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    padding: 1.2rem 0;
}
.copywright-wrapper p{
    display: flex;
    align-items: center;

}
.copywright-wrapper p img{
    margin-left: 4px;
}
.link-wrapper-md-sm{
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: flex-start;
    color: white;
}
.link-wrapper-md-sm ul {
    flex-basis: 50%;
    max-width: 50%;
    list-style: none;
    margin-bottom: 1rem;
}
.link-wrapper-md-sm ul li {
    margin: 1rem 0;
}
.logo-wrapper-md-sm{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid rgba(255,255,255,.2);
    padding-top: 1.2rem;
}
.logo-wrapper-md-sm .copywright-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 10px;
}
@media (max-width : 900px) {
    padding:  2rem 20px;
}
`
const WideScreenView = ()=>(<><div className="logo-link-wrapper">
    <div className="logo">
        <img src="/white.svg" alt="" />
    </div>
    < div className="link-wrapper">
       <ul>
           <li>Contact</li>
           <li>FAQ's</li>
       </ul>
       <ul>
           <li>Tutorials</li>
           <li>Blog</li>
       </ul>
       <ul>
           <li>Privacy</li>
           <li>Banned Items</li>
       </ul>
       <ul>
           <li>About</li>
           <li>Jobs</li>
       </ul>
       <ul>
           <li>Facebook</li>
           <li>Twitter</li>
           <li>Linkedin</li>
       </ul>
    </div>
    </div>
    <div className="copywright-wrapper">
        <p>Dukaan 2020, All rights reserved</p>
        <p>Made in <img src="/icons/Frame.svg" alt="" /></p>
    </div>
 </>
)

const MediumSmallScreenView = ()=>(<>
< div className="link-wrapper-md-sm">
       <ul>
           <li>Contact</li>
           <li>FAQ's</li>
       </ul>
       <ul>
           <li>Tutorials</li>
           <li>Blog</li>
       </ul>
       <ul>
           <li>Privacy</li>
           <li>Banned Items</li>
       </ul>
       <ul>
           <li>About</li>
           <li>Jobs</li>
       </ul>
       <ul>
           <li>Facebook</li>
           <li>Twitter</li>
           <li>Linkedin</li>
       </ul>
</div>
<div className="logo-wrapper-md-sm">
<div className="logo">
        <img src="/white.svg" alt="" />
</div>
<div className="copywright-wrapper">
        <p>Dukaan 2020, All rights reserved</p>
        <p>Made in <img src="/icons/Frame.svg" alt="" /></p>
    </div>
</div>
</>

)
const Footer = () => {
    const [resize , setResize] = useState();
    window.addEventListener("resize",()=>{
        setResize(window.innerWidth)
    })
  return (
  <FooterContainer>
    {
        resize > 900 ? <WideScreenView/> : <MediumSmallScreenView/>
    }
  </FooterContainer>
  )
}

export default Footer