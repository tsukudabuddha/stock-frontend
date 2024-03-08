export type AllocationPerformance = {
  symbol: string
  percentageChange: number
  absoluteChange: number
}

export type PortfolioResults = {
  currentValue: number
  allocationPerformances: AllocationPerformance[]
}