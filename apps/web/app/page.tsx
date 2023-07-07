import React from 'react'
import {redirect} from 'next/navigation'

async function donate(formData: FormData) {
  'use server'

  return redirect(`/wlad`)
}

export default function Home() {
  return (
    <div className="text-center">
      <form action={donate}>
        <input type="submit" value="vai" />
      </form>
    </div>
  )
}
