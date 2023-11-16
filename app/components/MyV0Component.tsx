/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lnwtsAZRd7b
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="mx-auto max-w-md space-y-6 bg-blue-200 dark:bg-blue-800 rounded-md p-4">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-green-700 dark:text-green-300">Newsletter Sign Up</h1>
        <p className="text-blue-700 dark:text-blue-300">Sign up to receive updates and news.</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label className="text-purple-700 dark:text-purple-300" htmlFor="name">
            Name
          </Label>
          <Input className="bg-white dark:bg-gray-700" id="name" placeholder="Enter your name" required />
        </div>
        <div className="space-y-2">
          <Label className="text-purple-700 dark:text-purple-300" htmlFor="email">
            Email
          </Label>
          <Input className="bg-white dark:bg-gray-700" id="email" placeholder="m@example.com" required type="email" />
        </div>
        <Button
          className="w-full bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-300 dark:hover:bg-yellow-400"
          type="submit"
        >
          Subscribe
        </Button>
      </div>
    </div>
  )
}
