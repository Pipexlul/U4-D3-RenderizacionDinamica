import FooterIconLink from "./FooterIconLink";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 w-full py-8">
      <div className="max-w-screen-xl px-4 mx-auto">
        <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
          <FooterLink link="https://github.com/Pipexlul" text="GitHub" />
          <FooterLink link="https://desafiolatam.com/" text="Desafio Latam" />
          <FooterLink
            link="https://www.linkedin.com/in/felipe-guajardo-39233523a/"
            text="LinkedIn"
          />
        </ul>
        <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
          <FooterIconLink
            link="https://github.com/Pipexlul"
            size={40}
            path="github"
          />
          <FooterIconLink
            link="https://www.linkedin.com/in/felipe-guajardo-39233523a/"
            size={40}
            path="linkedin"
          />
        </div>
        <div className="text-center text-2xl text-gray-500 pt-10 sm:pt-12 font-light flex items-center justify-center ">
          <h2 className="text-shadow-sm shadow-white">
            Hecho por Felipe Guajardo
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
