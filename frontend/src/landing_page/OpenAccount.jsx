import Button from "@mui/material/Button";

function OpenAccount() {
  return (
    <div className="container mx-auto mb-12 p-12">
      <div className="text-center">
        <h1 className="mt-12 text-3xl font-medium">
          Open a Zerodha account
        </h1>

        <p className="mt-2 text-gray-600">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>

        <Button
          variant="contained"
          className="!mt-4 !mb-12 !w-1/5 !rounded-sm !bg-blue-600 !px-4 !py-2 !text-lg !normal-case hover:!bg-blue-700"
        >
          Sign up Now
        </Button>
      </div>
    </div>
  );
}

export default OpenAccount;
