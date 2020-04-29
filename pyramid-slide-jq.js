drawPyramid()

$('#howHigh')
  .on('input', () => {
    console.log('input')
    drawPyramid()
  })

$('#brickSymbol')
  .on('input', () => {
    console.log('input')
    drawPyramid()
  })

function drawPyramid () {
  const pyramidDiv = $('#pyramid')
  pyramidDiv.html('')

  const height = parseInt($('#howHigh').val())
  const howHighCurrent = $('#howHighCurrent')
  howHighCurrent.text(height)
  const symbol = $('#brickSymbol').val()

  console.log('symbol', symbol)
  console.log('height', height)

  for (let y = height; y > 0; y--) {
    const numEmptyBlocks = y - 1
    const numFilledBlocks = height + 2 - y
    const rowP = $('<p></p>')

    for (let i = 0; i < numEmptyBlocks; i++) {
      const emptySpan = $('<p></p>')
      emptySpan.html('&nbsp;')
      emptySpan.css(
        {
          display: 'inline'
        }
      )
      rowP.append(emptySpan)
    }

    for (let i = 0; i < numFilledBlocks; i++) {
      const filledSpan = $('<p></p>')
      filledSpan.css(
        {
          display: 'inline'
        }
      )
      filledSpan.text(symbol)
      rowP.append(filledSpan)
    }

    pyramidDiv.append(rowP)

  }
}