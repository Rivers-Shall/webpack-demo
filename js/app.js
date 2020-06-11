import {button, graph} from "./dom-loader"

button.addEventListener('click', function () {
    graph.style.display = graph.style.display === 'none' ? 'block' : 'none'
})