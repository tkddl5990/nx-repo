module.exports = {
  name: 'shell',
  remotes: ['user', 'product'],
  shared: (name, config) => {
    if (name === 'shared') return false;
  },
};
