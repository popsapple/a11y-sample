<script lang="ts">
    import video from '../assets/sample.mp4';
    import stt from '../assets/sample.vtt';
    let vid:HTMLVideoElement;
</script>
<figure>
    <img src="https://textbook.visang.com/upload/book/202001/20200130171546160.jpg" alt="비상교육 중등 역사교과서">
    <img src="https://textbook.visang.com/upload/book/201902/20190221203618718.jpg" alt="비상교육 고등 문학교과서">
    <img src="https://textbook.visang.com/upload/Book/201802/20180211114538601.jpg" alt="비상교육 중등 사회교과서">
    <video bind:this={vid} controls={true} aria-label="비상교과서 비디오">
        <source src={video} />
        <track default src={stt} />
    </video>
    <figcaption><strong>다양한 비상 교육 교과서</strong> 비상의 교과서는 아름다움을 추구 합니다</figcaption>
</figure>
<button on:click={() => {
    if(!vid) return;
    vid.play();
}} aria-label="비상교과서 비디오 재생 버튼">재생</button>
<button on:click={() => {
    if(!vid) return;
    vid.pause();
}} aria-label="비상교과서 비디오 정지 버튼">멈춤</button>
<br />
<br />
<svg 
    xmlns="http://www.w3.org/2000/svg" 
    shape-rendering="geometricPrecision" 
    text-rendering="geometricPrecision" 
    image-rendering="optimizeQuality" 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    viewBox="0 0 512 427.743" 
    role="graphics-document document"
    width="512" height="423"
>
    <title>집(Home: '고향' 같은 느낌의)</title>
    <g role="img" aria-label="배경">
        <desc>파란 하늘과 푸른 초원</desc>
        <rect fill="lightSkyBlue" height="100%" width="100%" />
        <rect fill="#6a2" y="400" width="100%" height="100" />
    </g>
    <g
       role="graphics-object group"
       aria-labelledby="house-label"
    >
        <desc>3개의 건물로 된 집</desc>
        <path fill="#363C56" aria-label="집 외곽선" fill-rule="nonzero" d="M496.412 199.153v228.588H369.568v.002H143.155v-.002H15.538V199.153l-.033.005c-14.268 5.231-22.261-16.401-8.021-21.701 23.799-8.363 99.647-18.118 135.671-23.948v-40.488l110.834-79.314 115.579 82.062v37.926c36.039 5.816 111.142 15.416 134.897 23.762a11.534 11.534 0 016.485 6.029 11.55 11.55 0 01.321 8.848 11.541 11.541 0 01-6.029 6.484 11.545 11.545 0 01-8.797.34l-.033-.005z"/>
        <path fill="#D93133" aria-label="가운데의 빨간 지붕" fill-rule="nonzero" d="M388.476 92.085c6.807 4.844 8.399 14.289 3.556 21.098-4.844 6.807-14.29 8.4-21.098 3.556L253.989 33.707l-117.019 83.74c-6.808 4.844-16.254 3.252-21.098-3.556-4.843-6.808-3.251-16.254 3.557-21.098L244.904 3.004c5.123-3.827 12.329-4.108 17.821-.202l125.751 89.283z"/>
        <path fill="#363C56" aria-label="굴뚝"d="M436.986 123.304h33.702v40.967l-33.702-6.863z"/>
        <path fill="#F8EFE0" aria-label="노란색의 벽"  d="M369.54 177.592v242.854h119.577V197.913L369.54 177.592zm-227.131 0v242.854H22.833V197.913l119.576-20.321zm8.041 242.857h211.823V110.59L253.989 33.707 150.45 107.801v312.648z"/>
        <g
            role="graphics-object group"
        >
            <desc>집 바깥면에 있는 창문과 문</desc>
            <path fill="#313A58" aria-label="가운데 창문 틀" fill-rule="nonzero" d="M256.359 105.075c26.888 0 48.878 21.988 48.878 48.876V265.85h-97.753V153.951c0-26.894 21.982-48.876 48.875-48.876zM304.91 425.92h-97.093V317.532h97.093z"/>
            <path fill="#363C56" aria-label="창문 유리" fill-rule="nonzero" d="M51.7 398.913v-61.557h69.541v67.028H51.7v-5.471zm338.959 0v-61.557H460.2v67.028h-69.541v-5.471zm34.771-184.044c19.12 0 34.77 15.653 34.77 34.771v61.558h-69.541V249.64c0-19.13 15.64-34.771 34.771-34.771zm-338.959 0c19.12 0 34.77 15.653 34.77 34.771v61.558H51.7V249.64c0-19.13 15.641-34.771 34.771-34.771z"/>
            <path fill="#ABB9BC" aria-label="창문 유리" d="M299.769 323.003v97.446h-40.863v-97.446h40.863zm96.36 19.823v25.308h26.563v-25.308h-26.563zm26.565-122.357c-14.847 1.391-26.565 13.984-26.565 29.171v15.23h26.565v-44.401zm-26.565 49.873v35.385h26.565v-35.385h-26.565zm32.037 35.385h26.563v-35.385h-26.563v35.385zm26.563-40.857v-15.23c0-15.194-11.719-27.78-26.563-29.171v44.401h26.563zm-58.6 108.736v25.307h26.563v-25.307h-26.563zm32.036 25.307h26.564v-25.307h-26.564v25.307zm26.564-30.779v-25.308h-26.564v25.308h26.564zM57.171 342.826v25.308h26.563v-25.308H57.171zm26.564-122.357c-14.846 1.391-26.564 13.984-26.564 29.171v15.23h26.564v-44.401zm-26.564 49.873v35.385h26.564v-35.385H57.171zm32.036 35.385h26.563v-35.385H89.207v35.385zm26.563-40.857v-15.23c0-15.194-11.718-27.78-26.563-29.171v44.401h26.563zM57.171 373.606v25.307h26.563v-25.307H57.171zm32.035 25.307h26.564v-25.307H89.206v25.307zm26.564-30.779v-25.308H89.206v25.308h26.564zm143.328-257.499c22.611 1.425 40.668 20.371 40.668 43.316v23.881h-40.668v-67.197zm40.668 72.669v77.075h-40.668v-77.075h40.668zm-46.14 77.075h-40.671v-77.075h40.671v77.075zm-40.671-82.547v-23.881c0-22.957 18.058-41.893 40.671-43.316v67.197h-40.671zm40.863 242.617h-40.86v-97.446h40.86v97.446z"/>
        </g>
    </g>
    <text id="house-label"
        font-family="cursive" font-size="36px" 
    x="70" y="50">나의 집</text>
</svg>

<style>
    * {
        font-size: 0px;
    }
    figcaption,button {
        font-size: 14px;
    }
    img {
        display: inline-block;
        vertical-align: top;
        width: 200px;
        
    }
    video {
        display: block;
        width: 200px;
        
    }
</style>