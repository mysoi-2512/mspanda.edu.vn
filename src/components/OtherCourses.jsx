import { courses } from "../constants";

const OtherCourses = ({ courseName }) => {
  return (
    <div>
        <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
            {courses.filter(course => course.name != courseName)
                .map((course) => (
                    <div className="flex flex-1 flex-col w-full max-sm:w-full border-4 border-main-brown rounded-[10px]">
                        <img 
                            src={course.imgURL} 
                            alt={course.name} 
                            onClick={() => window.open(course.link)}
                            className="object-cover cursor-pointer"
                        />
                    </div>
                ))
            }
      </div>
    </div>
  )
}

export default OtherCourses;
