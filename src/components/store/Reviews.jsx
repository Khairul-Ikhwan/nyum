import { calculateTimeElapsed } from "../../utility/calculateTimeElapsed";
import SectionBox from "../ui/SectionBox";

export default function Reviews({ reviews }) {
  return (
    <SectionBox>
      {reviews.map((review, reviewId) => (
        <div key={reviewId}>
          <p>{review.reviewText}</p>
          <p
            style={{
              fontSize: ".9rem",
              fontWeight: "300",
              fontStyle: "italic",
            }}
          >
            by {review.reviewer}
          </p>
          <p style={{ fontWeight: "100", fontSize: ".85rem" }}>
            {calculateTimeElapsed(review.reviewDate)}
          </p>
        </div>
      ))}
    </SectionBox>
  );
}
