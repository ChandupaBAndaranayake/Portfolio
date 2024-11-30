import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa"

const socials = [
    {
      icon: <FaGithub />, 
      path: "https://github.com/ChandupaBAndaranayake" 
    },
    {
      icon: <FaLinkedinIn />, 
      path: "https://www.linkedin.com/in/chandupa-chiranjeewa-138579252/" 
    },
    {
      icon: <FaYoutube />, 
      path: "https://www.youtube.com/@chandupachiranjeewa7732" 
    },
    {
      icon: <FaTwitter />, 
      path: "https://x.com/cicmurox"
    },
];

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index)=> {
        return (
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        )
      })}
    </div>
  )
}

export default Socials
