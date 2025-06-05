interface ProgressBarProps {
  completed: number
  total: number
}

export function ProgressBar({ completed, total }: ProgressBarProps) {
  const percentage = (completed / total) * 100

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>Fortschritt</span>
        <span>
          {completed} von {total} Modulen
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="text-center text-sm text-gray-600 mt-2">{Math.round(percentage)}% abgeschlossen</div>
    </div>
  )
}
