import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "lucide-react";

import { iconMap } from "../../../../common/components/ui/iconMap";
import { iconOptions } from "../../../../common/utils/icon-options";
import * as pageStyles from "../../../../styles/admin/admin-service-guide.css";

const IconSelect = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const SelectedIcon = value ? iconMap[value] : null;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);

  return (
    <div className={pageStyles.iconSelectContainer} ref={ref}>
      <button
        type="button"
        className={pageStyles.iconSelectButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={pageStyles.iconSelectItem}>
          {SelectedIcon ? <SelectedIcon className={pageStyles.icon} /> : null}
          <span>
            {value
              ? iconOptions.find((opt) => opt.value === value)?.label
              : "아이콘 선택"}
          </span>
        </div>
        <ChevronDownIcon
          className={`${pageStyles.chevron} ${
            isOpen ? pageStyles.chevronOpen : ""
          }`}
        />
      </button>
      {isOpen && (
        <ul className={pageStyles.iconSelectList}>
          {iconOptions.map((option) => {
            const IconComponent = iconMap[option.value];
            return (
              <li
                key={option.value}
                className={pageStyles.iconSelectItem}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                <IconComponent className={pageStyles.icon} />
                <span>{option.label}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default IconSelect;
