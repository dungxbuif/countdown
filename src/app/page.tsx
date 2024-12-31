'use client';

import { useState, useEffect } from 'react';

import { FireworkAnimation } from '@/components/FireworkAnimation';
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';
import { Countdown } from '@/components/Countdown';

export default function Home() {
   const [isFireworkActive, setIsFireworkActive] = useState(false);

   useEffect(() => {
      console.log('isFireworkActive:', isFireworkActive);
   }, [isFireworkActive]);

   const handleCountdownEnd = () => {
      setIsFireworkActive(true);
   };

   return (
      <div className="min-h-screen bg-background">
         {/* <button
            onClick={() => setIsFireworkActive(true)}
            className="absolute top-4 right-4 px-4 py-2 bg-primary text-primary-foreground rounded-md z-50 hover:bg-primary/90 transition-colors"
         >
            Start Fireworks
         </button> */}
         {isFireworkActive ? (
            <FireworkAnimation />
         ) : (
            <div className="flex items-center justify-center p-4 h-screen">
               <Card className="w-full max-w-3xl">
                  <CardHeader>
                     <CardTitle className="text-3xl text-center">
                        Countdown to New Year {new Date().getFullYear() + 1}
                     </CardTitle>
                     <CardDescription className="text-center">
                        Time remaining until we welcome{' '}
                        {new Date().getFullYear() + 1}!
                     </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                     <Countdown onCountdownEnd={handleCountdownEnd} />
                  </CardContent>
               </Card>
            </div>
         )}
      </div>
   );
}
