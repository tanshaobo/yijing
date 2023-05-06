<!--
 * @Author: tanshaobo
 * @Date: 2023-05-06 10:54:40
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-05-06 16:38:25
 * @Description: file content
 * @FilePath: \yijing\src\views\Home\Home.vue
-->
<template>
  <div class="home">
    <div class="BaGua">
      <div class="YU" @click="Divination">
        <div class="Base"></div>
        <div class="round">
          <div class="circle"></div>
        </div>
        <div class="round second">
          <div class="circle"></div>
        </div>
      </div>
      <div
        class="GuaBox"
        v-for="(i, j) in TypeList"
        :key="j"
        :style="{ transform: 'rotate(' + i.deg + 'deg)' }"
      >
        <Gua :Type="i.type"> </Gua>
      </div>
    </div>
    <div class="JieQian"></div>
    <!-- <ul class="">
      <li v-for="(i, j) in dataList" :key="j">
        {{ i.title }}
      </li>
    </ul> -->
  </div>
</template>

<script setup>
import Gua from '@/components/Gua.vue'

import { reactive, toRefs } from 'vue'

const state = reactive({
  TypeList: [
    { type: 0, deg: 0 },
    { type: 1, deg: 45 },
    { type: 2, deg: 90 },
    { type: 3, deg: 135 },
    { type: 4, deg: 180 },
    { type: 5, deg: 225 },
    { type: 6, deg: 270 },
    { type: 7, deg: 315 }
  ],
  currentResult: []
})

const Divination = () => {
  const arr = Math.random()
    .toString()
    .slice(2, 8)
    .split('')
    .map((i) => (parseInt(i, 10) % 2 == 0 ? 0 : 1))
  state.currentResult = arr
}

const { TypeList, currentResult } = toRefs(state)
</script>
<style lang="stylus" scoped>
.home
  display flex
  align-items center
  justify-content center
  min-height 100vh
  .BaGua
    width 600px
    height 600px
    position relative
    animation ro 1.8s ease-in-out 0s 1
    .YU
      position absolute
      width 40%
      height 40%
      left 0
      right 0
      top 0
      bottom 0
      margin auto
      border 1px solid
      border-radius 50%
      background linear-gradient(90deg, #fff 0%, #fff 50%, #000 50%, #000 100%)
      cursor pointer
      z-index 1
      .round
        position absolute
        width 50%
        height 50%
        top 0
        left 25%
        border-radius 50%
        background #FFF
        .circle
          position absolute
          width 20%
          height 20%
          left 0
          right 0
          top 0
          bottom 0
          margin auto
          background #000
          border-radius 50%
      .second
        top unset
        bottom 0
        background #000
        .circle
          background #FFF
    .GuaBox
      position absolute
      left 0
      right 0
      top 0
      margin auto
      height 50%
      width 20%
      transform-origin 50% 100%
@keyframes ro
  form
    transform rotate(0deg)
  to
    transform rotate(10800deg)
</style>
