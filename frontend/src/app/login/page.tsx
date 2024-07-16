import { FormEvent } from 'react'
import { cookies } from 'next/headers'
 
export default function LoginPage() {
 
  async function handleSubmit(formData: FormData) {
    'use server'
 
    const email = formData.get('email')
    const password = formData.get('password')
 

 
    cookies().set("isLoggedIn", "1", {expires: Date.now() + 1000*60*60 }) //cookie that expires after 1 hour
  }
 
  return (
    <form action={handleSubmit}>
      <input type="text" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  )
}