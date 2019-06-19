// Create an unordered list element
const list = document.createElement('ul')

// Create a list item for our list
const listItem = document.createElement('li')
listItem.className = "president"
listItem.textContent = "George Bush"

// Put the list item on the unordered list
list.appendChild(listItem)

console.log(list)


// Using createElement(), you're going to create a simple list of chat messages that you might have with one of your family members. Maybe it's that wacky aunt that you see every Christmas and Fourth of July.

// 1. Put an article DOM element in your index.html with the id attribute value of messages.
// 2. In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
// 3. Create five (5) section components, each with a class of message, and with the content of your choosing.
// 4. Using appendChild(), attach each message as a child to the messages element.

const article = document.querySelector("#messages")

function createSection (text) {
    const section = document.createElement("section")
    section.className = "message"
    section.textContent = `${text}`
    article.appendChild(section)
}
createSection("Are we doing fireworks this year?")
createSection("After last year's 'tree incident', should we?")
createSection("The fire fighters put it out in like a minute. Wasn't even a real fire.")
createSection("We can set them off in the street.")
createSection("Our neighbors' houses are flammable, too")


// A new "virtual" document fragment to contain components
const fragment = document.createDocumentFragment()

// Create an emperor component element
const julius = document.createElement('div')
julius.textContent = "Julius Caesar"
fragment.appendChild(julius)

// Create an emperor component element
const augustus = document.createElement('div')
augustus.textContent = "Augustus Caesar"
fragment.appendChild(augustus)

// Create an emperor component element
const aurelius = document.createElement('div')
aurelius.textContent = "Marcus Aurelius"
fragment.appendChild(aurelius)

/*
    Now I can update my HTML document all at once, with all
    three emperor components rendered. Otherwise, I would
    have needed to add each one, individually - a much more
    "expensive" operation.
*/
document.querySelector("#emperorList").appendChild(fragment)


// Updated using createDocumentFragment

const fragment = document.createDocumentFragment()

function createSection (text) {
    const section = document.createElement("section")
    section.className = "message"
    section.textContent = `${text}`
    fragment.appendChild(section)
    document.querySelector("#messages").appendChild(fragment)
}
createSection("Are we doing fireworks this year?")
createSection("After last year's 'tree incident', should we?")
createSection("The fire fighters put it out in like a minute. Wasn't even a real fire.")
createSection("We can set them off in the street.")
createSection("Our neighbors' houses are flammable, too")

