import React from "react"
import { ContactInquiry } from "../types"
import { ContactCard } from "./ContactCard"
import * as styles from "../../../../styles/admin/admin-contact.css"

interface ContactListProps {
  contacts: ContactInquiry[]
  onContactSelect: (contact: ContactInquiry) => void
  onStatusChange: (contactId: string, newStatus: ContactInquiry["status"]) => void
}

export const ContactList: React.FC<ContactListProps> = ({
  contacts,
  onContactSelect,
  onStatusChange,
}) => {
  return (
    <div className={styles.contactList}>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onSelect={() => onContactSelect(contact)}
          onStatusChange={(newStatus) => onStatusChange(contact.id, newStatus)}
        />
      ))}
    </div>
  )
}