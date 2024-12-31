'use client';

import { getNextNewYear } from '@/lib/utils';
import { calculateTimeDifference } from '@/utils';
import { useState, useEffect } from 'react';

interface CountdownProps {
   targetDate?: Date;
   onCountdownEnd: () => void;
}

export function Countdown({
   targetDate = getNextNewYear(),
   onCountdownEnd,
}: CountdownProps) {
   const [timeLeft, setTimeLeft] = useState(
      calculateTimeDifference(targetDate)
   );

   useEffect(() => {
      const timer = setInterval(() => {
         const newTimeLeft = calculateTimeDifference(targetDate);
         setTimeLeft(newTimeLeft);

         if (
            newTimeLeft.days === 0 &&
            newTimeLeft.hours === 0 &&
            newTimeLeft.minutes === 0 &&
            newTimeLeft.seconds === 0
         ) {
            onCountdownEnd();
            clearInterval(timer);
         }
      }, 1000);

      return () => clearInterval(timer);
   }, [targetDate, onCountdownEnd]);

   return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
         {Object.entries(timeLeft).map(([unit, value]) => (
            <div
               key={unit}
               className="bg-primary text-primary-foreground rounded-lg p-4"
            >
               <div className="text-4xl font-bold">{value}</div>
               <div className="text-sm capitalize">{unit}</div>
            </div>
         ))}
      </div>
   );
}
