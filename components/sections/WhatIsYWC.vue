<template>
  <section ref="what-section" class="container">
    <TitleBox :style="`transform: translate3d(0, ${y}px, 0);`">
      <h3 class="outline">What is</h3>
      <h3>YWC?</h3>
      <p>Creating new<br>young webmasters<br>since 2002</p>
    </TitleBox>
    <ImageBox :style="`transform: translate3d(0, ${y2}px, 0);`" />
    <BriefBox :style="`transform: translate3d(0, ${y2}px, 0);`">
      เพราะ<span class="secondaryText">ปัญหา</span><br class="hidden-mb">จะถูกแก้ไขได้<br>ด้วย<span class="secondaryText">การลงมือทำ</span>
    </BriefBox>
    <Row>
      <Column>
        <p>โอกาสเดียวที่ตัวคุณเองและสังคมจะได้รับการพัฒนาไปพร้อม ๆ กัน กับ Young Webmaster Camp ครั้งที่ 17 <span class="secondaryText">“Social Change, Arrange The World”</span> ค่ายสร้างเว็บไซต์ระดับอุดมศึกษาที่ใหญ่ที่สุด</p>
      </Column>
      <Column>
        ที่ปีนี้จะมาชวนนักศึกษาจากทั่วประเทศมาฝึกสกิลของตัวเอง พร้อม ๆ กับสร้างเว็บไซต์ที่จะช่วยแก้ไขปัญหาต่าง ๆ ในสังคมและทำให้สังคมของเราน่าอยู่ขึ้น
      </Column>
    </Row>
  </section>
</template>
<style lang="sass" scoped>
  section
    margin-top: 86px
    img
      width: 100%
      max-width: 380px
</style>
<script>
import styled, { css } from 'vue-styled-components'
import color from '~/utils/color'
import { isInViewport, getDistance } from '~/utils/dom'

const disabledParallax = css`
  transform: none !important;
`

const TitleBox = styled.div`
  position: absolute;
  z-index: 1;

  font-family: Montserrat;
  color: white;
  text-transform: uppercase;
  text-align: left;

  padding-top: 40px;

  @media screen and (max-width:768px) {
    margin-left: 2%;  
  }

  p {
    margin: 0;
    margin-top: 10px;
    width: 310px;
    color: #383838;
    color: rgba(255,255,255,0.6);
    font-size: 22px;
    @media screen and (max-width:768px) {
      font-size: 18px;
      width: 240px;
    }
  }

  h3 {
    font-size: 120px;
    height: 120px;
    line-height: 120px;
    margin: 0;
    @media screen and (max-width:768px) {
      font-size: 86px;
      height: 86px;
      line-height: 86px;
    }
  }
  h3.outline {
    color: transparent;
    text-stroke: 1.2px white;
    font-weight: normal;
    font-size: 70px;
    height: 70px;
    line-height: 70px;
    @media screen and (max-width:768px) {
      font-size: 50px;
      height: 50px;
      line-height: 50px;
    }
  }

  @media screen and (max-width:768px) {
    ${disabledParallax}
  }
`
const ImageBox = styled.div`
  width: 380px;
  max-width: 100%;
  height: 510px;
  margin: 0 auto;
  background: linear-gradient(to bottom right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1.0) 83%), url(/images/bg/whatIsYWC.jpg) no-repeat center;
  @media screen and (max-width: 768px) {
    background: linear-gradient(to top left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1.0) 85%), url(/images/bg/whatIsYWC.jpg) no-repeat center;

    ${disabledParallax}
  }
`
const BriefBox = styled.div`
  position: relative;
  z-index: 1;
  left: calc(50% + 150px);
  top: -120px;


  width: 30%;
  max-width: 330px;
  font-family: 'Maledpan';
  font-weight: bold;
  font-size: 36px;
  text-align: left;
  line-height: 48px;

  .secondaryText {
    color: ${color.main};
  }

  @media screen and (max-width:768px) {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    margin: 0 auto;
    margin-top: 33px;
    text-align: center;
    font-size: 32px;
    .hidden-mb {
      display: none;
    }
    ${disabledParallax}
  }
`

const Row = styled.div`
  display: grid;
  grid-column-gap: 85px;
  grid-row-gap: 20px;
  grid-template-columns: repeat(2, auto);
  margin-top: -80px;
  @media screen and (max-width:768px) {
    margin-top: 33px;
    grid-template-columns: 100%;
  }
`
const Column = styled.div`
  font-family: 'Sarabun';
  font-size: 20px;
  line-height: 36px;
  display: inline-grid;
  text-align: left;
  .secondaryText {
    color: ${color.main};
    font-weight: bold;
    display: inline-block;
  }
  @media screen and (max-width:768px) {
    font-size: 18px;
    text-align: center;
  }
`
export default {
  components: {
    TitleBox,
    ImageBox,
    BriefBox,
    Row,
    Column
  },
  data () {
    return {
      y: 39,
      y2: -33
    }
  },
  mounted () {
    const sectionElement = this.$refs['what-section']
    window.addEventListener('scroll', () => {
      if (isInViewport(sectionElement)) {
        const distance = getDistance(sectionElement)
        this.y = distance / 4 * 0.7 + 140
        this.y2 = distance / 4 * 1.2 + 140
      }
    })
  }
}
</script>
