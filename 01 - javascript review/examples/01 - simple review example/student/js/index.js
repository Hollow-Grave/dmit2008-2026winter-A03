let topicList = document.querySelector(".topics-list")
let newTopicForm = document.querySelector(".new-topic-form")


const addTopicToPage = (topicName, topicListElement) => {
    let newTopicElement = `<li class="list-group-item"> ${topicName} </li>`
    topicListElement.innerHTML += newTopicElement
}

newTopicForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let topicInput = e.target.elements["new-topic"]
    let topicText = topicInput.value

    if (!topicText){
        topicInput.classList.add("is-invalid")
    } else {
        topicInput.classList.remove("is-invalid")
    }

    addTopicToPage(topicText, topicList)
})

