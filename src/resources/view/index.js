const project = document.getElementById("project");
const redPriorityBtn = document.querySelector('[data-priority="red"]');
const orangePriorityBtn = document.querySelector('[data-priority="orange"]');
const yellowPriorityBtn = document.querySelector('[data-priority="yellow"]');
const addTaskBtn = document.getElementById("add-task");

function renderTaskElement() {
    let section = document.createElement("section");
  section.innerHTML = `
    <section class="my-2 border rounded bg-white p-2">
              <header class="d-flex justify-content-between">
                <div>
                  <h5>RONALDO</h5>
                </div>
                <span class="">00:00</span>
              </header>
              <p class="fs-6">Nome da pessoa</p>
              <div class="p-1 mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                facere quasi! Id animi consequatur libero aliquid unde repellat
                consequuntur est voluptatum maxime quis, quo ullam, eos voluptatem
                nostrum accusantium. Deleniti.
              </div>
              <div class="p-1">
                <h6>Comentários:</h6>
                <ul class="list-unstyled">
                  <li>Comentário 1</li>
                  <li>Comentário 2</li>
                </ul>
              </div>
            </section>
    `;
  return section;
}

function addTaskToProject() {
  const item = renderTaskElement();
  project.appendChild(item);
}

addTaskBtn.addEventListener("click", () => {
  addTaskToProject();
});

redPriorityBtn.addEventListener("click", () => {
  project.className = "border rounded p-2 bg-danger";
});

orangePriorityBtn.addEventListener("click", () => {
  project.className = "border rounded p-2";
  project.style.backgroundColor = "orange";
});

yellowPriorityBtn.addEventListener("click", () => {
  project.className = "border rounded p-2";
  project.style.backgroundColor = "yellow";
});
