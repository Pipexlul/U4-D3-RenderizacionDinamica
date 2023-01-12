const FooterLink = ({ text, link }) => {
  return (
    <li className="my-2">
      <a
        className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
        href={link}
        rel="noreferrer noopener"
        target="_blank"
      >
        {text}
      </a>
    </li>
  );
};

export default FooterLink;
