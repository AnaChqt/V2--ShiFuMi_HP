let startModal = document.getElementById('startModal');
let nextModalBtn = document.getElementById('nextModalBtn');

$(window).on('load', function() {
    $('#startModal').modal('show');
});

nextModalBtn.addEventListener('click', () => {
    $('#rulesModal').modal('show');
});