export function capitalize(word) {
    if (typeof word !== 'string') {
        return ''
    }
    return word.charAt(0).toUpperCase() + word.slice(1)
}

export function range(start, end) {
    if (start > end) {
        [end, start] = [start, end]
    }
    return new Array(end - start + 1)
        .fill('')
        .map((_, index) => start + index)
}