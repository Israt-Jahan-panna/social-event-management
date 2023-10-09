import { Link, useLoaderData } from "react-router-dom";

const BookedEvents = ({ event }) => {
  const handelDetails = () => {};

  const { id,price, name, image, short_description, button_text } = event || {};
  return (
    <div >
      <div className="card w-80 mb-10 bg-slate-100 ">
        <figure className="px-6 pt-4">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center ">
          <h2 className="card-title">Booked Event Price: ${price}</h2>
          <p className="font-bold">{name}</p>
          <p>{short_description}</p>
          <div className="card-actions">
            <Link to={`/contactus`}>
              <button onClick={handelDetails} className="btn bg-purple-400 ">
                {" "}
               Booking Updates
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedEvents;
