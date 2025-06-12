"use client"

import React, { useEffect, useState } from "react"
import { landingPageService } from "@/services/landing-page.service"
import type { LandingPageData } from "@/types/landing-page"

export default function TestApiPage() {
  const [data, setData] = useState<LandingPageData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const testApi = async () => {
      try {
        console.log("Testing API call...")
        const result = await landingPageService.getCurrentLandingPage()
        console.log("API result:", result)
        setData(result)
      } catch (err) {
        console.error("API error:", err)
        setError(err instanceof Error ? err.message : "Unknown error")
      } finally {
        setLoading(false)
      }
    }

    testApi()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return (
      <div>
        <h1>API Test Error</h1>
        <p>Error: {error}</p>
      </div>
    )
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>API Test Results</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
