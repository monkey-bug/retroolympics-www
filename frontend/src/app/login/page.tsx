import { FormEvent } from 'react'
import { useRouter } from 'next/router'
import { cookies } from 'next/headers'
 
export default function LoginPage() {
  const router = useRouter()
 
  async function handleSubmit(formData: FormData) {

 
    const email = formData.get('email')
    const password = formData.get('password')
 

 
    cookies().set("isLoggedIn", "1", {expires: Date.now() + 1000*60 })
  }
 
  return (
    <form action={handleSubmit}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  )
}