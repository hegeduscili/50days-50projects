const labels = document.querySelectorAll('.form-control label');


labels.forEach(function (label) {
    label.innerHTML = label.innerText
    .split('')
    .map(function (letter,idx) {
        return '<span style="transition-delay:' + idx * 50 + 'ms">' + letter + '</span>';
    })    
    .join('')
})