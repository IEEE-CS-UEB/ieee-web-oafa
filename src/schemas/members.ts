const members = {
  name: "members",
  label: "Miembros",
  label_singular: "Miembro",
  folder: "src/content/members",
  create: true,
  delete: true,
  fields: [
    {
      label: "Foto",
      name: "img",
      widget: "image",
    },
    {
      label: "Nombre",
      name: "name",
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
  ],
};

export { members };
