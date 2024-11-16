import Link from "next/link";
import {FaFacebook, FaGithub, FaLinkedinIn, FaTwitter} from "react-icons/fa";
const Socials = ({
  ContainerStyles,
  IconStyles,
}: {
  ContainerStyles: string;
  IconStyles: string;
}) => {
  const Socials = [
    {icon: <FaGithub />, path: ""},
    {icon: <FaFacebook />, path: ""},
    {icon: <FaLinkedinIn />, path: ""},
    {icon: <FaTwitter />, path: ""},
  ];
  return (
    <div className={ContainerStyles}>
      {Socials.map((item, index) => (
        <Link key={index} href={item.path} className={IconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};
export default Socials;
