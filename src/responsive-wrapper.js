export default function responsiveWrapper(wrapper) {
  ['resize', 'load'].forEach((event) => {
    window.addEventListener(event, () => {
      if (
        wrapper.children[0].offsetHeight !==
        wrapper.children[wrapper.children.length - 1].offsetHeight
      ) {
        wrapper.classList.add('tst-wrapped');
      } else {
        wrapper.classList.remove('tst-wrapped');
      }
    });
  });
}
