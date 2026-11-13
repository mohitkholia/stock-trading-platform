import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Pricing() {
  return (
    <div className="container mx-auto px-4 page-container">
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <h1 className="mb-3 text-2xl">Unbeatable pricing</h1>

          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a href="#" className="no-underline text-blue-500">
            See Pricing <ArrowForwardIcon fontSize="inherit" />
          </a>
        </div>

        <div className="col-span-2"></div>

        <div className="col-span-6 mb-12">
          <div className="grid grid-cols-2 text-center">
            <div className="p-3 border">
              <h1 className="mb-3">₹0</h1>
              <p>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>

            <div className="p-3 border">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;