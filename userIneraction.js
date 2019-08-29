console.log("hello from the userI page")


function addComment(event){
    event.preventDefault()
    console.log("hi from the event handler",event.target.message.value)
    const commentsection = document.getElementById('commentsection')
    console.log("commentsection", commentsection)
    const comment = document.createElement("div")
    const p = document.createElement("p")
    p.innerHTML = event.target.name.value
    const msg = document.createElement("p")
    msg.innerHTML = event.target.message.value
    comment.appendChild(p)
    comment.appendChild(msg)
    commentsection.appendChild(comment)
}

const form = document.getElementsByTagName("form")
console.log("form is",form[0])
form[0].addEventListener('submit',addComment)