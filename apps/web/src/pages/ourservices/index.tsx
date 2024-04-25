import React from 'react'
import BenefitCard from './_components/BenefitCard'
import workout from '../../assets/images/our-service/equipment.png'
import betterservice from '../../assets/images/our-service/betterservice.png'
import lifestyle from '../../assets/images/our-service/lifestyle.png'
import explore from "../../assets/images/explore.jpeg";
import { Button } from "@/components/ui/button";
import ComboPlanCard from './_components/ComboPlanCard'
import SectionPlanCard from './_components/SectionPlanCard'
const membershipbenefits = [
  {
    id: 1,
    title: 'BETTER EQUIPMENT',
    icon: workout,
    Content: 'WORKOUT SMARTER',
    description: 'Maintained equipment that is updated as needed! Recent Purchases include: two assult bikes, two stair masters, Kabuka Transformer Bar and Hack Squat.'
  },
  {
    id: 2,
    title: 'BETTER SERVICES',
    icon: betterservice,
    Content: '24/7 ACCESS',
    description: 'Every Membership includes So Fit Gym Rewards, 1 Complimentary yoga or team training session, and fitness evaluation with a complimentary training session.'
  },
  {
    id: 3,
    title: 'LIFESTYLE CHANGES',
    icon: lifestyle,
    Content: 'OUR PROGRAMS YOUR RESULTS!',
    description: '20% of your life should be fitness. Fitness changes your body, how you feel, your energy levels. It makes you a better person. Let us help you become the best version of yourself!'

  }
]
// 
const ComboPlanOptions = [
  {
      id: 1,
      title: "basic Plan",
      benefit: "Club Access 24/7, 365 days a year!",
      contents: [
          {
              id: 1,
              content: "Unlimited access to Strength & Cardio Equipment, indoor & outdoor"
          },
          {
              id: 2,
              content: "Complimentary WIFI"
          },
          {
              id: 3,
              content: "Complimentary Fitness Evaluation every 45 days! "
          },
          {
              id: 4,
              content: "1 Complimentary Yoga session"
          },
          {
              id: 5,
              content: "1 Free Personal Training session"
          },
          {
              id: 6,
              content: "1 Hi Tense Functional Fitness Class"
          },
      ],
  },
  {
      id: 2,
      title: "Personal Training",
      benefit: "Work with our trainers.",
      contents: [
          {
              id: 1,
              content: "Want to become the best version of you but do know where to start?"
          },
          {
              id: 2,
              content: "New Personal Best?  We can get you there!"
          },
          {
              id: 3,
              content: "Weight Loss"
          },
          {
              id: 4,
              content: "Injury Prevention"
          },
          {
              id: 5,
              content: "Previous Injury – We can show you how to restore your back to your optimal movement mechanics"
          },
          {
              id: 6,
              content: "Great tips for effective workouts"
          },
      ],
  }
]
// 
const PlansSections = [
  {
    id: 1,
    planName: "12 Months Pre-Paid",
    content: "Access to So Fit Gym for a full year. Pre-pay and save!",
    price: "",
  },
  {
    id: 2,
    planName: "Month to Month",
    content: "Access to So Fit Gym on a month to month basis.",
    price: "47.99",
  },
  {
    id: 3,
    planName: "Month to Month Family of 2",
    content: "Access to So Fit Gym on a month-to-month basis.",
    price: "72.99",
  },
  {
    id: 4,
    planName: "One Month",
    content: "Access to So Fit Gym for one month.",
    price: "50.00",
  },
  {
    id: 5,
    planName: "One Day Pass",
    content: "Access to So Fit Gym for one day.",
    price: "15.00",
  },
  {
    id: 6,
    planName: "10 Class Pass",
    content: "Access to 10 So Fit Gym classes.",
    price: "50.00",
  }
];
export default function Component() {
  return (
    <div>
    <div className='flex md:flex-row flex-col justify-between w-10/12 m-auto'>
      {
        membershipbenefits.map((item, index) => (
          <div key={index}>
            <BenefitCard  title={item.title} icon={item.icon} content={item.Content} description={item.description} />
          </div>
        ))
      }
    </div>
    
    <div className="flex flex-col items-center mt-7">
          <div className="mb-5">
            <h3 className="flex text-4xl font-bold text-fourth uppercase z-50">
              <span className="z-20 mr-2 after:content-[''] after:-z-10 after:block after:relative after:-top-4 after:h-4 after:w-full after:bg-gradient-to-r after:from-thirdary after:to-secondary">new</span> this month</h3>
          </div>
          <div>
            <img src={explore} alt="explore" />
          </div>
          <div className='mt-5'>
            <Button className='text-base uppercase py-6 px-8'>buy now</Button>
          </div>
        </div>
        <div className='mt-10'>
        <div className='mb-7'><p className='flex justify-center text-4xl text-center font-bold uppercase text-fourth'>
          <span className='z-20 mr-3 after:-z-10 after:content-[""] after:block after:relative after:-top-4 after:h-4 after:w-full after:bg-gradient-to-r after:from-thirdary after:to-secondary'>fitness</span> plan</p></div>
        <div className='flex md:flex-row flex-col items-center justify-center gap-6 m-auto '>
          {
            ComboPlanOptions.map((item, index) => (
              <ComboPlanCard key={index} title={item.title} benefit={item.benefit} contents={item.contents} />
            ))
          }
        </div>
        </div>
        <div className='flex md:flex-row flex-col items-center flex-wrap justify-center m-auto gap-11 mt-10 mb-24'>
          {
            PlansSections.map((item, index) => (
              <SectionPlanCard key={index} planName={item.planName} content={item.content} price={item.price} />
            ))
          }
        </div>
    </div>
  )
}
