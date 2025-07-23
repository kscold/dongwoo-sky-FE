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
    return
  }

  try {
    const result = await navigator.permissions.query({ name: "geolocation" })
    // Permission handling logic without console logs
  } catch (error) {
    // Error handling without console logs
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

    // Location permission request

    navigator.geolocation.getCurrentPosition(
      (position) => {
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
        // Error handling without console logs
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
    // Next.js API 라우트를 통해 카카오 API 호출
    const response = await fetch(
      `/api/kakao/geocode?x=${longitude}&y=${latitude}`
    )

    if (!response.ok) {
      throw new Error(
        `카카오 주소 API 요청 실패: ${response.status} ${response.statusText}`
      )
    }

    const data = await response.json()

    if (data.documents && data.documents.length > 0) {
      const address = data.documents[0].address
      const roadAddress = data.documents[0].road_address

      // 우선 도로명 주소를 사용하고, 없으면 지번 주소 사용
      const mainAddress = roadAddress || address

      const locationInfo = {
        district: mainAddress.region_2depth_name || "", // 구 이름
        dong: mainAddress.region_3depth_name || "", // 동 이름
        fullAddress: roadAddress
          ? roadAddress.address_name
          : address.address_name,
      }

      return locationInfo
    }

    return null
  } catch (error) {
    // 위치 정보 에러는 조용히 처리
    return null
  }
}

/**
 * 브랜드명을 생성하는 함수
 */
export const generateBrandName = (
  locationInfo: LocationInfo | null
): string => {
  if (!locationInfo) {
    return ""
  }

  // 동 이름이 있으면 동 이름 사용 (예: "당산동" -> "어울림(당산) 스카이")
  if (locationInfo.dong) {
    const dongName = locationInfo.dong.replace("동", "")
    const brandName = `어울림(${dongName}) 스카이`
    return brandName
  }

  // 동 이름이 없으면 구 이름 사용 (예: "영등포구" -> "어울림(영등포) 스카이")
  if (locationInfo.district) {
    const districtName = locationInfo.district.replace("구", "")
    const brandName = `어울림(${districtName}) 스카이`
    return brandName
  }

  // 구/동 정보가 없어서 빈 값 반환
  return ""
}

/**
 * 현재 위치 기반으로 브랜드명을 가져오는 메인 함수
 */
export const getLocationBasedBrandName = async (): Promise<string> => {
  try {
    // 먼저 위치 권한 상태 확인
    await checkLocationPermission()

    const position = await getCurrentPosition()

    const locationInfo = await getAddressFromCoords(
      position.coords.latitude,
      position.coords.longitude
    )

    const brandName = generateBrandName(locationInfo)

    return brandName
  } catch (error) {
    // 위치 기반 브랜드명 실패는 조용히 처리 - 사용자에게 방해되지 않도록
    return "" // 빈 값 반환
  }
}

/**
 * 간단한 테스트 함수
 */
export const testFunction = (): string => {
  return "테스트 성공"
}

/**
 * Kakao API 키가 올바른지 테스트하는 함수 (서울 시청 좌표로 테스트)
 */
export const testKakaoAPI = async (): Promise<void> => {
  const seoulCityHallLat = 37.5666102
  const seoulCityHallLng = 126.9783881

  // Kakao API 테스트 시작 (서울 시청 좌표)

  try {
    const result = await getAddressFromCoords(
      seoulCityHallLat,
      seoulCityHallLng
    )
    // Kakao API 테스트 성공
  } catch (error) {
    // Kakao API 테스트 실패
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
  // 위치 테스트 함수들이 window.testLocation에 노출되었습니다.
  // 사용법: window.testLocation.testKakaoAPI() 또는 window.testLocation.getLocationBasedBrandName()
}
