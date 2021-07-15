function errorMessage(message) {
  var small = document.createElement("small");
  small.innerHTML = `<small class="error text-danger d-block">${message}</small>`;
  return small;
}

function validateTaskForm() {
  var modalTaskTitle = document.getElementById("modal-task-title");
  var modalPersonTitle = document.getElementById("modal-person-task");
  var modalTaskDescription = document.getElementById("modal-task-description");
  var modalDuedate = document.getElementById("modal-duedate");

  var $error = document.getElementsByClassName("error");
  while ($error.length > 0) $error[0].remove();

  if (modalTaskTitle.value === "") {
    let errorId = "title";
    var $message = errorMessage("Informe um título para a tarefa");
    modalTaskTitle.parentNode.insertBefore(
      $message,
      modalTaskTitle.nextSibling
    );
    return;
  }
  if (modalPersonTitle.value === "") {
    var $message = errorMessage("Informe um responsável para a tarefa");
    modalPersonTitle.parentNode.insertBefore(
      $message,
      modalPersonTitle.nextSibling
    );
    return;
  }
  if (modalTaskDescription.value === "") {
    var $message = errorMessage("Informe uma descrição para a tarefa");
    modalTaskDescription.parentNode.insertBefore(
      $message,
      modalTaskDescription.nextSibling
    );
    return;
  }
  if (modalDuedate.value === "") {
    var $message = errorMessage("Informe uma data para a tarefa");
    modalDuedate.parentNode.insertBefore($message, modalDuedate.nextSibling);
    return;
  }

  var toastElList = [].slice.call(document.querySelectorAll(".toast"));
  var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl);
  });
  toastList.forEach((toast) => toast.show());
}

function validateLoginForm() {
  var loginEmail = document.getElementById("login-email");
  var loginPassword = document.getElementById("login-password");
  var loginForm = document.getElementById("login-form");

  var $error = document.getElementsByClassName("error");
  while ($error.length > 0) $error[0].remove();

  if (loginEmail.value === "") {
    let errorId = "title";
    var $message = errorMessage("Informe um email válido");
    loginEmail.parentNode.insertBefore(
      $message,
      loginEmail.nextSibling
    );
    return;
  }
  if (loginPassword.value === "") {
    var $message = errorMessage("Informe uma senha válida");
    loginPassword.parentNode.insertBefore(
      $message,
      loginPassword.nextSibling
    );
    return;
  }
  //   var myModal = new bootstrap.Modal(document.getElementById('taskModal'));
  //   myModal.hide();

  //   document.getElementById('taskModal').modal('hide')



  var toastElList = [].slice.call(document.querySelectorAll(".toast"));
  var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl);
  });
  toastList.forEach((toast) => toast.show());
}

function validateProjectForm() {
  var projectTitle = document.getElementById("modal-project-title");
  var projectNumber = document.getElementById("modal-project-number");

  var $error = document.getElementsByClassName("error");
  while ($error.length > 0) $error[0].remove();

  if (projectTitle.value === "") {
    let errorId = "title";
    var $message = errorMessage("Informe um título válido");
    projectTitle.parentNode.insertBefore(
      $message,
      projectTitle.nextSibling
    );
    return;
  }
  if (projectNumber.value === "") {
    var $message = errorMessage("Informe um número válido");
    projectNumber.parentNode.insertBefore(
      $message,
      projectNumber.nextSibling
    );
    return;
  }
  //   var myModal = new bootstrap.Modal(document.getElementById('taskModal'));
  //   myModal.hide();

  //   document.getElementById('taskModal').modal('hide')

  

  var toastElList = [].slice.call(document.querySelectorAll(".toast"));
  var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl);
  });
  toastList.forEach((toast) => toast.show());
};
