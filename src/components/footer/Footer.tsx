import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="mt-32 bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          {/* <img alt="logo" src={Logo} /> */}
          <div></div>
          <p className="my-5">
            Kenya The Magical Pride of Africa Tours was established with a
            vision to introduce travelers to the enchanting wonders of Kenya.
            Since our inception, we have been committed to providing
            extraordinary travel experiences that go beyond the ordinary.
          </p>
          <p>© Magical Kenya All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">FAQ</p>
          <p className="my-5">Facilities</p>
          <p>Services</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            500 Terry Francine St. San Francisco, CA 94158.
          </p>
          <p>+(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
