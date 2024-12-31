'use client';

export function FireworkAnimation() {
   // const containerRef = useRef(null);

   // useEffect(() => {
   //    const container = containerRef.current;
   //    console.log('FireworkAnimation mounted');
   //    console.log('Container:', container);
   //    console.log('Window dimensions:', window.innerWidth, window.innerHeight);

   //    if (!container) return;

   //    const options = {
   //       rocketsPoint: 50,
   //       hue: { min: 0, max: 360 },
   //       delay: { min: 15, max: 30 },
   //       speed: 2,
   //       acceleration: 1.05,
   //       friction: 0.98,
   //       gravity: 1.5,
   //       particles: 50,
   //       trace: 3,
   //       explosion: 5,
   //       autoresize: true,
   //       brightness: { min: 50, max: 80 },
   //       decay: { min: 0.015, max: 0.03 },
   //       mouse: { click: false, move: false, max: 1 },
   //       boundaries: {
   //          x: 0,
   //          y: 0,
   //          width: window.innerWidth,
   //          height: window.innerHeight,
   //       },
   //       sound: { enable: false },
   //    };

   //    console.log('Initializing fireworks with options:', options);
   //    const fireworks = new Fireworks(container, options);
   //    fireworks.start();

   //    return () => {
   //       console.log('FireworkAnimation unmounted');
   //       fireworks.stop();
   //    };
   // }, []);

   return (
      <div className="fixed inset-0 bg-black bg-opacity-70 z-50">
         {/* <div ref={containerRef} style={{ width: '100%', height: '100%' }} /> */}
         <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-6xl font-bold text-white animate-pulse">
               Happy New Year {new Date().getFullYear() + 1}!
            </h2>
         </div>
      </div>
   );
}
