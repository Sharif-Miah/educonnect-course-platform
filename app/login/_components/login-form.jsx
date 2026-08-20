"use client"

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { ceredntialLogin } from "@/app/actions";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await ceredntialLogin(formData);

      if (response?.error) {
        console.error(response.error);
        setError(response.error);
      } else {
        router.push("/courses");
      }
    } catch (e) {
      setError(e.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="mx-auto max-w-sm w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" name="password" type="password" required />
            </div>
            {error && (
              <div className="text-destructive text-sm font-medium">
                {error}
              </div>
            )}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <p>
            Register as {" "}
            <Link href="/register/instructor" className="underline">
              Instructor
            </Link>
            {" "} or {" "}
            <Link href="/register/student" className="underline">
              Student
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
