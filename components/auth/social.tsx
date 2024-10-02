import { Button } from '@/components/ui/button'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { signIn } from 'next-auth/react'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

interface SocialProps {
  label: string
}

const Social = ({ label }: SocialProps) => {
  const handleClick = (provider: 'google' | 'github') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    })
  }

  return (
    <div className="w-full flex flex-col gap-y-3">
      <Button
        size="lg"
        className="gap-x-2 w-full"
        variant="outline"
        onClick={() => handleClick('google')}
      >
        <FcGoogle className="w-5 h-5" />
        {label?.[0] + label?.toLocaleLowerCase().replace('s', '')} with Google
      </Button>
      <Button
        size="lg"
        className="gap-x-2 w-full"
        variant="outline"
        onClick={() => handleClick('github')}
      >
        <FaGithub className="w-5 h-5" />
        {label?.[0] + label?.toLocaleLowerCase().replace('s', '')} with GitHub
      </Button>
    </div>
  )
}

export default Social
