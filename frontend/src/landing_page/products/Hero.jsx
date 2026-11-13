import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Hero() {
  return (
    <div className="page-container mb-12 border-b border-gray-200">
      <div className="mt-12 p-3 text-center">
        <h1>Technology</h1>

        <h3 className="mt-3 text-2xl text-gray-500">
          Sleek, modern and intuitive trading platforms
        </h3>

        <p className="mt-3 mb-12">
          Check out our{" "}
          <a href="" className="no-underline">
            investment offerings{" "}
            <ArrowForwardIcon
              fontSize="small"
              className="align-middle"
            />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;