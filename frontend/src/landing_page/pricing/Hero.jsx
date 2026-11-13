function Hero() {
  return (
    <div className="page-container">
      <div className="mt-12 grid grid-cols-1 border-b p-12 text-center">
        <h1 className="text-4xl">Pricing</h1>

        <h3 className="mt-4 text-xl text-gray-500">
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>

      <div className="mt-12 grid grid-cols-3 p-12 text-center">
        <div className="col-span-1 p-4">
          <img src="/media/images/pricingEquity.svg" alt="Equity delivery" />
          <h1 className="text-2xl">Free equity delivery</h1>
          <p className="text-gray-500">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div className="col-span-1 p-4">
          <img src="/media/images/intradayTrades.svg" alt="Intraday trades" />
          <h1 className="text-2xl">Intraday and F&O trades</h1>
          <p className="text-gray-500">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>

        <div className="col-span-1 p-4">
          <img src="/media/images/pricingEquity.svg" alt="Direct mutual funds" />
          <h1 className="text-2xl">Free direct MF</h1>
          <p className="text-gray-500">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;