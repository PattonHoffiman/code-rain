const canvas = document.getElementById('matrix');
const context = canvas.getContext('2d');

canvas.width = window.outerWidth;
canvas.height = window.outerHeight;

const ideograms = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const allSymbols = ideograms + letters + nums;

const fontSize = 16;
const columns = (canvas.width/fontSize);

const rainDrops = [];

for (let n = 0; n < columns; n++) {
  rainDrops[n] = 1;
};

const draw = () => {
  context.fillStyle = 'rgba(0, 0, 0, .05)';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = '#0f0';
  context.font = fontSize + 'px monospace';

  for (let n = 0; n < rainDrops.length; n++) {
    const text = allSymbols.charAt(Math.floor(Math.random() * allSymbols.length));
    context.fillText(text, n*fontSize, rainDrops[n]*fontSize);

    if (rainDrops[n]*fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[n] = 0;
    }

    rainDrops[n]++;
  };
};

setInterval(draw, 30);