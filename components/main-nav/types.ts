
export type SkillLevel = 'newbie' | 'junior' | "intermediate" | "advanced" | "guru"

export interface ProjectsLink {
  name: string,
  to: string,
  level?: SkillLevel
  feLink?: string
}
