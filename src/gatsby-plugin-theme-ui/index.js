import { roboto } from "@theme-ui/presets";

export default {
  ...roboto,
  images: {
    ...roboto.images,
    heading: {
      objectFit: "cover",
      width: "100%",
      objectPosition: "center",
      maxHeight: "25vh",
      m: "auto",
    },
  },
  layout: {
    ...roboto.layout,
    container: {
      p: 3,
    },
  },
  lineHeights: {
    ...roboto.lineHeights,
    heading: 2,
  },
  sizes: {
    ...roboto.sizes,
    container: 1024,
  },
};
