import { courses } from "../constants";

import CourseCard from "../components/CourseCard";


const Courses = () => {
  return (
    <div className="max-container max-sm:mt-12">
      <div className="flex flex-col items-center">
          <h3 className="text-xl text-center font-bold bg-main-yellow text-main-brown">CÁC KHÓA HỌC</h3>
          <h2 className='text-4xl text-center capitalize font-bold text-main-brown mt-5'>Tiếng anh các cấp và Luyện thi chứng chỉ</h2>
      </div>

      <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {courses.map((course) => (
          <CourseCard 
            key={course.name} {...course}
          />
        ))}
      </div>
    </div>
  )
}

export default Courses