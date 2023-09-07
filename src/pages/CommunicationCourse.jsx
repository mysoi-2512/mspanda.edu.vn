import { Communication } from "../constants";
import RegisterForm from "../components/RegisterForm";
import OtherCourses from "../components/OtherCourses";

const CommunicationCourse = () => {
  return (
    <div className="relative max-container padding">
        <div className="flex flex-col items-center">
            <h3 className="text-xl text-center font-bold bg-main-yellow text-main-brown">{Communication.category}</h3>
            <h2 className='text-4xl text-center capitalize font-bold lg:max-w-lg text-main-brown mt-5'>{Communication.name}</h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 mt-20 mb-20 gap-5 justify-center px-10">
            {Communication.object.map((item, index) => (
                <div className="px-10" key={index}>
                    <p className="font-montserrat text-slate-gray text-sm leading-7">{item.title}</p>
                    <p className="font-montserrat text-xl text-main-brown font-medium mt-1">{item.subTitle}</p>
                </div>
            ))}
        </div>
        <div className="flex justify-between items-center max-lg:flex-col gap-5 px-20 max-lg:px-5">
            <div className="flex-1">
                <p className="font-montserrat text-2xl text-main-brown font-bold mt-1 mb-1">Thông tin khóa học</p>
                {Communication.info.map((item, index) => (
                    <ul className="marker:text-main-brown list-disc px-5 mt-5">
                        <li key={index}>
                            <p className="font-montserrat text-slate-gray text-base leading-7">{item.title}</p>
                        </li>
                    </ul>
                ))}
            </div>
            <div className="flex-1">
                <p className="font-montserrat text-2xl text-main-brown font-bold mt-1 mb-1">Lộ trình học tập</p>
                {Communication.path.map((item, index) => (
                    <ul className="marker:text-main-brown list-disc px-5 mt-5">
                        <li key={index}>
                            <p className="font-montserrat text-xl text-main-brown font-medium mt-1">{item.title}</p>
                            <p className="font-montserrat text-slate-gray text-sm leading-7 mt-1">{item.subTitle}</p>                            
                        </li>
                    </ul>
                ))}
            </div>            
        </div>
        <div className="w-full mt-20 mb-20 ">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
                {Communication.images.map((image, index) => (
                    <img 
                        src={image.imgURL} 
                        alt={image.alt} 
                        key={index}
                    />
                ))}
            </div>
        </div>

        <RegisterForm />
        
        <div className=" mt-20 mb-20">
            <div className="flex flex-col justify-between items-center">
                <h3 className="text-xl text-center font-bold bg-main-yellow text-main-brown">XEM THÊM CÁC KHÓA HỌC KHÁC</h3>
            </div>
            <OtherCourses courseName="Tiếng anh giao tiếp"/>
        </div>        
    </div>
  )
}

export default CommunicationCourse;
