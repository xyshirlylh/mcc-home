import Gap from './gap/Gap';
import ProjectImageCard from "./card/ProjectImageCard";

const components = [
  Gap,
  ProjectImageCard,
];

export default (Vue) => {
  components.forEach(item => {
    Vue.component(item.name, item);
  });
};
