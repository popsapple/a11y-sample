<script lang="ts">
    let quicknavi: any;
    let help_open = false;
    let isAlt = false;
    function handleKeydown(event: any) {
		if(event.key.toUpperCase() === 'ALT') isAlt = true;
        if(isAlt) {
            if(event.keyCode === 40) {
                help_open = true;
                if(quicknavi) quicknavi.focus();
            }
            console.log("event",help_open);
        }
	}
    function handleKeyUp(event: any) {
        if(event === null) {
            help_open = false;
            return;
        }
		if(event.key.toUpperCase() === 'ALT') isAlt = false;
	}
</script>
<nav 
    tabIndex={help_open == false ? -1 : 0}
    aria-hidden={help_open == false ? "true" : "false"}
    bind:this={quicknavi}
>
    <a href="#section1">애국가1절 바로가기</a>
    <a href="#section2">애국가2절 바로가기</a>
    <a href="#section3">애국가3절 바로가기</a>
    <a href="#section4">애국가4절 바로가기</a>
    <button on:click={() => handleKeyUp(null)} on:keydown={() => handleKeyUp(null)} name="닫기">닫기</button>
</nav>
<section 
    role='tooltip'
>
    Alt + 화살표 아래버튼 누를시에 바로가기 메뉴가 열립니다
</section>
<main id="howtomove">
    <section id="section1" tabIndex="0"><h2>1절</h2>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />우리 나라만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라만세</section>
    <section id="section2" tabIndex="0"><h2>2절</h2>남산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리 기상일세남산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리 기상일세남산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />우리 기상일세남산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리 기상일세남산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리 기상일세</section>
    <section id="section3" tabIndex="0"><h2>3절</h2>가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편 단심일세가을 하늘 공활한데 높고 구름 없이 <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />밝은 달은 우리 가슴 일편 단심일세가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편 단심일세</section>
    <section id="section4" tabIndex="0"><h2>4절</h2>이 기상과 이 마음으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세이 기상과 이 마음으로 충성을 <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />다하여 괴로우나 즐거우나 나라 사랑하세이 기상과 이 마음으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세</section>
</main>
<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyUp} />
<style lang="scss">
    nav[aria-hidden='true'] {
        position: fixed;
        width: 100%;
        height: 0;
        overflow: hidden;
    }
    nav[aria-hidden='false'] {
        position: fixed;
        width: 100%;
        height: 100px;
        overflow: hidden;
        background: palegoldenrod;
    }
    * {
		font-size: 22px;
    }
</style>