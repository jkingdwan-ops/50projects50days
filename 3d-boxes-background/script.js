const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

let currentScene = 1
const totalScenes = 3

// 场景切换
btn.addEventListener('click', () => {
  boxesContainer.classList.toggle('big')
  
  // 切换场景
  setTimeout(() => {
    currentScene = currentScene % totalScenes + 1
    updateScene()
  }, 200)
})

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

// 更新场景
function updateScene() {
  const boxes = document.querySelectorAll('.box')
  const body = document.body
  
  // 移除所有花瓣
  document.querySelectorAll('.petal').forEach(petal => petal.remove())
  
  switch(currentScene) {
    case 1:
      // 原始场景
      body.style.backgroundColor = '#3498db'
      boxes.forEach(box => {
        box.style.backgroundImage = "url('https://media.giphy.com/media/EZqwsBSPlvSda/giphy.gif')"
        box.style.backgroundSize = '500px 500px'
      })
      createPetals()
      break
    case 2:
      // 第二个场景
      body.style.backgroundColor = '#2c3e50'
      boxes.forEach(box => {
        box.style.backgroundImage = "url('https://picsum.photos/id/1015/500/500')"
        box.style.backgroundSize = '500px 500px'
      })
      break
    case 3:
      // 教堂背景场景
      body.style.backgroundColor = '#1a1a1a'
      boxes.forEach(box => {
        box.style.backgroundImage = "url('https://picsum.photos/id/1040/500/500')"
        box.style.backgroundSize = '500px 500px'
      })
      break
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
