import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const x = searchParams.get("x")
  const y = searchParams.get("y")

  if (!x || !y) {
    return NextResponse.json(
      { error: "좌표 정보가 필요합니다." },
      { status: 400 }
    )
  }

  try {
    const response = await fetch(
      `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${x}&y=${y}`,
      {
        headers: {
          Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`,
        },
      }
    )

    if (!response.ok) {
      console.error("카카오 API 오류:", response.status, response.statusText)
      return NextResponse.json(
        { error: "카카오 API 요청 실패" },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("카카오 API 호출 오류:", error)
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    )
  }
}
