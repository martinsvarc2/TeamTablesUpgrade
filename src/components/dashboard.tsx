import { ActivityView } from "./components/activity-view"
import { RatingsView } from "./components/ratings-view"
import { CallLogsView } from "./components/call-logs-view"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Target } from 'lucide-react'

// Sample data (replace with actual data fetching logic)
const activityData = [
  { name: "Sarah Johnson", avatar: "SJ", trainingsToday: 3, thisWeek: 15, thisMonth: 45, total: 180, currentStreak: 7, longestStreak: 15, consistency: 85 },
  { name: "Michael Chen", avatar: "MC", trainingsToday: 4, thisWeek: 18, thisMonth: 52, total: 195, currentStreak: 9, longestStreak: 18, consistency: 92 },
  { name: "Emma Davis", avatar: "ED", trainingsToday: 2, thisWeek: 12, thisMonth: 38, total: 165, currentStreak: 5, longestStreak: 12, consistency: 78 },
  { name: "James Wilson", avatar: "JW", trainingsToday: 5, thisWeek: 19, thisMonth: 55, total: 198, currentStreak: 10, longestStreak: 20, consistency: 95 },
  { name: "Olivia Brown", avatar: "OB", trainingsToday: 3, thisWeek: 14, thisMonth: 42, total: 175, currentStreak: 6, longestStreak: 14, consistency: 82 },
]

const ratingsData = [
  { name: "Sarah Johnson", avatar: "SJ", overallPerformance: 85, engagement: 87, objectionHandling: 83, informationGathering: 86, programExplanation: 84, closingSkills: 82, overallEffectiveness: 85 },
  { name: "Michael Chen", avatar: "MC", overallPerformance: 92, engagement: 93, objectionHandling: 90, informationGathering: 94, programExplanation: 91, closingSkills: 89, overallEffectiveness: 92 },
  { name: "Emma Davis", avatar: "ED", overallPerformance: 78, engagement: 80, objectionHandling: 77, informationGathering: 79, programExplanation: 76, closingSkills: 75, overallEffectiveness: 78 },
  { name: "James Wilson", avatar: "JW", overallPerformance: 95, engagement: 96, objectionHandling: 94, informationGathering: 95, programExplanation: 93, closingSkills: 92, overallEffectiveness: 95 },
  { name: "Olivia Brown", avatar: "OB", overallPerformance: 82, engagement: 84, objectionHandling: 81, informationGathering: 83, programExplanation: 80, closingSkills: 79, overallEffectiveness: 82 },
]

const callLogsData = [
  { name: "David Anderson", avatar: "DA", date: "2024-11-13", overallPerformance: 88, engagement: 90, objectionHandling: 85, informationGathering: 89, programExplanation: 87, closingSkills: 86, overallEffectiveness: 88 },
  { name: "Megan Taylor", avatar: "MT", date: "2024-11-13", overallPerformance: 92, engagement: 93, objectionHandling: 90, informationGathering: 94, programExplanation: 91, closingSkills: 89, overallEffectiveness: 92 },
  { name: "Sarah Williams", avatar: "SW", date: "2024-11-14", overallPerformance: 85, engagement: 87, objectionHandling: 83, informationGathering: 86, programExplanation: 84, closingSkills: 82, overallEffectiveness: 85 },
  { name: "John Martinez", avatar: "JM", date: "2024-11-14", overallPerformance: 95, engagement: 96, objectionHandling: 94, informationGathering: 95, programExplanation: 93, closingSkills: 92, overallEffectiveness: 95 },
  { name: "Emma Thompson", avatar: "ET", date: "2024-11-15", overallPerformance: 89, engagement: 91, objectionHandling: 87, informationGathering: 90, programExplanation: 88, closingSkills: 86, overallEffectiveness: 89 },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F8F9FC] p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid gap-6">
          <ActivityView data={activityData} />
          <RatingsView data={ratingsData} />
          <CallLogsView data={callLogsData} />
        </div>
      </div>
    </div>
  )
}