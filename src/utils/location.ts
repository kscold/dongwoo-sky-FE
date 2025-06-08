// 위치 정보를 가져오고 지역명을 추출하는 유틸리티

export interface LocationInfo {
  district: string // 구 이름 (예: "영등포구")
  dong: string // 동 이름 (예: "당산동")
  fullAddress: string // 전체 주소
}

export interface GeolocationPosition {
  coords: {
    latitude: number
    longitude: number
    accuracy: number
  }
}

/**
 * 현재 위치를 가져오는 함수
 */
export const getCurrentPosition = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by this browser."))
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position)
      },
      (error) => {
        reject(error)
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000, // 5분 캐시
      }
    )
  })
}

/**
 * 좌표를 주소로 변환하는 함수 (Kakao Map API 사용)
 */
export const getAddressFromCoords = async (
  latitude: number,
  longitude: number
): Promise<LocationInfo | null> => {
  try {
    console.log("🌍 위치 좌표:", { latitude, longitude })

    // Kakao Map API의 좌표 -> 주소 변환 서비스 사용
    const response = await fetch(
      `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}`,
      {
        headers: {
          Authorization: `KakaoAK ${
            process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY || "YOUR_KAKAO_API_KEY"
          }`,
        },
      }
    )

    console.log("📡 Kakao API 응답 상태:", response.status)

    if (!response.ok) {
      console.error(
        "❌ Kakao API 요청 실패:",
        response.status,
        response.statusText
      )
      throw new Error(
        `카카오 주소 API 요청 실패: ${response.status} ${response.statusText}`
      )
    }

    const data = await response.json()
    console.log("📍 Kakao API 전체 응답:", data)

    if (data.documents && data.documents.length > 0) {
      const address = data.documents[0].address
      const roadAddress = data.documents[0].road_address

      console.log("🏠 지번 주소:", address)
      console.log("🛣️ 도로명 주소:", roadAddress)

      // 우선 도로명 주소를 사용하고, 없으면 지번 주소 사용
      const mainAddress = roadAddress || address

      console.log("✅ 사용할 주소:", mainAddress)

      const locationInfo = {
        district: mainAddress.region_2depth_name || "", // 구 이름
        dong: mainAddress.region_3depth_name || "", // 동 이름
        fullAddress: roadAddress
          ? roadAddress.address_name
          : address.address_name,
      }

      console.log("🎯 추출된 위치 정보:", locationInfo)

      return locationInfo
    }

    return null
  } catch (error) {
    console.error("Error getting address from coordinates:", error)
    return null
  }
}

/**
 * 브랜드명을 생성하는 함수
 */
export const generateBrandName = (
  locationInfo: LocationInfo | null
): string => {
  console.log("🏷️ 브랜드명 생성 시작, 위치 정보:", locationInfo)

  if (!locationInfo) {
    console.log("📍 위치 정보가 없어서 기본 브랜드명 사용")
    return "어울림 스카이"
  }

  // 동 이름이 있으면 동 이름 사용 (예: "당산동" -> "어울림(당산) 스카이")
  if (locationInfo.dong) {
    const dongName = locationInfo.dong.replace("동", "")
    const brandName = `어울림(${dongName}) 스카이`
    console.log("🎯 동 이름 기반 브랜드명:", brandName)
    return brandName
  }

  // 동 이름이 없으면 구 이름 사용 (예: "영등포구" -> "어울림(영등포) 스카이")
  if (locationInfo.district) {
    const districtName = locationInfo.district.replace("구", "")
    const brandName = `어울림(${districtName}) 스카이`
    console.log("🎯 구 이름 기반 브랜드명:", brandName)
    return brandName
  }

  console.log("📍 구/동 정보가 없어서 기본 브랜드명 사용")
  return "어울림 스카이"
}

/**
 * 현재 위치 기반으로 브랜드명을 가져오는 메인 함수
 */
export const getLocationBasedBrandName = async (): Promise<string> => {
  try {
    console.log("🚀 위치 기반 브랜드명 가져오기 시작")

    const position = await getCurrentPosition()
    console.log("📍 위치 정보 획득 성공:", position.coords)

    const locationInfo = await getAddressFromCoords(
      position.coords.latitude,
      position.coords.longitude
    )

    console.log("📍 주소 변환 결과:", locationInfo)

    const brandName = generateBrandName(locationInfo)
    console.log("🎉 최종 브랜드명:", brandName)

    return brandName
  } catch (error) {
    console.error("❌ 위치 기반 브랜드명 가져오기 실패:", error)
    return "어울림 스카이" // 기본값
  }
}

/**
 * 간단한 테스트 함수
 */
export const testFunction = (): string => {
  console.log("🧪 테스트 함수 호출됨")
  return "테스트 성공"
}

/**
 * Kakao API 키가 올바른지 테스트하는 함수 (서울 시청 좌표로 테스트)
 */
export const testKakaoAPI = async (): Promise<void> => {
  const seoulCityHallLat = 37.5666102
  const seoulCityHallLng = 126.9783881

  console.log("🧪 Kakao API 테스트 시작 (서울 시청 좌표)")
  console.log(
    "🔑 사용 중인 API 키:",
    process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY ? "설정됨" : "없음"
  )

  try {
    const result = await getAddressFromCoords(
      seoulCityHallLat,
      seoulCityHallLng
    )
    console.log("✅ Kakao API 테스트 성공:", result)
  } catch (error) {
    console.error("❌ Kakao API 테스트 실패:", error)
  }
}
