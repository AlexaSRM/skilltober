import SvgRenderer from "./svgRenderer";

const Footer = () => {
  return (
    <div className="lg:flex bg-bgFooter text-textPrimary text-center py-6">
      <div className="lg:flex-1 mx-10">
        <h1 className="text-xl">Alexa Developers SRM</h1>
        <a
          href="https://www.alexadevsrm.com" className="text-md"
          target="_blank"
          rel="noopener noreferrer"
          title="Alexa Developers SRM"
        >
          alexadevsrm.com
        </a>
        <div className="grid grid-cols-3 mt-4 w-5/12 mx-auto">
          <a
            href="https://www.instagram.com/alexadevsrm/"
            target="_blank"
            rel="noopener noreferrer"
            title="Alexa Developers SRM on Instagram"
          >
            <SvgRenderer filePath="/assets/Instagram.svg" />
          </a>
          <a
            href="https://www.linkedin.com/company/alexa-developers-srm/"
            target="_blank"
            rel="noopener noreferrer"
            title="Alexa Developers SRM on LinkedIn"
          >
            <SvgRenderer filePath="/assets/LinkedIn.svg" />
          </a>
          <a
            href="mailto:hello@alexadevsrm.com"
            title="Email Alexa Developers SRM"
          >
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
            title="School of Computing on Instagram"
          >
            <SvgRenderer filePath="/assets/Instagram.svg" />
          </a>
          <a
            href="https://www.linkedin.com/company/school-of-computing-srmist/"
            target="_blank"
            rel="noopener noreferrer"
            title="School of Computing on LinkedIn"
          >
            <SvgRenderer filePath="/assets/LinkedIn.svg" />
          </a>
        </div>
      </div>
      <div className="lg:flex-1 lg:mt-0 mt-5 mx-10">
        <h1 className="text-xl">Github Community SRM</h1>
        <a
          href="https://www.githubsrm.tech" className="text-md"
          target="_blank"
          rel="noopener noreferrer"
          title="Github Community SRM"
        >
          githubsrm.tech
        </a>
        <div className="grid grid-cols-3 mt-4 w-5/12 mx-auto">
          <a
            href="https://www.instagram.com/githubsrm/"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Community SRM on Instagram"
          >
            <SvgRenderer filePath="/assets/Instagram.svg" />
          </a>
          <a
            href="https://www.linkedin.com/company/githubsrm/mycompany/"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Community SRM on LinkedIn"
          >
            <SvgRenderer filePath="/assets/LinkedIn.svg" />
          </a>
          <a
            href="mailto:community@githubsrm.tech"
            title="Email GitHub Community SRM"
          >
            <SvgRenderer filePath="/assets/Mail.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
