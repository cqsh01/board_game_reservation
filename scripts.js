document.addEventListener('DOMContentLoaded', () => {
    const gamesList = document.getElementById('games-list');
    const reservationForm = document.getElementById('reservation-form');

    // 示例桌游数据
    const games = [
        { id: 1, name: '嗒宝1', status: '空闲' },
        { id: 2, name: '卡坦岛-航海家扩展-4', status: '空闲' },
        { id: 3, name: '三国杀4', status: '空闲' },
        { id: 4, name: '荣耀之城4', status: '空闲' },
        { id: 5, name: '逃离绝命岛4', status: '空闲' },
        { id: 6, name: '璀璨宝石4', status: '空闲' },
        { id: 7, name: '骇浪求生-全扩-4', status: '空闲' },
        { id: 8, name: '璀璨宝石对决4', status: '空闲' },
        { id: 9, name: '现代艺术4', status: '空闲' },
        { id: 10, name: '风之部落5', status: '空闲' },
        { id: 11, name: '国王已逝5', status: '空闲' },
        { id: 12, name: '庄园迷情-全扩-6', status: '空闲' },
        { id: 13, name: '太阳之外-全扩-6', status: '空闲' },
        { id: 14, name: '灵迹岛8', status: '空闲' },
        { id: 15, name: '冥海航迹-全扩-8', status: '空闲' },
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
