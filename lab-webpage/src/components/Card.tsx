import React, { ReactNode } from "react";

interface CardProps {
  className?: string;
  children?: ReactNode;
  [key: string]: any;
}

export const Card = ({ className = "", children, ...props }: CardProps) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent = ({
  className = "",
  children,
  ...props
}: CardProps) => {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({
  className = "",
  children,
  ...props
}: CardProps) => {
  return (
    <div className={`p-6 border-b ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({
  className = "",
  children,
  ...props
}: CardProps) => {
  return (
    <h3
      className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
};

export default Card;
