
function eIsEmpty(val) {
    if (val == "" || val == undefined || val == "undefined" || val == null || val == "null")
        return true;
    else
        return false;
}
function eIsEmptyOrZero(val) {
    if (val == "" || val == undefined || val == "undefined" || val == null || val == "null" || val == 0)
        return true;
    else
        return false;
}
