import { Button } from '@/components/ui/button'
import { CheckCircledIcon } from '@radix-ui/react-icons'
import React from 'react'

const SubscriptionCard = ({value}) => {
  return (
 
      <div className='rounded-xl bg-[#1b1b1b] bg-opacity-20 shadow-[#14173b] shadow-2xl card p-5 space-y-5 w-[18rem]'>
            <p>{value.planName}</p>
            <p>
                <span className='text-xl font-semibold'>{value.price}</span>
                <span>{value.planType}</span>
            </p>
            {value.planType=="ANNUAL"&&<p className='text-green-500'>30% off</p>}
            <Button className="w-full">
                {value.buttonName}
            </Button>
            <div>
            {value.features.map((item)=><div key={item} className='flex items-center gap-1 '>
                <CheckCircledIcon/>
                <p>{item}</p>
            </div>)}
            </div>
      </div>
 
  )
}

export default SubscriptionCard
