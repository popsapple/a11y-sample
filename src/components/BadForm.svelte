<script lang="ts">
    let id_ele: HTMLInputElement | null = null;
    let warning_ele: HTMLSpanElement | null = null;
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
    <span class={warning? "visible" : "none"} bind:this={warning_ele}>아이디를 입력 해주세요</span>
    <br /><br /><br />
    비밀번호: <input type="passowrd" />
    <br /><br /><br />
    성별: 남 <input type="radio" class='gender frist' name='gender' checked value='m' bind:this={input_male} /><span on:click={() => input_male ? input_male.checked = true : ''}></span>
          여 <input type="radio" class='gender' name='gender' value='f' bind:this={input_female} /><span  on:click={() => input_female ? input_female.checked = true : ''}></span>
    <br /><br />
    약관: <textbox readonly>
        제1장 총칙
        제1조 [목적]
        이 약관은 (주)비상교육(이하 ‘회사’라 합니다)이 온라인으로 제공하는 비바샘(www.vivasam.com) 샘퀴즈(samquiz.vivasam.com) 사이트의 교육콘텐츠 및 제반 서비스의 이용과 온라인 교수 지원 서비스와 관련하여 회사와 이용자와의 권리 · 의무, 책임사항 및 기타 필요한 사항 등을 규정함을 목적으로 합니다.        
        제2조 [정의]
        1. 이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
        ① “이용자”라 함은, 회사의 사이트에 접속하여 이 약관에 따라 회사가 제공하는 콘텐츠 및 제반 서비스를 이용하는 회원 및 비회원을 말합니다.
        ② “회원”이라 함은, 회사와 이용계약을 체결하고 이용자 아이디를 부여 받은 이용자로서 회사의 정보를 지속적으로 제공받으며 회사가 제공하는 서비스를 지속적으로 이용할 수 있는 자를 말합니다. 회원은 아래와 같이 구분되며, 종류에 따라 서비스 이용에 제한이 있을 수 있습니다.
        - 인증회원: EPKI/GPKI 인증 또는 서류 인증 등의 교사인증을 받은 회원을 말하며, 서류 인증이란 특수학교 재직 교사, 기간제 교사, 사범대생의 경우 회사가 특정 서류(재직증명서, 교생실습학교장 확인서, 교생실습일지 등)를 통해 회원으로서의 자격 요건을 검토, 인증하는 것을 말합니다. 단, 서류인증회원의 경우 1년(사범대생은 3개월)마다 재인증을 거친 후 서비스를 이용할 수 있습니다.
        - 미인증회원: 상기에서 규정한 인증회원에 해당하지 않은 회원으로서, 콘텐츠 이용에 제한이 있습니다.
        - 정회원: 인증회원 중에서 비바샘의 모든 콘텐츠와 서비스를 이용할 수 있는 회원을 말합니다.
        - 준회원: 인증회원 중에서 비바샘이규 정한 일부 콘텐츠와 서비스를 이용할 수 있는 회원을 말합니다.
        ③ “콘텐츠”라 함은, 정보통신망이용촉진 및 정보보호 등에 관한 법률 제2조 제1항 제1호의 규정에 의한 정보통신망에서 사용되는 부호 · 문자 · 음성 · 음향 · 이미지 또는 영상 등으로 표현된 자료 또는 정보로서, 그 보존 및 이용에 있어서 효용을 높일 수 있도록 전자적 형태로 제작 또는 처리된 것을 말합니다.
        ④ “아이디”라 함은, 회원의 식별과 서비스 이용을 위하여 회원이 정하고 회사가 승인하는 영문자 또는 숫자 등의 조합을 말합니다.
        ⑤ “비밀번호”라 함은, 회원이 부여 받은 아이디와 일치되는 회원임을 확인하고 비밀보호를 위해 회원 자신이 정한 영문, 숫자 및 특수문자 조합 8자 이상, 또는 영문 및 숫자 조합 10자 이상을 말합니다.
        ⑥ “운영자(관리자)”라 함은, 서비스의 전반적인 관리와 원활한 운영을 위하여 회사에서 선정한 사람 혹은 기관(회사)을 말합니다.
        ⑦ “게시물”이라 함은, 회원이 서비스를 이용함에 있어 회사의 사이트에 게시한 문자, 부호, 음향, 화상, 동영상 등의 정보 형태의 글, 사진, 동영상 및 각종 파일과 링크, 댓글 등의 정보를 말합니다.
        2. 전항 각호의 용어를 제외한 용어의 정의는 거래 관행 및 관계 법령에 따릅니다.
        제3조 [회사정보 등의 제공]
        회사는 이 약관의 내용, 상호, 대표자명, 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호, 모사전송번호, 전자우편주소, 사업자등록번호, 개인정보관리책임자 등을 이용자가 쉽게 알 수 있도록 온라인 서비스 초기화면에 게시합니다. 다만, 약관은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.    
        제4조 [약관의 게시 등]
        회사는 이 약관을 이용자가 별도의 연결화면을 통하여 약관의 내용을 확인할 수 있도록 사이트 내에 게시합니다.
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