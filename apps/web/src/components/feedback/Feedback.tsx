import {feedbacks} from '@/apis/feedbacks';
import { useState } from 'react';
import FeedbackCard from './FeedbackCard';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Feedback() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPreviousFeedback = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1));
    };
  
    const goToNextFeedback = () => {
      setCurrentIndex((prevIndex) => (prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1));
    };
  return (
    <div className="feedback-carousel w-5/6 m-auto bg-white flex flex-col justify-center text-center  mt-20">
    <div className="feedback w-4/6 m-auto mt-10 transition duration-500">
      <FeedbackCard name={feedbacks[currentIndex].name} feedback={feedbacks[currentIndex].feedback}/>
    </div>
    <div className="flex gap-3 justify-center mt-7">
      <Button onClick={goToPreviousFeedback}><ChevronLeft /></Button>
      <Button onClick={goToNextFeedback}><ChevronRight /></Button>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-4 mt-6'>
        {feedbacks.map((feedback, index) => (
            <div key={index}>
                <img src={feedback.img}/>
            </div>
        ))}
    </div>
  </div>
  )
}
