'use client';
import { useState } from 'react';
import './globals.css';
import CountUp from 'react-countup';

export default function Home() {
  const [showResult, setShowResult] = useState(false);

  const summaryItems = [
    { name: 'Reaction', score: 80, icon: '/icon-reaction.svg', color: 'text-light-red', bgColor: 'bg-light-red/10' },
    { name: 'Memory', score: 92, icon: '/icon-memory.svg', color: 'text-orangey-yellow', bgColor: 'bg-orangey-yellow/10' },
    { name: 'Verbal', score: 61, icon: '/icon-verbal.svg', color: 'text-green-teal', bgColor: 'bg-green-teal/10' },
    { name: 'Visual', score: 72, icon: '/icon-visual.svg', color: 'text-cobalt-blue', bgColor: 'bg-cobalt-blue/10' },
  ]


  return (
    <div className='min-h-screen bg-pale-blue flex flex-col items-center justify-center md:p-4'>
      <div className="bg-white md:rounded-3xl shadow-lg overflow-hidden max-w-[375px] md:max-w-[768px] w-full flex flex-col md:flex-row">
        {/* Result */}
        <div className='bg-gradient-background text-white p-8 md:w-1/2 w-[375px] rounded-b-3xl md:rounded-3xl flex flex-col justify-center items-center text-center'>
          <h2 className='text-xl font-bold text-light-lavender mb-6'>Your Result</h2>
          <div className='bg-gradient-circle rounded-full w-40 h-40 flex flex-col items-center justify-center mb-6'>
            <span className='text-6xl font-extrabold'>
              <CountUp
                start={0}
                end={76}
                duration={2}
                separator=','
                onEnd={() => setShowResult(true)}
              />
            </span>
            <span className='text-light-lavender'>of 100</span>
          </div>
          <div className={`transition-all duration-1000 ease-in-out ${showResult ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h3 className='text-2xl font-bold mb-2'>Great</h3>
            <p className='text-[16px] font-extralight text-light-lavender px-7'>You scored higher than 65% of the people who have taken these tests.</p>
          </div>

        </div>
        {/* Summary */}
        <div className='p-8 md:w-1/2 w-[375px]'>
          <h2 className='text-2xl font-bold mb-6 text-dark-gray-blue'>Summary</h2>
          <div className='space-y-4'>
            {summaryItems.map((item) => (
              <div key={item.name} className={`flex items-center justify-between p-4 rounded-lg ${item.bgColor}`}>
                <div className='flex items-center'>
                  <img className='mr-2' src={item.icon} alt={item.name} />
                  <span className={`font-medium ${item.color}`}>{item.name}</span>
                </div>
                <div>
                  <CountUp
                    className='font-bold text-dark-gray-blue'
                    start={0}
                    end={item.score}
                    duration={2}
                    separator=','
                  />
                  <span className='text-light-lavender'> / 100</span>
                </div>
              </div>
            ))}
          </div>
          <button className='w-full bg-dark-gray-blue text-white rounded-full p-3 mt-6 text-[16px] font-medium hover:bg-gradient-background'>Continue</button>
        </div>
      </div>
      <footer className='text-sm text-center mt-4'>Challenge by Frontend Mentor. Coded by <a href='https://www.frontendmentor.io/profile/erath-rise' className='text-blue-500'>Lianne</a>.</footer>
    </div>
  );
}
