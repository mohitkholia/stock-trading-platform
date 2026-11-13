import Button from "@mui/material/Button";

function Hero() {
  return (
    <div className="container mx-auto px-5 py-12 page-container">
      <div className="flex flex-col items-center text-center">
        <img
          src="/media/images/homeHero.png"
          alt="Hero Image"
          className="w-full max-w-3xl h-auto"
        />

        <h1 className="mt-8 text-4xl font-medium text-gray-800">
          Invest in everything
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Online platform to invest in stocks, derivatives, mutual funds and
          more.
        </p>

        <Button
          variant="contained"
          sx={{
            mt: 3,
            px: 5,
            py: 1,
            backgroundColor: "#387ed1",
            textTransform: "none",
            fontSize: "18px",
            borderRadius: "5px",
            "&:hover": {
              backgroundColor: "#222",
            },
          }}
        >
          Signup now
        </Button>
      </div>
    </div>
  );
}

export default Hero;
