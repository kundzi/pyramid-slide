printPyramid(10)
drawPyramid(10)

/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid (height) {
  for (let y = height; y > 0; y--) {
    const numEmptyBlocks = y - 1
    const numFilledBlocks = height + 2 - y
    console.log(' '.repeat(numEmptyBlocks) + '#'.repeat(numFilledBlocks))
  }
}

function drawPyramid (height) {
  document.getElementById('construction').style.display = 'none'
  const pyramidDiv = document.getElementById('pyramid')

  for (let y = height; y > 0; y--) {
    const numEmptyBlocks = y - 1
    const numFilledBlocks = height + 2 - y
    const rowP = document.createElement('p')

    for (let i = 0; i < numEmptyBlocks; i++) {
      const emptySpan = document.createElement('p')
      emptySpan.innerHTML = '&nbsp;'
      emptySpan.className = 'empty-span square-span'
      emptySpan.textContent = 'e'
      rowP.appendChild(emptySpan)
    }

    for (let i = 0; i < numFilledBlocks; i++) {
      const filledSpan = document.createElement('p')
      filledSpan.innerHTML = '&nbsp;'
      filledSpan.className = 'filled-span square-span'
      filledSpan.textContent = 'f'
      rowP.appendChild(filledSpan)
    }
    pyramidDiv.appendChild(rowP)
  }
}

// h = 3
//  ## y = 3 e = 2 f = 2
// ### y = 2 e = 1 f = 3
//#### y = 1 e = 0 f = 4