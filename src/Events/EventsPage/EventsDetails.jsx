import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const EventsDetails = () => {
  const { id } = useParams();
  const events = useLoaderData();
  const event = events.find((event) => event.id == id);
  const { name, image, short_description, details, button_text } = event;
  const handleEvents = () => {
    const addedDonationArray = [];
    const eventsItems = JSON.parse(localStorage.getItem("events"));
    //when value is emty in this time it will set
    if (!eventsItems) {
      addedDonationArray.push(event);
      localStorage.setItem("donations", JSON.stringify(addedDonationArray));
      swal(
        "Thanks you For Your Booking ",
        "We will Call For Confirmations",
        "success"
      );
    } else {
      addedDonationArray.push(...eventsItems, event);
      localStorage.setItem("donations", JSON.stringify(addedDonationArray));
      swal(
        "Thanks you For Your Booking ",
        "We will Call For Confirmations",
        "success"
      );
    }
  };
  return (
    <div className="w-full ">
      <div className="relative flex mx-auto max-w-[50rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img src={image} alt="" />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        </div>
        <div className="p-6">
          <div className="mb-3 flex items-center justify-between">
            <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
              Wooden House, Florida
            </h5>
          </div>
          <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
            {details}
          </p>
        </div>
        <div className="p-6 pt-3">
          <button
            className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            {button_text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsDetails;