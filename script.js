// 배경 패턴 생성
function createPattern() {
  const pattern = document.getElementById("pattern")
  for (let i = 0; i < 20; i++) {
    const item = document.createElement("div")
    item.className = "pattern-item"
    item.textContent = "+"
    item.style.top = `${Math.random() * 100}%`
    item.style.left = `${Math.random() * 100}%`
    item.style.fontSize = `${Math.random() * 20 + 10}px`
    item.style.opacity = `${Math.random() * 0.5 + 0.1}`
    item.style.transform = `rotate(${Math.random() * 360}deg)`
    pattern.appendChild(item)
  }
}

// 말풍선 애니메이션
function animateBubble() {
  const bubble = document.getElementById("animated-bubble")
  let position = 0
  let direction = 1
  const maxOffset = 8

  setInterval(() => {
    if (position >= maxOffset) {
      direction = -1
    } else if (position <= -maxOffset) {
      direction = 1
    }

    position += direction * 0.4
    bubble.style.transform = `translateY(${position}px)`
    bubble.style.transition = "transform 0.1s ease-in-out"
  }, 50)
}

// 페이지 로드 시 실행
window.addEventListener("DOMContentLoaded", () => {
  createPattern()
  animateBubble()
})

