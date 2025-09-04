import React from 'react';
import { Check } from 'lucide-react';

const   PricingCard = () => {
  const plans = [
    {
      id: 'core',
      image:'https://malaskagolf.com/cdn/shop/files/Core-Logo-min.png?v=1743809882&width=832',
      name: 'CORE',
      description: 'Master the basics and start owning your swing. CORE gives you a clear, simple introduction to the M-System(Lite). Perfect for building confidence and momentum.',
      yearlyPrice: 99,
      yearlyOriginal: 119,
      yearlySavings: 20,
      monthlyPrice: 9.99,
      videoCount: '750+',
      features: [
        'M-System (Lite)',
        'Ask Malaska Golf Q&A',
        'Drill Center',
        'I Feel Your Pain',
        'Player Lessons',
        'Fitness and Health',
        'Golf Talk'
      ],
      bgColor: '#7FB7FD',
      borderColor: '#235E92',
      textColor: 'text-blue-900'
    },
    {
      id: 'plus',
      image:'https://malaskagolf.com/cdn/shop/files/Plus-Logo-min.png?v=1743809883&width=832',
      name: 'PLUS',
      description: 'Maximize your improvement with deeper M-System access, weekly content, and targeted skill development. PLUS is built for golfers ready to elevate their game.',
      yearlyPrice: 299,
      yearlyOriginal: 359,
      yearlySavings: 60,
      monthlyPrice: 29.99,
      videoCount: '1250+',
      features: [
        'Everything in CORE +',
        'Full M-System access',
        'Skill Pathways',
        'Sports Connect',
        'Invisible Swing',
        'Tech Talk',
        'Mulligan Mondays',
        'Quick Fix Fridays'
      ],
bgColor: '#F4BB33',
           borderColor: '#F2AE0D',

      textColor: 'text-yellow-900',
      popular: true
    },
    {
      id: 'elite',
      image:'https://malaskagolf.com/cdn/shop/files/Elite-Logo-min.png?v=1743809883&width=832',
      name: 'ELITE',
      description: 'Maintain your edge with full access to every lesson, advanced programs, and exclusive content. ELITE gives you everything you need to master your swing and own your game-now and for years to come.',
      yearlyPrice: 349,
      yearlyOriginal: 499,
      yearlySavings: 150,
      monthlyPrice: 49.99,
      videoCount: '1,500+',
      features: [
        'Everything in PLUS +',
        'M-System MAX',
        'M-System Coaching Series',
        'Mental Game',
        'Golf Challenge',
        'Jack Nicklaus Interview**',
        'Director of Distance with Justin James',
        '21 Days to a Better Golf Swing**',
        'Swing Check Analysis (Add On Purchase)'
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
                    <span className="text-xl text-gray-700 ml-1">/YR</span>
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
                    ${plan.monthlyPrice}<span className="text-lg">/mo</span>
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