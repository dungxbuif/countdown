import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export function getNextNewYear(): Date {
   const now = new Date();
   const currentYear = now.getFullYear();
   return new Date(`${currentYear + 1}-01-01T00:00:00`);
}
