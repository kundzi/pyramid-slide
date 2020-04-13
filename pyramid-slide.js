document.querySelector('#howHigh')
  .addEventListener('input', e => {
    console.log('input')
    drawPyramid()
  })

document.querySelector('#brickSymbol')
  .addEventListener('input', e => {
    console.log('input')
    drawPyramid()
  })


drawPyramid()

function drawPyramid () {
  const pyramidDiv = document.getElementById('pyramid')
  pyramidDiv.innerHTML = ''

  const height = parseInt(document.querySelector('#howHigh').value)
  const howHighCurrent = document.querySelector('#howHighCurrent')
  howHighCurrent.textContent = height
  const symbol = document.querySelector('#brickSymbol').value

  console.log('symbol', symbol)
  console.log('height', height)

  for (let y = height; y > 0; y--) {
    const numEmptyBlocks = y - 1
    const numFilledBlocks = height + 2 - y
    const rowP = document.createElement('p')

    for (let i = 0; i < numEmptyBlocks; i++) {
      const emptySpan = document.createElement('p')
      emptySpan.style.display = 'inline'
      emptySpan.innerHTML = '&nbsp;'
      rowP.appendChild(emptySpan)
    }

    for (let i = 0; i < numFilledBlocks; i++) {
      const filledSpan = document.createElement('p')
      filledSpan.style.display = 'inline'
      filledSpan.textContent = symbol
      rowP.appendChild(filledSpan)
    }

    pyramidDiv.appendChild(rowP)

  }
}