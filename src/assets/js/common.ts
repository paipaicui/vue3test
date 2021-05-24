var windowScreenWidth = function () {
    var docEl = document.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth
            if (!clientWidth) return
            if(clientWidth>=414){
                docEl.style.fontSize = '100px'
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 414) + 'px'
            }
        }

    if (!document.addEventListener) return
    window.addEventListener(resizeEvt, recalc, false)
    document.addEventListener('DOMContentLoaded', recalc, false)
}

export default windowScreenWidth
