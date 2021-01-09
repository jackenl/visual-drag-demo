import commonStyle from './commonStyle'
import vButton from './vButton'
import vImage from './vImage'

const propsList = [vButton, vImage]

propsList.forEach((item) => {
  item.style = Object.assign(item.style, commonStyle)
})

export default propsList
