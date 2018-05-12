import './base'
import Button from './components/Button'

function htmlToElement(html) {
  const template = document.createElement('template')
  template.innerHTML = html.trim()
  return template.content.firstChild
}

const renderToDom = (selector, component) => {
  const target = document.querySelector(selector)
  const oldChildren = component.getRef()
  if (oldChildren) {
    const newChildren = htmlToElement(component.render())
    target.replaceChild(newChildren, oldChildren)
  } else {
    target.innerHTML += component.render()
  }
}

const HelloWorldButton = new Button({
  text: 'Hello world',
  type: 'danger',
  uppercase: true,
})
const WarningWorldButton = new Button({
  text: 'Warning world',
  type: 'warning',
  uppercase: true,
})

renderToDom('#app', HelloWorldButton)
renderToDom('#app', WarningWorldButton)
WarningWorldButton.props.text = 'Changed'
renderToDom('#app', WarningWorldButton)
