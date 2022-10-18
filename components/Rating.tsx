interface RatingProps {
  rating: number;
}

export const Rating = ({ rating }: RatingProps) => {
  return <div className="px-4 text-lg text-blue-500 font-bold">{rating}</div>;
};