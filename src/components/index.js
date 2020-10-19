import Gap from './gap/Gap';

const components = [
  Gap,
];

export default (Vue) => {
  components.forEach(item => {
    Vue.component(item.name, item);
  });
};
