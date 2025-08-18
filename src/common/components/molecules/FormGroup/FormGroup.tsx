import React from "react"
import * as styles from "./FormGroup.css"

export interface FormGroupProps {
  children: React.ReactNode
  variant?: "default" | "admin" | "inline"
  className?: string
}

export const FormGroup: React.FC<FormGroupProps> = ({ 
  children, 
  variant = "default",
  className = "" 
}) => {
  return (
    <div className={`${styles.formGroup} ${styles.variants[variant]} ${className}`}>
      {children}
    </div>
  )
}