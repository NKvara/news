import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram
} from "react-icons/ai";
const Footer = () => {
  const links = [
    {
      title: "Jerremy",
      children: [
        {name: "pablo", link: "/"},
        {name: "pablo", link: "/"},
        {name: "pablo", link: "/"},
        {name: "pablo", link: "/"},
        {name: "pablo", link: "/"}
      ]
    },
    {
      title: "Jerremy",
      children: [
        {name: "pablo", link: "/"},
        {name: "pablo", link: "/"},
        {name: "pablo", link: "/"},
        {name: "pablo", link: "/"},
        {name: "pablo", link: "/"}
      ]
    },
    {
      title: "Jerremy",
      children: [
        {name: "pablo", link: "/"},
        {name: "pablo", link: "/"},
        {name: "pablo", link: "/"},
        {name: "pablo", link: "/"},
        {name: "pablo", link: "/"}
      ]
    },
    {
      title: "Jerremy",
      children: [
        {name: "pablo", link: "/"},
        {name: "pablo", link: "/"},
        {name: "pablo", link: "/"},
        {name: "pablo", link: "/"},
        {name: "pablo", link: "/"}
      ]
    }
  ];

  const socials = [
    <AiFillFacebook color="#1E88E5" />,
    <AiFillTwitterSquare color="#1E88E5" />,
    <AiFillInstagram color="#1E88E5" />,
    <AiFillLinkedin color="#1E88E5" />
  ];

  return (
    <div className="flex w-full justify-center p-24">
      <div className="flex flex-row justify-between w-full max-w-[80rem] gap-36">
        <div className="flex flex-col">
          <div className="flex flex-col gap-4 h-full">
            <p className="text-blue-600 font-bold text-4xl">Vertex</p>
            <p>Freshest news coming at you. Dont blink, might miss one.</p>
            <div className="flex flex-row gap-4">
              {socials.map((o) => (
                <div className="flex justify-center items-center h-8 w-8 rounded-full shadow-lg shadow-gray-300">
                  <>{o}</>
                </div>
              ))}
            </div>
            <div className="flex flex-col h-full justify-end">
              <p className="text-gray-600">Copyright © 2023</p>
            </div>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-4 gap-4 w-full tracking-wide">
          {links.map((o) => (
            <div className="flex flex-col gap-2" key={o.title}>
              <p className="font-semibold text-3xl">{o.title}</p>
              <div className="flex flex-col gap-2">
                {o.children.map((child) => (
                  <p className="text-gray-600">{child.name}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
