import React from "react"
import Image from "next/image"
import { UserCircleIcon } from "@heroicons/react/24/solid"
import { Profile } from "../../../types/profile"
import * as styles from "../styles"

interface OperatorProfileSectionProps {
  profile: Profile
}

export const OperatorProfileSection: React.FC<OperatorProfileSectionProps> = ({ profile }) => {
  if (!profile) return null

  return (
    <section className={styles.operatorProfileSection}>
      <div className={styles.profileCard}>
        <div className={styles.profileImageContainer}>
          {profile.imageUrl ? (
            <Image
              src={profile.imageUrl}
              alt={profile.name}
              width={300}
              height={300}
              className={styles.profileImage}
            />
          ) : (
            <div className={styles.profileImagePlaceholder}>
              <UserCircleIcon />
            </div>
          )}
        </div>
        <div className={styles.profileInfo}>
          <h3 className={styles.profileName}>{profile.name}</h3>
          <p className={styles.profileRole}>{profile.role}</p>
          <div>
            <h4 className={styles.profileSectionTitle}>주요 경력</h4>
            <ul className={styles.profileList}>
              {profile.career.map((career, i) => (
                <li key={i} className={styles.profileListItem}>
                  {career}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={styles.profileSectionTitle}>인사말</h4>
            <p className={styles.profileBio}>{profile.introduction}</p>
          </div>
        </div>
      </div>
    </section>
  )
}