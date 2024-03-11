import { FC } from 'react'
import Button from '../../components/ui/Button'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

interface pageProps {
  
}

const page = async ({}) => {

  //we get the session from NextAuth
  const session = await getServerSession(authOptions)

  return <pre>{JSON.stringify(session)}</pre>

}

export default page