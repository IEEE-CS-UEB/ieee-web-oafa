const englishPosts = {
  name: "englishPosts",
  label: "Publicaciones en Inglés",
  label_singular: "Publicación en Inglés",
  folder: "src/pages/en/posts/",
  create: true,
  delete: true,
  fields: [
    {
      label: "ID (No tocar)",
      name: "id",
      widget: "string",
      default: () => Date.now(),
    },
    {
      label: "Title",
      name: "title",
      widget: "string",
    },
    {
      label: "Society (Capítulo)",
      name: "society",
      widget: "relation",
      collection: "societies",
      searchFields: ["name"],
      valueField: "name",
      displayFields: ["image", "name"],
    },
    {
      label: "Type",
      name: "type",
      widget: "select",
      options: ["Blog", "News"],
    },
    {
      label: "Author",
      name: "author",
      widget: "relation",
      collection: "members",
      searchFields: ["name", "society"],
      valueField: "name",
      displayFields: ["name"],
    },
    {
      label: "Image",
      name: "img",
      widget: "image",
    },
    {
      label: "Body",
      name: "body",
      widget: "markdown",
    },
  ],
};

const spanishPosts = {
  name: "spanishPosts",
  label: "Publicaciones en Español",
  label_singular: "Publicación en Español",
  folder: "src/pages/es/posts/",
  create: true,
  delete: true,
  fields: [
    {
      label: "Título",
      name: "title",
      widget: "string",
    },
    {
      label: "Capítulo",
      name: "society",
      widget: "relation",
      collection: "societies",
      searchFields: ["name"],
      valueField: "name",
      displayFields: ["image", "name"],
    },
    {
      label: "Tipo",
      name: "type",
      widget: "select",
      options: ["Blog", "News"],
    },
    {
      label: "Autor",
      name: "author",
      widget: "relation",
      collection: "members",
      searchFields: ["name", "society"],
      valueField: "name",
      displayFields: ["name"],
    },
    {
      label: "Imagen de Portada",
      name: "img",
      widget: "image",
    },
    {
      label: "Cuerpo",
      name: "body",
      widget: "markdown",
    },
  ],
};

export { englishPosts, spanishPosts };
