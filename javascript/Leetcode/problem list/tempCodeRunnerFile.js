function strStr(haystack, needle) {

    if (haystack.match(needle)) {
        return haystack.indexOf(needle)
    }
    else{
        return -1
    }
}