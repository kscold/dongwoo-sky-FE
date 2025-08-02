import React from "react"
import { UseFormRegister, UseFieldArrayReturn, Control } from "react-hook-form"
import { Controller } from "react-hook-form"
import { TrashIcon } from "@heroicons/react/24/solid"
import { UpdateServiceGuideDto } from "../../../types/service-guide"
import { IconSelect } from "../../../common/components/molecules/IconSelect"
import * as styles from "./scope-of-work-section.css"

interface ScopeOfWorkSectionProps {
  register: UseFormRegister<UpdateServiceGuideDto>
  control: Control<UpdateServiceGuideDto>
  fields: UseFieldArrayReturn<UpdateServiceGuideDto, "scopeOfWork">["fields"]
  append: UseFieldArrayReturn<UpdateServiceGuideDto, "scopeOfWork">["append"]
  remove: UseFieldArrayReturn<UpdateServiceGuideDto, "scopeOfWork">["remove"]
}

export const ScopeOfWorkSection: React.FC<ScopeOfWorkSectionProps> = ({
  register,
  control,
  fields,
  append,
  remove,
}) => {
  return (
    <section className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>작업 가능 범위</h2>
        <p className={styles.cardDescription}>
          제공하는 작업 종류와 해당 아이콘을 설정합니다.
        </p>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.fieldGroupContainer}>
          {fields.map((field, index) => (
            <div key={field.id} className={styles.fieldGroup}>
              <Controller
                name={`scopeOfWork.${index}.icon`}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <IconSelect 
                    value={value || ""} 
                    onChange={onChange}
                    variant="admin"
                    placeholder="아이콘 선택"
                  />
                )}
              />
              <input
                {...register(`scopeOfWork.${index}.text`)}
                className={styles.input}
                placeholder="작업 내용 (예: 외벽 청소)"
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className={styles.iconButton}
              >
                <TrashIcon />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.cardFooter}>
        <button
          type="button"
          onClick={() => append({ text: "", icon: "" })}
          className={styles.addButton}
        >
          범위 추가
        </button>
      </div>
    </section>
  )
}