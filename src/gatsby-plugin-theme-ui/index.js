import { deep } from "@theme-ui/presets";

export default {
  ...deep,
  images: {
    ...deep.images,
    heading: {
      objectFit: "cover",
      width: "100%",
      objectPosition: "center",
      maxHeight: "25vh",
      m: "auto",
    },
  },
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
