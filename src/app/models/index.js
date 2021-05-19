const addTaskElement = document.getElementById("addTask");
const project = document.getElementById("project");
const addBtn = document.getElementById("inputGroup-sizing-lg");

function renderTaskElement() {
  let section = document.createElement("section");
  section.innerHTML = `
  <section class="my-2 border rounded bg-white p-2">
            <header class="d-flex justify-content-between">
              <div>
                <h5>${addTaskElement.value}</h5>
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
            <div class="progress mt-1">
              <div
                class="progress-bar progress-bar-striped"
                role="progressbar"
                style="width: 50%"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </section>
  `
  return section;
}

function addTaskToProject() {
  const item = renderTaskElement();
  project.appendChild(item);
  addTaskElement.value = "";
}

addBtn.addEventListener("click", () => {
  addTaskToProject();
});