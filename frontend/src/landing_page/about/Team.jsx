function Team() {
  return (
    <div className="page-container">
      <div className="mt-12 border-t p-3">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="grid grid-cols-2 p-3 text-gray-500"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="p-3 text-center">
          <img
            src="/media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="w-1/2 rounded-full mx-auto"
          />
          <h4 className="mt-12">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>

        <div className="p-3">
          <p className="mb-4">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p className="mb-4">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p className="mb-4">Playing basketball is his zen.</p>

          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;