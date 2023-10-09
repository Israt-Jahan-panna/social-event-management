const CustomerReview = () => {
  return (
    <div className=" w-full" >
        <h3 className="text-center font-bold text-indigo-400 text-3xl pt-6">Our Happy Clints</h3>
     <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 md:grid-cols-1   p-6">
     <div className="relative grid h-[35rem] w-full max-w-[35rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
        <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/vjnX0pF/newlyweds-evening-celebration-wedding-cutting-cake-outdoors.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div className="relative p-6 py-14 px-6 md:px-12">
          <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
          Perfect in every way.

          </h2>
          <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
            Tania Andrew
          </h5>
          <img
            alt="tania andrew"
            src="https://i.ibb.co/TK0B58r/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg"
            className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
          />
        </div>
      </div>
      {/* customer2 */}
      <div className="relative grid h-[35rem] w-full max-w-[35rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
        <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/2S6ZLP4/mom-daughter-play-before-christmas-tree-pink-room.jpg ')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div className="relative p-6 py-14 px-6 md:px-12">
          <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
          Highly recommended for any occasion!
          </h2>
          <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
          Emily R.
          </h5>
          <img
            alt="tania andrew"
            src="https://i.ibb.co/YQrD8vg/young-bearded-man-with-striped-shirt.jpg"
            className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
          />
        </div>
      </div>

      {/* customer3 */}
      <div className="relative grid h-[35rem] w-full max-w-[35rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
        <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/0CPXSBM/hat-b-day-girl-with-number-1-it-stands-table-with-swee.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div className="relative p-6 py-14 px-6 md:px-12">
    <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
    Exceeded all expectations!

    </h2>
    <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
    Sarah T.
    </h5>
    <img
      alt="tania andrew"
      src="https://i.ibb.co/BnF8PRq/attractive-beautiful-female-with-blonde-pony-tail-feeling-self-assuarance-while-posing-against-blank.jpg"
      className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
    />
  </div>
      </div>
      {/* customer4 */}
      <div className="relative grid h-[35rem] w-full max-w-[35rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
        <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/D47BzQn/bunch-flowers-leaves-table.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div className="relative p-6 py-14 px-6 md:px-12">
    <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
    Absolutely unforgettable experience!

    </h2>
    <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
    Michael H.
    </h5>
    <img
      alt="tania andrew"
      src="https://i.ibb.co/ctvfd2K/middle-aged-cheerful-dark-skinned-male-with-shining-smile.jpg"
      className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
    />
  </div>
      </div>
     </div>

    </div>
  );
};

export default CustomerReview;
