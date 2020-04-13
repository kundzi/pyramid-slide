printPyramid(10)

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

// h = 3
//  ## y = 3 e = 2 f = 2
// ### y = 2 e = 1 f = 3
//#### y = 1 e = 0 f = 4