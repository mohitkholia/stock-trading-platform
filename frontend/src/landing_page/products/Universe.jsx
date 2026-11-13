import Button from "@mui/material/Button";

function Universe() {
  return (
    <div className="page-container mt-12">
      <div className="text-center">
        <h1>The Zerodha Universe</h1>

        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="mt-12 grid grid-cols-3">
          <div className="p-3">
            <img src="/media/images/smallcaseLogo.png" alt="Smallcase" />
            <p className="text-xs text-gray-500">
              Thematic investment platform
            </p>
          </div>

          <div className="mt-12 p-3">
            <img src="/media/images/smallcaseLogo.png" alt="Smallcase" />
            <p className="text-xs text-gray-500">
              Thematic investment platform
            </p>
          </div>

          <div className="mt-12 p-3">
            <img src="/media/images/smallcaseLogo.png" alt="Smallcase" />
            <p className="text-xs text-gray-500">
              Thematic investment platform
            </p>
          </div>

          <div className="mt-12 p-3">
            <img src="/media/images/smallcaseLogo.png" alt="Smallcase" />
            <p className="text-xs text-gray-500">
              Thematic investment platform
            </p>
          </div>

          <div className="mt-12 p-3">
            <img src="/media/images/smallcaseLogo.png" alt="Smallcase" />
            <p className="text-xs text-gray-500">
              Thematic investment platform
            </p>
          </div>

          <div className="mt-12 p-3">
            <img src="/media/images/smallcaseLogo.png" alt="Smallcase" />
            <p className="text-xs text-gray-500">
              Thematic investment platform
            </p>
          </div>
        </div>

        <Button
          variant="contained"
          className="!mb-12 !w-1/5 !rounded-sm !bg-[#0d6efd] !p-2 !text-xl !normal-case hover:!bg-blue-700"
        >
          Signup Now
        </Button>
      </div>
    </div>
  );
}

export default Universe;