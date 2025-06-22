"use client"

import React from "react"
import { useLandingPageData } from "@/hooks/useLandingPage"

export default function TestApiPage() {
  const { data, isLoading, error } = useLandingPageData()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return (
      <div>
        <h1>API Test Error</h1>
        <p>Error: {error.message}</p>
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
