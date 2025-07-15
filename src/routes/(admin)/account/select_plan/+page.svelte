<script lang="ts">
  import PricingModule from "../../../(marketing)/pricing/pricing_module.svelte"
</script>

<svelte:head>
  <title>Selecionar um Plano</title>
</svelte:head>

<div
  class="text-center content-center min-h-[100vh] pb-12 mt-4 flex items-center place-content-center"
>
  <div class="flex flex-col w-full px-6">
    <div>
      <h1 class="text-2xl font-bold mb-2">Selecionar um Plano</h1>
      <div class="mb-6">
        Veja nossa <a href="/pricing" target="_blank" class="link"
          >página de preços</a
        > para detalhes.
      </div>
      <PricingModule callToAction="Selecionar Plano" />
    </div>
  </div>
</div>
