import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <div className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">        
        <span className="text-main-yellow">Feedback </span>
        của Ms.Panda
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Cùng lắng nghe những cảm nhận của học viên khi học cùng Ms. Panda và các thành tích các bạn ấy đã đạt được nhé!</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard 
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>

    </div>
  )
}

export default CustomerReviews