function errorMessage(message) {
  var small = document.createElement("small");
  small.innerHTML = `<small class="error text-danger d-block">${message}</small>`;
  return small;
}

function validateLogin() {
  var loginEmail = document.getElementById("login-email");
  var loginPassword = document.getElementById("login-password");

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
