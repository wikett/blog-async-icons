<script setup lang="ts">
import IconAsync from './components/Icons/IconAsync.vue'
import { IconName, IconType } from './types'

const menu: { id: number; icon: IconName; label: string; type?: IconType }[] = [
  {
    id: 1,
    icon: 'SmileIcon',
    label: 'Experimental Content',
    type: 'custom',
  },
  {
    id: 2,
    icon: 'BookOpenIcon',
    label: 'Research Notes',
  },
]
</script>

<template>
  <div>
    <p>Direct Usage</p>
    <IconAsync name="SmileIcon" type="custom" class="w-6 h-6 text-blue-500" />
    <IconAsync name="BookOpenIcon" class="w-6 h-6 text-blue-500" />
  </div>

  <div>
    <p>Loop Usage</p>
    <IconAsync
      v-for="(item, index) in menu"
      :name="item.icon"
      :type="item.type"
      :key="index"
      class="w-6 h-6 text-blue-500"
    />
  </div>

  <div>
    <p>Force an Error</p>
    <!-- @vue-ignore -->
    <IconAsync name="idontexist" class="w-6 h-6 text-blue-500" />
  </div>
</template>
