function Brokerage() {
  return (
    <div className="page-container">
      <div className="mt-12 grid grid-cols-12 border-t p-12 text-center">
        <div className="col-span-8 p-4">
          <a href="" className="no-underline">
            <h3 className="text-xl">Brokerage calculator</h3>
          </a>

          <ul className="list-disc pl-8 text-left text-xs leading-10 text-gray-500">
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        <div className="col-span-4 p-4">
          <a href="" className="no-underline">
            <h3 className="text-xl">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;