const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div')
      box.classList.add('box')
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
      boxesContainer.appendChild(box)
    }
  }
}

// 创建花瓣效果
function createPetals() {
  const petalCount = 50
  const colors = ['#f1c40f', '#e74c3c', '#9b59b6', '#2ecc71', '#e67e22']
  
  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement('div')
    petal.classList.add('petal')
    
    // 随机位置
    petal.style.left = `${Math.random() * 100}vw`
    
    // 随机大小
    const size = Math.random() * 15 + 5
    petal.style.width = `${size}px`
    petal.style.height = `${size}px`
    
    // 随机颜色
    petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    
    // 随机旋转角度
    petal.style.transform = `rotate(${Math.random() * 360}deg)`
    
    // 随机动画持续时间
    const duration = Math.random() * 10 + 10
    petal.style.animationDuration = `${duration}s`
    
    // 随机动画延迟
    petal.style.animationDelay = `${Math.random() * 10}s`
    
    document.body.appendChild(petal)
  }
}

createBoxes()
createPetals()
