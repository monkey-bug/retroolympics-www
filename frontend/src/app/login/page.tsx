import { cookies } from "next/headers";

export default function LoginPage() {
  async function handleSubmit(formData: FormData) {
    "use server";

    const userName = formData.get("user");
    const password = formData.get("password");


    if(userName!=null){
      var userString = userName!.toString();
      cookies().set("user", userString, { expires: Date.now() + 1000 * 60 * 60 });
      cookies().set("isLoggedIn", "1", { expires: Date.now() + 1000 * 60 * 60 }); //cookie that expires after 1 hour
    }
    
  }

  return (
    <form action={handleSubmit}>
      <input type="text" name="user" placeholder="user" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}
