import commonStyle from './commonStyle'
import vButton from './vButton'
import vImage from './vImage'

const list = [vButton, vImage]

list.forEach((item) => {
  item.style = {
    ...item.style,
    ...commonStyle,
  }
})

export default list
