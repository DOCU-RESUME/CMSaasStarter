<script lang="ts">
  import { enhance, applyAction } from "$app/forms"
  import type { SubmitFunction } from "@sveltejs/kit"
  import type { FullAutoFill } from "svelte/elements"

  let errors: { [fieldName: string]: string } = $state({})
  let loading = $state(false)
  let showSuccess = $state(false)

  interface FormField {
    id: string
    label: string
    inputType: string
    autocomplete: FullAutoFill
  }

  const formFields: FormField[] = [
    {
      id: "first_name",
      label: "First Name *",
      inputType: "text",
      autocomplete: "given-name",
    },
    {
      id: "last_name",
      label: "Last Name *",
      inputType: "text",
      autocomplete: "family-name",
    },
    {
      id: "email",
      label: "Email *",
      inputType: "email",
      autocomplete: "email",
    },
    {
      id: "phone",
      label: "Phone Number",
      inputType: "tel",
      autocomplete: "tel",
    },
    {
      id: "company",
      label: "Company Name",
      inputType: "text",
      autocomplete: "organization",
    },
    {
      id: "message",
      label: "Message",
      inputType: "textarea",
      autocomplete: "off",
    },
  ]

  const handleSubmit: SubmitFunction = () => {
    loading = true
    errors = {}
    return async ({ update, result }) => {
      await update({ reset: false })
      await applyAction(result)
      loading = false
      if (result.type === "success") {
        showSuccess = true
      } else if (result.type === "failure") {
        errors = result.data?.errors ?? {}
      } else if (result.type === "error") {
        errors = { _: "An error occurred. Please check inputs and try again." }
      }
    }
  }
</script>

<div
  class="flex flex-col lg:flex-row mx-auto my-4 min-h-[70vh] place-items-center lg:place-items-start place-content-center"
>
  <div
    class="max-w-[400px] lg:max-w-[500px] flex flex-col place-content-center p-4 lg:mr-8 lg:mb-8 lg:min-h-[70vh]"
  >
    <div class="px-6">
      <h1 class="text-2xl lg:text-4xl font-bold mb-4">Contate-nos</h1>
      <p class="text-lg">
        Fale com um de nossos profissionais de serviço para:
      </p>
      <ul class="list-disc list-outside pl-6 py-4 space-y-1">
        <li class="">Obter uma demonstração ao vivo</li>
        <li class="">Discutir suas necessidades específicas</li>
        <li>Obter uma cotação</li>
        <li>Responder a quaisquer perguntas técnicas que você tenha</li>
      </ul>
      <p>
        Assim que você preencher o formulário, entraremos em contato com você! *
      </p>
    </div>
  </div>

  <div
    class="flex flex-col grow m-4 lg:ml-10 min-w-[300px] stdphone:min-w-[360px] max-w-[400px] place-content-center lg:min-h-[70vh]"
  >
    {#if showSuccess}
      <div class="flex flex-col place-content-center lg:min-h-[70vh]">
        <div
          class="card card-bordered shadow-lg py-6 px-6 mx-2 lg:mx-0 lg:p-6 mb-10"
        >
          <div class="text-2xl font-bold mb-4">Obrigado!</div>
          <p class="">
            Recebemos sua mensagem e entraremos em contato em breve.
          </p>
        </div>
      </div>
    {:else}
      <div class="card card-bordered shadow-lg p-4 pt-6 mx-2 lg:mx-0 lg:p-6">
        <form
          class="form-widget flex flex-col"
          method="POST"
          action="?/submitContactUs"
          use:enhance={handleSubmit}
        >
          {#each formFields as field}
            <label for={field.id}>
              <div class="flex flex-row">
                <div class="text-base font-bold">{field.label}</div>
                {#if errors[field.id]}
                  <div class="text-red-600 grow text-sm ml-2 text-right">
                    {errors[field.id]}
                  </div>
                {/if}
              </div>
              {#if field.inputType === "textarea"}
                <textarea
                  id={field.id}
                  name={field.id}
                  autocomplete={field.autocomplete}
                  rows={4}
                  class="{errors[field.id]
                    ? 'input-error'
                    : ''} h-24 input-sm mt-1 input input-bordered w-full mb-3 text-base py-4"
                ></textarea>
              {:else}
                <input
                  id={field.id}
                  name={field.id}
                  type={field.inputType}
                  autocomplete={field.autocomplete}
                  class="{errors[field.id]
                    ? 'input-error'
                    : ''} input-sm mt-1 input input-bordered w-full mb-3 text-base py-4"
                />
              {/if}
            </label>
          {/each}

          {#if Object.keys(errors).length > 0}
            <p class="text-red-600 text-sm mb-2">
              Please resolve above issues.
            </p>
          {/if}

          <button class="btn btn-primary {loading ? 'btn-disabled' : ''}"
            >{loading ? "Submitting" : "Submit"}</button
          >
        </form>
      </div>
    {/if}
  </div>
</div>
