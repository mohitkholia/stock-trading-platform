import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="page-container mt-12">
      <div className="grid grid-cols-2">
        <div className="col-span-1 mt-9">
          <img src={imageURL} alt={productName} />
        </div>

        <div className="col-span-1 mt-12 p-12">
          <h1 className="text-4xl">{productName}</h1>

          <p className="my-3 text-gray-500">
            {productDesription}
          </p>

          <a href={tryDemo}>
            Try Demo <ArrowForwardIcon fontSize="small" />
          </a>

          <a href={learnMore} className="ml-12">
            Learn More <ArrowForwardIcon fontSize="small" />
          </a>

          <div className="mt-4 flex gap-12">
            <a href={googlePlay}>
              <img src="/media/images/googlePlayBadge.svg" alt="Google Play" />
            </a>

            <a href={appStore}>
              <img src="/media/images/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
