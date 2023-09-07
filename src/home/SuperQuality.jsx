import { superQuality } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <div className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl capitalize font-bold lg:max-w-lg'>Reach
          <span className='text-main-yellow'> New LeaderShip </span>
           Heights
        </h2>
        <p className='mt-11 lg:max-w-lg info-text'>
          Không chỉ là anh văn truyền thống, đây là nơi cho các bé cải thiện khả năng giao tiếp 100% bằng ngoại ngữ và thúc đẩy tư duy phát triển qua từng bài học.
        </p>
        <div className="mt-11">
          <Button label="Đăng ký ngay" />
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
  )
}

export default SuperQuality