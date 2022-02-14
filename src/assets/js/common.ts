// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const windowScreenWidth = function () {
    const docEl = document.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            const clientWidth = docEl.clientWidth
            if (!clientWidth) return
            if (clientWidth >= 1242) {
                docEl.style.fontSize = '100px'
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 414) + 'px'
            }
        }

    if (!document.addEventListener) return
    window.addEventListener(resizeEvt, recalc, false)
    document.addEventListener('DOMContentLoaded', recalc, false)
    console.log('fontSize');
}

export default windowScreenWidth
// module.exports = {
//     windowScreenWidth
// };