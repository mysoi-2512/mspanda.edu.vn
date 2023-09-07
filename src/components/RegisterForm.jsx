import Button from '../components/Button';
import { courses, contact } from '../constants';

const RegisterForm = () => {
  return (
    <div className='max-container'>
        <div className="flex flex-col items-center">
          <h3 className="text-xl text-center font-bold bg-main-yellow text-main-brown">ĐĂNG KÝ NGAY</h3>
          <h2 className='text-4xl text-center capitalize font-bold text-main-brown mt-5'>Nhận tư vấn miễn phí về lộ trình khóa học</h2>
        </div>

        <div className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container mt-16">
            <div className="flex flex-1 flex-col justify-center gap-10">
                {contact.map((item, index) => (
                    <div className="" key={index}>
                        <p className="font-montserrat text-slate-gray text-base font-semibold leading-7">{item.title}</p>
                        <p className="text-2xl text-main-brown font-medium mt-3">{item.subTitle}</p>
                        <p className="font-montserrat text-slate-gray text-base leading-7 mt-3">{item.note}</p>
                    </div>
                ))}
            </div>

            <div className='flex flex-1 flex-col bg-pale-blue px-12 py-12'>
                <form className='flex flex-col w-full'>
                    <label id='name' className='info-text'>Họ và tên
                        <input 
                            id='name'
                            type="text"
                            placeholder='Nguyễn Văn A'
                            className='w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-grey mt-2' 
                        />
                    </label>
                    <label id='phone' className='mt-5 info-text'>Số điện thoại
                        <input 
                            id='phone'
                            type="text"
                            placeholder='xxxx.xxx.xxx'
                            className='w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-grey mt-2'
                        />
                    </label>
                    <label id='email' className='mt-5 info-text'>Email
                        <input 
                        id='email'
                        type="text"
                        placeholder='abc@gmail.com'
                        className='w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-grey mt-2'
                        />
                    </label>
                    <label id='course' className='mt-5 info-text'>Chọn chương trình học
                        <select name="course" id="course" className='w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-grey mt-2'>
                        {courses.map((course, index) => (
                            <option 
                                key={index} 
                                value={course.name}
                            >
                                {course.name}
                            </option>
                        ))}
                        </select>
                    </label>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button 
                            label="Đăng ký ngay" 
                        />
                    </div>          
                </form>
            </div>
        </div>
    </div>
  )
}

export default RegisterForm;
