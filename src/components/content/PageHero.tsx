/**
 * PageHero Component
 * Server-side hero section for page headers
 */

import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  variant?: 'gradient' | 'solid';
  className?: string;
}

export default function PageHero({
  title,
  subtitle,
  description,
  variant = 'gradient',
  className,
}: PageHeroProps) {
  return (
    <div
      className={cn(
        'w-full py-12 md:py-16 lg:py-20',
        variant === 'gradient'
          ? 'bg-gradient-to-br from-primary/10 via-primary/5 to-background'
          : 'bg-muted',
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
