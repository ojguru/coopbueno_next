import {
  Enum_Servicio_Categoria,
  Enum_Servicio_Tipo,
  MenusMenuItemEntity,
  ServicioEntity,
} from "@/gql/graphql";

export interface MenuItem {
  item: MenusMenuItemEntity;
  children: MenusMenuItemEntity[];
}

const getHierarchicalItems = (data: MenusMenuItemEntity[] = []) => {
  const tree: MenuItem[] = [];
  const childrenOf: any = {};
  data.forEach((item) => {
    const id = item.id || "";
    const parentId = item.attributes?.parent?.data?.id;

    childrenOf[id] = childrenOf[id] || [];

    const newItem: MenuItem = {
      item: item,
      children: childrenOf[id],
    };

    parentId
      ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
      : tree.push(newItem);
  });
  return tree;
};

const getServiceHierarchicalItems = (servicios: ServicioEntity[] = []) => {
  const serviceItems = servicios.map((servicio) => ({
    id: servicio.id,
    attributes: {
      ...servicio.attributes,
      title: servicio.attributes?.nombre,
      url: `/servicios/${servicio.attributes?.slug}`,
    },
  }));

  const tipos = [
    {
      item: {
        id: Enum_Servicio_Tipo.Personas,
        attributes: {
          title: "Personas",
        },
      },
      children: [
        {
          item: {
            id: Enum_Servicio_Categoria.Ahorro,
            attributes: {
              title: "Ahorro",
            },
          },
          children: serviceItems
            .filter(
              (servicio) =>
                servicio.attributes?.categoria ===
                  Enum_Servicio_Categoria.Ahorro &&
                servicio.attributes?.tipo === Enum_Servicio_Tipo.Personas
            )
            .map((servicio) => ({
              item: servicio,
              children: [],
            })),
        },
        {
          item: {
            id: Enum_Servicio_Categoria.Prestamos,
            attributes: {
              title: "Préstamos",
            },
          },
          children: serviceItems
            .filter(
              (servicio) =>
                servicio.attributes?.categoria ===
                  Enum_Servicio_Categoria.Prestamos &&
                servicio.attributes?.tipo === Enum_Servicio_Tipo.Personas
            )
            .map((servicio) => ({
              item: servicio,
              children: [],
            })),
        },
        {
          item: {
            id: Enum_Servicio_Categoria.Facilidades,
            attributes: {
              title: "Facilidades",
            },
          },
          children: serviceItems
            .filter(
              (servicio) =>
                servicio.attributes?.categoria ===
                  Enum_Servicio_Categoria.Facilidades &&
                servicio.attributes?.tipo === Enum_Servicio_Tipo.Personas
            )
            .map((servicio) => ({
              item: servicio,
              children: [],
            })),
        },
      ],
    },
    {
      item: {
        id: Enum_Servicio_Tipo.Empresas,
        attributes: {
          title: "Empresas",
        },
      },
      children: [
        {
          item: {
            id: Enum_Servicio_Categoria.Ahorro,
            attributes: {
              title: "Ahorro",
            },
          },
          children: serviceItems
            .filter(
              (servicio) =>
                servicio.attributes?.categoria ===
                  Enum_Servicio_Categoria.Ahorro &&
                servicio.attributes?.tipo === Enum_Servicio_Tipo.Empresas
            )
            .map((servicio) => ({
              item: servicio,
              children: [],
            })),
        },
        {
          item: {
            id: Enum_Servicio_Categoria.Prestamos,
            attributes: {
              title: "Préstamos",
            },
          },
          children: serviceItems
            .filter(
              (servicio) =>
                servicio.attributes?.categoria ===
                  Enum_Servicio_Categoria.Prestamos &&
                servicio.attributes?.tipo === Enum_Servicio_Tipo.Empresas
            )
            .map((servicio) => ({
              item: servicio,
              children: [],
            })),
        },
        {
          item: {
            id: Enum_Servicio_Categoria.Facilidades,
            attributes: {
              title: "Facilidades",
            },
          },
          children: serviceItems
            .filter(
              (servicio) =>
                servicio.attributes?.categoria ===
                  Enum_Servicio_Categoria.Facilidades &&
                servicio.attributes?.tipo === Enum_Servicio_Tipo.Empresas
            )
            .map((servicio) => ({
              item: servicio,
              children: [],
            })),
        },
      ],
    },
  ];

  return tipos;
};

export { getHierarchicalItems, getServiceHierarchicalItems };
