function Footer() {
  return (
    <footer className="bg-[#fafafa]">
      <div className="container mx-auto mt-12 border-t border-gray-200 page-container">
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="/media/images/logo.svg"
              className="w-1/2"
              alt="Zerodha"
            />
            <p className="mt-4 text-sm text-gray-600">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          <div>
            <p className="mb-3 font-medium text-gray-800">Company</p>
            <a href="" className="block mb-2 text-gray-600 hover:text-blue-600">About</a>
            <a href="" className="block mb-2 text-gray-600 hover:text-blue-600">Products</a>
            <a href="" className="block mb-2 text-gray-600 hover:text-blue-600">Pricing</a>
            <a href="" className="block mb-2 text-gray-600 hover:text-blue-600">Referral programme</a>
            <a href="" className="block mb-2 text-gray-600 hover:text-blue-600">Careers</a>
            <a href="" className="block mb-2 text-gray-600 hover:text-blue-600">Zerodha.tech</a>
            <a href="" className="block mb-2 text-gray-600 hover:text-blue-600">Press & media</a>
            <a href="" className="block mb-2 text-gray-600 hover:text-blue-600">Zerodha cares (CSR)</a>
          </div>

          <div>
            <p className="mb-3 font-medium text-gray-800">Support</p>
            <a href="" className="block mb-2 text-gray-600 hover:text-blue-600">Contact</a>
            <a href="" className="block mb-2 text-gray-600 hover:text-blue-600">Support portal</a>
            <a href="" className="block mb-2 text-gray-600 hover:text-blue-600">Z-Connect blog</a>
            <a href="" className="block mb-2 text-gray-600 hover:text-blue-600">List of charges</a>
            <a href="" className="block mb-2 text-gray-600 hover:text-blue-600">Downloads & resources</a>
          </div>

          <div>
            <p className="mb-3 font-medium text-gray-800">Account</p>
            <a href="" className="block mb-2 text-gray-600 hover:text-blue-600">Open an account</a>
            <a href="" className="block mb-2 text-gray-600 hover:text-blue-600">Fund transfer</a>
            <a href="" className="block mb-2 text-gray-600 hover:text-blue-600">60 day challenge</a>
          </div>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p className="mb-4">
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p className="mb-4">
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p className="mb-4">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p className="mb-4">
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;