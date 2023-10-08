import { useLoaderData } from "react-router-dom";


const Events = ({event}) => {
   
     const {name , image , short_description,button_text,button_color} = event || {} ; 
    return (
        <div>
            <div className="card w-80 mb-10 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center ">
    <h2 className="card-title">{name}</h2>
    <p>{short_description}</p>
    <div className="card-actions">
      <button className="btn btn-primary">{button_text}</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Events;