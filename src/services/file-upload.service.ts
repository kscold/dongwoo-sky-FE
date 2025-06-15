export async function uploadFilesUniversal(
  endpoint: string,
  files: File[]
): Promise<{ imageUrls?: string[]; url?: string; urls?: string[] }> {
  const formData = new FormData()
  files.forEach((file) => {
    formData.append("files", file)
  })

  const response = await fetch(endpoint, {
    method: "POST",
    body: formData,
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data = await response.json()
  return data.data || data
}
