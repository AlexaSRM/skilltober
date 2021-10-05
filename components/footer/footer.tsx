import Instagram from "../../public/assets/Instagram.svg";
import LinkedIn from "../../public/assets/LinkedIn.svg";
import Mail from "../../public/assets/Mail.svg";

const Footer = () => {
  return (
    <div className="lg:flex text-textPrimary text-center py-6">
      <div className="lg:flex-1 mx-10">
        <h1 className="text-xl">Alexa Developers SRM</h1>
        <h2 className="text-md">alexadevsrm.com</h2>
        <div className="grid grid-cols-3 mt-4 w-8/12 mx-auto">
          <a href="https://www.instagram.com/alexadevsrm/" target="_blank" rel="noopener noreferrer">
            <Instagram className="mx-auto" />
          </a>
          <a href="https://www.linkedin.com/company/alexa-developers-srm/" target="_blank" rel="noopener noreferrer">
            <LinkedIn className="mx-auto" />
          </a>
          <a href="mailto:hello@alexadevsrm.com">
            <Mail className="mx-auto" />
          </a>
        </div>
      </div>
      <div className="lg:flex-1 lg:mt-0 mt-5 mx-10">
        <h1 className="text-xl">School of Computing</h1>
        <h2 className="text-md">SRM Institute of Science and Technology</h2>
        <div className="grid grid-cols-2 mt-4 w-5/12 mx-auto">
          <a href="https://www.instagram.com/schoolofcomputingsrmist/" target="_blank" rel="noopener noreferrer">
            <Instagram className="mx-auto" />
          </a>
          <a href="https://www.linkedin.com/company/school-of-computing-srmist/" target="_blank" rel="noopener noreferrer">
            <LinkedIn className="mx-auto" />
          </a>
        </div>
      </div>
      <div className="lg:flex-1 lg:mt-0 mt-5 mx-10">
        <h1 className="text-xl">Github Community SRM</h1>
        <h2 className="text-md">githubsrm.tech</h2>
        <div className="grid grid-cols-3 mt-4 w-8/12 mx-auto">
          <a href="https://www.instagram.com/githubsrm/" target="_blank" rel="noopener noreferrer">
            <Instagram className="mx-auto" />
          </a>
          <a href="https://www.linkedin.com/company/githubsrm/mycompany/" target="_blank" rel="noopener noreferrer">
            <LinkedIn className="mx-auto" />
          </a>
          <a href="mailto:community@githubsrm.tech">
            <Mail className="mx-auto" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
