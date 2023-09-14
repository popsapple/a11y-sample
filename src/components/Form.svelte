<script lang="ts">
    let id_ele: HTMLInputElement | null = null;
    let warning_ele: HTMLSpanElement | null = null;
    let warning = false;
    let input_male: HTMLInputElement | null = null;
    let input_female: HTMLInputElement | null = null;
    let onSubmit = () => {
        if(id_ele !== null && id_ele.value === '') {
            warning = true;
            setTimeout(()=> {if(warning_ele) warning_ele.focus();},10)
        }else {
            alert('제출완료되었습니다')
        }
    }
    let onCheck = (ele: HTMLInputElement | null) => {
       if(ele) {
        ele.setAttribute('aira-checked',(!ele.checked) + '');
        ele.checked= !ele.checked;
       }
    }
</script>
<form on:submit={() =>onSubmit()}>
    <fieldset>
        <legend>기본사항</legend>
        <label for="id">아이디: </label><input bind:this={id_ele} id="id" type="text" /><br />
        <span class={warning? "visible" : "none"} bind:this={warning_ele} tabindex={warning == false ? -1 : 0} aria-live={warning? "assertive" : "off"}>아이디를 입력 해주세요</span>
        <label for="passowrd">비밀번호: </label><input id="passowrd" type="passowrd" />
    </fieldset>
    <fieldset>
        <legend>성별</legend>
        <label for="male">남</label><input type="radio" class='gender frist' name='gender' id="male" value='m' bind:this={input_male}/><span on:click={() => input_male ? input_male.checked = true : ''}></span>
        <label for="female">여</label><input type="radio" class='gender' name='gender' id="female" value='f' bind:this={input_female}/><span on:click={() => input_female ? input_female.checked = true : ''}></span>
    </fieldset>
    <fieldset>
        <legend>약관</legend>
        <textbox readonly>
            제1장 총칙
            제1조 [목적]
        </textbox>
    </fieldset>
    <input type="submit" />
</form>
<style lang="scss">
    * {
        font-size: 14px;
    }
    .none {
        display: none;
    }
    .visible {
        display: block;
        &:focus {
            border: 1px solid red;
        }
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