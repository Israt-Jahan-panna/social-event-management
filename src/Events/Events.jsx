import { Link, useLoaderData } from "react-router-dom";


const Events = ({event}) => {
   const handelDetails = () =>{

   }

     const {id,price,name , image , short_description,button_text} = event || {} ; 
    return (
        <div>
            <div className="card w-80 mb-10 bg-slate-100 ">
  <figure className="px-6 pt-4">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center ">
    <h2 className="card-title">{name}</h2>
    <p>{short_description}</p>
    <p>Price: ${price}</p>
    <div className="card-actions">
      <Link to={`/servicedetails/${id}`}>
      <button onClick={handelDetails} className="btn bg-red-500 "> Service Details</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Events;