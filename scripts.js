// script.js
document.addEventListener('DOMContentLoaded', () => {
    // 모든 '자세히 보기' 버튼을 선택합니다.
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    // 각 버튼에 클릭 이벤트 리스너를 추가합니다.
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 버튼이 속한 부모 요소(h3)의 다음 형제 요소(숨겨진 내용이 담긴 div)를 찾습니다.
            const content = button.closest('h3').nextElementSibling;

            // 숨겨진 내용의 가시성을 토글합니다.
            if (content.classList.contains('max-h-0')) {
                // 현재 숨겨져 있다면 보이게 합니다.
                content.classList.remove('max-h-0');
                content.classList.add('show'); // opacity를 위한 클래스 추가
                // max-height를 실제 스크롤 높이로 설정하여 부드러운 전환을 만듭니다.
                content.style.maxHeight = content.scrollHeight + 'px';
                button.textContent = '숨기기'; // 버튼 텍스트 변경
            } else {
                // 현재 보인다면 숨깁니다.
                content.style.maxHeight = '0'; // max-height를 0으로 설정하여 숨깁니다.
                content.classList.remove('show'); // opacity를 위한 클래스 제거
                content.classList.add('max-h-0');
                button.textContent = '자세히 보기'; // 버튼 텍스트 변경
            }
        });
    });
});
