// script.js
document.addEventListener('DOMContentLoaded', () => {
    // 모든 '자세히 보기' 버튼을 선택합니다.
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    // 각 버튼에 클릭 이벤트 리스너를 추가합니다.
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 버튼이 속한 부모 요소(h3)의 다음 형제 요소(숨겨진 내용이 담긴 div)를 찾습니다.
            const content = button.closest('.example-step').querySelector('.hidden-content');

            // 'collapsed' 클래스가 있는지 확인하여 현재 상태를 파악합니다.
            if (content.classList.contains('collapsed')) {
                // 내용 확장 (보이게 하기)
                content.classList.remove('collapsed'); // 'collapsed' 클래스 제거하여 max-height:0, opacity:0 해제
                content.style.maxHeight = content.scrollHeight + 'px'; // 실제 높이로 max-height 설정하여 부드러운 전환 시작
                button.textContent = '숨기기'; // 버튼 텍스트 변경

                // 전환이 끝난 후 max-height를 초기화하여 내용이 자연스럽게 높이를 조절하도록 합니다.
                content.addEventListener('transitionend', function handler() {
                    content.style.maxHeight = ''; // 인라인 max-height 스타일 제거
                    content.removeEventListener('transitionend', handler);
                }, { once: true });

            } else {
                // 내용 축소 (숨기기)
                // 현재 높이를 max-height에 설정하여 축소 전환을 준비합니다.
                content.style.maxHeight = content.scrollHeight + 'px';
                // DOM 강제 리플로우 (브라우저가 현재 max-height 값을 인식하도록 함)
                void content.offsetWidth;
                // max-height를 0으로 설정하여 축소 전환 시작
                content.style.maxHeight = '0';

                // 전환이 끝난 후 'collapsed' 클래스를 추가하여 최종 숨김 상태를 만듭니다.
                content.addEventListener('transitionend', function handler() {
                    content.classList.add('collapsed');
                    content.removeEventListener('transitionend', handler);
                }, { once: true });

                button.textContent = '자세히 보기'; // 버튼 텍스트 변경
            }
        });
    });
});
