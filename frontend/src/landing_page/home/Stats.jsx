import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Stats() {
  return (
    <div className="container mx-auto p-3 page-container">
      <div className="grid grid-cols-2 p-5">
        <div className="p-5">
          <h1 className="text-2xl mb-12">Trust with confidence</h1>

          <h2 className="text-xl">Customer-first always</h2>
          <p className="text-gray-500 mb-4">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>

          <h2 className="text-xl">No spam or gimmicks</h2>
          <p className="text-gray-500 mb-4">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="text-xl">The Zerodha universe</h2>
          <p className="text-gray-500 mb-4">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="text-xl">Do better with money</h2>
          <p className="text-gray-500">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        <div className="p-5">
          <img
            src="/media/images/ecosystem.png"
            alt="Zerodha ecosystem"
            className="w-11/12"
          />

          <div className="text-center mt-5">
            <a href="#" className="mx-5 text-blue-500 no-underline">
              Explore our products <ArrowForwardIcon fontSize="inherit" />
            </a>

            <a href="#" className="text-blue-500 no-underline">
              Try Kite demo <ArrowForwardIcon fontSize="inherit" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;