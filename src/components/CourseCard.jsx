const CourseCard = ({ imgURL, name, link }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full border-4 border-main-brown rounded-[10px]">
        <img 
            src={imgURL} 
            alt={name} 
            onClick={() => window.open(link)}
            className="object-cover cursor-pointer"
        />
    </div>
  )
}

export default CourseCard