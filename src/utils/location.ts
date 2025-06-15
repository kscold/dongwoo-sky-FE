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
 * 위치 권한 상태 확인하는 함수
 */
export const checkLocationPermission = async (): Promise<void> => {
  if (!navigator.permissions) {
    console.log("🌍 Permissions API가 지원되지 않는 브라우저입니다.")
    return
  }

  try {
    const result = await navigator.permissions.query({ name: "geolocation" })
    console.log("📍 현재 위치 권한 상태:", result.state)

    switch (result.state) {
      case "granted":
        console.log("✅ 위치 권한이 허용되어 있습니다.")
        break
      case "denied":
        console.log("❌ 위치 권한이 거부되어 있습니다.")
        console.log("브라우저 설정에서 위치 권한을 허용해주세요.")
        break
      case "prompt":
        console.log("⏳ 위치 권한을 요청할 예정입니다.")
        break
    }
  } catch (error) {
    console.log("위치 권한 상태를 확인할 수 없습니다:", error)
  }
}

/**
 * 현재 위치를 가져오는 함수
 */
export const getCurrentPosition = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      console.log("🌍 Geolocation이 지원되지 않는 브라우저입니다.")
      reject(new Error("Geolocation is not supported by this browser."))
      return
    }

    console.log("📍 위치 권한 요청 중...")

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("✅ 위치 정보 획득 성공:", position.coords)
        resolve(position)
      },
      (error) => {
        // 사용자가 위치 권한을 거부했거나 다른 오류 발생
        let errorMessage = ""
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "사용자가 위치 권한을 거부했습니다."
            break
          case error.POSITION_UNAVAILABLE:
            errorMessage = "위치 정보를 사용할 수 없습니다."
            break
          case error.TIMEOUT:
            errorMessage = "위치 정보 요청이 시간 초과되었습니다."
            break
          default:
            errorMessage = "알 수 없는 위치 오류가 발생했습니다."
            break
        }
        console.log("📍 위치 정보를 가져올 수 없습니다:", errorMessage)
        console.log("브라우저 설정에서 위치 권한을 허용해주세요.")
        reject(error)
      },
      {
        enableHighAccuracy: true,
        timeout: 15000, // 15초로 증가
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
    // 위치 정보 에러는 조용히 처리
    console.log(
      "📍 주소 변환 중 오류 발생:",
      error instanceof Error ? error.message : "알 수 없는 오류"
    )
    console.log(
      "Kakao API 키가 올바른지, 네트워크 연결이 정상인지 확인해보세요."
    )
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

    // 먼저 위치 권한 상태 확인
    await checkLocationPermission()

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
    // 위치 기반 브랜드명 실패는 조용히 처리 - 사용자에게 방해되지 않도록
    console.log("📍 위치 기반 브랜드명을 가져올 수 없어서 기본값을 사용합니다.")
    console.log(
      "원인:",
      error instanceof Error ? error.message : "알 수 없는 오류"
    )
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

// 브라우저 콘솔에서 테스트할 수 있도록 함수들을 전역으로 노출
if (typeof window !== "undefined") {
  ;(window as typeof window & { testLocation: object }).testLocation = {
    testKakaoAPI,
    getLocationBasedBrandName,
    checkLocationPermission,
    getCurrentPosition,
    getAddressFromCoords,
    generateBrandName,
    testFunction,
  }
  console.log("🧪 위치 테스트 함수들이 window.testLocation에 노출되었습니다.")
  console.log(
    "사용법: window.testLocation.testKakaoAPI() 또는 window.testLocation.getLocationBasedBrandName()"
  )
}
