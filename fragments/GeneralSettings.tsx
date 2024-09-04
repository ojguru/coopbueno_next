export const MenuItemsFragment = `
  data {
    id
    attributes {
      title
      url
      target
      parent{
        data{
          id
        }
      }
      root_menu {
        data {
          id
          attributes {
            slug
          }
        }
      }
    }
  }
`;

export const ImageFragment = `
  data {
    attributes {
      url
      width
      height
      alternativeText
      mime
    }
  }
`;

export const CTAFragment = `
  cta{
    texto
    uri
    target
  }
`;

