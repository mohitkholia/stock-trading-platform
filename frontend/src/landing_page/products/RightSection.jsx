function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="page-container mt-12">
      <div className="grid grid-cols-2">
        <div className="col-span-1 mt-12 p-12">
          <h1 className="text-4xl">{productName}</h1>

          <p className="my-3 text-gray-500">
            {productDesription}
          </p>

          <div>
            <a href={learnMore}>Learn More</a>
          </div>
        </div>

        <div className="col-span-1">
          <img src={imageURL} alt={productName} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;