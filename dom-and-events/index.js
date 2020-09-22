// When the web page is loaded JavaScript creates a Document Object Model (DOM) from all of
// contents of the web page and that document object is available to JavaScript for
// manipulation.

// The document.getElementById() methods gets the element by its id and the innerHTML property
// is used to access or change the html contents of the tag. We can also access any other
// attribute of the tag by using its name instead of innerHTML.
document.getElementById('title').innerHTML = 'Title has been changed';

// The document.getElementsByClassName() gets all the elements that have the specified class
var result = document.getElementsByClassName('container');

// The document.getElementsByTagName() get all the elements that have the specified tag.
var result1 = document.getElementsByTagName('p');

// Events can be added either by the above method as attributes or then can be added in JS
// using addEventListener() in the fetched element.

// addEventListener() accepts 2 arguments i.e. the event to listen for and the callback
// to execute when the event occurs.
result[0].addEventListener('click', function () {
  alert('First container clicked');
});

// An already declared function can also be passed as the second argument in addEventListener().
function buttonClick() {
  alert('Button is clicked');
}

document
  .getElementsByTagName('button')[0]
  .addEventListener('click', buttonClick);

// To add dynamic classes to elements on certain event we can the classList attribute
// to add or remove CSS classes at runtime.
result1[1].addEventListener('mouseover', () => {
  result1[1].classList.add('background-red');
});

result1[1].addEventListener('mouseleave', () => {
  result1[1].classList.remove('background-red');
});

// We can also customize individual css properties by manipulating the style attribute
result1[2].style = 'background-color: yellow';
