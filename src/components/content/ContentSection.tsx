/**
 * ContentSection Component
 * Reusable content section with optional icon and custom children
 */

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ContentSectionProps {
  heading: string;
  body?: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export default function ContentSection({
  heading,
  body,
  icon,
  children,
  className,
}: ContentSectionProps) {
  return (
    <section className={cn('py-8 md:py-12', className)}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            {icon && (
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                {icon}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">{heading}</h2>
              {body && (
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {body}
                </p>
              )}
            </div>
          </div>
          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </section>
  );
}
