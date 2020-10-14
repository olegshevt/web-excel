import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/table.template'
import { resizeHandler } from '@/components/table/table.resize'
import { shouldResize } from '@/components/table/table.functions'
import { SelectionCell } from '@/components/table/SelectionCell'
import { isCell } from './table.functions'
import { $ } from '@core/dom'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }

  toHTML() {
    return createTable(20)
  }

  // prepare() {
  //   this.selection = new SelectionCell()
  // }

  init() {
    super.init()

    const $cell = this.$root.find('[data-id="0:0"]')

    this.selection = new SelectionCell()
    this.selection.select($cell)
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    } else if (isCell(event)) {
      // console.log(event.target)
      const $target = $(event.target)
      this.selection.select($target)

    }
  }
}
