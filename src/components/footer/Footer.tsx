// import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="mt-32 bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          {/* <img alt="logo" src={Logo} /> */}
          <div></div>
          <p className="my-5">
              Gjoe Global Tours – Your Worldwide Travel Partner!
          </p>
          <p>&copy; {new Date().getFullYear()} Gjoe Global Tours. All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-2">Tours</p>
          <p className="my-2">Contact</p>
          <p className="my-2">Services</p>
          <p className="my-2">About us</p>
        </div>
        <div className="mt-16 basis-1/3 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="mt-2 mb-1">Kenya | Canada</p>
          <p className="my-2">Follow Us: Facebook|Instagram|Twitter</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
