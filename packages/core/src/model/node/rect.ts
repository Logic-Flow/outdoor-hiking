import { observable } from 'mobx'
import { cloneDeep } from 'lodash'
import BaseNodeModel from './base'
import { ModelType } from '../../constant'
import { LogicFlow } from '../../LogicFlow'

export class RectNodeModel extends BaseNodeModel {
  modelType = ModelType.RECT_NODE
  @observable radius = 0

  getDefaultAnchor = (): LogicFlow.Point[] => {
    const { x, y, width, height } = this
    return [
      { x, y: y - height / 2, id: `${this.id}_0` },
      { x: x + width / 2, y, id: `${this.id}_1` },
      { x, y: y + height / 2, id: `${this.id}_2` },
      { x: x - width / 2, y, id: `${this.id}_3` },
    ]
  }

  getNodeStyle = (): LogicFlow.CommonTheme => {
    const style = super.getNodeStyle()
    const { rect } = this.graphModel.theme
    return {
      ...style,
      ...cloneDeep(rect),
    }
  }
}

export default RectNodeModel