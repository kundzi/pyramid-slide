// const listItems = jQuery('li')
const listItems = $('li')
const header = $('#header')
const listItemsInUnorderedLists = $('ul li')
const personClass = $('.person')

const foundInside = $('li', $('ol'))

const secondLi = foundInside.eq(1)

const notFoundTest = $('#doesnotexist')

if (notFoundTest.length > 0) {
  console.log('found')
} else {
  console.log('not found')
}

listItemsInUnorderedLists.html('<p>Game over</p>')

personClass.addClass('red')

const lastGameOver = listItemsInUnorderedLists.eq(1)

let iter = 0
setInterval(() => {
    const newFontSize = (14 + ++iter) % 80
    lastGameOver.css('font-size', newFontSize + 'px')

    $('#dateContainer')
      .prepend(
        $(`<p>${new Date()}</p>`)
          .css(
            {
              fontSize: 10
            }
          )
      )
  },
  1000
)

const submitWishButton = $('#submitWish')
const textWish = $('#wish')

submitWishButton.on(
  'click',
  (event) => {
    submitWishButton.val('I do not fucking care what you want, bitch')
    textWish.val('no fucking ' + textWish.val().trim() + ' for you')
    $('.wishlist').prop('disabled', true)
  }
)

