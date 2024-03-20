document.addEventListener('DOMContentLoaded', function() {
    const questionMarkIcon = document.querySelector('.bi-question');
    const pencilIcon = document.querySelector('.bi-pencil-square');
    const bellIcon = document.querySelector('.bi-bell-fill');
    const personIcon = document.querySelector('.bi-person-fill');
    const bttn = document.querySelector('.btt');
  
    questionMarkIcon.addEventListener('click', function() {
      // Your onclick event code for the question mark icon here
      console.log('Question mark icon clicked!');
    });

    bttn.addEventListener('click', function() {
        // Your onclick event code for the question mark icon here
        console.log('bttn clicked!');
      });
  
    pencilIcon.addEventListener('click', function() {
      // Your onclick event code for the pencil icon here
      console.log('Pencil icon clicked!');
    });
  
    bellIcon.addEventListener('click', function() {
      // Your onclick event code for the bell icon here
      console.log('Bell icon clicked!');
    });
  
    personIcon.addEventListener('click', function() {
      // Your onclick event code for the person icon here
      console.log('Person icon clicked!');
    });
  });