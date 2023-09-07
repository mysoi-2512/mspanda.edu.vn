import { points } from "../constants";
import PointCard from "../components/PointCard";

const Points = () => {
  return (
    <div className="max-container flex justify-center flex-wrap gap-9 mt-12">
      <div className="flex flex-col items-center">
          <h3 className="text-xl text-center font-bold bg-main-yellow text-main-brown">ĐIỂM KHÁC BIỆT</h3>
          <h2 className='text-4xl text-center capitalize font-bold text-main-brown mt-5'>Chỉ có tại lớp anh văn Cô Hằng</h2>
      </div>

      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 mt-10">
        {points.map((point, index) => (
          <PointCard key={index} {...point} />
        ))}
      </div>
    </div>
  )
}

export default Points