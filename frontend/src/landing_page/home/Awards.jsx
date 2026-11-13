function Awards() {
  return (
    <div className="container mx-auto mt-12 px-4 page-container">
      <div className="grid grid-cols-2">
        <div className="p-12">
          <img
            src="/media/images/largestBroker.svg"
            alt="Largest stock broker"
          />
        </div>

        <div className="p-12 mt-12">
          <h1 className="text-4xl font-medium leading-tight mb-2">
            Largest stock broker in India
          </h1>

          <p className="mb-12">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="grid grid-cols-2">
            <div>
              <ul className="list-disc pl-8">
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>

            <div>
              <ul className="list-disc pl-8">
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>

          <img
            src="/media/images/pressLogos.png"
            alt="Press logos"
            className="w-11/12"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;