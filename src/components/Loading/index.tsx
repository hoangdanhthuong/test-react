interface LoadingProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({ width = "100%", height = "100%", className = "" }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="h-[304px] bg-dark-500/60 rounded-md" style={{ height, width }}></div>
    </div>
  );
};

export default Loading;
