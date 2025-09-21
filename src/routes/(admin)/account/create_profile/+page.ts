import { _hasFullProfile } from "../+layout.js"
import { redirect } from "@sveltejs/kit"
import { PUBLIC_EXTERNAL_APP_URL } from "$env/static/public"

export async function load({ parent }) {
  const data = await parent()

  // They completed their profile! Redirect to "Select a Plan" screen.
  if (_hasFullProfile(data?.profile)) {
    redirect(303, PUBLIC_EXTERNAL_APP_URL)
  }

  return data
}
