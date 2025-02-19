import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projectSection">
      <h2>Projects</h2>
      <div className="projectWrapper">
        <div className="projCard">
          <div className="card-img">
            <img src="/assets/images/cdlworkout.jpg" alt="CDL Workout Project" />
          </div>
          <div className="card-info">
            <h3>CDL Workout</h3>
            <p>
              Built using the Vue framework for JavaScript. I built a minimalistic workout app that I
              use daily to track my workouts.
            </p>
            <span>
              <a className="alink" href="https://cdl-workout.pages.dev/" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a className="alink" href="https://github.com/callum-laing/cdl-workout" target="_blank" rel="noopener noreferrer">
                Github Repo
              </a>
            </span>
          </div>
        </div>

        <div className="projCard">
          <div className="card-img">
            <img src="/assets/images/memoryCard.jpg" alt="Memory Card Game" />
          </div>
          <div className="card-info">
            <h3>Memory Card</h3>
            <p>
              As a gaming enthusiast, building a game felt like a natural choice. This project put my Svelte skills to the test and created something fun.
            </p>
            <span>
              <a className="alink" href="https://sv-memory-card.pages.dev/" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a className="alink" href="https://github.com/callum-laing/sv-memory-card" target="_blank" rel="noopener noreferrer">
                Github Repo
              </a>
            </span>
          </div>
        </div>

        <div className="projCard">
          <div className="card-img">
            <img src="/assets/images/todoList.jpg" alt="To-Do List Project" />
          </div>
          <div className="card-info">
            <h3>Todo List</h3>
            <p>
              Life gets busy, and mentally tracking everything is overwhelming. I built this to-do list app using Svelte to free up my mental bandwidth.
            </p>
            <span>
              <a className="alink" href="https://svelte-todo-app-73m.pages.dev/" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a className="alink" href="https://github.com/callum-laing/svelte-todo-app" target="_blank" rel="noopener noreferrer">
                Github Repo
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
