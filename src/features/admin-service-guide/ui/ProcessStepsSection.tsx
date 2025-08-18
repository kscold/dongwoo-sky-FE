import React from "react"
import { UseFormRegister, UseFieldArrayReturn, Control } from "react-hook-form"
import { Controller } from "react-hook-form"
import { TrashIcon } from "@heroicons/react/24/solid"
import { UpdateServiceGuideDto } from "../../../types/service-guide"
import { IconSelect } from "../../../common/components/molecules/IconSelect"
import * as styles from "./process-steps-section.css"

interface ProcessStepsSectionProps {
  register: UseFormRegister<UpdateServiceGuideDto>
  control: Control<UpdateServiceGuideDto>
  fields: UseFieldArrayReturn<UpdateServiceGuideDto, "processSteps">["fields"]
  append: UseFieldArrayReturn<UpdateServiceGuideDto, "processSteps">["append"]
  remove: UseFieldArrayReturn<UpdateServiceGuideDto, "processSteps">["remove"]
}

export const ProcessStepsSection: React.FC<ProcessStepsSectionProps> = ({
  register,
  control,
  fields,
  append,
  remove,
}) => {
  return (
    <section className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>서비스 프로세스</h2>
        <p className={styles.cardDescription}>
          고객에게 안내될 서비스 진행 절차를 설명합니다.
        </p>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.fieldGroupContainer}>
          {fields.map((field, index) => (
            <div key={field.id} className={styles.fieldGroup}>
              <Controller
                name={`processSteps.${index}.icon`}
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
              <div className={styles.inputGroup}>
                <input
                  {...register(`processSteps.${index}.title`)}
                  className={styles.input}
                  placeholder="단계 제목 (예: 견적 상담)"
                />
                <textarea
                  {...register(`processSteps.${index}.description`)}
                  className={styles.textarea}
                  placeholder="단계 상세 설명"
                  rows={2}
                />
              </div>
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
          onClick={() => append({ title: "", description: "", icon: "" })}
          className={styles.addButton}
        >
          단계 추가
        </button>
      </div>
    </section>
  )
}