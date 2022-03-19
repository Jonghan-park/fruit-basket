import React from 'react'

export const list = ({fruits}) => {
  return (
    <>
    {fruits.map((fruit)=>{
        const {id,name,quantities,image} = fruit;
        return <article key={id} className={fruit}> 
        <img src={image}></img>
        <div>
            <h4>{name}</h4>
            <p>{quantities} boxes</p>
        </div>
        </article>
    })}
    </>
  );
};

