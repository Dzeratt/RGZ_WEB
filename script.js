let exchange = [
    0.00488, 0.00490, 0.00495, 0.00490, 0.00486, 0.00481, 0.00486, 0.00492, 
    0.00504, 0.00498, 0.00493, 0.00478, 0.00475, 0.00471, 0.00463, 
    0.00460, 0.00464, 0.00469, 0.00413, 0.00420
]

let date = [
'28.04.2023', '27.04.2023', '26.04.2023', '25.04.2023', 
'24.04.2023', '21.04.2023', '20.04.2023', '19.04.2023', 
'18.04.2023', '17.04.2023', '14.04.2023', '13.04.2023', 
'12.04.2023', '11.04.2023', '10.04.2023', '07.04.2023', 
'06.04.2023', '05.04.2023', '04.04.2023', '03.04.2023' 
]

document.getElementById('show_max_number').addEventListener('click', function showMaxNumber(){
    document.getElementById('show_max_number').innerHTML = "Максимальная цена: " + Math.max(...exchange)
});

document.getElementById('show_min_number').addEventListener('click', function showMinNumber(){
    document.getElementById('show_min_number').innerHTML = "Минимальная цена: " + Math.min(...exchange)
});


document.getElementById('show_standard_deviation').addEventListener('click', function showStandardDeviation(){
    let sum = 0
    for (let i = 0; i<exchange.length; i++) {
        sum = sum + exchange[i];
    }
    let n = sum / exchange.length;
    let j = 0;
    for (let b = 0; b<exchange.length; b++) {
        j = j + ((exchange[b]-n)**2)
    }

    document.getElementById('show_standard_deviation').innerHTML = "Среднеквадратическое отклонение: " + Math.sqrt(j).toFixed(6);
});