import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import Button from './Button';

const Header = () => {
  return (
    <header className='padding-x py-5 relative z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img 
                    src={headerLogo} 
                    alt="logo"
                    width={75}
                    height={75} 
                    className='rounded-full'
                />
            </a>
            <ul className='flex-1 flex justify-end gap-16 max-lg:hidden px-8'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a 
                            href={item.href}
                            className='font-montserrat leading-normal text-lg'
                        >
                            {item.label}                            
                        </a> 
                    </li>
                ))}
            </ul>
            <div className='flex max-lg:hidden'>
                <Button label="Nhận tư vấn lộ trình" />
            </div>
            <div className='hidden max-lg:block'>
                <img 
                    src={hamburger} 
                    alt="hamburger"
                    width={25}
                    height={25}
                />
            </div>
        </nav>
    </header>
  )
}

export default Header