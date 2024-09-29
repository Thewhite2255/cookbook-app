'use client'

import * as z from 'zod'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { DeleteAccountSchema } from '@/schemas/auth'
import { useState, useTransition } from 'react'

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Header from '@/components/auth/header'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import FormError from '@/components/form-error'
import FormSuccess from '@/components/form-success'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { deleteAccount } from '@/actions/auth/delete-account'
import { logout } from '@/actions/auth/logout'

const DeleteAccountForm = () => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof DeleteAccountSchema>>({
    resolver: zodResolver(DeleteAccountSchema),
    defaultValues: {
      email: undefined,
      confirmation: undefined,
    },
  })

  const handleSubmit = (values: z.infer<typeof DeleteAccountSchema>) => {
    setError('')
    setSuccess('')

    startTransition(() => {
      deleteAccount(values)
        .then((data) => {
          if (data?.error) {
            setError(data?.error)
          }

          if (data?.success) {
            logout()
          }
        })
        .catch(() => setError('Something went wrong!'))
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="destructive" disabled={isPending}>
          Delete account
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 w-auto border-none bg-transparent">
        <Card className="w-[400px] overflow-hidden">
          <CardHeader>
            <Header title="Delete Account" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div>We will immediately delete your account.</div>
            <FormError message="This action is not reversible. Please be certain." />
          </CardContent>
          <Separator />
          <CardContent className="bg-secondary/20 overflow-hidden p-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your email</FormLabel>
                        <FormControl>
                          <Input {...field} type="email" disabled={isPending} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          To verify, type{' '}
                          <span className="font-bold">delete my account</span>{' '}
                          below
                        </FormLabel>
                        <FormControl>
                          <Input {...field} disabled={isPending} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormError message={error} />
                <FormSuccess message={success} />
                <div>
                  <Button type="submit" disabled={isPending} className="w-full">
                    Delete
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  )
}

export default DeleteAccountForm
