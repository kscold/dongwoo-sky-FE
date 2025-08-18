import React, { useEffect, useRef, useState, useMemo } from "react"
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { iconMap } from "../../ui/iconMap"
import { iconOptions } from "../../../utils/icon-options"
import * as styles from "./IconSelect.css"

export interface IconSelectProps {
  value: string
  onChange: (value: string) => void
  label?: string
  error?: string
  helperText?: string
  variant?: "default" | "admin"
  placeholder?: string
  disabled?: boolean
}

export const IconSelect: React.FC<IconSelectProps> = ({
  value,
  onChange,
  label,
  error,
  helperText,
  variant = "default",
  placeholder = "아이콘 선택",
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const ref = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const SelectedIcon = value ? iconMap[value] : null

  // 검색어로 필터링된 아이콘 옵션들
  const filteredOptions = useMemo(() => {
    if (!searchTerm) return iconOptions
    
    return iconOptions.filter(option =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      option.value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSearchTerm("")
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // 드롭다운이 열릴 때 검색 입력에 포커스
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  const handleSelect = (iconValue: string) => {
    onChange(iconValue)
    setIsOpen(false)
    setSearchTerm("")
  }

  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label}>
          {label}
        </label>
      )}
      
      <div className={styles.selectContainer} ref={ref}>
        <button
          type="button"
          className={`
            ${styles.selectButton}
            ${styles.variants[variant]}
            ${error ? styles.error : ""}
            ${disabled ? styles.disabled : ""}
          `}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
        >
          <div className={styles.selectContent}>
            {SelectedIcon ? (
              <SelectedIcon className={styles.selectedIcon} />
            ) : value === "" ? (
              <div className={styles.noIconPlaceholder} />
            ) : null}
            <span className={value !== null && value !== undefined ? styles.selectedText : styles.placeholderText}>
              {value !== null && value !== undefined
                ? iconOptions.find((opt) => opt.value === value)?.label 
                : placeholder
              }
            </span>
          </div>
          <ChevronDownIcon
            className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
          />
        </button>
        
        {isOpen && !disabled && (
          <div className={styles.dropdown}>
            {/* 검색 입력 */}
            <div className={styles.searchContainer}>
              <MagnifyingGlassIcon className={styles.searchIcon} />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="아이콘 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            
            <ul className={styles.optionsList}>
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => {
                  const IconComponent = option.value ? iconMap[option.value] : null
                  return (
                    <li key={option.value || "none"}>
                      <button
                        type="button"
                        className={`
                          ${styles.option}
                          ${value === option.value ? styles.optionSelected : ""}
                        `}
                        onClick={() => handleSelect(option.value)}
                      >
                        {IconComponent ? (
                          <IconComponent className={styles.optionIcon} />
                        ) : (
                          <div className={styles.noIconPlaceholder} />
                        )}
                        <span>{option.label}</span>
                      </button>
                    </li>
                  )
                })
              ) : (
                <li className={styles.noResults}>
                  <span>검색 결과가 없습니다</span>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
      
      {error && <span className={styles.errorText}>{error}</span>}
      {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
    </div>
  )
}