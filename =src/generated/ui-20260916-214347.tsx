import { Button } from "@/components/ui/button"

export default function ConfirmButton() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Button
        variant="default"
        color="success"
        size="default"
        onClick={() => alert('تایید شد!')}
      >
        تایید
      </Button>
    </div>
  )
}