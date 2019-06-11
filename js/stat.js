// var canvas = document.getElementById('canvas');

// var ctx = canvas.getContext('2d');

// ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
// ctx.fillRect(110, 20, 270, 420);
// ctx.fillStyle = '#ffffff';
// ctx.fillRect(100, 10, 270, 420);

// ctx.fillStyle = "#000000";
// ctx.font = '16px PT Mono';
// ctx.textBaseline = 'hanging';
// ctx.fillText('Ура вы победили!', 140, 20);
// ctx.fillText('Список результатов:', 140, 40);

// ctx.fillStyle = 'rgba(255, 0, 0, 1)';
// ctx.fillRect(120, 10, 40, 150);

// ctx.fillStyle = 'blue';
// ctx.fillRect(200, 100, 40, 150);

// ctx.fillStyle = 'red';
// ctx.fillRect(200, 190, 40, 150);

// ctx.fillStyle = 'yellow';
// ctx.fillRect(200, 180, 40, 150);



var window = {

  renderStatistics: function (ctx, names, times) {
    window.names = ['Вы', 'Джон', 'Ария', 'Роберт'];
    window.times = [1000, 3200, 4000, 5400]
  }
}