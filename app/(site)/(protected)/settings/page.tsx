import SettingsForm from '@/components/auth/settings-form'
import { currentUser } from '@/lib/auth'

const SettingsPage = async () => {
  const user = await currentUser()

  return <SettingsForm user={user} />
}

export default SettingsPage
