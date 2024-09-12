import {
  ENUM_SERVICIO_CATEGORIA,
  ENUM_SERVICIO_TIPO,
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
        id: ENUM_SERVICIO_TIPO.personas,
        attributes: {
          title: "Personas",
        },
      },
      children: [
        {
          item: {
            id: ENUM_SERVICIO_CATEGORIA.ahorro,
            attributes: {
              title: "Ahorro",
            },
          },
          children: serviceItems
            .filter(
              (servicio) =>
                servicio.attributes?.categoria ===
                  ENUM_SERVICIO_CATEGORIA.ahorro &&
                servicio.attributes?.tipo === ENUM_SERVICIO_TIPO.personas
            )
            .map((servicio) => ({
              item: servicio,
              children: [],
            })),
        },
        {
          item: {
            id: ENUM_SERVICIO_CATEGORIA.prestamos,
            attributes: {
              title: "Préstamos",
            },
          },
          children: serviceItems
            .filter(
              (servicio) =>
                servicio.attributes?.categoria ===
                  ENUM_SERVICIO_CATEGORIA.prestamos &&
                servicio.attributes?.tipo === ENUM_SERVICIO_TIPO.personas
            )
            .map((servicio) => ({
              item: servicio,
              children: [],
            })),
        },
        {
          item: {
            id: ENUM_SERVICIO_CATEGORIA.facilidades,
            attributes: {
              title: "Facilidades",
            },
          },
          children: serviceItems
            .filter(
              (servicio) =>
                servicio.attributes?.categoria ===
                  ENUM_SERVICIO_CATEGORIA.facilidades &&
                servicio.attributes?.tipo === ENUM_SERVICIO_TIPO.personas
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
        id: ENUM_SERVICIO_TIPO.empresas,
        attributes: {
          title: "Empresas",
        },
      },
      children: [
        {
          item: {
            id: ENUM_SERVICIO_CATEGORIA.ahorro,
            attributes: {
              title: "Ahorro",
            },
          },
          children: serviceItems
            .filter(
              (servicio) =>
                servicio.attributes?.categoria ===
                  ENUM_SERVICIO_CATEGORIA.ahorro &&
                servicio.attributes?.tipo === ENUM_SERVICIO_TIPO.empresas
            )
            .map((servicio) => ({
              item: servicio,
              children: [],
            })),
        },
        {
          item: {
            id: ENUM_SERVICIO_CATEGORIA.prestamos,
            attributes: {
              title: "Préstamos",
            },
          },
          children: serviceItems
            .filter(
              (servicio) =>
                servicio.attributes?.categoria ===
                  ENUM_SERVICIO_CATEGORIA.prestamos &&
                servicio.attributes?.tipo === ENUM_SERVICIO_TIPO.empresas
            )
            .map((servicio) => ({
              item: servicio,
              children: [],
            })),
        },
        {
          item: {
            id: ENUM_SERVICIO_CATEGORIA.facilidades,
            attributes: {
              title: "Facilidades",
            },
          },
          children: serviceItems
            .filter(
              (servicio) =>
                servicio.attributes?.categoria ===
                  ENUM_SERVICIO_CATEGORIA.facilidades &&
                servicio.attributes?.tipo === ENUM_SERVICIO_TIPO.empresas
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
