import React from 'react';
import { Check } from 'lucide-react';

const   PricingCard = () => {
  const plans = [
    {
      id: 'Grind',
      image:'https://malaskagolf.com/cdn/shop/files/Core-Logo-min.png?v=1743809882&width=832',
      name: 'Grind',
      description: 'Designed for self-starters and recreational athletes who want structured progress without premium coaching.',
      yearlyPrice: 99,
      yearlyOriginal: 119,
      yearlySavings: 20,
      monthlyPrice: 9.99,
      videoCount: '750+',
      features: [
        'Categorized Drill Library (faults, mobilizations, correctives, shot types)',
        'Basic Custom Program Builder (4–6 weeks)',
        'Forum & Community Challenges (basic level)',
        'Records Tracking (PRs, achievements)',
        'Supplement Library (read-only)',
        'Routine Builder (basic, no reminders)',
        'Gear Shop + Direct EPUB Sales'
      ],
      bgColor: '#7FB7FD',
      borderColor: '#235E92',
      textColor: 'text-blue-900'
    },
    {
      id: 'Rise',
      image:'https://malaskagolf.com/cdn/shop/files/Plus-Logo-min.png?v=1743809883&width=832',
      name: 'RISE',
      description: 'Adds personalization, early coach feedback, and accountability — perfect for athletes progressing beyond fundamentals.',
      yearlyPrice: 299,
      yearlyOriginal: 359,
      yearlySavings: 60,
      monthlyPrice: 29.99,
      videoCount: '1250+',
      features: [
        'Expanded Program Builder (up to 12 weeks, customizable)',
        'Client Screening & AI-Assisted Plan (movement + draft programming',
        'Scheduling & Lesson Booking (access to online coaching slots)',
        'Video Analysis (limited: 1 complimentary swing analysis per quarter)',
        'Nutrition Tracking (log food & hydration, coach-monitored)',
        'Supplement Builder (full version with reminders)',
        'Advanced Community Challenges (leaderboards, competitions)',
        'Quick Fix Fridays'
      ],
bgColor: '#F4BB33',
           borderColor: '#F2AE0D',

      textColor: 'text-yellow-900',
      popular: true
    },
    {
      id: 'Defy',
      image:'https://malaskagolf.com/cdn/shop/files/Elite-Logo-min.png?v=1743809883&width=832',
      name: 'ELITE',
      description: 'Break limits. Own your performance.',
      yearlyPrice: 349,
      yearlyOriginal: 499,
      yearlySavings: 150,
      monthlyPrice: 49.99,
      videoCount: '1,500+',
      features: [
        'Everything in Rise PLUS +',
        'Video Analysis (4 analyses per quarter, side-by-side comparisons)',
        'Remote Lesson Access (2 complimentary 30-min lessons per year)',
        'Swing Analysis Reviews (quarterly, 4 per year)',
        'Priority Scheduling (preferred time slots for lessons)',
        'Coach Reports (written reviews each season)',
        'Early Access Features (TrackMan/Data integration once live)',
      ],
      bgColor: '#A0A5A8',
           borderColor: '#687681',
      textColor: 'text-gray-900',
      notes: [
        '*Discount on First Year Only',
        '**Coming this Summer'
      ]
    }
  ];

  return (
    <div className=" lg:w-[80%] w-full mx-auto py-16 px-4">
      <div className="max-w-7xl h-fit mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
               style={{ borderColor: plan.borderColor }}
              className={`relative rounded-3xl overflow-hidden h-fit ${plan.borderColor} border-8  shadow-xl transform transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'ring-4 ring-yellow-300' : ''
              }`}
            >
                  <div 
                    style={{ backgroundColor: plan.bgColor }}
                  className={`py-4 px-2 overflow-hidden`}>
                        <img className='' src={plan.image} alt="" />
                  </div>

              {/* Header Section */}
              <div className="text-start mb-6">
                <div className={` rounded-lg py-4 px-4 mb-6`}>
                  <p className={`${plan.textColor} text-sm leading-relaxed mb-4`}>
                    {plan.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-5xl font-black text-gray-800">
                      ${plan.yearlyPrice}
                    </span>
                    <span className="text-xl text-gray-700 ml-1">/year</span>
                  </div>
                  <div className='flex items-center justify-center flex-col'>
                  <div className=" text-red-500  text-center text-3xl px-4 py-2 rounded-lg  mb-2">
                    <span className="font-bold   text-center">[SAVE ${plan.yearlySavings}]</span>
                  </div>
                  
                        
                  <div className="text-red-500 text-md font-bold mb-4">
                    WITH ANNUAL MEMBERSHIP
                  </div>
<div className={`  py-3 text-3xl font-bold  w-[90%] mx-auto text-center rounded-2xl ${plan.bgColor}`}>
      <button>Subscribe</button>
</div>
                  <div className="text-3xl font-bold mt-4 text-gray-800">
                    ${plan.monthlyPrice}<span className="text-lg">/month</span>
                  </div>
                  <div className={`mt-4  py-3 text-3xl font-bold  w-[90%] mx-auto text-center rounded-2xl ${plan.bgColor}`}>
      <button>Subscribe</button>
</div>
                </div>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center px-12">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-800 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Video Count */}
              <div className="text-center">
                <div className=" text-black lg:text-xl py-3 px-6 rounded-lg font-bold text-lg">
                  OVER {plan.videoCount} VIDEOS
                </div>
              </div>

              {/* Notes for Elite plan */}
              {plan.notes && (
                <div className="mt-4 px-12 text-md text-gray-700 space-y-1">
                  {plan.notes.map((note, noteIndex) => (
                    <div key={noteIndex}>{note}</div>
                  ))}
                </div>
              )}


                  </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default PricingCard;