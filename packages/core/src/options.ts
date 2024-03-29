import { assign } from 'lodash'
import LogicFlow from './LogicFlow'
import { Keyboard } from './common'
import { GraphModel } from './model'
import { OverlapMode } from './constant'
import { VNode } from 'preact'

export namespace Options {
  import NodeData = LogicFlow.NodeData
  import GraphConfigData = LogicFlow.GraphConfigData
  import EdgeData = LogicFlow.EdgeData
  import ExtensionConstructor = LogicFlow.ExtensionConstructor
  export type EdgeType = 'line' | 'polyline' | 'bezier'
  export type BackgroundConfig = {
    // 背景图片地址
    backgroundImage?: string
    // CSS background-repeat 属性
    backgroundRepeat?:
      | 'repeat'
      | 'repeat-x'
      | 'repeat-y'
      | 'no-repeat'
      | 'initial'
      | 'inherit'
    // TODO: 根据具体情况添加各种自定义样式
    [key: string]: any
  }
  export type GridOptions = {
    // 网格格子间距
    size?: number
    // 网格是否可见
    visible?: boolean
    graphModel?: GraphModel
    // 网格类型
    type?: 'dot' | 'mesh'
    config?: {
      color: string
      thickness?: number
    }
  }

  export type AnimationConfig = {
    node: boolean
    edge: boolean
  }

  export type EdgeGeneratorType = (
    sourceNode: LogicFlow.NodeData,
    targetNode: LogicFlow.NodeData,
    currentEdge?: Partial<LogicFlow.EdgeConfig>,
  ) => any

  export interface CustomAnchorLineProps {
    sourcePoint: LogicFlow.Point
    targetPoint: LogicFlow.Point
    [key: string]: any
  }

  export interface GuardsConfig {
    beforeClone?: (data: NodeData | GraphConfigData) => boolean
    beforeDelete?: (data: NodeData | EdgeData) => boolean
  }

  export interface Common {
    container: HTMLElement
    // REMIND: 注意，当在 SSR 框架（比如 Next.js Nuxt.js）项目中使用 LogicFlow 时，在初始化时需要设置宽高
    width?: number
    height?: number
    background?: false | BackgroundConfig
    grid?: number | boolean | GridOptions

    partial?: boolean
    keyboard?: Keyboard.KeyboardDef
    style?: Partial<LogicFlow.Theme> // 主题配置
    edgeType?: EdgeType
    adjustEdge?: boolean
    allowRotation?: boolean
    isSilentMode?: boolean
    stopScrollGraph?: boolean
    stopZoomGraph?: boolean
    stopMoveGraph?:
      | boolean
      | 'vertical'
      | 'horizontal'
      | [number, number, number, number]
    animation?: boolean | Partial<AnimationConfig>
    history?: boolean
    outline?: boolean
    snapline?: boolean
    textEdit?: boolean

    guards?: GuardsConfig
    overlapMode?: OverlapMode

    plugins?: ExtensionConstructor[]
    pluginsOptions?: Record<string, any>
    disabledPlugins?: string[]
    disabledTools?: string[]

    idGenerator?: (type?: string) => string
    edgeGenerator?: EdgeGeneratorType

    customTrajectory?: (props: CustomAnchorLineProps) => VNode
  }

  export interface ManualBooleans {}

  export interface Manual extends Partial<Common>, Partial<ManualBooleans> {}

  export interface Definition extends Common {}
}

export namespace Options {
  export function get(options: Partial<Manual>) {
    const { grid, ...others } = options
    const container = options.container
    if (container != null) {
      if (options.width == null) {
        others.width = container.clientWidth
      }
      if (options.height == null) {
        others.height = container.clientHeight
      }
    } else {
      throw new Error(
        'Ensure the container of LogicFlow is specified and valid.',
      )
    }

    const result = assign({}, defaults, others) as Options.Definition

    const defaultGrid: GridOptions = {
      size: 20,
      type: 'dot',
      visible: true,
      config: { color: '#ababab', thickness: 1 },
    }
    if (typeof grid === 'number') {
      result.grid = { ...defaultGrid, size: grid }
    } else if (typeof grid === 'boolean') {
      result.grid = { ...defaultGrid, visible: grid }
    } else {
      result.grid = { ...defaultGrid, ...grid }
    }

    return result
  }
}

export namespace Options {
  export const defaults: Partial<Definition> = {
    background: false,
    grid: false,
    textEdit: true,
    snapline: true,
    outline: false,
    disabledTools: [],
  }
}
