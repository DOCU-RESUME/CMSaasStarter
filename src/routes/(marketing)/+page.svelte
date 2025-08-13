<script lang="ts">
  const WebsiteName = "Currículo Documentado Fácil"
  const WebsiteDescription =
    "Transforme seu Lattes em um currículo documentado, pronto para concursos e progressão de carreira. Economize tempo e destaque-se com provas."

  const features = [
    {
      name: "Importe seu Lattes",
      description:
        "Faça o upload do seu Lattes (XML) e veja a mágica acontecer. Em segundos, toda a sua estrutura de currículo é montada.",
      svgContent: `<path d="M4.01207 15.7618L5.70156 10.6933C6.46758 8.39525 6.85059 7.24623 7.75684 7.03229C8.6631 6.81835 9.51953 7.67478 11.2324 9.38764L14.6114 12.7666C16.3242 14.4795 17.1807 15.3359 16.9667 16.2422C16.7528 17.1484 15.6038 17.5314 13.3057 18.2975L8.23724 19.987C5.47183 20.9088 4.08912 21.3697 3.35924 20.6398C2.62936 19.9099 3.09026 18.5272 4.01207 15.7618Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/> <path d="M12.2351 18.3461C12.2351 18.3461 11.477 16.0649 11.477 14.5552C11.477 13.0454 12.2351 10.7643 12.2351 10.7643M8.06517 19.4833C8.06517 19.4833 7.42484 16.7314 7.307 14.9343C7.11229 11.965 8.06517 7.35254 8.06517 7.35254" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,
    },
    {
      name: "Anexe Comprovantes",
      description:
        "Vincule facilmente PDFs (certificados, publicações, portarias) a cada item. Seu currículo agora tem o peso da prova.",
      svgContent: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><polyline points="14 2 14 8 20 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></polyline><path d="M10.42 16.58a2.12 2.12 0 1 0 2.12-2.12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.54 14.46 15 12l-2.54-2.46" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>`,
    },
    {
      name: "Exporte em PDF",
      description:
        "Gere um PDF profissional e interativo. Cada item documentado inclui um link direto para o comprovante, pronto para a banca.",
      svgContent: `<path d="M7 9C7 9.55228 6.55228 10 6 10C5.44772 10 5 9.55228 5 9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9Z" fill="currentColor"/> <path d="M7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12Z" fill="currentColor"/> <path d="M10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12Z" fill="currentColor"/> <path d="M10 9C10 9.55228 9.55228 10 9 10C8.44772 10 8 9.55228 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9Z" fill="currentColor"/> <path d="M2 11C2 8.17157 2 6.75736 2.87868 5.87868C3.75736 5 5.17157 5 8 5H16C18.8284 5 20.2426 5 21.1213 5.87868C22 6.75736 22 8.17157 22 11V13C22 15.8284 22 17.2426 21.1213 18.1213C20.2426 19 18.8284 19 16 19H8C5.17157 19 3.75736 19 2.87868 18.1213C2 17.2426 2 15.8284 2 13V11Z" stroke="currentColor" stroke-width="1.5"/> <path d="M13 12L13 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/> <path d="M16 16L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,
    },
  ]

  const testimonials = [
    {
      quote:
        "Passei um fim de semana inteiro organizando documentos para uma progressão. Com esta ferramenta, meu colega fez o mesmo em 30 minutos. É inacreditável.",
      author: "Dr. Ana Carolina S.",
      role: "Professora Universitária, UFMG",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote:
        "A paz de espírito de ter cada certificado e publicação linkado diretamente no currículo não tem preço. Essencial para qualquer um no setor público.",
      author: "Marcos Andrade",
      role: "Analista Judiciário, TJSP",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ]
</script>

<svelte:head>
  <title>{WebsiteName}</title>
  <meta name="description" content={WebsiteDescription} />
</svelte:head>

<div class="hero min-h-[70vh] bg-base-100">
  <div class="hero-content text-center py-16">
    <div class="max-w-3xl">
      <h1
        class="text-4xl md:text-6xl font-extrabold tracking-tight"
        style="line-height: 1.2;"
      >
        Pare de sofrer com papelada. <br />
        <span
          class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          Documente seu currículo em minutos.
        </span>
      </h1>
      <p
        class="mt-6 md:mt-8 text-lg md:text-xl max-w-2xl mx-auto text-base-content/80"
      >
        Importe seu Lattes, anexe seus comprovantes e gere um documento
        profissional. Foque na sua carreira, não na burocracia.
      </p>
      <div class="mt-8 md:mt-10 flex flex-wrap gap-4 justify-center">
        <a
          href="/login"
          class="btn btn-primary btn-lg px-10 text-white shadow-lg"
        >
          Criar Meu Currículo Grátis
        </a>
        <a href="#features" class="btn btn-ghost btn-lg px-10">
          Ver como funciona
        </a>
      </div>
    </div>
  </div>
</div>

<div class="py-20 bg-white" id="features">
  <div class="container mx-auto px-6">
    <div class="text-center max-w-2xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold">
        Sua trajetória profissional, agora <span class="text-primary"
          >incontestável</span
        >.
      </h2>
      <p class="mt-4 text-lg text-base-content/70">
        Em três passos simples, você transforma um processo cansativo em um
        resultado poderoso.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
      {#each features as feature, i}
        <div
          class="card bg-base-100 shadow-sm border border-base-200/50 transform hover:-translate-y-2 transition-transform duration-300"
        >
          <div class="card-body items-center text-center p-8">
            <span class="text-5xl font-black text-secondary/20 mb-2"
              >0{i + 1}</span
            >
            <div class="text-primary">
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {@html feature.svgContent}
              </svg>
            </div>
            <h3 class="card-title mt-4 text-xl">{feature.name}</h3>
            <p class="text-base-content/70">{feature.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<div class="py-20 bg-base-100">
  <div class="container mx-auto px-6 text-center">
    <h2 class="text-3xl md:text-4xl font-bold max-w-3xl mx-auto">
      De uma pilha de papéis a um <span class="text-secondary"
        >documento interativo</span
      >.
    </h2>
    <p class="mt-4 text-lg text-base-content/70 max-w-2xl mx-auto">
      Visualize o resultado final: um currículo limpo, profissional e com cada
      item comprovado por um link direto.
    </p>
    <!-- <div class="mt-10">
      <img
        src="https://i.imgur.com/example-cv.png"
        alt="Exemplo de um currículo documentado gerado pela plataforma"
        class="rounded-lg shadow-2xl max-w-4xl mx-auto border-4 border-white"
      />
    </div> -->
  </div>
</div>

<div class="py-20 bg-white">
  <div class="container mx-auto px-6">
    <div class="text-center max-w-2xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold">
        Quem usa, aprova e avança na carreira.
      </h2>
      <p class="mt-4 text-lg text-base-content/70">
        Veja o que nossos usuários estão dizendo.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
      {#each testimonials as testimonial}
        <div class="card bg-base-100 border border-base-200/50 p-6 shadow-sm">
          <div class="card-body p-2">
            <p class="text-base-content/80">"{testimonial.quote}"</p>
            <div class="flex items-center mt-6">
              <div class="avatar">
                <div class="w-12 h-12 rounded-full">
                  <img
                    src={testimonial.avatar}
                    alt="Foto de {testimonial.author}"
                  />
                </div>
              </div>
              <div class="ml-4">
                <p class="font-bold">{testimonial.author}</p>
                <p class="text-sm text-base-content/60">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<div class="hero min-h-[40vh] bg-primary text-primary-content">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h2 class="text-3xl md:text-4xl font-bold">Pronto para se destacar?</h2>
      <p class="py-6 text-lg">
        Crie sua conta gratuita e transforme sua carreira hoje. O processo é
        rápido, fácil e o resultado é impressionante.
      </p>
      <a href="/login">
        <button class="btn btn-secondary btn-lg btn-wide shadow-lg"
          >Criar meu currículo</button
        >
      </a>
    </div>
  </div>
</div>
