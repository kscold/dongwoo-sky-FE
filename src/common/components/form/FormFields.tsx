"use client"

import React from "react"
import * as styles from "@/styles/components/form-fields.css"

interface FormFieldProps {
  label: string
  required?: boolean
  children: React.ReactNode
  className?: string
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  required = false,
  children,
  className = "",
}) => {
  return (
    <div className={`${styles.formGroup} ${className}`}>
      <label className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      {children}
    </div>
  )
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export const Input: React.FC<InputProps> = ({
  error,
  className = "",
  ...props
}) => {
  return (
    <>
      <input
        className={`${styles.input} ${
          error ? styles.inputError : ""
        } ${className}`}
        {...props}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </>
  )
}

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
}

export const Textarea: React.FC<TextareaProps> = ({
  error,
  className = "",
  ...props
}) => {
  return (
    <>
      <textarea
        className={`${styles.textarea} ${
          error ? styles.inputError : ""
        } ${className}`}
        {...props}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </>
  )
}

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  className = "",
  ...props
}) => {
  return (
    <label className={`${styles.checkboxLabel} ${className}`}>
      <input type="checkbox" className={styles.checkbox} {...props} />
      <span className={styles.checkboxText}>{label}</span>
    </label>
  )
}
