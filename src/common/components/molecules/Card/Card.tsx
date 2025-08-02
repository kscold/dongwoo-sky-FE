import React from "react"
import * as styles from "./Card.css"

export interface CardProps {
  children: React.ReactNode
  variant?: "default" | "admin" | "elevated"
  padding?: "sm" | "md" | "lg"
  className?: string
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  variant = "default",
  padding = "md",
  className = "" 
}) => {
  return (
    <div className={`${styles.card} ${styles.variants[variant]} ${styles.paddings[padding]} ${className}`}>
      {children}
    </div>
  )
}

export interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = "" }) => {
  return (
    <div className={`${styles.cardHeader} ${className}`}>
      {children}
    </div>
  )
}

export interface CardBodyProps {
  children: React.ReactNode
  className?: string
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className = "" }) => {
  return (
    <div className={`${styles.cardBody} ${className}`}>
      {children}
    </div>
  )
}

export interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className = "" }) => {
  return (
    <div className={`${styles.cardFooter} ${className}`}>
      {children}
    </div>
  )
}

export interface CardTitleProps {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, level = 2, className = "" }) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements
  
  return (
    <Tag className={`${styles.cardTitle} ${className}`}>
      {children}
    </Tag>
  )
}

export interface CardDescriptionProps {
  children: React.ReactNode
  className?: string
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ children, className = "" }) => {
  return (
    <p className={`${styles.cardDescription} ${className}`}>
      {children}
    </p>
  )
}