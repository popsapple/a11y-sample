<script lang="ts">
	import { onMount } from 'svelte';
    import { register, type SwiperContainer } from 'swiper/element/bundle';
    
    register();
  
    const slides = ['','',''];
    let activeIndex = 0;
    let onfirst = true;
    const onInit = (e: any) => {
      console.log('initdfsdf',e)
    };
    const onProgress = (e: any) => {
      const [swiper, progress] = e.detail;
      console.log(progress)
    };
    const onSlideChange = (e: any) => {
      console.log('slide changed');
      if(customswiper?.swiper?.activeIndex !== undefined) activeIndex = customswiper?.swiper?.activeIndex;
      if(slides[activeIndex]) {
        setTimeout(() => {
          (slides[activeIndex] as any).focus();
        },100)
       }
      onfirst = false;
    }
    let customswiper: SwiperContainer;
    const onMove = (idx: number) => {
      if(!customswiper) return;
      customswiper?.swiper?.slideTo(idx);
    }
    onMount(()=>{
      customswiper?.swiper?.update();
    })
  </script>
  <p>
    슬라이더 이전 글
    <button>이전 버튼</button>
  </p>
  <div class="wrapper_wrapper">
  <div class="wrapper">
    <swiper-container
      bind:this={customswiper}
      on:progress={onProgress}
      on:slidechange={onSlideChange}
      on:init={onInit}
      id="slide"
      observer={true}
      observeParents={true}
      initialSlide=0
      slidesPerView={1}
    >
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <swiper-slide tabindex={activeIndex === 0 || onfirst ? 0 : -1} id="slide1" bind:this={slides[0]}>
        <p>첫번째 슬라이더 시작 글</p>
        <button tabindex={activeIndex === 0 ? 0 : -1} on:click={()=>alert("1-1")}>1-1</button>
        <button tabindex={activeIndex === 0 ? 0 : -1} on:click={()=>alert("1-2")}>1-2</button>
        <button tabindex={activeIndex === 0 ? 0 : -1} on:click={()=>alert("1-3")}>1-3</button>
        <p>첫번째 슬라이더 마무리 글</p>
      </swiper-slide>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <swiper-slide tabindex={activeIndex === 1 ? 0 : -1}  id="slide2" bind:this={slides[1]}>
        <p>두번째 슬라이더 시작 글</p>
        <button tabindex={activeIndex === 1 ? 0 : -1} on:click={()=>alert("2-1")}>2-1</button>
        <button tabindex={activeIndex === 1 ? 0 : -1} on:click={()=>alert("2-2")}>2-2</button>
        <button tabindex={activeIndex === 1 ? 0 : -1} on:click={()=>alert("2-3")}>2-3</button>
        <p>두번째 슬라이더 마무리 글</p>
      </swiper-slide>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <swiper-slide tabindex={activeIndex === 2 ? 0 : -1} id="slide3" bind:this={slides[2]}>
        <p>세번째 슬라이더 시작 글</p>
        <button tabindex={activeIndex === 2 ? 0 : -1} on:click={()=>alert("3-1")}>3-1</button>
        <button tabindex={activeIndex === 2 ? 0 : -1} on:click={()=>alert("3-2")}>3-2</button>
        <button tabindex={activeIndex === 2 ? 0 : -1} on:click={()=>alert("3-3")}>3-3</button>
        <p>세번째 슬라이더 마무리 글</p>
      </swiper-slide>
    </swiper-container>
  </div>
</div>
  <div id="tools">
    <button disabled={activeIndex === 0 ? true : false} on:click={() =>customswiper?.swiper?.slidePrev()}>이전</button>
    <button disabled={activeIndex === 2 ? true : false} on:click={() =>customswiper?.swiper?.slideNext()}>다음</button>
    <ul class="indigator">
      <li><button class={activeIndex === 0 ? 'active' : ''} aria-labelledby="slide1" on:click={() =>onMove(0)}>첫번째 슬라이드 {activeIndex === 0 ? '열림' : '닫힘'}</button></li>
      <li><button class={activeIndex === 1 ? 'active' : ''} aria-labelledby="slide2" on:click={() =>onMove(1)}>두번째 슬라이드 {activeIndex === 1 ? '열림' : '닫힘'}</button></li>
      <li><button class={activeIndex === 2 ? 'active' : ''} aria-labelledby="slide3" on:click={() =>onMove(2)}>세번째 슬라이드 {activeIndex === 2 ? '열림' : '닫힘'}</button></li>
    </ul>
  </div>
  <p>
    슬라이더 이후 글
    <button>이후 버튼</button>
  </p>
  <style lang="scss">
    p {
        font-size: 14px;
    }
    #tools {
      > * {
        display: inline-block;
        font-size: 14px;
      }
      li {
        display: inline-block;
        margin: 5px;
        button {
          width: 10px;
          height: 10px;
          font-size: 0px;
          border:0px;
          border-radius: 20px;
          background: gray;
          &.active {
            background: blue;
          }
        }
      }
    }
    swiper-container {
      font-size: 16px;
      height:800px;
      swiper-slide {
        box-sizing: border-box;
        &:nth-child(odd) {
          background: skyblue;
        }
        &:nth-child(even) {
          background: pink;
        }
        &:focus {
          border: 1px solid black;
        }
      }
    }
    .wrapper {
      width: 810px;
      padding: 4px;
      overflow: hidden;
    }
  </style>