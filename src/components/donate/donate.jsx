import MiDropdown from "../../helpers/dropdown";
import Fwinputs from "../../helpers/fwinputs";
import testimg from "../../assets/test.jpg";

const myLang = [{ name: "USD $" }, { name: "GBP $" }];

const Donate = () => {
  return (
    <div className="container mx-auto">
      <div className="py-5">
        <div className="flex flex-col md:flex-row py-5 ">
          <div className=" h-full flex-1">
            <div className="pr-5 pt-20">
              <img src={testimg} alt="" className=" rounded" />
            </div>
          </div>
          <div className=" h-full flex-1">
            <div className=" flex flex-row">
              <div className="flex-1 text-4xl font-medium">Donate</div>
              <div className="">
                <MiDropdown mydata={myLang} />
              </div>
            </div>
            <div className="flex flex-row py-2 text-sm">
              <div className=" flex-1">
                <input
                  type="radio"
                  id="onetime"
                  name="freq_dona"
                  value="onetime"
                />
                 <label for="onetime">One Time</label>
              </div>
              <div className=" flex-1">
                <input
                  type="radio"
                  id="monthly"
                  name="freq_dona"
                  value="monthly"
                />
                  <label htmlFor="monthly">Monthly</label>
              </div>
            </div>

            <div className="flex flex-row space-x-5 text-center text-sm py-3">
              <div className="flex-1 border border-blue-500 text-blue-500 py-3">
                $10
              </div>
              <div className=" flex-1 border border-blue-500 text-blue-500 py-3 ">
                $20
              </div>
              <div className=" flex-1 border border-blue-500 text-blue-500 py-3 ">
                $20
              </div>
            </div>

            <div className="flex flex-row space-x-5 text-center text-sm py-3">
              <div className=" basis-1/3 bg-slate-200 py-3 ">$60</div>
              <div className=" basis-2/3">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Amount"
                  className="py-3 border border-slate-600 w-full px-3"
                />
              </div>
            </div>

            <Fwinputs label="Credit Card Number" placeholder="Card Number" />
            <Fwinputs label="Expiration Date" placeholder="MM/YY" />
            <Fwinputs label="Your Name" placeholder="Full Name" />
            <Fwinputs label="Email" placeholder="Email" />
            <Fwinputs label="Billing Address" placeholder="Address" />
            <Fwinputs label="City" placeholder="Name Of City" />
            <Fwinputs label="State" placeholder="Select State" />
            <Fwinputs label="Billing Zip" placeholder="Zip Code" />

            <button className=" bg-bhyell w-full p-3 font-medium mt-4">
              Contribute
            </button>
          </div>
        </div>
        <div className="  text-2xl font-medium pt-2">Privacy Policy</div>
        <div className="text-base">
          For our complete privacy policy, click here.
        </div>
        <div className=" text-lg">Financial Donations</div>
        <div className=" text-sm py-1">
          If you choose to make a donation, your credit card information will be
          used only for this transaction through our secure online payment
          system. Petition website Action does not retain credit card
          information. Under circumstances where we determine that members may
          be misusing our systems for malicious purposes (for example, using the
          numbers we provide to make harassing phone calls), such activities may
          be reported to law enforcement agencies. In such cases, Petition
          website may release personally identifiable information, including
          name and address, to those agencies.
        </div>
        <div className=" text-lg">Financial Donations</div>
        <div className=" text-sm py-1">
          If you choose to make a donation, your credit card information will be
          used only for this transaction through our secure online payment
          system. Petition website Action does not retain credit card
          information. Under circumstances where we determine that members may
          be misusing our systems for malicious purposes (for example, using the
          numbers we provide to make harassing phone calls), such activities may
          be reported to law enforcement agencies. In such cases, Petition
          website may release personally identifiable information, including
          name and address, to those agencies.
        </div>
      </div>
    </div>
  );
};

export default Donate;
