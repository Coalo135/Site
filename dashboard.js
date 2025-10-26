const activeUsers = document.getElementById('activeUsers');
const newUsers = document.getElementById('newUsers');
const totalSales = document.getElementById('totalSales');
const systemStatus = document.getElementById('systemStatus');

function atualizarDashboard() {
    activeUsers.textContent = Math.floor(Math.random() * 200 + 50);
    newUsers.textContent = Math.floor(Math.random() * 20);
    totalSales.textContent = `R$ ${Math.floor(Math.random() * 10000)}`;
    systemStatus.textContent = Math.random() > 0.1 ? "Online" : "Offline";
}

setInterval(atualizarDashboard, 5000);
