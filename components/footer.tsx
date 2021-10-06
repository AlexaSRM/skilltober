import SvgRenderer from "./svgRenderer";

const Footer = () => {
  return (
    <div className="lg:flex bg-bgFooter text-textPrimary text-center py-6">
      <div className="lg:flex-1 mx-10">
        <h1 className="text-xl">Alexa Developers SRM</h1>
        <h2 className="text-md">alexadevsrm.com</h2>
        <div className="grid grid-cols-3 mt-4 w-5/12 mx-auto">
          <a
            href="https://www.instagram.com/alexadevsrm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgRenderer filePath="/assets/Instagram.svg" />
          </a>
          <a
            href="https://www.linkedin.com/company/alexa-developers-srm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgRenderer filePath="/assets/LinkedIn.svg" />
          </a>
          <a href="mailto:hello@alexadevsrm.com">
            <SvgRenderer filePath="/assets/Mail.svg" />
          </a>
        </div>
      </div>
      <div className="lg:flex-1 lg:mt-0 mt-5 mx-10">
        <h1 className="text-xl">School of Computing</h1>
        <h2 className="text-md">SRM Institute of Science and Technology</h2>
        <div className="grid grid-cols-2 mt-4 w-1/3 mx-auto">
          <a
            href="https://www.instagram.com/schoolofcomputingsrmist/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgRenderer filePath="/assets/Instagram.svg" />
          </a>
          <a
            href="https://www.linkedin.com/company/school-of-computing-srmist/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgRenderer filePath="/assets/LinkedIn.svg" />
          </a>
        </div>
      </div>
      <div className="lg:flex-1 lg:mt-0 mt-5 mx-10">
        <h1 className="text-xl">Github Community SRM</h1>
        <h2 className="text-md">githubsrm.tech</h2>
        <div className="grid grid-cols-3 mt-4 w-5/12 mx-auto">
          <a
            href="https://www.instagram.com/githubsrm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgRenderer filePath="/assets/Instagram.svg" />
          </a>
          <a
            href="https://www.linkedin.com/company/githubsrm/mycompany/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgRenderer filePath="/assets/LinkedIn.svg" />
          </a>
          <a href="mailto:community@githubsrm.tech">
            <SvgRenderer filePath="/assets/Mail.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
