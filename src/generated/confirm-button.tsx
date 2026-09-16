import React from 'react'
import { Button } from '@/components/ui/button'

export function ConfirmButton() {
  const handleConfirm = () => {
    console.log('تایید شد')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Button
        variant="default"
        color="primary"
        size="default"
        onClick={handleConfirm}
      >
        تایید
      </Button>
    </div>
  )
}
