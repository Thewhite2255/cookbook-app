import { ExtendedUser } from '@/next-auth'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface UserInfoProps {
  user?: ExtendedUser
  label: string
}

const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="mx-auto max-w-xl">
      <CardHeader>
        <p className="text-xl font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">ID</p>
          <p className="truncate text-xs max-w-[180px] bg-slate-100 rounded-md font-[family-name:var(--font-geist-mono)] p-1">
            {user?.id}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Name</p>
          <p className="truncate text-xs max-w-[180px] bg-slate-100 rounded-md font-[family-name:var(--font-geist-mono)] p-1">
            {user?.name}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Email</p>
          <p className="truncate text-xs max-w-[180px] bg-slate-100 rounded-md font-[family-name:var(--font-geist-mono)] p-1">
            {user?.email}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Role</p>
          <p className="truncate text-xs max-w-[180px] bg-slate-100 rounded-md font-[family-name:var(--font-geist-mono)] p-1">
            {user?.role}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Two Factor Authentification</p>
          <Badge variant={user?.isTwoFactorEnabled ? 'success' : 'destructive'}>
            {user?.isTwoFactorEnabled ? 'ON' : 'OFF'}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}

export default UserInfo
