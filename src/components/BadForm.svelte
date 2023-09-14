<script lang="ts">
    let id_ele: HTMLInputElement | null = null;
    //let warning_ele: HTMLSpanElement | null = null;
    let warning = false;
    let input_male: HTMLInputElement | null = null;
    let input_female: HTMLInputElement | null = null;
    let onSubmit = () => {
        if(id_ele !== null && id_ele.value === '') {
            warning = true;
        }else {
            alert('제출완료되었습니다')
        }
    }
</script>
<form on:submit={() =>onSubmit()}>
    아이디: <input bind:this={id_ele} type="text" /><br />
    <span class={warning? "visible" : "none"} role="alert">아이디를 입력 해주세요</span>
    <br /><br /><br />
    비밀번호: <input type="passowrd" />
    <br /><br /><br />
    성별: 남 <input type="radio" class='gender frist' name='gender' checked value='m' bind:this={input_male} /><span on:click={() => input_male ? input_male.checked = true : ''}></span>
          여 <input type="radio" class='gender' name='gender' value='f' bind:this={input_female} /><span  on:click={() => input_female ? input_female.checked = true : ''}></span>
    <br /><br />
    약관: <textbox readonly>
        제1장 총칙
        제1조 [목적]
    </textbox>
    <br /><br />
    <input type="submit" />
</form>
<style lang="scss">
    * {
        font-size: 14px;
    }
    .none {
        display: none;
    }
    input[type='radio'] {
        display: inline-block;
        opacity: 0;
        width: 0;
        height:0;
        overflow: hidden;
        &+span {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 1px solid #e0e0e0;
            border-radius: 30px;
        }
        &:checked+span {
            border: 1px solid skyblue;
            background-color: blue;
        }
    }
</style>