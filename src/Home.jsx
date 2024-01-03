import React from 'react'
import { ItemCard } from './itemCart';
import { data } from './data';


export function Home() {
    console.log(data.productName)
  return (
    <>
      <h1 className="text-center mt-3">All goods</h1>
      <section className="py-4 container">
        <div  style={main}>
            {
                data.productName.map((item, id)=> {
                    return <ItemCard img={item.img} 
                    title={item.title} 
                    desc={item.desc} 
                    item={item}
                    price={item.price} 
                    key={id} 
                    />;
                })
            }
          
        </div>
      </section>
    </>
  );
}


const main = {
    display: 'flex',
    justifyContent: 'space-around',
}