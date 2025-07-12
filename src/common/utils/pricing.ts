/**
 * priceInfo 포맷: "기본 4시간 500,000원 / 추가 시간당 50,000원"
 * @param priceInfo - 가격 정보 문자열
 * @returns { basePrice, hourlyRate, baseHours }
 */
export const parsePriceInfo = (priceInfo: string | undefined | null) => {
    if (!priceInfo) {
        return { basePrice: 0, hourlyRate: 0, baseHours: 0 }
    }

    const basePriceMatch = priceInfo.match(/기본 (\d+)시간 ([\d,]+)원/)
    const hourlyRateMatch = priceInfo.match(/추가 시간당 ([\d,]+)원/)

    const baseHours = basePriceMatch ? parseInt(basePriceMatch[1], 10) : 0
    const basePrice = basePriceMatch
        ? parseInt(basePriceMatch[2].replace(/,/g, ""), 10)
        : 0
    const hourlyRate = hourlyRateMatch
        ? parseInt(hourlyRateMatch[1].replace(/,/g, ""), 10)
        : 0

    return { basePrice, hourlyRate, baseHours }
}

/**
 * 총 예상 비용을 계산합니다.
 * @param workingHours - 총 작업 시간
 * @param basePrice - 기본 요금
 * @param hourlyRate - 시간당 추가 요금
 * @param baseHours - 기본 작업 시간
 * @returns 총 예상 비용
 */
export const calculatePrice = (
    workingHours: number,
    basePrice: number,
    hourlyRate: number,
    baseHours: number,
): number => {
    if (workingHours <= 0) {
        return 0
    }
    if (workingHours <= baseHours) {
        return basePrice
    }
    const extraHours = workingHours - baseHours
    return basePrice + extraHours * hourlyRate
} 