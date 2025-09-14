// src/routes/(admin)/account/+page.server.ts

import { redirect } from '@sveltejs/kit'
import { PUBLIC_EXTERNAL_APP_URL } from '$env/static/public'

export const load = async ({ locals: { safeGetSession } }) => {
  const { session } = await safeGetSession()

  if (!session) {
    throw redirect(303, '/login')
  }

  const { access_token, refresh_token } = session

  const redirectUrl = new URL(PUBLIC_EXTERNAL_APP_URL)
  redirectUrl.hash = `access_token=${access_token}&refresh_token=${refresh_token}`

  throw redirect(303, redirectUrl.href)
}