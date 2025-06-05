export interface Exercise {
  description: string
  starterCode: string
  expectedOutput: string
  solution: string
}

export interface ModuleContent {
  theory: string
  exercise: Exercise
}

export interface Module {
  id: number
  title: string
  description: string
  estimatedTime: string
  difficulty: "Anfänger" | "Fortgeschritten" | "Experte"
  content: ModuleContent
}
