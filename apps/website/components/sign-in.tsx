"use client"

import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

;``
export const SignIn = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="w-24">Sign In</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign in to your account</DialogTitle>
          <DialogDescription>
            <p className="text-sm text-muted-foreground">
              Enter your details below.
            </p>
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-8">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="none"
                autoCorrect="off"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Password</Label>
              <Input
                id="email"
                type="password"
                autoCapitalize="none"
                autoComplete="none"
                autoCorrect="off"
              />
            </div>
          </div>
          <Button>Sign In with Email</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
