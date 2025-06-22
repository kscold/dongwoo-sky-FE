"use client"

import React, { useEffect, useState } from "react"

export default function SystemTestPage() {
  const [testResults, setTestResults] = useState<
    Array<{
      test: string
      status: string
      note?: string
      data?: unknown
      error?: string
    }>
  >([])

  const runTests = async () => {
    const results: Array<{
      test: string
      status: string
      note?: string
      data?: unknown
      error?: string
    }> = []

    // Test 1: Backend API direct call
    try {
      console.log("Test 1: Testing backend API...")
      const response = await fetch(
        "http://localhost:8080/api/landing-pages/current"
      )
      const data = await response.json()
      results.push({
        test: "Backend API",
        status: "✅ SUCCESS",
        data: data,
      })
    } catch (error) {
      results.push({
        test: "Backend API",
        status: "❌ FAILED",
        error: error instanceof Error ? error.message : String(error),
      })
    }

    // Test 2: Frontend API call via hooks (Note: This test simulates the API call)
    try {
      console.log("Test 2: Testing frontend API...")
      const { landingPageApi } = await import("@/api/landingPage")
      const data = await landingPageApi.getCurrentLandingPage()
      results.push({
        test: "Frontend API",
        status: "✅ SUCCESS",
        data: data,
      })
    } catch (error) {
      results.push({
        test: "Frontend API",
        status: "❌ FAILED",
        error: error instanceof Error ? error.message : String(error),
      })
    }

    // Test 3: React Query Hook
    try {
      console.log("Test 3: Testing React Query...")
      await import("@/hooks/useLandingPage")
      // Note: This won't work in this context, but we'll try anyway
      results.push({
        test: "React Query Hook",
        status: "⚠️ SKIPPED",
        note: "Cannot test hooks outside React component",
      })
    } catch (error) {
      results.push({
        test: "React Query Hook",
        status: "❌ FAILED",
        error: error instanceof Error ? error.message : String(error),
      })
    }

    setTestResults(results)
  }

  useEffect(() => {
    runTests()
  }, [])

  return (
    <div style={{ padding: "20px", fontFamily: "monospace" }}>
      <h1>🧪 System Test Results</h1>

      {testResults.map((result, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            margin: "10px 0",
            padding: "15px",
            borderRadius: "5px",
            backgroundColor: result.status.includes("SUCCESS")
              ? "#e8f5e8"
              : result.status.includes("FAILED")
              ? "#ffe8e8"
              : "#fff3cd",
          }}
        >
          <h3>
            {result.test}: {result.status}
          </h3>
          {result.data ? (
            <details>
              <summary>Data</summary>
              <pre>{JSON.stringify(result.data, null, 2)}</pre>
            </details>
          ) : null}
          {result.error && (
            <p style={{ color: "red" }}>Error: {result.error}</p>
          )}
          {result.note && (
            <p style={{ color: "orange" }}>Note: {result.note}</p>
          )}
        </div>
      ))}

      <button
        onClick={runTests}
        style={{ padding: "10px 20px", marginTop: "20px" }}
      >
        🔄 Re-run Tests
      </button>
    </div>
  )
}
