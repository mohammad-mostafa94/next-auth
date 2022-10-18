import React from 'react'
import { useRouter } from 'next/router'
import { Heading, Button, Grid } from '@chakra-ui/react'
import { useSession, signIn, signOut } from 'next-auth/react'

const Home = () => {
	const { data: session } = useSession()

	console.log("session ==",session);
	const { push, asPath } = useRouter()

	const handleSignOut = async () => {
		const data = await signOut({ redirect: false, callbackUrl: '/singnedout' })
		push(data.url)
	}

	const handleSignIn = () => push(`/auth/signin?callbackUrl=${asPath}`)
	return (
		<Grid placeItems='center' gridRowGap='1rem'>
			{session ? (
				<>
					{/* <Heading>You are signed in</Heading> */}
					<Heading>Signed in as {session.user.email}</Heading>
					{/* <Button onClick={signOut}>Sign out</Button> */}
					<Button onClick={handleSignOut}>Sign out</Button>
				</>
			) : (
				<>
					<Heading>You are not signed in</Heading>

					{/* <Button onClick={signIn}>Sign in</Button> */}
					<Button onClick={handleSignIn}>Sign in</Button>
				</>
			)}
		</Grid>
	)
}

export default Home
