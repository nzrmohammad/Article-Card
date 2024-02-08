const likeButtons = document.querySelectorAll(".card__btn");

likeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__btn--like");
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');
  const cardsPerPage = 2; // Adjust this value as needed
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const pagination = document.querySelector('.pagination');

  // Generate pagination links
  for (let i = 1; i <= totalPages; i++) {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = i;
    link.classList.add('page-link');
    if (i === 1) {
      link.classList.add('active');
    }
    pagination.appendChild(link);
  }

  for (let i = cardsPerPage; i < cards.length; i++) {
    cards[i].style.display = 'none';
  }

  // Event listener for pagination links
  pagination.addEventListener('click', function (event) {
    if (event.target.classList.contains('page-link')) {
      event.preventDefault();
      const pageNumber = parseInt(event.target.textContent);
      const start = (pageNumber - 1) * cardsPerPage;
      const end = start + cardsPerPage;

      // Hide all cards
      cards.forEach(card => card.style.display = 'none');

      // Show cards for selected page
      for (let i = start; i < end && i < cards.length; i++) {
        cards[i].style.display = 'block';
      }

      // Update active link
      const links = pagination.querySelectorAll('.page-link');
      links.forEach(link => link.classList.remove('active'));
      event.target.classList.add('active');
    }
  });
});