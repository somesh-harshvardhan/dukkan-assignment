import React from 'react'
import styled from 'styled-components'

const TryOthersContainer = styled.div`
padding: 50px 100px;
.headline{
    font-weight: 600;
    color: #1A181E;
    font-size: 2rem;
}
.cards-container{
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 3rem;
    column-gap: 2rem;
}
.card-item{
    flex-basis: 30.33%;
    margin: 1.2rem 0;
}
.card-item h3{
    line-height: 28px;
    font-size: 1.2rem;
    margin: 1rem 0;
}
.card-item p {
    line-height: 24px;
    color: #4D4D4D;
}
@media (max-width : 900px) {
    padding:  75px 50px;
    .cards-container{
        flex-direction: column;
        justify-content: flex-start;
    }
}
@media (max-width : 768px){
    padding: 75px 100px;
    flex-direction: column;

    .item{
        align-items: flex-start;
        margin-bottom: 1.2rem;
    }

}
@media (max-width : 576px){
    padding: 75px 20px;

    .item{
        align-items: center;
    }
}

`
const TryOthers = () => {
    const cards = [
        {
         name : 'Privacy Policy Generator',
         body : 'Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.',
         img : '/cards/Rectangle 124.svg'
        },
        {
            name : 'Terms & Conditions Generator',
            body : 'Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.',
            img : '/cards/Rectangle 125.svg'
           },
           {
            name : 'Domain Name Generator',
            body : 'Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.',
            img : '/cards/Rectangle 126.svg'
           },
           {
            name : 'Invoice Generator',
            body : 'Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.',
            img : '/cards/Rectangle 127.svg'
           }

]
  return (
   <TryOthersContainer>
       <div className="headline">Try our other free products</div>
       <div className="cards-container">
        {
            cards.map((item,indx)=>(<div key={indx} className='card-item'>
               <img src={item.img} alt=""  height={200} width={'100%'}/>
               <h3>{item.name}</h3>
               <p>{item.body}</p>

            </div>))
        }
       </div>
   </TryOthersContainer>
  )
}

export default TryOthers