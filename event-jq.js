for (let i = 0; i < 10; i++) {
  $('body')
    .append($(`<input type="button" id="btn${i}" value="btn${i}">`))
}

$('input').on('click', function (t, args) {
  console.log('this=' + $(this).attr('id'))
  console.log('t=' + JSON.stringify(t))
  console.log('args=' + JSON.stringify(args))
})

$('input').on('mouseenter mouseleave', function (t, args) {
  console.log('in and out this=' + $(this).attr('id'))
})

// $('li').on('click', function () { console.log('a list item was clicked')})
// $('li').on('click', function () {
//   registerClick()
//   doSomethingElse()
// })
// $('li').off('click')
//
// $('li').on('click.logging', function () { console.log('a list item was clicked')})
// $('li').on('click.analytics', function () {
//   registerClick()
//   doSomethingElse()
// })
// $('li').off('click.logging')

// // It is a bubble!
// $('*').add([document, window]).on('click', function (event) {
//   event.preventDefault()
//   console.log(this)
// })

// event delegation
const ol = $('<ol></ol>')
ol.appendTo($('body'))

for (let i = 0; i < 3; i++) {
  $(`<li>item <span style="font-family: 'American Typewriter'">${i}</span></li>`).appendTo(ol)
}

ol.on('click', 'li', function() {
  console.log(this)
})