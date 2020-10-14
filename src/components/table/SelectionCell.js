export class SelectionCell {

    constructor() {
        this.group = []
    }

    select($el) {
        this.clear()
        this.group.push($el)
        $el.addClass('selected')

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