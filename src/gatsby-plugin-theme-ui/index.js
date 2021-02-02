import { deep } from "@theme-ui/presets";

export default {
  ...deep,
  layout: {
    ...deep.layout,
    container: {
      p: 3,
    },
  },
  lineHeights: {
    ...deep.lineHeights,
    heading: 2,
  },
  sizes: {
    ...deep.sizes,
    container: 1024,
  },
};
