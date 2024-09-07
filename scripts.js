document.addEventListener('DOMContentLoaded', () => {
    const gamesList = document.getElementById('games-list');
    const reservationForm = document.getElementById('reservation-form');

    // 示例桌游数据
    const games = [
        { id: 1, name: '桌游A', status: '空闲' },
        { id: 2, name: '桌游B', status: '被使用' },
        // 添加更多桌游
    ];

    // 显示桌游列表
    function displayGames() {
        gamesList.innerHTML = '';
        games.forEach(game => {
            const gameItem = document.createElement('div');
            gameItem.textContent = `${game.name} - ${game.status}`;
            gamesList.appendChild(gameItem);
        });
    }

    // 初始化
    displayGames();
});
