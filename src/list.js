import React from 'react'

const List = ({fruits}) => {
  return (
    <>
    {fruits.map((fruit)=>{
        const {id,name,quantities,image} = fruit;
        return <article key={id} className="fruit"> 
        <img src={image} alt={name} />
        <div>
            <h4>{name}</h4>
            <p>{quantities} boxes</p>
        </div>
        </article>
    })}
    </>
  );
};

export default List;