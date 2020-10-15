export class SelectionCell {

    constructor() {
        this.group = []
        this.current = null
    }

    select($el) {
        this.clear()
        $el.focus().addClass('selected')
        this.group.push($el)
        this.current = $el

    }

    focus() {
        this.$el.focus()
        return this
    }

    selectGroup($group = []) {
        this.clear()
        this.group = $group
        this.group.forEach($el => $el.addClass('selected'))

    }

    clear() {
        this.group.forEach(el => el.removeClass('selected'))
        this.group = []
    }

    // unselect($el) {
    //     // this.group.push($el)
    //     $el.removeClass('selected')
    // }


}