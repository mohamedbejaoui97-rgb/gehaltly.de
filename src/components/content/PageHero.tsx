/**
 * PageHero Component
 * Compact hero section for page headers - minimal height to prioritize calculator visibility
 */

import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  /** @deprecated Description is no longer rendered in the hero for compact layout */
  description?: string;
  variant?: 'gradient' | 'solid';
  className?: string;
}

export default function PageHero({
  title,
  subtitle,
  // description is accepted but not rendered for compact layout
  variant = 'gradient',
  className,
}: PageHeroProps) {
  return (
    <div
      className={cn(
        'w-full py-4 md:py-6',
        variant === 'gradient'
          ? 'bg-gradient-to-r from-primary/5 to-background'
          : 'bg-muted',
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-1">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base md:text-lg text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
