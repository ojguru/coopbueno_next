/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  LandingContenidoDynamicZoneInput: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Article = {
  __typename?: 'Article';
  author?: Maybe<WriterEntityResponse>;
  category?: Maybe<CategoryEntityResponse>;
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ArticleEntity = {
  __typename?: 'ArticleEntity';
  attributes?: Maybe<Article>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ArticleEntityResponse = {
  __typename?: 'ArticleEntityResponse';
  data?: Maybe<ArticleEntity>;
};

export type ArticleEntityResponseCollection = {
  __typename?: 'ArticleEntityResponseCollection';
  data: Array<ArticleEntity>;
  meta: ResponseCollectionMeta;
};

export type ArticleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  author?: InputMaybe<WriterFiltersInput>;
  category?: InputMaybe<CategoryFiltersInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ArticleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ArticleInput = {
  author?: InputMaybe<Scalars['ID']['input']>;
  category?: InputMaybe<Scalars['ID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleRelationResponseCollection = {
  __typename?: 'ArticleRelationResponseCollection';
  data: Array<ArticleEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category = {
  __typename?: 'Category';
  articles?: Maybe<ArticleRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  icon: UploadFileEntityResponse;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CategoryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  articles?: InputMaybe<ArticleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentGeneralFormulario = {
  __typename?: 'ComponentGeneralFormulario';
  formId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mensaje?: Maybe<Scalars['String']['output']>;
  redireccion?: Maybe<Scalars['String']['output']>;
  titulo?: Maybe<Scalars['String']['output']>;
};

export type ComponentGeneralFormularioFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentGeneralFormularioFiltersInput>>>;
  formId?: InputMaybe<StringFilterInput>;
  mensaje?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentGeneralFormularioFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentGeneralFormularioFiltersInput>>>;
  redireccion?: InputMaybe<StringFilterInput>;
  titulo?: InputMaybe<StringFilterInput>;
};

export type ComponentGeneralFormularioInput = {
  formId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  mensaje?: InputMaybe<Scalars['String']['input']>;
  redireccion?: InputMaybe<Scalars['String']['input']>;
  titulo?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentGeneralItems = {
  __typename?: 'ComponentGeneralItems';
  id: Scalars['ID']['output'];
  texto: Scalars['String']['output'];
};

export type ComponentGeneralItemsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentGeneralItemsFiltersInput>>>;
  not?: InputMaybe<ComponentGeneralItemsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentGeneralItemsFiltersInput>>>;
  texto?: InputMaybe<StringFilterInput>;
};

export type ComponentGeneralLista = {
  __typename?: 'ComponentGeneralLista';
  id: Scalars['ID']['output'];
  items: Array<Maybe<ComponentGeneralItems>>;
  titulo: Scalars['String']['output'];
};


export type ComponentGeneralListaItemsArgs = {
  filters?: InputMaybe<ComponentGeneralItemsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsHero = {
  __typename?: 'ComponentSectionsHero';
  cta?: Maybe<ComponentSharedCta>;
  descripcion: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imagen: UploadFileEntityResponse;
  titulo: Scalars['String']['output'];
};

export type ComponentSectionsHeroInput = {
  cta?: InputMaybe<ComponentSharedCtaInput>;
  descripcion?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  imagen?: InputMaybe<Scalars['ID']['input']>;
  titulo?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentServiciosRequisitos = {
  __typename?: 'ComponentServiciosRequisitos';
  id: Scalars['ID']['output'];
  requisito?: Maybe<Scalars['String']['output']>;
};

export type ComponentServiciosRequisitosFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentServiciosRequisitosFiltersInput>>>;
  not?: InputMaybe<ComponentServiciosRequisitosFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServiciosRequisitosFiltersInput>>>;
  requisito?: InputMaybe<StringFilterInput>;
};

export type ComponentServiciosRequisitosInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  requisito?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentServiciosTarifario = {
  __typename?: 'ComponentServiciosTarifario';
  id: Scalars['ID']['output'];
  nota?: Maybe<Scalars['String']['output']>;
  tarifas?: Maybe<Array<Maybe<ComponentServiciosTarifas>>>;
};


export type ComponentServiciosTarifarioTarifasArgs = {
  filters?: InputMaybe<ComponentServiciosTarifasFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentServiciosTarifarioFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentServiciosTarifarioFiltersInput>>>;
  not?: InputMaybe<ComponentServiciosTarifarioFiltersInput>;
  nota?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServiciosTarifarioFiltersInput>>>;
  tarifas?: InputMaybe<ComponentServiciosTarifasFiltersInput>;
};

export type ComponentServiciosTarifarioInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  nota?: InputMaybe<Scalars['String']['input']>;
  tarifas?: InputMaybe<Array<InputMaybe<ComponentServiciosTarifasInput>>>;
};

export type ComponentServiciosTarifas = {
  __typename?: 'ComponentServiciosTarifas';
  id: Scalars['ID']['output'];
  nombre?: Maybe<Scalars['String']['output']>;
  valor?: Maybe<Scalars['String']['output']>;
};

export type ComponentServiciosTarifasFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentServiciosTarifasFiltersInput>>>;
  nombre?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentServiciosTarifasFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServiciosTarifasFiltersInput>>>;
  valor?: InputMaybe<StringFilterInput>;
};

export type ComponentServiciosTarifasInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  nombre?: InputMaybe<Scalars['String']['input']>;
  valor?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentServiciosVentajas = {
  __typename?: 'ComponentServiciosVentajas';
  id: Scalars['ID']['output'];
  ventaja?: Maybe<Scalars['String']['output']>;
};

export type ComponentServiciosVentajasFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentServiciosVentajasFiltersInput>>>;
  not?: InputMaybe<ComponentServiciosVentajasFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServiciosVentajasFiltersInput>>>;
  ventaja?: InputMaybe<StringFilterInput>;
};

export type ComponentServiciosVentajasInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  ventaja?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedCta = {
  __typename?: 'ComponentSharedCta';
  id: Scalars['ID']['output'];
  target: Scalars['Boolean']['output'];
  texto: Scalars['String']['output'];
  uri: Scalars['String']['output'];
};

export type ComponentSharedCtaFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedCtaFiltersInput>>>;
  not?: InputMaybe<ComponentSharedCtaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedCtaFiltersInput>>>;
  target?: InputMaybe<BooleanFilterInput>;
  texto?: InputMaybe<StringFilterInput>;
  uri?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedCtaInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  target?: InputMaybe<Scalars['Boolean']['input']>;
  texto?: InputMaybe<Scalars['String']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedMetaSocial = {
  __typename?: 'ComponentSharedMetaSocial';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork;
  title: Scalars['String']['output'];
};

export type ComponentSharedMetaSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  socialNetwork?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedMetaSocialInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  socialNetwork?: InputMaybe<Enum_Componentsharedmetasocial_Socialnetwork>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedPortada = {
  __typename?: 'ComponentSharedPortada';
  copy: Scalars['String']['output'];
  cta?: Maybe<ComponentSharedCta>;
  id: Scalars['ID']['output'];
  imagen: UploadFileEntityResponse;
  titular: Scalars['String']['output'];
};

export type ComponentSharedPortadaFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedPortadaFiltersInput>>>;
  copy?: InputMaybe<StringFilterInput>;
  cta?: InputMaybe<ComponentSharedCtaFiltersInput>;
  not?: InputMaybe<ComponentSharedPortadaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedPortadaFiltersInput>>>;
  titular?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedPortadaInput = {
  copy?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<ComponentSharedCtaInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  imagen?: InputMaybe<Scalars['ID']['input']>;
  titular?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonicalURL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  keywords?: Maybe<Scalars['String']['output']>;
  metaDescription: Scalars['String']['output'];
  metaImage: UploadFileEntityResponse;
  metaRobots?: Maybe<Scalars['String']['output']>;
  metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>;
  metaTitle: Scalars['String']['output'];
  metaViewport?: Maybe<Scalars['String']['output']>;
  structuredData?: Maybe<Scalars['JSON']['output']>;
};


export type ComponentSharedSeoMetaSocialArgs = {
  filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  canonicalURL?: InputMaybe<StringFilterInput>;
  keywords?: InputMaybe<StringFilterInput>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaRobots?: InputMaybe<StringFilterInput>;
  metaSocial?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  metaViewport?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  structuredData?: InputMaybe<JsonFilterInput>;
};

export type ComponentSharedSeoInput = {
  canonicalURL?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaImage?: InputMaybe<Scalars['ID']['input']>;
  metaRobots?: InputMaybe<Scalars['String']['input']>;
  metaSocial?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialInput>>>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaViewport?: InputMaybe<Scalars['String']['input']>;
  structuredData?: InputMaybe<Scalars['JSON']['input']>;
};

export type ComponentSucursalTelefonos = {
  __typename?: 'ComponentSucursalTelefonos';
  id: Scalars['ID']['output'];
  telefono?: Maybe<Scalars['String']['output']>;
};

export type ComponentSucursalTelefonosFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSucursalTelefonosFiltersInput>>>;
  not?: InputMaybe<ComponentSucursalTelefonosFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSucursalTelefonosFiltersInput>>>;
  telefono?: InputMaybe<StringFilterInput>;
};

export type ComponentSucursalTelefonosInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  telefono?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter'
}

export enum Enum_Menusmenuitem_Target {
  Blank = 'blank',
  Parent = 'parent',
  Self = 'self',
  Top = 'top'
}

export enum Enum_Servicio_Categoria {
  Ahorro = 'ahorro',
  Beneficios = 'beneficios',
  Facilidades = 'facilidades',
  Prestamos = 'prestamos'
}

export enum Enum_Servicio_Tipo {
  Beneficios = 'beneficios',
  Empresas = 'empresas',
  Personas = 'personas'
}

export enum Enum_Sitemapsitemap_Type {
  DefaultHreflang = 'default_hreflang',
  Index = 'index'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Article | Category | ComponentGeneralFormulario | ComponentGeneralItems | ComponentGeneralLista | ComponentSectionsHero | ComponentServiciosRequisitos | ComponentServiciosTarifario | ComponentServiciosTarifas | ComponentServiciosVentajas | ComponentSharedCta | ComponentSharedMetaSocial | ComponentSharedPortada | ComponentSharedSeo | ComponentSucursalTelefonos | Global | Homepage | I18NLocale | Landing | MemoriaAnual | MenusMenu | MenusMenuItem | Noticia | Servicio | SitemapSitemap | SitemapSitemapCache | Slide | Sucursal | Tpage | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Writer;

export type Global = {
  __typename?: 'Global';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  favicon?: Maybe<UploadFileEntityResponse>;
  siteName: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GlobalEntity = {
  __typename?: 'GlobalEntity';
  attributes?: Maybe<Global>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type GlobalEntityResponse = {
  __typename?: 'GlobalEntityResponse';
  data?: Maybe<GlobalEntity>;
};

export type GlobalInput = {
  favicon?: InputMaybe<Scalars['ID']['input']>;
  siteName?: InputMaybe<Scalars['String']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Homepage = {
  __typename?: 'Homepage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  informacion: ComponentSectionsHero;
  portada: ComponentSharedPortada;
  razones: ComponentSectionsHero;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HomepageEntity = {
  __typename?: 'HomepageEntity';
  attributes?: Maybe<Homepage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type HomepageEntityResponse = {
  __typename?: 'HomepageEntityResponse';
  data?: Maybe<HomepageEntity>;
};

export type HomepageInput = {
  informacion?: InputMaybe<ComponentSectionsHeroInput>;
  portada?: InputMaybe<ComponentSharedPortadaInput>;
  razones?: InputMaybe<ComponentSectionsHeroInput>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Landing = {
  __typename?: 'Landing';
  contenido?: Maybe<Array<Maybe<LandingContenidoDynamicZone>>>;
  copy?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  formulario: ComponentGeneralFormulario;
  imagen: UploadFileEntityResponse;
  nombre: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  slug: Scalars['String']['output'];
  titular: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LandingContenidoDynamicZone = ComponentGeneralLista | Error;

export type LandingEntity = {
  __typename?: 'LandingEntity';
  attributes?: Maybe<Landing>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type LandingEntityResponse = {
  __typename?: 'LandingEntityResponse';
  data?: Maybe<LandingEntity>;
};

export type LandingEntityResponseCollection = {
  __typename?: 'LandingEntityResponseCollection';
  data: Array<LandingEntity>;
  meta: ResponseCollectionMeta;
};

export type LandingFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LandingFiltersInput>>>;
  copy?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  formulario?: InputMaybe<ComponentGeneralFormularioFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  nombre?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<LandingFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LandingFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  titular?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LandingInput = {
  contenido?: InputMaybe<Array<Scalars['LandingContenidoDynamicZoneInput']['input']>>;
  copy?: InputMaybe<Scalars['String']['input']>;
  formulario?: InputMaybe<ComponentGeneralFormularioInput>;
  imagen?: InputMaybe<Scalars['ID']['input']>;
  nombre?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  titular?: InputMaybe<Scalars['String']['input']>;
};

export type MemoriaAnual = {
  __typename?: 'MemoriaAnual';
  ano: Scalars['Int']['output'];
  archivo: UploadFileEntityResponse;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  imagen: UploadFileEntityResponse;
  nombre: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MemoriaAnualEntity = {
  __typename?: 'MemoriaAnualEntity';
  attributes?: Maybe<MemoriaAnual>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type MemoriaAnualEntityResponse = {
  __typename?: 'MemoriaAnualEntityResponse';
  data?: Maybe<MemoriaAnualEntity>;
};

export type MemoriaAnualEntityResponseCollection = {
  __typename?: 'MemoriaAnualEntityResponseCollection';
  data: Array<MemoriaAnualEntity>;
  meta: ResponseCollectionMeta;
};

export type MemoriaAnualFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MemoriaAnualFiltersInput>>>;
  ano?: InputMaybe<IntFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  nombre?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<MemoriaAnualFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MemoriaAnualFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MemoriaAnualInput = {
  ano?: InputMaybe<Scalars['Int']['input']>;
  archivo?: InputMaybe<Scalars['ID']['input']>;
  imagen?: InputMaybe<Scalars['ID']['input']>;
  nombre?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MenusMenu = {
  __typename?: 'MenusMenu';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  items?: Maybe<MenusMenuItemRelationResponseCollection>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type MenusMenuItemsArgs = {
  filters?: InputMaybe<MenusMenuItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MenusMenuEntity = {
  __typename?: 'MenusMenuEntity';
  attributes?: Maybe<MenusMenu>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type MenusMenuEntityResponse = {
  __typename?: 'MenusMenuEntityResponse';
  data?: Maybe<MenusMenuEntity>;
};

export type MenusMenuEntityResponseCollection = {
  __typename?: 'MenusMenuEntityResponseCollection';
  data: Array<MenusMenuEntity>;
  meta: ResponseCollectionMeta;
};

export type MenusMenuFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MenusMenuFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  items?: InputMaybe<MenusMenuItemFiltersInput>;
  not?: InputMaybe<MenusMenuFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MenusMenuFiltersInput>>>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MenusMenuInput = {
  items?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MenusMenuItem = {
  __typename?: 'MenusMenuItem';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<MenusMenuItemEntityResponse>;
  root_menu: MenusMenuEntityResponse;
  target?: Maybe<Enum_Menusmenuitem_Target>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type MenusMenuItemEntity = {
  __typename?: 'MenusMenuItemEntity';
  attributes?: Maybe<MenusMenuItem>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type MenusMenuItemEntityResponse = {
  __typename?: 'MenusMenuItemEntityResponse';
  data?: Maybe<MenusMenuItemEntity>;
};

export type MenusMenuItemEntityResponseCollection = {
  __typename?: 'MenusMenuItemEntityResponseCollection';
  data: Array<MenusMenuItemEntity>;
  meta: ResponseCollectionMeta;
};

export type MenusMenuItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MenusMenuItemFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<MenusMenuItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MenusMenuItemFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  parent?: InputMaybe<MenusMenuItemFiltersInput>;
  root_menu?: InputMaybe<MenusMenuFiltersInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  target?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type MenusMenuItemInput = {
  order?: InputMaybe<Scalars['Int']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  root_menu?: InputMaybe<Scalars['ID']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  target?: InputMaybe<Enum_Menusmenuitem_Target>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MenusMenuItemRelationResponseCollection = {
  __typename?: 'MenusMenuItemRelationResponseCollection';
  data: Array<MenusMenuItemEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createArticle?: Maybe<ArticleEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createLanding?: Maybe<LandingEntityResponse>;
  createMemoriaAnual?: Maybe<MemoriaAnualEntityResponse>;
  createMenusMenu?: Maybe<MenusMenuEntityResponse>;
  createMenusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  createNoticia?: Maybe<NoticiaEntityResponse>;
  createServicio?: Maybe<ServicioEntityResponse>;
  createSitemapSitemap?: Maybe<SitemapSitemapEntityResponse>;
  createSitemapSitemapCache?: Maybe<SitemapSitemapCacheEntityResponse>;
  createSlide?: Maybe<SlideEntityResponse>;
  createSucursal?: Maybe<SucursalEntityResponse>;
  createTpage?: Maybe<TpageEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createWriter?: Maybe<WriterEntityResponse>;
  deleteArticle?: Maybe<ArticleEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteGlobal?: Maybe<GlobalEntityResponse>;
  deleteHomepage?: Maybe<HomepageEntityResponse>;
  deleteLanding?: Maybe<LandingEntityResponse>;
  deleteMemoriaAnual?: Maybe<MemoriaAnualEntityResponse>;
  deleteMenusMenu?: Maybe<MenusMenuEntityResponse>;
  deleteMenusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  deleteNoticia?: Maybe<NoticiaEntityResponse>;
  deleteServicio?: Maybe<ServicioEntityResponse>;
  deleteSitemapSitemap?: Maybe<SitemapSitemapEntityResponse>;
  deleteSitemapSitemapCache?: Maybe<SitemapSitemapCacheEntityResponse>;
  deleteSlide?: Maybe<SlideEntityResponse>;
  deleteSucursal?: Maybe<SucursalEntityResponse>;
  deleteTpage?: Maybe<TpageEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteWriter?: Maybe<WriterEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateArticle?: Maybe<ArticleEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGlobal?: Maybe<GlobalEntityResponse>;
  updateHomepage?: Maybe<HomepageEntityResponse>;
  updateLanding?: Maybe<LandingEntityResponse>;
  updateMemoriaAnual?: Maybe<MemoriaAnualEntityResponse>;
  updateMenusMenu?: Maybe<MenusMenuEntityResponse>;
  updateMenusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  updateNoticia?: Maybe<NoticiaEntityResponse>;
  updateServicio?: Maybe<ServicioEntityResponse>;
  updateSitemapSitemap?: Maybe<SitemapSitemapEntityResponse>;
  updateSitemapSitemapCache?: Maybe<SitemapSitemapCacheEntityResponse>;
  updateSlide?: Maybe<SlideEntityResponse>;
  updateSucursal?: Maybe<SucursalEntityResponse>;
  updateTpage?: Maybe<TpageEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateWriter?: Maybe<WriterEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateArticleArgs = {
  data: ArticleInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateLandingArgs = {
  data: LandingInput;
};


export type MutationCreateMemoriaAnualArgs = {
  data: MemoriaAnualInput;
};


export type MutationCreateMenusMenuArgs = {
  data: MenusMenuInput;
};


export type MutationCreateMenusMenuItemArgs = {
  data: MenusMenuItemInput;
};


export type MutationCreateNoticiaArgs = {
  data: NoticiaInput;
};


export type MutationCreateServicioArgs = {
  data: ServicioInput;
};


export type MutationCreateSitemapSitemapArgs = {
  data: SitemapSitemapInput;
};


export type MutationCreateSitemapSitemapCacheArgs = {
  data: SitemapSitemapCacheInput;
};


export type MutationCreateSlideArgs = {
  data: SlideInput;
};


export type MutationCreateSucursalArgs = {
  data: SucursalInput;
};


export type MutationCreateTpageArgs = {
  data: TpageInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateWriterArgs = {
  data: WriterInput;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLandingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMemoriaAnualArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMenusMenuArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMenusMenuItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteNoticiaArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteServicioArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSitemapSitemapArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSitemapSitemapCacheArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSlideArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSucursalArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTpageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteWriterArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateArticleArgs = {
  data: ArticleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGlobalArgs = {
  data: GlobalInput;
};


export type MutationUpdateHomepageArgs = {
  data: HomepageInput;
};


export type MutationUpdateLandingArgs = {
  data: LandingInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateMemoriaAnualArgs = {
  data: MemoriaAnualInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateMenusMenuArgs = {
  data: MenusMenuInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateMenusMenuItemArgs = {
  data: MenusMenuItemInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateNoticiaArgs = {
  data: NoticiaInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateServicioArgs = {
  data: ServicioInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSitemapSitemapArgs = {
  data: SitemapSitemapInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSitemapSitemapCacheArgs = {
  data: SitemapSitemapCacheInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSlideArgs = {
  data: SlideInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSucursalArgs = {
  data: SucursalInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTpageArgs = {
  data: TpageInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateWriterArgs = {
  data: WriterInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Noticia = {
  __typename?: 'Noticia';
  contenido?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  descripcion: Scalars['String']['output'];
  imagen: UploadFileEntityResponse;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  slug: Scalars['String']['output'];
  titulo: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type NoticiaEntity = {
  __typename?: 'NoticiaEntity';
  attributes?: Maybe<Noticia>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type NoticiaEntityResponse = {
  __typename?: 'NoticiaEntityResponse';
  data?: Maybe<NoticiaEntity>;
};

export type NoticiaEntityResponseCollection = {
  __typename?: 'NoticiaEntityResponseCollection';
  data: Array<NoticiaEntity>;
  meta: ResponseCollectionMeta;
};

export type NoticiaFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NoticiaFiltersInput>>>;
  contenido?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  descripcion?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<NoticiaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NoticiaFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  titulo?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NoticiaInput = {
  contenido?: InputMaybe<Scalars['String']['input']>;
  descripcion?: InputMaybe<Scalars['String']['input']>;
  imagen?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  titulo?: InputMaybe<Scalars['String']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  article?: Maybe<ArticleEntityResponse>;
  articles?: Maybe<ArticleEntityResponseCollection>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  global?: Maybe<GlobalEntityResponse>;
  homepage?: Maybe<HomepageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  landing?: Maybe<LandingEntityResponse>;
  landings?: Maybe<LandingEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  memoriaAnual?: Maybe<MemoriaAnualEntityResponse>;
  memoriasAnuales?: Maybe<MemoriaAnualEntityResponseCollection>;
  menusMenu?: Maybe<MenusMenuEntityResponse>;
  menusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  menusMenuItems?: Maybe<MenusMenuItemEntityResponseCollection>;
  menusMenus?: Maybe<MenusMenuEntityResponseCollection>;
  noticia?: Maybe<NoticiaEntityResponse>;
  noticias?: Maybe<NoticiaEntityResponseCollection>;
  servicio?: Maybe<ServicioEntityResponse>;
  servicios?: Maybe<ServicioEntityResponseCollection>;
  sitemapSitemap?: Maybe<SitemapSitemapEntityResponse>;
  sitemapSitemapCache?: Maybe<SitemapSitemapCacheEntityResponse>;
  sitemapSitemapCaches?: Maybe<SitemapSitemapCacheEntityResponseCollection>;
  sitemapSitemaps?: Maybe<SitemapSitemapEntityResponseCollection>;
  slide?: Maybe<SlideEntityResponse>;
  slides?: Maybe<SlideEntityResponseCollection>;
  sucursal?: Maybe<SucursalEntityResponse>;
  sucursals?: Maybe<SucursalEntityResponseCollection>;
  tpage?: Maybe<TpageEntityResponse>;
  tpages?: Maybe<TpageEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  writer?: Maybe<WriterEntityResponse>;
  writers?: Maybe<WriterEntityResponseCollection>;
};


export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLandingArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLandingsArgs = {
  filters?: InputMaybe<LandingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMemoriaAnualArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMemoriasAnualesArgs = {
  filters?: InputMaybe<MemoriaAnualFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMenusMenuArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMenusMenuItemArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMenusMenuItemsArgs = {
  filters?: InputMaybe<MenusMenuItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMenusMenusArgs = {
  filters?: InputMaybe<MenusMenuFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNoticiaArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryNoticiasArgs = {
  filters?: InputMaybe<NoticiaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryServicioArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryServiciosArgs = {
  filters?: InputMaybe<ServicioFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySitemapSitemapArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySitemapSitemapCacheArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySitemapSitemapCachesArgs = {
  filters?: InputMaybe<SitemapSitemapCacheFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySitemapSitemapsArgs = {
  filters?: InputMaybe<SitemapSitemapFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySlideArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySlidesArgs = {
  filters?: InputMaybe<SlideFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySucursalArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySucursalsArgs = {
  filters?: InputMaybe<SucursalFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTpageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTpagesArgs = {
  filters?: InputMaybe<TpageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWriterArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryWritersArgs = {
  filters?: InputMaybe<WriterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Servicio = {
  __typename?: 'Servicio';
  beneficios?: Maybe<ServicioRelationResponseCollection>;
  categoria: Enum_Servicio_Categoria;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  descripcion: Scalars['String']['output'];
  formulario?: Maybe<ComponentGeneralFormulario>;
  icono: UploadFileEntityResponse;
  nombre: Scalars['String']['output'];
  portada: ComponentSharedPortada;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  requisitos?: Maybe<Array<Maybe<ComponentServiciosRequisitos>>>;
  seo?: Maybe<ComponentSharedSeo>;
  slug: Scalars['String']['output'];
  tarifario?: Maybe<ComponentServiciosTarifario>;
  tipo: Enum_Servicio_Tipo;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  ventajas?: Maybe<Array<Maybe<ComponentServiciosVentajas>>>;
  video?: Maybe<Scalars['String']['output']>;
};


export type ServicioBeneficiosArgs = {
  filters?: InputMaybe<ServicioFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ServicioRequisitosArgs = {
  filters?: InputMaybe<ComponentServiciosRequisitosFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ServicioVentajasArgs = {
  filters?: InputMaybe<ComponentServiciosVentajasFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ServicioEntity = {
  __typename?: 'ServicioEntity';
  attributes?: Maybe<Servicio>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ServicioEntityResponse = {
  __typename?: 'ServicioEntityResponse';
  data?: Maybe<ServicioEntity>;
};

export type ServicioEntityResponseCollection = {
  __typename?: 'ServicioEntityResponseCollection';
  data: Array<ServicioEntity>;
  meta: ResponseCollectionMeta;
};

export type ServicioFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ServicioFiltersInput>>>;
  beneficios?: InputMaybe<ServicioFiltersInput>;
  categoria?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  descripcion?: InputMaybe<StringFilterInput>;
  formulario?: InputMaybe<ComponentGeneralFormularioFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  nombre?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ServicioFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ServicioFiltersInput>>>;
  portada?: InputMaybe<ComponentSharedPortadaFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  requisitos?: InputMaybe<ComponentServiciosRequisitosFiltersInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  tarifario?: InputMaybe<ComponentServiciosTarifarioFiltersInput>;
  tipo?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  ventajas?: InputMaybe<ComponentServiciosVentajasFiltersInput>;
  video?: InputMaybe<StringFilterInput>;
};

export type ServicioInput = {
  beneficios?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoria?: InputMaybe<Enum_Servicio_Categoria>;
  descripcion?: InputMaybe<Scalars['String']['input']>;
  formulario?: InputMaybe<ComponentGeneralFormularioInput>;
  icono?: InputMaybe<Scalars['ID']['input']>;
  nombre?: InputMaybe<Scalars['String']['input']>;
  portada?: InputMaybe<ComponentSharedPortadaInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  requisitos?: InputMaybe<Array<InputMaybe<ComponentServiciosRequisitosInput>>>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tarifario?: InputMaybe<ComponentServiciosTarifarioInput>;
  tipo?: InputMaybe<Enum_Servicio_Tipo>;
  ventajas?: InputMaybe<Array<InputMaybe<ComponentServiciosVentajasInput>>>;
  video?: InputMaybe<Scalars['String']['input']>;
};

export type ServicioRelationResponseCollection = {
  __typename?: 'ServicioRelationResponseCollection';
  data: Array<ServicioEntity>;
};

export type SitemapSitemap = {
  __typename?: 'SitemapSitemap';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  delta?: Maybe<Scalars['Int']['output']>;
  link_count?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  sitemap_string: Scalars['String']['output'];
  type?: Maybe<Enum_Sitemapsitemap_Type>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SitemapSitemapCache = {
  __typename?: 'SitemapSitemapCache';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  sitemap_id: Scalars['Int']['output'];
  sitemap_json: Scalars['JSON']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SitemapSitemapCacheEntity = {
  __typename?: 'SitemapSitemapCacheEntity';
  attributes?: Maybe<SitemapSitemapCache>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SitemapSitemapCacheEntityResponse = {
  __typename?: 'SitemapSitemapCacheEntityResponse';
  data?: Maybe<SitemapSitemapCacheEntity>;
};

export type SitemapSitemapCacheEntityResponseCollection = {
  __typename?: 'SitemapSitemapCacheEntityResponseCollection';
  data: Array<SitemapSitemapCacheEntity>;
  meta: ResponseCollectionMeta;
};

export type SitemapSitemapCacheFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SitemapSitemapCacheFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SitemapSitemapCacheFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SitemapSitemapCacheFiltersInput>>>;
  sitemap_id?: InputMaybe<IntFilterInput>;
  sitemap_json?: InputMaybe<JsonFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SitemapSitemapCacheInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  sitemap_id?: InputMaybe<Scalars['Int']['input']>;
  sitemap_json?: InputMaybe<Scalars['JSON']['input']>;
};

export type SitemapSitemapEntity = {
  __typename?: 'SitemapSitemapEntity';
  attributes?: Maybe<SitemapSitemap>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SitemapSitemapEntityResponse = {
  __typename?: 'SitemapSitemapEntityResponse';
  data?: Maybe<SitemapSitemapEntity>;
};

export type SitemapSitemapEntityResponseCollection = {
  __typename?: 'SitemapSitemapEntityResponseCollection';
  data: Array<SitemapSitemapEntity>;
  meta: ResponseCollectionMeta;
};

export type SitemapSitemapFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SitemapSitemapFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  delta?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  link_count?: InputMaybe<IntFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SitemapSitemapFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SitemapSitemapFiltersInput>>>;
  sitemap_string?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SitemapSitemapInput = {
  delta?: InputMaybe<Scalars['Int']['input']>;
  link_count?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sitemap_string?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Enum_Sitemapsitemap_Type>;
};

export type Slide = {
  __typename?: 'Slide';
  copy: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cta?: Maybe<ComponentSharedCta>;
  imagen: UploadFileEntityResponse;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  titular: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SlideEntity = {
  __typename?: 'SlideEntity';
  attributes?: Maybe<Slide>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SlideEntityResponse = {
  __typename?: 'SlideEntityResponse';
  data?: Maybe<SlideEntity>;
};

export type SlideEntityResponseCollection = {
  __typename?: 'SlideEntityResponseCollection';
  data: Array<SlideEntity>;
  meta: ResponseCollectionMeta;
};

export type SlideFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SlideFiltersInput>>>;
  copy?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  cta?: InputMaybe<ComponentSharedCtaFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<SlideFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SlideFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  titular?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SlideInput = {
  copy?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<ComponentSharedCtaInput>;
  imagen?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  titular?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Sucursal = {
  __typename?: 'Sucursal';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  direccion: Scalars['String']['output'];
  form: Scalars['String']['output'];
  horario: Scalars['String']['output'];
  imagen: UploadFileEntityResponse;
  nombre: Scalars['String']['output'];
  orden?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  telefonos: Array<Maybe<ComponentSucursalTelefonos>>;
  ubicacion: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type SucursalTelefonosArgs = {
  filters?: InputMaybe<ComponentSucursalTelefonosFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SucursalEntity = {
  __typename?: 'SucursalEntity';
  attributes?: Maybe<Sucursal>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SucursalEntityResponse = {
  __typename?: 'SucursalEntityResponse';
  data?: Maybe<SucursalEntity>;
};

export type SucursalEntityResponseCollection = {
  __typename?: 'SucursalEntityResponseCollection';
  data: Array<SucursalEntity>;
  meta: ResponseCollectionMeta;
};

export type SucursalFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SucursalFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  direccion?: InputMaybe<StringFilterInput>;
  form?: InputMaybe<StringFilterInput>;
  horario?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  nombre?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SucursalFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SucursalFiltersInput>>>;
  orden?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  telefonos?: InputMaybe<ComponentSucursalTelefonosFiltersInput>;
  ubicacion?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SucursalInput = {
  direccion?: InputMaybe<Scalars['String']['input']>;
  form?: InputMaybe<Scalars['String']['input']>;
  horario?: InputMaybe<Scalars['String']['input']>;
  imagen?: InputMaybe<Scalars['ID']['input']>;
  nombre?: InputMaybe<Scalars['String']['input']>;
  orden?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  telefonos?: InputMaybe<Array<InputMaybe<ComponentSucursalTelefonosInput>>>;
  ubicacion?: InputMaybe<Scalars['String']['input']>;
};

export type Tpage = {
  __typename?: 'Tpage';
  contenido: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cta?: Maybe<ComponentSharedCta>;
  nombre: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  titular: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TpageEntity = {
  __typename?: 'TpageEntity';
  attributes?: Maybe<Tpage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TpageEntityResponse = {
  __typename?: 'TpageEntityResponse';
  data?: Maybe<TpageEntity>;
};

export type TpageEntityResponseCollection = {
  __typename?: 'TpageEntityResponseCollection';
  data: Array<TpageEntity>;
  meta: ResponseCollectionMeta;
};

export type TpageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TpageFiltersInput>>>;
  contenido?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  cta?: InputMaybe<ComponentSharedCtaFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  nombre?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TpageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TpageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  titular?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TpageInput = {
  contenido?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<ComponentSharedCtaInput>;
  nombre?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  titular?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type Writer = {
  __typename?: 'Writer';
  articles?: Maybe<ArticleRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<UploadFileEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type WriterArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type WriterEntity = {
  __typename?: 'WriterEntity';
  attributes?: Maybe<Writer>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type WriterEntityResponse = {
  __typename?: 'WriterEntityResponse';
  data?: Maybe<WriterEntity>;
};

export type WriterEntityResponseCollection = {
  __typename?: 'WriterEntityResponseCollection';
  data: Array<WriterEntity>;
  meta: ResponseCollectionMeta;
};

export type WriterFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<WriterFiltersInput>>>;
  articles?: InputMaybe<ArticleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<WriterFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WriterFiltersInput>>>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type WriterInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['ID']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
};
