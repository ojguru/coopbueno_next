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

export const SEOFragment = `
  seo{
    metaTitle
    metaDescription
    metaImage{
      ${ImageFragment}
    }
    keywords
    metaRobots
    metaViewport
    canonicalURL
  }
`;

export const BenefitFragment = `
  data{
    attributes{
      nombre
      slug
      portada{
        titular
      }
      icono{
        ${ImageFragment}
      }
    }
  }
`;

export const FormFragment = `
  formulario{
    id
    formId
    redireccion
    mensaje
    titulo
  }
`;
