import React from 'react'
import { useRouter } from 'next/router'
import { Button, Grid, Heading } from '@chakra-ui/react'

const some = () => {
	const { push, asPath } = useRouter()

	const handleSignInAgain = () => push(`/auth/signin?callbackUrl=${asPath}`)
	return <Grid>
		<>
			<Heading>You have already signed out</Heading>
			<Button onClick={handleSignInAgain}>SignIn again</Button>
		</>
	</Grid>
}

export default some
