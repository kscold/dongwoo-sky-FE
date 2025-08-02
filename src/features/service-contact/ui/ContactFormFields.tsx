import { Control } from "react-hook-form"
import type { ContactInquiryRequest } from "../types/contact"
import * as styles from "./contact-form-fields.css"

interface ContactFormFieldsProps {
  control: Control<ContactInquiryRequest>
  register: any
  errors: any
  inquiryType: string
  setInquiryType: (type: string) => void
}

export function ContactFormFields({
  control,
  register,
  errors,
  inquiryType,
  setInquiryType,
}: ContactFormFieldsProps) {
  return (
    <div className={styles.container}>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label}>
            이름 <span className={styles.required}>*</span>
          </label>
          <input
            {...register("name", { required: "이름을 입력해주세요" })}
            className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
            placeholder="이름을 입력해주세요"
          />
          {errors.name && (
            <span className={styles.errorMessage}>{errors.name.message}</span>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>
            연락처 <span className={styles.required}>*</span>
          </label>
          <input
            {...register("phone", { required: "연락처를 입력해주세요" })}
            className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
            placeholder="연락처를 입력해주세요"
          />
          {errors.phone && (
            <span className={styles.errorMessage}>{errors.phone.message}</span>
          )}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label}>
          이메일 <span className={styles.required}>*</span>
        </label>
          <input
            {...register("email", { required: "이메일을 입력해주세요" })}
            type="email"
            className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
            placeholder="이메일을 입력해주세요"
          />
          {errors.email && (
            <span className={styles.errorMessage}>{errors.email.message}</span>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>회사명</label>
          <input
            {...register("company")}
            className={styles.input}
            placeholder="회사명을 입력해주세요"
          />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>지역</label>
        <input
          {...register("location")}
          className={styles.input}
          placeholder="작업 지역을 입력해주세요"
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>
          제목 <span className={styles.required}>*</span>
        </label>
        <input
          {...register("subject", { required: "문의 제목을 입력해주세요" })}
          className={`${styles.input} ${errors.subject ? styles.inputError : ""}`}
          placeholder="문의 제목을 입력해주세요"
        />
        {errors.subject && (
          <span className={styles.errorMessage}>{errors.subject.message}</span>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label}>
          문의 내용 <span className={styles.required}>*</span>
        </label>
        <textarea
          {...register("message", { required: "문의 내용을 입력해주세요" })}
          className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
          placeholder="문의 내용을 자세히 입력해주세요"
          rows={6}
        />
        {errors.message && (
          <span className={styles.errorMessage}>{errors.message.message}</span>
        )}
      </div>

      <div className={styles.checkboxField}>
        <label className={styles.checkboxLabel}>
          <input
            {...register("isUrgent")}
            type="checkbox"
            className={styles.checkbox}
          />
          <span className={styles.checkboxText}>긴급 문의</span>
        </label>
      </div>
    </div>
  )
}