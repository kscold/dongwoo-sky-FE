import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const x = searchParams.get("x")
  const y = searchParams.get("y")

  console.log("🔍 카카오 API 라우트 호출됨:", { x, y })
  console.log("🔑 환경변수 확인:", {
    hasKey: !!process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY,
    keyLength: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY?.length,
    keyPrefix: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY?.substring(0, 8),
    fullKey: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY, // 임시로 전체 키 로깅 (디버깅용)
  })

  if (!x || !y) {
    return NextResponse.json(
      { error: "좌표 정보가 필요합니다." },
      { status: 400 }
    )
  }

  const apiKey = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY

  if (!apiKey) {
    console.error("❌ 카카오 REST API 키가 설정되지 않았습니다.")
    return NextResponse.json(
      { error: "카카오 REST API 키가 설정되지 않았습니다." },
      { status: 500 }
    )
  }

  try {
    const url = `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${x}&y=${y}`
    console.log("📡 카카오 API 요청 URL:", url)

    const response = await fetch(url, {
      headers: {
        Authorization: `KakaoAK ${apiKey}`,
        "Content-Type": "application/json",
      },
    })

    console.log("📡 카카오 API 응답 상태:", response.status)
    console.log(
      "📡 카카오 API 응답 헤더:",
      Object.fromEntries(response.headers.entries())
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error(
        "카카오 API 오류:",
        response.status,
        response.statusText,
        errorText
      )
      return NextResponse.json(
        { error: "카카오 API 요청 실패", details: errorText },
        { status: response.status }
      )
    }

    const data = await response.json()
    console.log("✅ 카카오 API 성공:", data)
    return NextResponse.json(data)
  } catch (error) {
    console.error("카카오 API 호출 오류:", error)
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    )
  }
}
