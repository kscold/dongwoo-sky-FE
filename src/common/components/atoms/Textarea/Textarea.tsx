import React, { forwardRef } from "react"
import * as styles from "./Textarea.css"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  variant?: "default" | "admin" | "form"
  fullWidth?: boolean
  resize?: "none" | "vertical" | "horizontal" | "both"
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    label, 
    error, 
    helperText, 
    variant = "default", 
    fullWidth = false,
    resize = "vertical",
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
        
        <textarea
          ref={ref}
          className={`
            ${styles.textarea}
            ${styles.variants[variant]}
            ${styles.resizeVariants[resize]}
            ${error ? styles.error : ""}
            ${className}
          `}
          {...props}
        />
        
        {error && <span className={styles.errorText}>{error}</span>}
        {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
      </div>
    )
  }
)

Textarea.displayName = "Textarea"