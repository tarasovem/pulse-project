<script setup lang="ts"></script>

<template>
  <AuthLayout>
    <RouterView v-slot="{ Component, route }">
      <Suspense v-if="Component">
        <Component :is="Component" :key="route.name">Hi</Component>
        <template #fallback>
          <div>Loading ...</div>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>
