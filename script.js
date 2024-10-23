// Carrega feedbacks salvos no LocalStorage ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    displayFeedbacks();
});

document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Captura os dados do formulário
    const name = document.getElementById('name').value;
    const feedback = document.getElementById('feedback').value;

    // Cria um objeto de feedback (sem incluir o email)
    const feedbackObj = { name, feedback };

    // Salva no LocalStorage
    saveFeedback(feedbackObj);

    // Exibe mensagem de agradecimento
    document.getElementById('thankYouMessage').style.display = 'block';
    this.style.display = 'none';

    // Atualiza a lista de feedbacks
    displayFeedbacks();
});

// Função para salvar feedback no LocalStorage
function saveFeedback(feedbackObj) {
    let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    feedbacks.push(feedbackObj);
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
}

// Função para exibir os feedbacks na página
function displayFeedbacks() {
    const feedbackList = document.getElementById('feedbackList');
    feedbackList.innerHTML = '';

    let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];

    feedbacks.forEach(function (feedbackObj) {
        const li = document.createElement('li');
        li.textContent = `Nome: ${feedbackObj.name}, Avaliação: ${feedbackObj.feedback}`;
        feedbackList.appendChild(li);
    });
}