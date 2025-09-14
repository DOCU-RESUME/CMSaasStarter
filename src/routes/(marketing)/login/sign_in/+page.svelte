<script lang="ts">
  import { Auth } from "@supabase/auth-ui-svelte"
  import { sharedAppearance, oauthProviders } from "../login_config"
  import { goto } from "$app/navigation"
  import { onMount } from "svelte"
  import { page } from "$app/stores"

  import { PUBLIC_EXTERNAL_APP_URL } from "$env/static/public"

  let { data } = $props()
  let { supabase } = data

  onMount(() => {
    supabase.auth.onAuthStateChange((event) => {
      // Redirect to account after successful login
      if (event == "SIGNED_IN") {
        // Delay needed because order of callback not guaranteed.
        // Give the layout callback priority to update state or
        // we'll just bounch back to login when /account tries to load
        setTimeout(() => {
          goto("/account")
        }, 1)
      }
    })
  })

  // onMount(() => {
  //   supabase.auth.onAuthStateChange((event, session) => {
  //     // Verifica se o evento é de login E se a sessão existe
  //     if (event === "SIGNED_IN" && session) {
  //       // Pega os tokens diretamente da sessão
  //       const { access_token, refresh_token } = session

  //       // Constrói a URL final para a sua aplicação Vue
  //       const redirectUrl = new URL(PUBLIC_EXTERNAL_APP_URL)
  //       redirectUrl.hash = `access_token=${access_token}&refresh_token=${refresh_token}`

  //       // Redireciona o navegador para a aplicação externa.
  //       // Usamos `window.location.replace` para que o usuário não possa
  //       // voltar para a página de login com o botão "voltar" do navegador.
  //       setTimeout(() => {
  //         window.location.replace(redirectUrl.href)
  //       }, 1)
  //     }
  //   })
  // })
</script>

<svelte:head>
  <title>Entrar</title>
</svelte:head>

{#if $page.url.searchParams.get("verified") == "true"}
  <div role="alert" class="alert alert-success mb-5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      /></svg
    >
    <span>Email verificado! Por favor, entre.</span>
  </div>
{/if}
<h1 class="text-2xl font-bold mb-6">Entrar</h1>
<Auth
  supabaseClient={data.supabase}
  view="sign_in"
  redirectTo={`${data.url}/auth/callback`}
  providers={oauthProviders}
  socialLayout="horizontal"
  showLinks={false}
  appearance={sharedAppearance}
  additionalData={undefined}
/>
<div class="text-l text-slate-800 mt-4">
  <a class="underline" href="/login/forgot_password">Esqueceu a senha?</a>
</div>
<div class="text-l text-slate-800 mt-3">
  Não tem uma conta? <a class="underline" href="/login/sign_up">Inscreva-se</a>.
</div>
