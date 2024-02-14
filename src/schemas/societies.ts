const societies = {
  name: "societies",
  label: "Capítulos",
  label_singular: "Capítulo",
  folder: "src/content/societies",
  create: true,
  delete: true,
  fields: [
    {
      label: "Foto",
      name: "img",
      widget: "image",
    },
    {
      label: "Logo",
      name: "logo",
      widget: "image",
    },
    {
      label: "Banner",
      name: "banner",
      widget: "image",
    },
    {
      label: "Nombre (Español)",
      name: "name-es",
      widget: "string",
    },
    {
      label: "Nombre (Inglés)",
      name: "name-en",
      widget: "string",
    },
    {
      label: "Descripción (Español)",
      name: "desc-es",
      widget: "string",
    },
    {
      label: "Descripción (Inglés)",
      name: "desc-en",
      widget: "string",
    },
    {
      label: "Misión (Español)",
      name: "mis-es",
      widget: "string",
    },
    {
      label: "Misión (Inglés)",
      name: "mis-en",
      widget: "string",
    },
    {
      label: "Visión (Español)",
      name: "vis-es",
      widget: "string",
    },
    {
      label: "Visión (Inglés)",
      name: "vis-en",
      widget: "string",
    },
  ],
};

export { societies };
