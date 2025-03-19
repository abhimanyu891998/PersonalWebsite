interface CustomIconProps {
  name: string;
  className?: string;
}

export function CustomIcon({ name, className = "h-5 w-5" }: CustomIconProps) {
  return (
    <img 
      src={`/icons/${name}.svg`} 
      alt={`${name} icon`} 
      className={className} 
    />
  );
} 