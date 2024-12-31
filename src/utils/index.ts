export function calculateTimeDifference(targetDate: Date): {
   days: number;
   hours: number;
   minutes: number;
   seconds: number;
} {
   const now = new Date();
   const difference = targetDate.getTime() - now.getTime();

   const days = Math.floor(difference / (1000 * 60 * 60 * 24));
   const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
   );
   const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((difference % (1000 * 60)) / 1000);

   return { days, hours, minutes, seconds };
}
