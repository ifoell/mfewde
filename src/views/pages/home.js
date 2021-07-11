import RestoSrc from "../../data/resto-src";
import { createRestoItem } from "../templates/detail-template";

const Home = {
  async render() {
    return `
    <section class="content">
        <div class="explore">
            <h1 class="explore-label">Explore Restaurant</h1>
            <div class="posts" id="post">
            </div>
        </div>
    </section>
    `;
  },

  async afterRender() {
    const restos = await RestoSrc.listResto();
    const restosContainer = document.querySelector("#post");
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItem(resto);
    });
  },
};

export default Home;
