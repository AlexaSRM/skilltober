import Instagram from "../../public/assets/Instagram.svg";
import LinkedIn from "../../public/assets/LinkedIn.svg";
import Mail from "../../public/assets/Mail.svg";

const Footer = () => {
  return (
    <div className="lg:flex text-textPrimary text-center py-6">
      <div className="lg:flex-1 mx-10">
        <h1 className="text-2xl">Alexa Developers SRM</h1>
        <h2 className="text-md">alexadevsrm.com</h2>
        <div className="grid grid-cols-3 mt-4 px-14">
          <a href="https://www.instagram.com/alexadevsrm/">
            <Instagram className="lg:mx-10 mx-4" />
          </a>
          <a href="https://www.linkedin.com/company/alexa-developers-srm/">
            <LinkedIn className="lg:mx-10 mx-4" />
          </a>
          <a href="mailto:hello@alexadevsrm.com">
            <Mail className="lg:mx-10 mx-4" />
          </a>
        </div>
      </div>
      <div className="lg:flex-1 lg:mt-0 mt-5 mx-10">
        <h1 className="text-2xl">School of Computing</h1>
        <h2 className="text-md">SRM Institute of Science and Technology</h2>
        <div className="grid grid-cols-2 mt-4 px-24">
          <a href="https://www.instagram.com/schoolofcomputingsrmist/">
            <Instagram className="lg:mx-10 mx-4" />
          </a>
          <a href="https://www.linkedin.com/company/school-of-computing-srmist/">
            <LinkedIn className="lg:mx-10 mx-4" />
          </a>
        </div>
      </div>
      <div className="lg:flex-1 lg:mt-0 mt-5 mx-10">
        <h1 className="text-2xl">Github Community SRM</h1>
        <h2 className="text-md">githubsrm.tech</h2>
        <div className="grid grid-cols-3 mt-4 px-14">
          <a href="https://www.instagram.com/githubsrm/">
            <Instagram className="lg:mx-10 mx-4" />
          </a>
          <a href="https://www.linkedin.com/company/githubsrm/mycompany/">
            <LinkedIn className="lg:mx-10 mx-4" />
          </a>
          <a href="/">
            <Mail className="lg:mx-10 mx-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
