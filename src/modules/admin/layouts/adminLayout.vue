<template>
  <!-- Cutieeeeeeeeeeeeee -->
  <div class="flex w-screen h-screen text-pink-900 bg-pink-50">
    <!-- Sidebar start -->
    <div class="flex flex-col items-center w-16 pb-4 overflow-auto border-r border-pink-200 bg-pink-100 shadow-lg">
      <a class="flex items-center justify-center flex-shrink-0 w-full h-16 bg-pink-300 rounded-b-xl" href="#">
        <svg class="w-8 h-8 text-pink-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
        </svg>
      </a>
      <a class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded-lg hover:bg-pink-200" href="#">
        <svg class="w-5 h-5 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
      </a>
      <a class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded-lg hover:bg-pink-200" href="#">
        <svg class="w-5 h-5 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      </a>
      <a class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded-lg hover:bg-pink-200" href="#">
        <svg class="w-5 h-5 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
        </svg>
      </a>
      <a class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded-lg hover:bg-pink-200" href="#">
        <svg class="w-5 h-5 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
      </a>
      <a class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded-lg hover:bg-pink-200" href="#">
        <svg class="w-5 h-5 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
        </svg>
      </a>
      <a class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 mt-auto rounded-lg hover:bg-pink-200" href="#">
        <svg class="w-5 h-5 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </a>
    </div>

    <!-- Navigation start -->
    <div class="flex flex-col w-56 border-r border-pink-200 bg-pink-100 shadow-lg">
      <button class="relative text-sm focus:outline-none group">
        <div class="flex items-center justify-between w-full h-16 px-4 border-b border-pink-200 hover:bg-pink-200">
          <span class="font-medium">Dropdown</span>
          <svg class="w-4 h-4 text-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </div>
        <div class="absolute z-10 flex-col items-start hidden w-full pb-1 bg-pink-50 shadow-lg group-focus:flex rounded-b-lg">
          <a class="w-full px-4 py-2 text-left hover:bg-pink-200 rounded" href="#">Menu Item 1</a>
          <a class="w-full px-4 py-2 text-left hover:bg-pink-200 rounded" href="#">Menu Item 2</a>
          <a class="w-full px-4 py-2 text-left hover:bg-pink-200 rounded" href="#">Menu Item 3</a>
        </div>
      </button>
      <div class="flex flex-col flex-grow p-4 overflow-auto">
        <RouterLink class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded-lg hover:bg-pink-200" to="/admin">
          <span class="leading-none">Dashboard</span>
        </RouterLink>
        <RouterLink class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded-lg hover:bg-pink-200" to="/admin/products">
          <span class="leading-none">Products</span>
        </RouterLink>
        <a class="flex items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium bg-pink-200 rounded-lg hover:bg-pink-300" href="#">
          <svg class="w-5 h-5 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
          </svg>
          <span class="ml-2 leading-none">New Item</span>
        </a>
      </div>
    </div>

    <!-- Main content start -->
    <div class="flex flex-col flex-grow">
      <div class="flex items-center flex-shrink-0 h-16 px-8 border-b border-pink-200 bg-pink-200">
        <h1 class="text-lg font-medium">Welcome, <span class="text-pink-600 font-bold">{{AuthStore.username}}</span>!</h1>
        <button
          @click="$router.push('/')"
          class="flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded-lg bg-pink-300 text-pink-900 hover:bg-pink-400"
        >
          Home
        </button>
        <!-- Logout Button -->
        <button
          @click="AuthStore.logout()"
          type="button"
          class="mr-3 hidden bg-pink-600 py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-pink-300 md:mr-0 md:inline-block rounded-lg"
        >
          Logout
        </button>
        <button class="relative ml-2 text-sm focus:outline-none group">
          <div class="flex items-center justify-between w-10 h-10 rounded-lg hover:bg-pink-300">
            <svg class="w-5 h-5 mx-auto text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
            </svg>
          </div>
          <div class="absolute right-0 flex-col items-start hidden w-40 pb-1 bg-pink-50 border border-pink-200 shadow-lg group-focus:flex rounded-lg">
            <a class="w-full px-4 py-2 text-left hover:bg-pink-200 rounded" href="#">Menu Item 1</a>
            <a class="w-full px-4 py-2 text-left hover:bg-pink-200 rounded" href="#">Menu Item 2</a>
            <a class="w-full px-4 py-2 text-left hover:bg-pink-200 rounded" href="#">Menu Item 3</a>
          </div>
        </button>
      </div>
      <div class="flex-grow p-6 overflow-auto bg-pink-50 rounded-b-2xl">
        <RouterView />
      </div>
    </div>
  </div>

  <a
    class="fixed flex items-center justify-center h-8 pr-2 pl-1 bg-pink-500 rounded-full bottom-0 right-0 mr-4 mb-4 shadow-lg text-pink-100 hover:bg-pink-600"
    href="https://twitter.com/lofiui"
    target="_top"
  >
    <div class="flex items-center justify-center h-6 w-6 bg-pink-400 rounded-full">
      <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <g>
          <path
            d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
          ></path>
        </g>
      </svg>
    </div>
    <span class="text-sm ml-1 leading-none">@lofiui</span>
  </a>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/modules/auth/stores/authStores';

const AuthStore = useAuthStore();
</script>

<style scoped></style>
