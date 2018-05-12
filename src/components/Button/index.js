import './index.scss'

const TYPES = {
  danger: 'btn--danger',
  success: 'btn--success',
  warning: 'btn--warning',
  info: 'btn--info',
}

let id = 0

const getColorByType = type => TYPES[type] || ''

class Button {
  constructor(props) {
    id += 1
    this.id = `btn-${id}`
    this.props = props
    return this
  }

  getRef() {
    return document.querySelector(`[data-id=${this.id}]`)
  }

  render() {
    const { text = '', classes = '', type = '', uppercase = false } = this.props
    const mergedClassNames = [
      classes,
      uppercase ? 'btn--uppercase' : '',
      getColorByType(type),
    ].join(' ')
    return `<button data-id=${
      this.id
    } class="btn ${mergedClassNames}">${text}</button>`
  }
}

export default Button
