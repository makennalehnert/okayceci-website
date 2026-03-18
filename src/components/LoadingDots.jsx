

export default function LoadingDots() {
  return (
    <span className="inline-flex items-baseline gap-1 ml-1">
      <p className="text-xl font-barlow font-bold">Coming Soon</p>  
      <span className="text-xl font-bold font-barlow animate-pulse">.</span>
      <span className="text-xl font-bold font-barlow animate-pulse [animation-delay:0.2s]">.</span>
      <span className="text-xl font-bold font-barlow animate-pulse [animation-delay:0.4s]">.</span>
    </span>
  );
}