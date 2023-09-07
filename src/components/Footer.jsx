import { copyrightSign } from "../assets/icons"
import { headerLogo } from "../assets/images"
import { contact, footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="bg-main-brown padding-x padding-t pb-8">
      <div className="flex justify-between items-start gap-10 flex-wrap max-lg:flex-col max-container">
        <div className="flex flex-col items-start">
          <a href="/">
            <img 
              src={headerLogo} 
              alt="footer"
              width={40}
              height={40} 
              className="object-contain rounded-full"
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Ms. Panda English Class - Chuyên Tiếng anh các cấp, ôn thi lớp 10 - Đại học, luyện thi chứng chỉ Tiếng Anh quốc tế và Tiếng anh giao tiếp</p>
          <div className="flex flex-col mt-6"> 
            <ul>
              {contact.map((item, index) => (
                <li key={index}>
                  <p className="text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">{item.title}: {item.subTitle}</p>
                </li>
              ))}
            </ul>            
          </div>
        </div>
        

        {footerLinks.map((section, index) => (
          <div className="flex flex-col items-start">
            <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
            <ul>
              {section.links.map((item, index) => (
                <li 
                  className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                  key={index}
                >
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}


        <div className="flex flex-col items-start">
          <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">Liên hệ</h4>
          <div className="flex items-center gap-5">
            {socialMedia.map((icon, index) => (
              <div 
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer" 
                key={index}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                  onClick={() => window.open(icon.link)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-container flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img 
              src={copyrightSign} 
              alt="copy right sign"
              width={20}
              height={20}
              className="rounded-full m-0"              
            />
            <p>Copyright. All rights reserved.</p>
          </div>
          <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer