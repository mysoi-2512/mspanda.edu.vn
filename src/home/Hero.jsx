import { heroBanner } from "../assets/images";

const Hero = () => {
  return (
    <div className="w-full">
      <img 
        src={heroBanner} 
        alt="hero banner" 
        className="object-contain"
      />
    </div>
  )
}

export default Hero