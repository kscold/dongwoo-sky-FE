import React, { forwardRef } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/solid"
import * as styles from "./Select.css"

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  label?: string
  error?: string
  helperText?: string
  variant?: "default" | "admin" | "form"
  fullWidth?: boolean
  options: SelectOption[]
  placeholder?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ 
    label, 
    error, 
    helperText, 
    variant = "default", 
    fullWidth = false,
    options,
    placeholder,
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
        
        <div className={styles.selectWrapper}>
          <select
            ref={ref}
            className={`
              ${styles.select}
              ${styles.variants[variant]}
              ${error ? styles.error : ""}
              ${className}
            `}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option 
                key={option.value} 
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          
          <div className={styles.icon}>
            <ChevronDownIcon />
          </div>
        </div>
        
        {error && <span className={styles.errorText}>{error}</span>}
        {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
      </div>
    )
  }
)

Select.displayName = "Select"