<template>
  <section class="container">
    <SectionHead title="Gallery" style="position: sticky; top: 0;" />
    <no-ssr placeholder="Loading...">
      <agile ref="main" class="main" :options="options1" :as-nav-for="asNavFor1">
        <div v-for="(slide, index) in slides" :key="index" class="slide" :class="`slide--${index}`">
          <img v-lazy="slide" />
        </div>
      </agile>
      <agile ref="thumbnails" class="thumbnails" :options="options2" :as-nav-for="asNavFor2">
        <div v-for="(slide, index) in slides" :key="index" class="slide slide--thumbnail" :class="`slide--${index}`" @click="$refs.thumbnails.goTo(index)">
          <img v-lazy="slide" />
        </div>
        <template slot="prevButton">
          <Picture fileName="arrow-left" />
        </template>
        <template slot="nextButton">
          <Picture fileName="arrow-right" />
        </template>
      </agile>
    </no-ssr>
  </section>
</template>
<style scoped>
section {
  margin-top: 100px;
}
</style>
<script>
import SectionHead from '~/components/SectionHead.vue'
import Picture from '~/components/Picture.vue'
export default {
  components: {
    SectionHead,
    Picture
  },
  data () {
    return {
      asNavFor1: [],
      asNavFor2: [],
      options1: {
        autoplaySpeed: 4500,
        dots: false,
        fade: true,
        navButtons: false,
        unagile: true,
        responsive: [
          {
            breakpoint: 768,
            settings: { unagile: false }
          }
        ]
      },
      options2: {
        autoplay: true,
        centerMode: true,
        autoplaySpeed: 4500,
        dots: false,
        navButtons: false,
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 1008,
            settings: {
              navButtons: true
            }
          }
        ]
      },
      slides: [
        '/images/gallery/ywc17/1.jpg',
        '/images/gallery/ywc17/2.jpg',
        '/images/gallery/ywc17/3.jpg',
        '/images/gallery/ywc17/4.jpg',
        '/images/gallery/ywc17/5.jpg',
        '/images/gallery/ywc17/6.jpg',
        '/images/gallery/ywc17/7.jpg',
        '/images/gallery/ywc17/8.jpg',
        '/images/gallery/ywc17/9.jpg',
        '/images/gallery/ywc17/10.jpg',
        '/images/gallery/ywc17/11.jpg',
        '/images/gallery/ywc17/12.jpg',
        '/images/gallery/ywc17/13.jpg',
        '/images/gallery/ywc17/14.jpg',
        '/images/gallery/ywc17/15.jpg',
        '/images/gallery/ywc17/16.jpg'
      ]
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.asNavFor1.push(this.$refs.thumbnails)
      this.asNavFor2.push(this.$refs.main)
    })
  }
}
</script>

<style lang="sass" scoped>
img
  background: url(~assets/images/loading.svg) no-repeat
  background-size: 64px
  background-position: center
.main
  max-width: 720px
  margin: 0 auto
  margin-bottom: 30px
  padding-top: 20px
  padding-bottom: 20px
  background-image: url(~assets/images/frame-upleft.png), url(~assets/images/frame-downright.png)
  background-position: top left, bottom right
  background-repeat: no-repeat, no-repeat
  @media (max-width:768px)
    display: none

.thumbnails
  margin: 0 -5px
  width: calc(100% + 10px)
  background: none

  @media (max-width:768px)
    padding-top: 8px
    padding-bottom: 8px

    background-size: 70px
    background-image: url(~assets/images/frame-upleft.png), url(~assets/images/frame-downright.png)
    background-position: calc(51% - 115px) 0%, calc(50% + 108px) 100%
    background-repeat: no-repeat, no-repeat
</style>
<style lang="sass">
.agile
  &__nav-button
    background: transparent
    border: none
    color: #ccc
    cursor: pointer
    font-size: 24px
    transition-duration: .3s

    .thumbnails &
      position: absolute
      top: 50%
      transform: translateY(-50%)

      &--prev
        user-select: none
        left: -30px

      &--next
        user-select: none
        right: -30px

    &:hover
      color: #888

  &__dot
    margin: 0 10px

    button
      background-color: #eee
      border: none
      border-radius: 50%
      cursor: pointer
      display: block
      height: 10px
      font-size: 0
      line-height: 0
      margin: 0
      padding: 0
      transition-duration: .3s
      width: 10px

    &--current,
    &:hover
      button
        background-color: #888

.slide
  align-items: center
  box-sizing: border-box
  color: #fff
  display: flex
  height: 450px
  justify-content: center

  &--thumbnail
    cursor: pointer
    height: 150px
    padding: 0 5px
    transition: opacity .3s

    &:hover
      opacity: .75

    @media (max-width:768px)
      height: 180px

  img
    height: 100%
    object-fit: contain
    object-position: center
    width: 100%
</style>
