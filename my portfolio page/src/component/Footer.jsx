const Footer = () => {
  return (
    <div className="py-8 main-wrapper flex flex-col gap-4 lg:flex-row lg:gap-12 justify-center text-center">
      <p className="order-2 lg:order-first">
        © 2024 Yashwanth Sagar J. All rights reserved.
      </p>
      <div className="flex gap-2 sm:gap-6 justify-center">
        <p>Term of Services</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p>
      </div>
    </div>
  );
};
export default Footer;
