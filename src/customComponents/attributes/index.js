import commonStyle from './commonStyle'
import vButton from './vButton'
import vImage from './vImage'

const attributesList = [vButton, vImage]

attributesList.forEach((item) => {
  item.style = {
    ...item.style,
    ...commonStyle,
  }
})

export default attributesList
