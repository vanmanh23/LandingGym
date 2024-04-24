import React from 'react'
import BenefitCard from './_components/BenefitCard'
import workout from '../../assets/images/our-service/equipment.png'
import betterservice from '../../assets/images/our-service/betterservice.png'
import lifestyle from '../../assets/images/our-service/lifestyle.png'

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
export default function Component() {
  return (
    <div className='flex flex-row justify-between w-10/12 m-auto'>
      {
        membershipbenefits.map((item, index) => (
          <div key={index}>
            <BenefitCard  title={item.title} icon={item.icon} content={item.Content} description={item.description} />
          </div>
        ))
      }
    </div>
  )
}
