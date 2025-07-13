<script lang="ts">
  // O nome do seu SAAS agora virá de um arquivo de configuração central
  const WebsiteName = "Currículo Documentado"
  import "../../app.css"

  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()
</script>

<div class="navbar bg-base-100 container mx-auto">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl font-bold" href="/"
      >{WebsiteName}</a
    >
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1 hidden sm:flex font-bold text-lg">
      <li class="md:mx-2"><a href="/#features">Funcionalidades</a></li>
      <li class="md:mx-2"><a href="/pricing">Planos</a></li>
      <li class="md:mx-2">
        <a href="/login" class="btn btn-primary text-white">Entrar</a>
      </li>
    </ul>
    <div class="dropdown dropdown-end sm:hidden">
      <!-- svelte-ignore a11y_label_has_associated_control -->
      <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          /></svg
        >
      </label>
      <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
      <ul
        tabindex="0"
        class="menu menu-lg dropdown-content mt-3 z-1 p-2 shadow-sm bg-base-100 rounded-box w-52 font-bold"
      >
        <li><a href="/#features">Funcionalidades</a></li>
        <li><a href="/pricing">Planos</a></li>
        <li><a href="/login">Entrar</a></li>
      </ul>
    </div>
  </div>
</div>

<div class="">
  {@render children?.()}
</div>

<!-- Spacer cresce para o rodapé ficar no final em páginas curtas -->
<div class="grow"></div>
<div class="">
  <div class="border-t max-w-[1000px] mx-auto"></div>
  <footer
    class="footer md:footer-horizontal p-10 gap-x-48 lg:gap-x-64 xl:gap-x-96 place-content-center text-base"
  >
    <nav>
      <span class="footer-title opacity-80">Navegação</span>
      <a class="link link-hover mb-1" href="/">Início</a>
      <a class="link link-hover my-1" href="/#features">Funcionalidades</a>
      <a class="link link-hover my-1" href="/pricing">Planos</a>
      <a class="link link-hover my-1" href="/contact_us">Contato</a>
    </nav>
    <aside>
      <p class="font-bold text-lg">{WebsiteName}</p>
      <p>
        Seu currículo, vivo e documentado.<br />© {new Date().getFullYear()} - Todos
        os direitos reservados.
      </p>
    </aside>
  </footer>
</div>
