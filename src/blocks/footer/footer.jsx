import bhub from "../../assets/bhub.png";

const Footer = () => {
  return (
    <div className=" bg-bhblue text-slate-100 text-sm">
      <div className="container mx-auto">
        <div className="py-4 flex flex-col md:flex-row">
          <div className="flex-1">
            <img src={bhub} alt="" className=" w-16" />
          </div>
          <div className="flex-1">
            <div className="font-semibold">ORGANIZATION</div>
            <div>About</div>
            <div>Careers</div>
            <div>News</div>
            <div>Impact</div>
            <div className=" break-after-column">Signup For Emails </div>
          </div>
          <div className="flex-1">
            <div className="font-semibold">SUPPORT</div>
            <div>Help</div>
            <div>Donations</div>
            <div>Privacy Policies</div>
            <div>Terms Of Services</div>
            <div>FAQs</div>
          </div>
          <div className="flex-1">
            <div className="font-semibold">CONNECT</div>
            <div>Facebook</div>
            <div>Twitter</div>
            <div>Instagram</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
