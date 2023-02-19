const displayedValueEl = document.getElementById('displayed-value')
const angleEl = document.getElementById('angle')
const pipeSizeEl = document.getElementById('pipe-size')

const calculate = () => {
    let angle = parseFloat(angleEl.value.slice(0, -1))
    let pipeSize = pipeSizeEl.value.slice(0, -1)
    

    switch (pipeSize) {
        case '1/2':
            pipeSize = .5
            break;
        case '3/4':
            pipeSize = .75
            break;
        case '1.0':
            pipeSize = 1
            break;
    }

    displayedValueEl.innerText = getTotal(pipeSize, angle)
    return false
}

const getTotal = (pipeSize, angle) => {
    let diff = pipeSize / .25 - 2
    let total = 0.0
    console.log(angle)
    switch (angle) {
        case 45:
            total = (diff * 1.25) + 5
            break;
        case 30:
            if(diff === 0){
                total = 4.5
            }
            else if(diff === 1){
                total = 5.5
            }
            else{
                total = 6
            }
            break;
        case 22.5:
            if(diff === 0){
                total = 3.5
            }
            else if(diff === 1){
                total = 4.25
            }
            else{
                total = 4.75
            }
            break;
        case 10:
            total = (diff * .5) + 3
            break;
    }

    return total
}
