const taskResumo = document.querySelector("[data-resumo]");
const task = document.querySelector("[data-task]").textContent;
const resumo = document.getElementById("resumo");

function escreveResumo() {
  taskResumo.textContent = task;
}

resumo.addEventListener("click", () => {
  escreveResumo();
});
