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
    main: {
      minHeight: "calc(100vh - 112px)",
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
