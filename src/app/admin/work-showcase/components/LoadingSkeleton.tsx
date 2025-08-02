import React from "react"
import * as commonStyles from "../../../../styles/admin/admin-notice.css"

export const LoadingSkeleton: React.FC = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <tr key={index}>
          <td className={commonStyles.tableCell}>
            <div className={commonStyles.skeleton} />
          </td>
          <td className={commonStyles.tableCell}>
            <div className={commonStyles.skeleton} />
          </td>
          <td className={commonStyles.tableCell}>
            <div className={commonStyles.skeleton} />
          </td>
          <td className={commonStyles.tableCell}>
            <div className={commonStyles.skeleton} />
          </td>
          <td className={commonStyles.tableCell}>
            <div className={commonStyles.skeleton} />
          </td>
          <td className={commonStyles.tableCell}>
            <div className={commonStyles.skeleton} />
          </td>
          <td className={commonStyles.tableCell}>
            <div className={commonStyles.skeleton} />
          </td>
        </tr>
      ))}
    </>
  )
}