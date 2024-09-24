'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Header from '@/components/auth/header'
import BackButton from '@/components/auth/back-button'
import Social from '@/components/auth/social'

interface CardWrapperProps {
  children: React.ReactNode
  headerLabel: string
  headerTitle?: string
  backButtonLabel: string
  backButtonHref: string
  showSocial?: boolean
}

const CardWrapper = ({
  children,
  headerLabel,
  headerTitle,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header title={headerTitle} label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter className="flex flex-col gap-y-6">
          <div className="flex items-center w-full">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="mx-4 text-sm text-gray-500">OU</span>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  )
}

export default CardWrapper
