
var buttonClicked = false;

function openModal(modalId) {
  var modal = document.getElementById(modalId);

  var modals = document.querySelectorAll('.project_modal');
  modals.forEach(function(modal){
    closeModal(modal.id);
  });

  modal.style.display = "block";
  modal.scrollIntoView(true);
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}

document.getElementById("modal_btn1").addEventListener("click", function(){
  buttonClicked = true; 
  openModal("modal_project1");
});

document.getElementById("modal_btn2").addEventListener("click", function(){
  buttonClicked = true; 
  openModal("modal_project2");
});

var closeButtons = document.querySelectorAll(".close");
closeButtons.forEach(function(button) {
  button.addEventListener("click", function(event) {
    var modalId = this.closest('.project_modal').id;
    closeModal(modalId);
    event.stopPropagation();
  });
});

window.addEventListener('click', function(event) {

  if (!buttonClicked) {
    var modals = document.querySelectorAll('.project_modal');
    var clickedInsideModal = false;
    modals.forEach(function(modal) {
      if (modal.contains(event.target)) {
        clickedInsideModal = true;
      }
    });
    if (!clickedInsideModal) {
      modals.forEach(function(modal) {
        if (modal.style.display === "block") {
          closeModal(modal.id);
        }
      });
    }
  }

  buttonClicked = false;
});

