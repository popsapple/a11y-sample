<script lang="ts">
    import video from '../assets/sample.mp4';
    import stt from '../assets/sample.vtt';
</script>
<figure>
    <img src="https://textbook.visang.com/upload/book/202001/20200130171546160.jpg" alt="비상교육 중등 역사교과서">
    <img src="https://textbook.visang.com/upload/book/201902/20190221203618718.jpg" alt="비상교육 고등 문학교과서">
    <img src="https://textbook.visang.com/upload/Book/201802/20180211114538601.jpg" alt="비상교육 중등 사회교과서">
    <video controls={true}>
        <source src={video} />
        <track default src={stt} />
    </video>
    <figcaption><strong>다양한 비상 교육 교과서</strong> 비상의 교과서는 아름다움을 추구 합니다</figcaption>
</figure>
<style>
    * {
        font-size: 14px;
    }
</style>