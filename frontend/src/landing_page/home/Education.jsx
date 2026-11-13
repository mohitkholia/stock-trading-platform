import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Education() {
  return (
    <div className="container mx-auto mt-12 page-container">
      <div className="grid grid-cols-2">
        <div>
          <img
            src="/media/images/education.svg"
            alt="Market education"
            className="w-9/12"
          />
        </div>

        <div>
          <h1 className="mb-3 text-2xl">
            Free and open market education
          </h1>

          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a href="#" className="no-underline text-blue-500">
            Varsity <ArrowForwardIcon fontSize="inherit" />
          </a>

          <p className="mt-12">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a href="#" className="no-underline text-blue-500">
            TradingQ&A <ArrowForwardIcon fontSize="inherit" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;