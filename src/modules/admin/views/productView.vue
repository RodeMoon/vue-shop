import customInput from '@/modules/common/components/customInput.vue';
<template>
  <div class="bg-pink-50 px-5 py-4 rounded-lg shadow-md">
    <h1 class="text-3xl font-bold text-pink-600">
      Product: <small class="text-pink-400 font-normal">name</small>
    </h1>
    <hr class="my-4 border-pink-200" />
  </div>

  <form @submit="onSubmit" class="grid grid-cols-1 sm:grid-cols-2 bg-pink-50 px-5 gap-8 rounded-lg shadow mt-4">
    <div class="first-col">
      <!-- Primera parte del formulario -->
      <div class="mb-4">
        <label for="title" class="form-label"> Title </label>
        <customInput v-model="title" v-bind="titleAttrs" :error="errors.title" />
      </div>

      <div class="mb-4">
        <label for="slug" class="form-label">Slug</label>
        <customInput v-model="slug" v-bind="slugAttrs" :error="errors.slug" />
      </div>

      <div class="mb-4">
        <label for="description" class="form-label">Description</label>
        <CustomTextArea
          v-model="description"
          v-bind="descriptionAttrs"
          :error="errors.description"
          type="textarea"
          id="description"
          placeholder="Description"
        />
      </div>

      <div class="flex flex-row gap-3">
        <div class="mb-4">
          <label for="price" class="form-label">Price</label>
          <customInput
            v-model.number="price"
            v-bind="priceAttrs"
            :error="errors.price"
            type="number"
            id="price"
            placeholder="1"
          />
        </div>

        <div class="mb-4">
          <label for="stock" class="form-label">Stock</label>
          <customInput
            v-model.number="stock"
            v-bind="stockAttrs"
            :error="errors.stock"
            type="number"
            id="stock"
            placeholder="1"
          />
        </div>
      </div>

      <div>
        <label for="sizes" class="form-label">Sizes</label>
        <div class="flex flex-wrap gap-2 mt-2">
          <button
            @click="toggleSizes(size)"
            v-for="size of allSizes"
            :key="size"
            type="button"
            :class="[
              'p-2 rounded-lg w-14 flex-1 font-semibold transition',
              {
                'bg-pink-400 text-white shadow': hasSize(size),
                'bg-pink-100 text-pink-600 border border-pink-200': !hasSize(size),
              },
            ]"
          >
            {{ size }}
          </button>
        </div>
      </div>
    </div>

    <!-- Segunda columna -->
    <div class="first-col">
      <label for="stock" class="form-label">Images</label>
      <!-- Row with scrollable horizontal -->
      <div class="flex p-2 overflow-x-auto space-x-8 w-full h-[265px] bg-pink-100 rounded-lg border border-pink-200">
        <div v-for="image of images" :key="image.value" class="flex-shrink-0">
          <img :src="image.value" alt="title" class="w-[250px] h-[250px] rounded-lg border-2 border-pink-200 object-cover" />
        </div>
      </div>

      <!-- Upload image -->
      <div class="col-span-2 my-2">
        <label for="image" class="form-label">Upload image</label>
        <input multiple type="file" id="image" class="form-control" />
      </div>

      <div class="mb-4">
        <label for="stock" class="form-label">Genre</label>
        <select v-model="genre" v-bind="genreAttrs" class="form-control">
          <option value="" disabled selected>Select a genre</option>
          <option value="kid">Kid</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>
        <span class="text-pink-400" v-show="errors.genre">{{ errors.genre }}</span>
      </div>

      <!-- Botón para guardar -->
      <div class="my-4 text-right">
        <button
          type="submit"
          class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-lg shadow transition"
        >
          Save
        </button>
      </div>
    </div>
  </form>

  <div class="grid grid-cols-2 mt-4 gap-2">
    <pre class="bg-grey-200 p-2 rounded-lg border border-pink-200">
      {{ JSON.stringify(values, null, 2) }}
    </pre>
    <pre class="bg-red-200 p-2 rounded-lg border border-pink-300">
      {{ JSON.stringify(errors, null, 2) }}
    </pre>
    <pre class="bg-green-200 p-2 col-span-2 rounded-lg border border-pink-100">
      {{ JSON.stringify(meta, null, 2) }}
    </pre>
  </div>
</template>

<script src="./productView.ts" lang="ts"></script>

<style scoped>
@reference "@/style.css";

.form-label {
  @apply block text-pink-700 text-sm font-bold mb-2;
}

.form-control {
  @apply shadow appearance-none border border-pink-200 rounded-lg w-full py-2 px-3 text-pink-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-300 bg-pink-50;
}

input[type="file"].form-control {
  @apply bg-white border-0 px-0 py-0 shadow-none;
}
</style>
