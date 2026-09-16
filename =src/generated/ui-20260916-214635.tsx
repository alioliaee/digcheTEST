import { Button } from '@/components/ui/button'

export default function ConfirmButton() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Button
        variant="default"
        color="primary"
        size="default"
        onClick={() => alert('تایید شد!')}
      >
        تایید
      </Button>
    </div>
  )
}