import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
  centered = true,
  className
}) => {
  return (
    <div className={cn(
      'space-y-4',
      centered && 'text-center',
      className
    )}>
      {subtitle && (
        <div className="tagline text-primary-500 tracking-widest uppercase text-sm font-medium">
          {subtitle}
        </div>
      )}
      <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;