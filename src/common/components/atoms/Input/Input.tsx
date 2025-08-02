import React, { forwardRef } from "react"
import * as styles from "./Input.css"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  variant?: "default" | "admin" | "form"
  fullWidth?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    label, 
    error, 
    helperText, 
    variant = "default", 
    fullWidth = false,
    startIcon,
    endIcon,
    className = "",
    ...props 
  }, ref) => {
    return (
      <div className={`${styles.container} ${fullWidth ? styles.fullWidth : ""}`}>
        {label && (
          <label className={styles.label} htmlFor={props.id}>
            {label}
            {props.required && <span className={styles.required}>*</span>}
          </label>
        )}
        
        <div className={styles.inputWrapper}>
          {startIcon && <div className={styles.startIcon}>{startIcon}</div>}
          
          <input
            ref={ref}
            className={`
              ${styles.input}
              ${styles.variants[variant]}
              ${error ? styles.error : ""}
              ${startIcon ? styles.withStartIcon : ""}
              ${endIcon ? styles.withEndIcon : ""}
              ${className}
            `}
            {...props}
          />
          
          {endIcon && <div className={styles.endIcon}>{endIcon}</div>}
        </div>
        
        {error && <span className={styles.errorText}>{error}</span>}
        {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
      </div>
    )
  }
)

Input.displayName = "Input"