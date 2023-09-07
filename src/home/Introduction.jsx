import { superQuality } from "../assets/images";
import { background } from "../constants";
import { star } from "../assets/images";


const Introduction = () => {
  return (
    <div className='max-container'>

      <div className="flex flex-col items-center">
          <h3 className="text-xl text-center font-bold bg-main-yellow text-main-brown">GIỚI THIỆU</h3>
          <h2 className='text-4xl text-center capitalize font-bold lg:max-w-lg text-main-brown mt-5'>Cô Hằng (Ms. Panda)</h2>
      </div>

      <div className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container mt-10'>
        <div className='flex flex-1 flex-col'>
            <div className="lg:max-w-lg">
                <p className='info-text'>
                    Cô Hằng có hơn 10 năm kinh nghiệm giảng dạy các lớp anh văn Tiểu học - THCS - THPT, luyện thi vào lớp 10 - Đại học, luyện thi các chứng chỉ Tiếng anh quốc tế như:  Cambridge (Starters, Movers, Flyers), TOEIC, IELTS.
                </p>
                <p className='mt-2 info-text'>
                    Cô thường xuyên được nhà trường cử đi tham gia Hội giảng Nhà giáo giáo dục Nghề nghiệp các cấp và đạt được nhiều thành tích xuất sắc.
                </p>
            </div>
            <div className="flex flex-col gap-5 mt-10">
                {background.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2">         
                        <p className="font-montserrat text-xl text-main-brown font-medium">{item.title}</p>
                        <p className="font-montserrat text-slate-gray text-sm leading-7 mt-1">{item.subTitle}</p>
                    </div>
                ))}
            </div>  
        </div>

        <div className="flex-1 flex justify-center items-center">
          <img 
            src={superQuality}
            alt="Reach New LeaderShip Heights"
            width={570}
            height={522} 
            className="object-contain"
          />
        </div>    
      </div>
      
    </div> 
  )
}

export default Introduction;
