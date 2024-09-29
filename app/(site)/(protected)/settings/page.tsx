'use client'

import * as z from 'zod'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { settings } from '@/actions/auth/settings'
import { useSession } from 'next-auth/react'
import { useState, useTransition } from 'react'

import FormError from '@/components/form-error'
import FormSuccess from '@/components/form-success'
import { SettingsSchema } from '@/schemas/auth'
import useCurrentUser from '@/hooks/use-current-user'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { UserRole } from '@prisma/client'
import { Switch } from '@/components/ui/switch'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'
import DeleteAccountForm from '@/components/auth/delete-account-form'

const SettingsPage = () => {
  const { update } = useSession()
  const user = useCurrentUser()

  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [showPassword, setShowPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      name: user?.name || undefined,
      email: user?.email || undefined,
      role: user?.role || undefined,
      isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
      password: undefined,
      newPassword: undefined,
    },
  })

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev)
  }

  const handleShowNewPassword = () => {
    setShowNewPassword((prev) => !prev)
  }

  const handleSubmit = (values: z.infer<typeof SettingsSchema>) => {
    setError('')
    setSuccess('')

    startTransition(() => {
      settings(values)
        .then((data) => {
          if (data?.error) {
            setError(data?.error)
          }

          if (data?.success) {
            update()
            setSuccess(data?.success)
          }
        })
        .catch(() => setError('Something went wrong!'))
    })
  }

  return (
    <div className="mx-auto max-w-xl">
      <Card>
        <CardHeader>
          <p className="text-xl font-semibold">Settings</p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-6"
            >
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="Your name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {user?.isOAuth === false && (
                  <>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              disabled={isPending}
                              placeholder="Your email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input
                                {...field}
                                disabled={isPending}
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Your password"
                              />
                              {form.getValues().password !== undefined &&
                                form.getValues().password !== '' && (
                                  <div className="absolute inset-y-0 right-0 flex items-center justify-center p-3">
                                    <Button
                                      size="sm"
                                      variant={null}
                                      asChild
                                      onClick={handleShowPassword}
                                      className="px-0 font-normal cursor-pointer"
                                    >
                                      {showPassword ? (
                                        <MdOutlineVisibilityOff className="w-5 h-5" />
                                      ) : (
                                        <MdOutlineVisibility className="w-5 h-5" />
                                      )}
                                    </Button>
                                  </div>
                                )}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="newPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>New password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input
                                {...field}
                                disabled={isPending}
                                type={showNewPassword ? 'text' : 'password'}
                                placeholder="Your new password"
                              />
                              {form.getValues().password !== undefined &&
                                form.getValues().password !== '' && (
                                  <div className="absolute inset-y-0 right-0 flex items-center justify-center p-3">
                                    <Button
                                      size="sm"
                                      variant={null}
                                      asChild
                                      onClick={handleShowNewPassword}
                                      className="px-0 font-normal cursor-pointer"
                                    >
                                      {showNewPassword ? (
                                        <MdOutlineVisibilityOff className="w-5 h-5" />
                                      ) : (
                                        <MdOutlineVisibility className="w-5 h-5" />
                                      )}
                                    </Button>
                                  </div>
                                )}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <Select
                        disabled={isPending}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value={UserRole.USER}>User</SelectItem>
                          <SelectItem value={UserRole.ADMIN}>Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                {user?.isOAuth === false && (
                  <FormField
                    control={form.control}
                    name="isTwoFactorEnabled"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                        <div className="space-y-0 5">
                          <FormLabel>Two Factor Authentification</FormLabel>
                          <FormDescription>
                            Enable two factor authentification for your account
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            disabled={isPending}
                            onCheckedChange={field.onChange}
                            checked={field.value}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button type="submit" disabled={isPending}>
                Save changes
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Card className="mt-6 border-red-100 overflow-hidden">
        <CardHeader>
          <p className="text-xl font-semibold">Delete Account</p>
          <CardDescription>
            Permanently remove your Account and all of its contents from this
            platform. This action is not reversible, so please continue with
            caution.
          </CardDescription>
        </CardHeader>
        <CardContent className="bg-destructive/15 border-t-red-100 p-4 flex justify-end">
          <DeleteAccountForm />
        </CardContent>
      </Card>
    </div>
  )
}

export default SettingsPage
