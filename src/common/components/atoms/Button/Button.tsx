import React, { forwardRef } from "react"
import * as styles from "./Button.css"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost" | "admin"
  size?: "sm" | "md" | "lg"
  fullWidth?: boolean
  loading?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = "primary", 
    size = "md", 
    fullWidth = false,
    loading = false,
    startIcon,
    endIcon,
    children,
    disabled,
    className = "",
    ...props 
  }, ref) => {
    const isDisabled = disabled || loading

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={`
          ${styles.button}
          ${styles.variants[variant]}
          ${styles.sizes[size]}
          ${fullWidth ? styles.fullWidth : ""}
          ${loading ? styles.loading : ""}
          ${className}
        `}
        {...props}
      >
        {loading && <div className={styles.spinner} />}
        {!loading && startIcon && <span className={styles.icon}>{startIcon}</span>}
        
        <span className={loading ? styles.hiddenText : ""}>{children}</span>
        
        {!loading && endIcon && <span className={styles.icon}>{endIcon}</span>}
      </button>
    )
  }
)

Button.displayName = "Button"