'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import RoleGate from '@/components/auth/role-gate'
import { UserRole } from '@prisma/client'
import FormSuccess from '@/components/form-success'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { admin } from '@/actions/auth/admin'

const AdminPage = () => {
  const handleServerAction = () => {
    admin().then((data) => {
      if (data?.error) {
        toast.error(data?.error)
      }
      if (data?.success) {
        toast.error(data?.success)
      }
    })
  }

  const handleApiRoute = () => {
    fetch('/api/admin').then((response) => {
      if (response.ok) {
        toast.success('Allowed API Route!')
      } else {
        toast.error('Forbidden API Route!')
      }
    })
  }

  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">🔑 Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You are allowed to see this content!" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Admin-only API Route</p>
          <Button onClick={handleApiRoute}>Click to test</Button>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Admin-only Server action</p>
          <Button onClick={handleServerAction}>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default AdminPage
