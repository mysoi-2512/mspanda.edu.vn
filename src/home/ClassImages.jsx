import { classImages  } from "../constants"

const ClassImages = () => {
  return (
    <div className="max-container max-sm:mt-10">
      <div className="flex flex-col items-center">
        <h3 className="text-xl text-center font-bold bg-main-yellow text-main-brown">HÌNH ẢNH LỚP HỌC</h3>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {classImages.map((image, index) => (
          <img 
            src={image.imgURL} 
            alt={image.alt} 
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default ClassImages;