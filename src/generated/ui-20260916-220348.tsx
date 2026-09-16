'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

// Card Components
function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn(
        'flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-card',
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('leading-none font-semibold', className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-content"
      className={cn('px-6', className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
      {...props}
    />
  );
}

// Shopping Cart Icon
const ShoppingCartIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
  >
    <g
      data-optical-balance="1.042"
      transform="translate(12 12) scale(1.042) translate(-12 -12)"
    >
      <g
        id="Icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          id="Shop"
          transform="translate(-64, -481)"
          fillRule="nonzero"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <g id="shopping-cart" transform="translate(44, 413)">
            <g id="Icon/Shopping-cart/Linear" transform="translate(20, 68)">
              <path d="M2,2 L3.74000549,2 C4.82000554,2 5.67000183,2.92999995 5.58000183,4 L4.75,13.9599915 C4.61,15.5899915 5.8999933,16.9899902 7.53999329,16.9899902 L18.1900024,16.9899902 C19.6300025,16.9899902 20.89,15.8100048 21,14.3800049 L21.5399933,6.88000488 C21.6599933,5.22000492 20.3999957,3.86999512 18.7299957,3.86999512 L5.82000732,3.86999512" />
              <path d="M17.5,20.75 C17.5,21.440356 16.940356,22 16.25,22 C15.559644,22 15,21.440356 15,20.75 C15,20.059644 15.559644,19.5 16.25,19.5 C16.940356,19.5 17.5,20.059644 17.5,20.75 Z" />
              <path d="M9.5,20.75 C9.5,21.440356 8.94035596,22 8.25,22 C7.55964404,22 7,21.440356 7,20.75 C7,20.059644 7.55964404,19.5 8.25,19.5 C8.94035596,19.5 9.5,20.059644 9.5,20.75 Z" />
              <line x1="9" y1="8" x2="21" y2="8" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

// Product Card Component
interface ProductCardProps {
  title: string;
  price: number | string;
  currency?: string;
  description?: string;
  onAddToCart?: () => void;
}

export function ProductCard({
  title,
  price,
  currency = '₹',
  description,
  onAddToCart,
}: ProductCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </CardHeader>

      <CardContent>
        <div className="text-2xl font-bold">
          {currency}
          {price}
        </div>
      </CardContent>

      <CardFooter className="justify-between border-t">
        <span className="text-xs text-muted-foreground">محصول در دسترس</span>
        <button
          onClick={onAddToCart}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          aria-label="افزودن به سبد خرید"
        >
          <ShoppingCartIcon />
          <span className="text-sm font-medium">خرید</span>
        </button>
      </CardFooter>
    </Card>
  );
}

// Export individual parts if needed
export { Card, CardHeader, CardTitle, CardContent, CardFooter };