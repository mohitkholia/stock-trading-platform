function Hero() {
  return (
    <section className="w-full" id="supportHero">
      <div className="p-12" id="supportWrapper">
        <h3 className=" text-xl text-white">Support Portal</h3>
        <a href="" className="text-white">
          Track Tickets
        </a>
      </div>

      <div className="m-3 mt-4 grid grid-cols-2 gap-16 p-12">
        <div className="col-span-1 p-4">
          <h1 className="text-2xl">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            placeholder="Eg. how do I activate F&O"
            className="mt-3 w-full border border-gray-300 p-2"
          />

          <br />

          <a href=""><u>Track account opening</u></a>
          <a href=""><u>Track segment activation</u></a>
          <a href=""><u>Intraday margins</u></a>
          <a href=""><u>Kite user manual</u></a>
        </div>

        <div className="col-span-1 p-4">
          <h1 className="text-2xl">Featured</h1>
          <ol className="list-decimal pl-8">
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
