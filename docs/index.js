const linguagem = document.querySelector('.linguagem-item')
const areaCodigo = document.querySelector('.codigo-wrapper')
const botao = document.querySelector('.botao')

function aplicaHighlight(){
    const codigo = areaCodigo.innerText
    areaCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" area-label="Editor de codigo"></code>`
    areaCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaCodigo.querySelector('code'))
}

botao.addEventListener('click', () => {
    aplicaHighlight()
})