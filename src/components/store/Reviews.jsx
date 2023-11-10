import { calculateTimeElapsed } from "../../utility/calculateTimeElapsed";
import SectionBox from "../ui/SectionBox";

export default function Reviews({ reviews }) {
  return (
    <SectionBox>
      {reviews.map((review, reviewId) => (
        <div key={reviewId}>
          <p>{review.reviewText}</p>
          <p>by {review.reviewer}</p>
          <p>{calculateTimeElapsed(review.reviewDate)}</p>
        </div>
      ))}
    </SectionBox>
  );
}
