export const formatDate = (dateInput: string | Date) => {
  return new Date(dateInput).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export const getAttachmentSummary = (attachments: any[]) => {
  if (!attachments || attachments.length === 0) return null
  
  // TODO: implement proper attachment processing
  // const processed = attachments.map(processAttachment)
  // const images = processed.filter(att => att.isImage)
  // const files = processed.filter(att => !att.isImage)
  
  return { 
    images: 0, // images.length,
    files: 0, // files.length, 
    total: attachments.length 
  }
}