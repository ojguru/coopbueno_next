/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { SchemaUnionsKey } from "gqty";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  LandingContenidoDynamicZoneInput: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
}

export interface ArticleFiltersInput {
  and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  author?: InputMaybe<WriterFiltersInput>;
  category?: InputMaybe<CategoryFiltersInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IDFilterInput>;
  not?: InputMaybe<ArticleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface ArticleInput {
  author?: InputMaybe<Scalars["ID"]>;
  category?: InputMaybe<Scalars["ID"]>;
  content?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
}

export interface BooleanFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  contains?: InputMaybe<Scalars["Boolean"]>;
  containsi?: InputMaybe<Scalars["Boolean"]>;
  endsWith?: InputMaybe<Scalars["Boolean"]>;
  eq?: InputMaybe<Scalars["Boolean"]>;
  gt?: InputMaybe<Scalars["Boolean"]>;
  gte?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  lt?: InputMaybe<Scalars["Boolean"]>;
  lte?: InputMaybe<Scalars["Boolean"]>;
  ne?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars["Boolean"]>;
  notContainsi?: InputMaybe<Scalars["Boolean"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  startsWith?: InputMaybe<Scalars["Boolean"]>;
}

export interface CategoryFiltersInput {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  articles?: InputMaybe<ArticleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IDFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface CategoryInput {
  articles?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  description?: InputMaybe<Scalars["String"]>;
  icon?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  slug?: InputMaybe<Scalars["String"]>;
}

export interface ComponentGeneralFormularioInput {
  formId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  titulo?: InputMaybe<Scalars["String"]>;
}

export interface ComponentGeneralItemsFiltersInput {
  and?: InputMaybe<Array<InputMaybe<ComponentGeneralItemsFiltersInput>>>;
  not?: InputMaybe<ComponentGeneralItemsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentGeneralItemsFiltersInput>>>;
  texto?: InputMaybe<StringFilterInput>;
}

export interface ComponentSectionsHeroInput {
  cta?: InputMaybe<ComponentSharedCtaInput>;
  descripcion?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  imagen?: InputMaybe<Scalars["ID"]>;
  titulo?: InputMaybe<Scalars["String"]>;
}

export interface ComponentServiciosRequisitosFiltersInput {
  and?: InputMaybe<Array<InputMaybe<ComponentServiciosRequisitosFiltersInput>>>;
  not?: InputMaybe<ComponentServiciosRequisitosFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServiciosRequisitosFiltersInput>>>;
  requisito?: InputMaybe<StringFilterInput>;
}

export interface ComponentServiciosRequisitosInput {
  id?: InputMaybe<Scalars["ID"]>;
  requisito?: InputMaybe<Scalars["String"]>;
}

export interface ComponentServiciosTarifarioInput {
  id?: InputMaybe<Scalars["ID"]>;
  nota?: InputMaybe<Scalars["String"]>;
  tarifas?: InputMaybe<Array<InputMaybe<ComponentServiciosTarifasInput>>>;
}

export interface ComponentServiciosTarifasFiltersInput {
  and?: InputMaybe<Array<InputMaybe<ComponentServiciosTarifasFiltersInput>>>;
  nombre?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentServiciosTarifasFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServiciosTarifasFiltersInput>>>;
  valor?: InputMaybe<StringFilterInput>;
}

export interface ComponentServiciosTarifasInput {
  id?: InputMaybe<Scalars["ID"]>;
  nombre?: InputMaybe<Scalars["String"]>;
  valor?: InputMaybe<Scalars["String"]>;
}

export interface ComponentServiciosVentajasFiltersInput {
  and?: InputMaybe<Array<InputMaybe<ComponentServiciosVentajasFiltersInput>>>;
  not?: InputMaybe<ComponentServiciosVentajasFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServiciosVentajasFiltersInput>>>;
  ventaja?: InputMaybe<StringFilterInput>;
}

export interface ComponentServiciosVentajasInput {
  id?: InputMaybe<Scalars["ID"]>;
  ventaja?: InputMaybe<Scalars["String"]>;
}

export interface ComponentSharedCtaInput {
  id?: InputMaybe<Scalars["ID"]>;
  target?: InputMaybe<Scalars["Boolean"]>;
  texto?: InputMaybe<Scalars["String"]>;
  uri?: InputMaybe<Scalars["String"]>;
}

export interface ComponentSharedPortadaInput {
  copy?: InputMaybe<Scalars["String"]>;
  cta?: InputMaybe<ComponentSharedCtaInput>;
  id?: InputMaybe<Scalars["ID"]>;
  imagen?: InputMaybe<Scalars["ID"]>;
  titular?: InputMaybe<Scalars["String"]>;
}

export interface ComponentSharedSeoInput {
  id?: InputMaybe<Scalars["ID"]>;
  metaDescription?: InputMaybe<Scalars["String"]>;
  metaTitle?: InputMaybe<Scalars["String"]>;
  shareImage?: InputMaybe<Scalars["ID"]>;
}

export interface ComponentSucursalTelefonosFiltersInput {
  and?: InputMaybe<Array<InputMaybe<ComponentSucursalTelefonosFiltersInput>>>;
  not?: InputMaybe<ComponentSucursalTelefonosFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSucursalTelefonosFiltersInput>>>;
  telefono?: InputMaybe<StringFilterInput>;
}

export interface ComponentSucursalTelefonosInput {
  id?: InputMaybe<Scalars["ID"]>;
  telefono?: InputMaybe<Scalars["String"]>;
}

export interface DateTimeFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  contains?: InputMaybe<Scalars["DateTime"]>;
  containsi?: InputMaybe<Scalars["DateTime"]>;
  endsWith?: InputMaybe<Scalars["DateTime"]>;
  eq?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  ne?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars["DateTime"]>;
  notContainsi?: InputMaybe<Scalars["DateTime"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  startsWith?: InputMaybe<Scalars["DateTime"]>;
}

export enum ENUM_MENUSMENUITEM_TARGET {
  blank = "blank",
  parent = "parent",
  self = "self",
  top = "top",
}

export enum ENUM_SERVICIO_CATEGORIA {
  ahorro = "ahorro",
  beneficios = "beneficios",
  facilidades = "facilidades",
  prestamos = "prestamos",
}

export enum ENUM_SERVICIO_TIPO {
  beneficios = "beneficios",
  empresas = "empresas",
  personas = "personas",
}

export interface FileInfoInput {
  alternativeText?: InputMaybe<Scalars["String"]>;
  caption?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
}

export interface FloatFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  contains?: InputMaybe<Scalars["Float"]>;
  containsi?: InputMaybe<Scalars["Float"]>;
  endsWith?: InputMaybe<Scalars["Float"]>;
  eq?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  ne?: InputMaybe<Scalars["Float"]>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars["Float"]>;
  notContainsi?: InputMaybe<Scalars["Float"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  startsWith?: InputMaybe<Scalars["Float"]>;
}

export interface GlobalInput {
  defaultSeo?: InputMaybe<ComponentSharedSeoInput>;
  favicon?: InputMaybe<Scalars["ID"]>;
  siteName?: InputMaybe<Scalars["String"]>;
}

export interface HomepageInput {
  informacion?: InputMaybe<ComponentSectionsHeroInput>;
  portada?: InputMaybe<ComponentSharedPortadaInput>;
  razones?: InputMaybe<ComponentSectionsHeroInput>;
}

export interface I18NLocaleFiltersInput {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IDFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface IDFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  contains?: InputMaybe<Scalars["ID"]>;
  containsi?: InputMaybe<Scalars["ID"]>;
  endsWith?: InputMaybe<Scalars["ID"]>;
  eq?: InputMaybe<Scalars["ID"]>;
  gt?: InputMaybe<Scalars["ID"]>;
  gte?: InputMaybe<Scalars["ID"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  lt?: InputMaybe<Scalars["ID"]>;
  lte?: InputMaybe<Scalars["ID"]>;
  ne?: InputMaybe<Scalars["ID"]>;
  not?: InputMaybe<IDFilterInput>;
  notContains?: InputMaybe<Scalars["ID"]>;
  notContainsi?: InputMaybe<Scalars["ID"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  startsWith?: InputMaybe<Scalars["ID"]>;
}

export interface IntFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  contains?: InputMaybe<Scalars["Int"]>;
  containsi?: InputMaybe<Scalars["Int"]>;
  endsWith?: InputMaybe<Scalars["Int"]>;
  eq?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  ne?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars["Int"]>;
  notContainsi?: InputMaybe<Scalars["Int"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  startsWith?: InputMaybe<Scalars["Int"]>;
}

export interface JSONFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  contains?: InputMaybe<Scalars["JSON"]>;
  containsi?: InputMaybe<Scalars["JSON"]>;
  endsWith?: InputMaybe<Scalars["JSON"]>;
  eq?: InputMaybe<Scalars["JSON"]>;
  gt?: InputMaybe<Scalars["JSON"]>;
  gte?: InputMaybe<Scalars["JSON"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  lt?: InputMaybe<Scalars["JSON"]>;
  lte?: InputMaybe<Scalars["JSON"]>;
  ne?: InputMaybe<Scalars["JSON"]>;
  not?: InputMaybe<JSONFilterInput>;
  notContains?: InputMaybe<Scalars["JSON"]>;
  notContainsi?: InputMaybe<Scalars["JSON"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  startsWith?: InputMaybe<Scalars["JSON"]>;
}

export interface LandingFiltersInput {
  and?: InputMaybe<Array<InputMaybe<LandingFiltersInput>>>;
  copy?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IDFilterInput>;
  nombre?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<LandingFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LandingFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  titular?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface LandingInput {
  contenido?: InputMaybe<Array<Scalars["LandingContenidoDynamicZoneInput"]>>;
  copy?: InputMaybe<Scalars["String"]>;
  formulario?: InputMaybe<ComponentGeneralFormularioInput>;
  imagen?: InputMaybe<Scalars["ID"]>;
  nombre?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  slug?: InputMaybe<Scalars["String"]>;
  titular?: InputMaybe<Scalars["String"]>;
}

export interface MemoriaAnualFiltersInput {
  and?: InputMaybe<Array<InputMaybe<MemoriaAnualFiltersInput>>>;
  ano?: InputMaybe<IntFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IDFilterInput>;
  nombre?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<MemoriaAnualFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MemoriaAnualFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface MemoriaAnualInput {
  ano?: InputMaybe<Scalars["Int"]>;
  archivo?: InputMaybe<Scalars["ID"]>;
  imagen?: InputMaybe<Scalars["ID"]>;
  nombre?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
}

export interface MenusMenuFiltersInput {
  and?: InputMaybe<Array<InputMaybe<MenusMenuFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IDFilterInput>;
  items?: InputMaybe<MenusMenuItemFiltersInput>;
  not?: InputMaybe<MenusMenuFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MenusMenuFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface MenusMenuInput {
  items?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  slug?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
}

export interface MenusMenuItemFiltersInput {
  and?: InputMaybe<Array<InputMaybe<MenusMenuItemFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IDFilterInput>;
  not?: InputMaybe<MenusMenuItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MenusMenuItemFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  parent?: InputMaybe<MenusMenuItemFiltersInput>;
  root_menu?: InputMaybe<MenusMenuFiltersInput>;
  target?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
}

export interface MenusMenuItemInput {
  order?: InputMaybe<Scalars["Int"]>;
  parent?: InputMaybe<Scalars["ID"]>;
  root_menu?: InputMaybe<Scalars["ID"]>;
  target?: InputMaybe<ENUM_MENUSMENUITEM_TARGET>;
  title?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
}

export interface NoticiaFiltersInput {
  and?: InputMaybe<Array<InputMaybe<NoticiaFiltersInput>>>;
  contenido?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  descripcion?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IDFilterInput>;
  not?: InputMaybe<NoticiaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NoticiaFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  titulo?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface NoticiaInput {
  contenido?: InputMaybe<Scalars["String"]>;
  descripcion?: InputMaybe<Scalars["String"]>;
  imagen?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars["String"]>;
  titulo?: InputMaybe<Scalars["String"]>;
}

export interface PaginationArg {
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pageSize?: InputMaybe<Scalars["Int"]>;
  start?: InputMaybe<Scalars["Int"]>;
}

export enum PublicationState {
  LIVE = "LIVE",
  PREVIEW = "PREVIEW",
}

export interface ServicioFiltersInput {
  and?: InputMaybe<Array<InputMaybe<ServicioFiltersInput>>>;
  beneficios?: InputMaybe<ServicioFiltersInput>;
  categoria?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  descripcion?: InputMaybe<StringFilterInput>;
  form?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IDFilterInput>;
  nombre?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ServicioFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ServicioFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  tipo?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  video?: InputMaybe<StringFilterInput>;
}

export interface ServicioInput {
  beneficios?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  categoria?: InputMaybe<ENUM_SERVICIO_CATEGORIA>;
  descripcion?: InputMaybe<Scalars["String"]>;
  form?: InputMaybe<Scalars["String"]>;
  icono?: InputMaybe<Scalars["ID"]>;
  nombre?: InputMaybe<Scalars["String"]>;
  portada?: InputMaybe<ComponentSharedPortadaInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  requisitos?: InputMaybe<Array<InputMaybe<ComponentServiciosRequisitosInput>>>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars["String"]>;
  tarifario?: InputMaybe<ComponentServiciosTarifarioInput>;
  tipo?: InputMaybe<ENUM_SERVICIO_TIPO>;
  ventajas?: InputMaybe<Array<InputMaybe<ComponentServiciosVentajasInput>>>;
  video?: InputMaybe<Scalars["String"]>;
}

export interface SlideFiltersInput {
  and?: InputMaybe<Array<InputMaybe<SlideFiltersInput>>>;
  copy?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IDFilterInput>;
  not?: InputMaybe<SlideFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SlideFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  titular?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface SlideInput {
  copy?: InputMaybe<Scalars["String"]>;
  cta?: InputMaybe<ComponentSharedCtaInput>;
  imagen?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  titular?: InputMaybe<Scalars["String"]>;
}

export interface StringFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contains?: InputMaybe<Scalars["String"]>;
  containsi?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  eq?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  ne?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars["String"]>;
  notContainsi?: InputMaybe<Scalars["String"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  startsWith?: InputMaybe<Scalars["String"]>;
}

export interface SucursalFiltersInput {
  and?: InputMaybe<Array<InputMaybe<SucursalFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  direccion?: InputMaybe<StringFilterInput>;
  form?: InputMaybe<StringFilterInput>;
  horario?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IDFilterInput>;
  nombre?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SucursalFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SucursalFiltersInput>>>;
  orden?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  ubicacion?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface SucursalInput {
  direccion?: InputMaybe<Scalars["String"]>;
  form?: InputMaybe<Scalars["String"]>;
  horario?: InputMaybe<Scalars["String"]>;
  imagen?: InputMaybe<Scalars["ID"]>;
  nombre?: InputMaybe<Scalars["String"]>;
  orden?: InputMaybe<Scalars["Int"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  slug?: InputMaybe<Scalars["String"]>;
  telefonos?: InputMaybe<Array<InputMaybe<ComponentSucursalTelefonosInput>>>;
  ubicacion?: InputMaybe<Scalars["String"]>;
}

export interface TpageFiltersInput {
  agradecimiento?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<TpageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IDFilterInput>;
  nombre?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TpageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TpageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  titular?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface TpageInput {
  agradecimiento?: InputMaybe<Scalars["String"]>;
  cta?: InputMaybe<ComponentSharedCtaInput>;
  nombre?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  slug?: InputMaybe<Scalars["String"]>;
  titular?: InputMaybe<Scalars["String"]>;
}

export interface UploadFileFiltersInput {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JSONFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IDFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JSONFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
}

export interface UploadFileInput {
  alternativeText?: InputMaybe<Scalars["String"]>;
  caption?: InputMaybe<Scalars["String"]>;
  ext?: InputMaybe<Scalars["String"]>;
  formats?: InputMaybe<Scalars["JSON"]>;
  hash?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Int"]>;
  mime?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  previewUrl?: InputMaybe<Scalars["String"]>;
  provider?: InputMaybe<Scalars["String"]>;
  provider_metadata?: InputMaybe<Scalars["JSON"]>;
  size?: InputMaybe<Scalars["Float"]>;
  url?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["Int"]>;
}

export interface UsersPermissionsLoginInput {
  identifier: Scalars["String"];
  password: Scalars["String"];
  provider?: Scalars["String"];
}

export interface UsersPermissionsPermissionFiltersInput {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IDFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface UsersPermissionsRegisterInput {
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
}

export interface UsersPermissionsRoleFiltersInput {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IDFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
}

export interface UsersPermissionsRoleInput {
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  type?: InputMaybe<Scalars["String"]>;
  users?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
}

export interface UsersPermissionsUserFiltersInput {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IDFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
}

export interface UsersPermissionsUserInput {
  blocked?: InputMaybe<Scalars["Boolean"]>;
  confirmationToken?: InputMaybe<Scalars["String"]>;
  confirmed?: InputMaybe<Scalars["Boolean"]>;
  email?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  provider?: InputMaybe<Scalars["String"]>;
  resetPasswordToken?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["ID"]>;
  username?: InputMaybe<Scalars["String"]>;
}

export interface WriterFiltersInput {
  and?: InputMaybe<Array<InputMaybe<WriterFiltersInput>>>;
  articles?: InputMaybe<ArticleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IDFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<WriterFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WriterFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface WriterInput {
  articles?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  picture?: InputMaybe<Scalars["ID"]>;
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  DateTime: true,
  ENUM_MENUSMENUITEM_TARGET: true,
  ENUM_SERVICIO_CATEGORIA: true,
  ENUM_SERVICIO_TIPO: true,
  Float: true,
  ID: true,
  Int: true,
  JSON: true,
  LandingContenidoDynamicZoneInput: true,
  PublicationState: true,
  String: true,
  Upload: true,
};
export const generatedSchema = {
  Article: {
    __typename: { __type: "String!" },
    author: { __type: "WriterEntityResponse" },
    category: { __type: "CategoryEntityResponse" },
    content: { __type: "String!" },
    createdAt: { __type: "DateTime" },
    description: { __type: "String!" },
    image: { __type: "UploadFileEntityResponse" },
    publishedAt: { __type: "DateTime" },
    seo: { __type: "ComponentSharedSeo" },
    slug: { __type: "String!" },
    title: { __type: "String!" },
    updatedAt: { __type: "DateTime" },
  },
  ArticleEntity: {
    __typename: { __type: "String!" },
    attributes: { __type: "Article" },
    id: { __type: "ID" },
  },
  ArticleEntityResponse: {
    __typename: { __type: "String!" },
    data: { __type: "ArticleEntity" },
  },
  ArticleEntityResponseCollection: {
    __typename: { __type: "String!" },
    data: { __type: "[ArticleEntity!]!" },
    meta: { __type: "ResponseCollectionMeta!" },
  },
  ArticleFiltersInput: {
    and: { __type: "[ArticleFiltersInput]" },
    author: { __type: "WriterFiltersInput" },
    category: { __type: "CategoryFiltersInput" },
    content: { __type: "StringFilterInput" },
    createdAt: { __type: "DateTimeFilterInput" },
    description: { __type: "StringFilterInput" },
    id: { __type: "IDFilterInput" },
    not: { __type: "ArticleFiltersInput" },
    or: { __type: "[ArticleFiltersInput]" },
    publishedAt: { __type: "DateTimeFilterInput" },
    slug: { __type: "StringFilterInput" },
    title: { __type: "StringFilterInput" },
    updatedAt: { __type: "DateTimeFilterInput" },
  },
  ArticleInput: {
    author: { __type: "ID" },
    category: { __type: "ID" },
    content: { __type: "String" },
    description: { __type: "String" },
    image: { __type: "ID" },
    publishedAt: { __type: "DateTime" },
    seo: { __type: "ComponentSharedSeoInput" },
    slug: { __type: "String" },
    title: { __type: "String" },
  },
  ArticleRelationResponseCollection: {
    __typename: { __type: "String!" },
    data: { __type: "[ArticleEntity!]!" },
  },
  BooleanFilterInput: {
    and: { __type: "[Boolean]" },
    between: { __type: "[Boolean]" },
    contains: { __type: "Boolean" },
    containsi: { __type: "Boolean" },
    endsWith: { __type: "Boolean" },
    eq: { __type: "Boolean" },
    gt: { __type: "Boolean" },
    gte: { __type: "Boolean" },
    in: { __type: "[Boolean]" },
    lt: { __type: "Boolean" },
    lte: { __type: "Boolean" },
    ne: { __type: "Boolean" },
    not: { __type: "BooleanFilterInput" },
    notContains: { __type: "Boolean" },
    notContainsi: { __type: "Boolean" },
    notIn: { __type: "[Boolean]" },
    notNull: { __type: "Boolean" },
    null: { __type: "Boolean" },
    or: { __type: "[Boolean]" },
    startsWith: { __type: "Boolean" },
  },
  Category: {
    __typename: { __type: "String!" },
    articles: {
      __type: "ArticleRelationResponseCollection",
      __args: {
        filters: "ArticleFiltersInput",
        pagination: "PaginationArg",
        publicationState: "PublicationState",
        sort: "[String]",
      },
    },
    createdAt: { __type: "DateTime" },
    description: { __type: "String!" },
    icon: { __type: "UploadFileEntityResponse!" },
    name: { __type: "String!" },
    slug: { __type: "String!" },
    updatedAt: { __type: "DateTime" },
  },
  CategoryEntity: {
    __typename: { __type: "String!" },
    attributes: { __type: "Category" },
    id: { __type: "ID" },
  },
  CategoryEntityResponse: {
    __typename: { __type: "String!" },
    data: { __type: "CategoryEntity" },
  },
  CategoryEntityResponseCollection: {
    __typename: { __type: "String!" },
    data: { __type: "[CategoryEntity!]!" },
    meta: { __type: "ResponseCollectionMeta!" },
  },
  CategoryFiltersInput: {
    and: { __type: "[CategoryFiltersInput]" },
    articles: { __type: "ArticleFiltersInput" },
    createdAt: { __type: "DateTimeFilterInput" },
    description: { __type: "StringFilterInput" },
    id: { __type: "IDFilterInput" },
    name: { __type: "StringFilterInput" },
    not: { __type: "CategoryFiltersInput" },
    or: { __type: "[CategoryFiltersInput]" },
    slug: { __type: "StringFilterInput" },
    updatedAt: { __type: "DateTimeFilterInput" },
  },
  CategoryInput: {
    articles: { __type: "[ID]" },
    description: { __type: "String" },
    icon: { __type: "ID" },
    name: { __type: "String" },
    slug: { __type: "String" },
  },
  ComponentGeneralFormulario: {
    __typename: { __type: "String!" },
    formId: { __type: "String!" },
    id: { __type: "ID!" },
    titulo: { __type: "String" },
  },
  ComponentGeneralFormularioInput: {
    formId: { __type: "String" },
    id: { __type: "ID" },
    titulo: { __type: "String" },
  },
  ComponentGeneralItems: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    texto: { __type: "String!" },
  },
  ComponentGeneralItemsFiltersInput: {
    and: { __type: "[ComponentGeneralItemsFiltersInput]" },
    not: { __type: "ComponentGeneralItemsFiltersInput" },
    or: { __type: "[ComponentGeneralItemsFiltersInput]" },
    texto: { __type: "StringFilterInput" },
  },
  ComponentGeneralLista: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    items: {
      __type: "[ComponentGeneralItems]!",
      __args: {
        filters: "ComponentGeneralItemsFiltersInput",
        pagination: "PaginationArg",
        sort: "[String]",
      },
    },
    titulo: { __type: "String!" },
  },
  ComponentSectionsHero: {
    __typename: { __type: "String!" },
    cta: { __type: "ComponentSharedCta" },
    descripcion: { __type: "String!" },
    id: { __type: "ID!" },
    imagen: { __type: "UploadFileEntityResponse!" },
    titulo: { __type: "String!" },
  },
  ComponentSectionsHeroInput: {
    cta: { __type: "ComponentSharedCtaInput" },
    descripcion: { __type: "String" },
    id: { __type: "ID" },
    imagen: { __type: "ID" },
    titulo: { __type: "String" },
  },
  ComponentServiciosRequisitos: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    requisito: { __type: "String" },
  },
  ComponentServiciosRequisitosFiltersInput: {
    and: { __type: "[ComponentServiciosRequisitosFiltersInput]" },
    not: { __type: "ComponentServiciosRequisitosFiltersInput" },
    or: { __type: "[ComponentServiciosRequisitosFiltersInput]" },
    requisito: { __type: "StringFilterInput" },
  },
  ComponentServiciosRequisitosInput: {
    id: { __type: "ID" },
    requisito: { __type: "String" },
  },
  ComponentServiciosTarifario: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    nota: { __type: "String" },
    tarifas: {
      __type: "[ComponentServiciosTarifas]",
      __args: {
        filters: "ComponentServiciosTarifasFiltersInput",
        pagination: "PaginationArg",
        sort: "[String]",
      },
    },
  },
  ComponentServiciosTarifarioInput: {
    id: { __type: "ID" },
    nota: { __type: "String" },
    tarifas: { __type: "[ComponentServiciosTarifasInput]" },
  },
  ComponentServiciosTarifas: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    nombre: { __type: "String" },
    valor: { __type: "String" },
  },
  ComponentServiciosTarifasFiltersInput: {
    and: { __type: "[ComponentServiciosTarifasFiltersInput]" },
    nombre: { __type: "StringFilterInput" },
    not: { __type: "ComponentServiciosTarifasFiltersInput" },
    or: { __type: "[ComponentServiciosTarifasFiltersInput]" },
    valor: { __type: "StringFilterInput" },
  },
  ComponentServiciosTarifasInput: {
    id: { __type: "ID" },
    nombre: { __type: "String" },
    valor: { __type: "String" },
  },
  ComponentServiciosVentajas: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    ventaja: { __type: "String" },
  },
  ComponentServiciosVentajasFiltersInput: {
    and: { __type: "[ComponentServiciosVentajasFiltersInput]" },
    not: { __type: "ComponentServiciosVentajasFiltersInput" },
    or: { __type: "[ComponentServiciosVentajasFiltersInput]" },
    ventaja: { __type: "StringFilterInput" },
  },
  ComponentServiciosVentajasInput: {
    id: { __type: "ID" },
    ventaja: { __type: "String" },
  },
  ComponentSharedCta: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    target: { __type: "Boolean!" },
    texto: { __type: "String!" },
    uri: { __type: "String!" },
  },
  ComponentSharedCtaInput: {
    id: { __type: "ID" },
    target: { __type: "Boolean" },
    texto: { __type: "String" },
    uri: { __type: "String" },
  },
  ComponentSharedPortada: {
    __typename: { __type: "String!" },
    copy: { __type: "String!" },
    cta: { __type: "ComponentSharedCta" },
    id: { __type: "ID!" },
    imagen: { __type: "UploadFileEntityResponse!" },
    titular: { __type: "String!" },
  },
  ComponentSharedPortadaInput: {
    copy: { __type: "String" },
    cta: { __type: "ComponentSharedCtaInput" },
    id: { __type: "ID" },
    imagen: { __type: "ID" },
    titular: { __type: "String" },
  },
  ComponentSharedSeo: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    metaDescription: { __type: "String!" },
    metaTitle: { __type: "String!" },
    shareImage: { __type: "UploadFileEntityResponse" },
  },
  ComponentSharedSeoInput: {
    id: { __type: "ID" },
    metaDescription: { __type: "String" },
    metaTitle: { __type: "String" },
    shareImage: { __type: "ID" },
  },
  ComponentSucursalTelefonos: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    telefono: { __type: "String" },
  },
  ComponentSucursalTelefonosFiltersInput: {
    and: { __type: "[ComponentSucursalTelefonosFiltersInput]" },
    not: { __type: "ComponentSucursalTelefonosFiltersInput" },
    or: { __type: "[ComponentSucursalTelefonosFiltersInput]" },
    telefono: { __type: "StringFilterInput" },
  },
  ComponentSucursalTelefonosInput: {
    id: { __type: "ID" },
    telefono: { __type: "String" },
  },
  DateTimeFilterInput: {
    and: { __type: "[DateTime]" },
    between: { __type: "[DateTime]" },
    contains: { __type: "DateTime" },
    containsi: { __type: "DateTime" },
    endsWith: { __type: "DateTime" },
    eq: { __type: "DateTime" },
    gt: { __type: "DateTime" },
    gte: { __type: "DateTime" },
    in: { __type: "[DateTime]" },
    lt: { __type: "DateTime" },
    lte: { __type: "DateTime" },
    ne: { __type: "DateTime" },
    not: { __type: "DateTimeFilterInput" },
    notContains: { __type: "DateTime" },
    notContainsi: { __type: "DateTime" },
    notIn: { __type: "[DateTime]" },
    notNull: { __type: "Boolean" },
    null: { __type: "Boolean" },
    or: { __type: "[DateTime]" },
    startsWith: { __type: "DateTime" },
  },
  Error: {
    __typename: { __type: "String!" },
    code: { __type: "String!" },
    message: { __type: "String" },
  },
  FileInfoInput: {
    alternativeText: { __type: "String" },
    caption: { __type: "String" },
    name: { __type: "String" },
  },
  FloatFilterInput: {
    and: { __type: "[Float]" },
    between: { __type: "[Float]" },
    contains: { __type: "Float" },
    containsi: { __type: "Float" },
    endsWith: { __type: "Float" },
    eq: { __type: "Float" },
    gt: { __type: "Float" },
    gte: { __type: "Float" },
    in: { __type: "[Float]" },
    lt: { __type: "Float" },
    lte: { __type: "Float" },
    ne: { __type: "Float" },
    not: { __type: "FloatFilterInput" },
    notContains: { __type: "Float" },
    notContainsi: { __type: "Float" },
    notIn: { __type: "[Float]" },
    notNull: { __type: "Boolean" },
    null: { __type: "Boolean" },
    or: { __type: "[Float]" },
    startsWith: { __type: "Float" },
  },
  GenericMorph: {
    __typename: { __type: "String!" },
    $on: { __type: "$GenericMorph!" },
  },
  Global: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime" },
    defaultSeo: { __type: "ComponentSharedSeo!" },
    favicon: { __type: "UploadFileEntityResponse" },
    siteName: { __type: "String!" },
    updatedAt: { __type: "DateTime" },
  },
  GlobalEntity: {
    __typename: { __type: "String!" },
    attributes: { __type: "Global" },
    id: { __type: "ID" },
  },
  GlobalEntityResponse: {
    __typename: { __type: "String!" },
    data: { __type: "GlobalEntity" },
  },
  GlobalInput: {
    defaultSeo: { __type: "ComponentSharedSeoInput" },
    favicon: { __type: "ID" },
    siteName: { __type: "String" },
  },
  Homepage: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime" },
    informacion: { __type: "ComponentSectionsHero!" },
    portada: { __type: "ComponentSharedPortada!" },
    razones: { __type: "ComponentSectionsHero!" },
    updatedAt: { __type: "DateTime" },
  },
  HomepageEntity: {
    __typename: { __type: "String!" },
    attributes: { __type: "Homepage" },
    id: { __type: "ID" },
  },
  HomepageEntityResponse: {
    __typename: { __type: "String!" },
    data: { __type: "HomepageEntity" },
  },
  HomepageInput: {
    informacion: { __type: "ComponentSectionsHeroInput" },
    portada: { __type: "ComponentSharedPortadaInput" },
    razones: { __type: "ComponentSectionsHeroInput" },
  },
  I18NLocale: {
    __typename: { __type: "String!" },
    code: { __type: "String" },
    createdAt: { __type: "DateTime" },
    name: { __type: "String" },
    updatedAt: { __type: "DateTime" },
  },
  I18NLocaleEntity: {
    __typename: { __type: "String!" },
    attributes: { __type: "I18NLocale" },
    id: { __type: "ID" },
  },
  I18NLocaleEntityResponse: {
    __typename: { __type: "String!" },
    data: { __type: "I18NLocaleEntity" },
  },
  I18NLocaleEntityResponseCollection: {
    __typename: { __type: "String!" },
    data: { __type: "[I18NLocaleEntity!]!" },
    meta: { __type: "ResponseCollectionMeta!" },
  },
  I18NLocaleFiltersInput: {
    and: { __type: "[I18NLocaleFiltersInput]" },
    code: { __type: "StringFilterInput" },
    createdAt: { __type: "DateTimeFilterInput" },
    id: { __type: "IDFilterInput" },
    name: { __type: "StringFilterInput" },
    not: { __type: "I18NLocaleFiltersInput" },
    or: { __type: "[I18NLocaleFiltersInput]" },
    updatedAt: { __type: "DateTimeFilterInput" },
  },
  IDFilterInput: {
    and: { __type: "[ID]" },
    between: { __type: "[ID]" },
    contains: { __type: "ID" },
    containsi: { __type: "ID" },
    endsWith: { __type: "ID" },
    eq: { __type: "ID" },
    gt: { __type: "ID" },
    gte: { __type: "ID" },
    in: { __type: "[ID]" },
    lt: { __type: "ID" },
    lte: { __type: "ID" },
    ne: { __type: "ID" },
    not: { __type: "IDFilterInput" },
    notContains: { __type: "ID" },
    notContainsi: { __type: "ID" },
    notIn: { __type: "[ID]" },
    notNull: { __type: "Boolean" },
    null: { __type: "Boolean" },
    or: { __type: "[ID]" },
    startsWith: { __type: "ID" },
  },
  IntFilterInput: {
    and: { __type: "[Int]" },
    between: { __type: "[Int]" },
    contains: { __type: "Int" },
    containsi: { __type: "Int" },
    endsWith: { __type: "Int" },
    eq: { __type: "Int" },
    gt: { __type: "Int" },
    gte: { __type: "Int" },
    in: { __type: "[Int]" },
    lt: { __type: "Int" },
    lte: { __type: "Int" },
    ne: { __type: "Int" },
    not: { __type: "IntFilterInput" },
    notContains: { __type: "Int" },
    notContainsi: { __type: "Int" },
    notIn: { __type: "[Int]" },
    notNull: { __type: "Boolean" },
    null: { __type: "Boolean" },
    or: { __type: "[Int]" },
    startsWith: { __type: "Int" },
  },
  JSONFilterInput: {
    and: { __type: "[JSON]" },
    between: { __type: "[JSON]" },
    contains: { __type: "JSON" },
    containsi: { __type: "JSON" },
    endsWith: { __type: "JSON" },
    eq: { __type: "JSON" },
    gt: { __type: "JSON" },
    gte: { __type: "JSON" },
    in: { __type: "[JSON]" },
    lt: { __type: "JSON" },
    lte: { __type: "JSON" },
    ne: { __type: "JSON" },
    not: { __type: "JSONFilterInput" },
    notContains: { __type: "JSON" },
    notContainsi: { __type: "JSON" },
    notIn: { __type: "[JSON]" },
    notNull: { __type: "Boolean" },
    null: { __type: "Boolean" },
    or: { __type: "[JSON]" },
    startsWith: { __type: "JSON" },
  },
  Landing: {
    __typename: { __type: "String!" },
    contenido: { __type: "[LandingContenidoDynamicZone]" },
    copy: { __type: "String" },
    createdAt: { __type: "DateTime" },
    formulario: { __type: "ComponentGeneralFormulario!" },
    imagen: { __type: "UploadFileEntityResponse!" },
    nombre: { __type: "String!" },
    publishedAt: { __type: "DateTime" },
    slug: { __type: "String!" },
    titular: { __type: "String!" },
    updatedAt: { __type: "DateTime" },
  },
  LandingContenidoDynamicZone: {
    __typename: { __type: "String!" },
    $on: { __type: "$LandingContenidoDynamicZone!" },
  },
  LandingEntity: {
    __typename: { __type: "String!" },
    attributes: { __type: "Landing" },
    id: { __type: "ID" },
  },
  LandingEntityResponse: {
    __typename: { __type: "String!" },
    data: { __type: "LandingEntity" },
  },
  LandingEntityResponseCollection: {
    __typename: { __type: "String!" },
    data: { __type: "[LandingEntity!]!" },
    meta: { __type: "ResponseCollectionMeta!" },
  },
  LandingFiltersInput: {
    and: { __type: "[LandingFiltersInput]" },
    copy: { __type: "StringFilterInput" },
    createdAt: { __type: "DateTimeFilterInput" },
    id: { __type: "IDFilterInput" },
    nombre: { __type: "StringFilterInput" },
    not: { __type: "LandingFiltersInput" },
    or: { __type: "[LandingFiltersInput]" },
    publishedAt: { __type: "DateTimeFilterInput" },
    slug: { __type: "StringFilterInput" },
    titular: { __type: "StringFilterInput" },
    updatedAt: { __type: "DateTimeFilterInput" },
  },
  LandingInput: {
    contenido: { __type: "[LandingContenidoDynamicZoneInput!]" },
    copy: { __type: "String" },
    formulario: { __type: "ComponentGeneralFormularioInput" },
    imagen: { __type: "ID" },
    nombre: { __type: "String" },
    publishedAt: { __type: "DateTime" },
    slug: { __type: "String" },
    titular: { __type: "String" },
  },
  MemoriaAnual: {
    __typename: { __type: "String!" },
    ano: { __type: "Int!" },
    archivo: { __type: "UploadFileEntityResponse!" },
    createdAt: { __type: "DateTime" },
    imagen: { __type: "UploadFileEntityResponse!" },
    nombre: { __type: "String!" },
    publishedAt: { __type: "DateTime" },
    updatedAt: { __type: "DateTime" },
  },
  MemoriaAnualEntity: {
    __typename: { __type: "String!" },
    attributes: { __type: "MemoriaAnual" },
    id: { __type: "ID" },
  },
  MemoriaAnualEntityResponse: {
    __typename: { __type: "String!" },
    data: { __type: "MemoriaAnualEntity" },
  },
  MemoriaAnualEntityResponseCollection: {
    __typename: { __type: "String!" },
    data: { __type: "[MemoriaAnualEntity!]!" },
    meta: { __type: "ResponseCollectionMeta!" },
  },
  MemoriaAnualFiltersInput: {
    and: { __type: "[MemoriaAnualFiltersInput]" },
    ano: { __type: "IntFilterInput" },
    createdAt: { __type: "DateTimeFilterInput" },
    id: { __type: "IDFilterInput" },
    nombre: { __type: "StringFilterInput" },
    not: { __type: "MemoriaAnualFiltersInput" },
    or: { __type: "[MemoriaAnualFiltersInput]" },
    publishedAt: { __type: "DateTimeFilterInput" },
    updatedAt: { __type: "DateTimeFilterInput" },
  },
  MemoriaAnualInput: {
    ano: { __type: "Int" },
    archivo: { __type: "ID" },
    imagen: { __type: "ID" },
    nombre: { __type: "String" },
    publishedAt: { __type: "DateTime" },
  },
  MenusMenu: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime" },
    items: {
      __type: "MenusMenuItemRelationResponseCollection",
      __args: {
        filters: "MenusMenuItemFiltersInput",
        pagination: "PaginationArg",
        sort: "[String]",
      },
    },
    slug: { __type: "String!" },
    title: { __type: "String!" },
    updatedAt: { __type: "DateTime" },
  },
  MenusMenuEntity: {
    __typename: { __type: "String!" },
    attributes: { __type: "MenusMenu" },
    id: { __type: "ID" },
  },
  MenusMenuEntityResponse: {
    __typename: { __type: "String!" },
    data: { __type: "MenusMenuEntity" },
  },
  MenusMenuEntityResponseCollection: {
    __typename: { __type: "String!" },
    data: { __type: "[MenusMenuEntity!]!" },
    meta: { __type: "ResponseCollectionMeta!" },
  },
  MenusMenuFiltersInput: {
    and: { __type: "[MenusMenuFiltersInput]" },
    createdAt: { __type: "DateTimeFilterInput" },
    id: { __type: "IDFilterInput" },
    items: { __type: "MenusMenuItemFiltersInput" },
    not: { __type: "MenusMenuFiltersInput" },
    or: { __type: "[MenusMenuFiltersInput]" },
    slug: { __type: "StringFilterInput" },
    title: { __type: "StringFilterInput" },
    updatedAt: { __type: "DateTimeFilterInput" },
  },
  MenusMenuInput: {
    items: { __type: "[ID]" },
    slug: { __type: "String" },
    title: { __type: "String" },
  },
  MenusMenuItem: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime" },
    order: { __type: "Int" },
    parent: { __type: "MenusMenuItemEntityResponse" },
    root_menu: { __type: "MenusMenuEntityResponse!" },
    target: { __type: "ENUM_MENUSMENUITEM_TARGET" },
    title: { __type: "String!" },
    updatedAt: { __type: "DateTime" },
    url: { __type: "String" },
  },
  MenusMenuItemEntity: {
    __typename: { __type: "String!" },
    attributes: { __type: "MenusMenuItem" },
    id: { __type: "ID" },
  },
  MenusMenuItemEntityResponse: {
    __typename: { __type: "String!" },
    data: { __type: "MenusMenuItemEntity" },
  },
  MenusMenuItemEntityResponseCollection: {
    __typename: { __type: "String!" },
    data: { __type: "[MenusMenuItemEntity!]!" },
    meta: { __type: "ResponseCollectionMeta!" },
  },
  MenusMenuItemFiltersInput: {
    and: { __type: "[MenusMenuItemFiltersInput]" },
    createdAt: { __type: "DateTimeFilterInput" },
    id: { __type: "IDFilterInput" },
    not: { __type: "MenusMenuItemFiltersInput" },
    or: { __type: "[MenusMenuItemFiltersInput]" },
    order: { __type: "IntFilterInput" },
    parent: { __type: "MenusMenuItemFiltersInput" },
    root_menu: { __type: "MenusMenuFiltersInput" },
    target: { __type: "StringFilterInput" },
    title: { __type: "StringFilterInput" },
    updatedAt: { __type: "DateTimeFilterInput" },
    url: { __type: "StringFilterInput" },
  },
  MenusMenuItemInput: {
    order: { __type: "Int" },
    parent: { __type: "ID" },
    root_menu: { __type: "ID" },
    target: { __type: "ENUM_MENUSMENUITEM_TARGET" },
    title: { __type: "String" },
    url: { __type: "String" },
  },
  MenusMenuItemRelationResponseCollection: {
    __typename: { __type: "String!" },
    data: { __type: "[MenusMenuItemEntity!]!" },
  },
  Noticia: {
    __typename: { __type: "String!" },
    contenido: { __type: "String" },
    createdAt: { __type: "DateTime" },
    descripcion: { __type: "String!" },
    imagen: { __type: "UploadFileEntityResponse!" },
    publishedAt: { __type: "DateTime" },
    seo: { __type: "ComponentSharedSeo" },
    slug: { __type: "String!" },
    titulo: { __type: "String!" },
    updatedAt: { __type: "DateTime" },
  },
  NoticiaEntity: {
    __typename: { __type: "String!" },
    attributes: { __type: "Noticia" },
    id: { __type: "ID" },
  },
  NoticiaEntityResponse: {
    __typename: { __type: "String!" },
    data: { __type: "NoticiaEntity" },
  },
  NoticiaEntityResponseCollection: {
    __typename: { __type: "String!" },
    data: { __type: "[NoticiaEntity!]!" },
    meta: { __type: "ResponseCollectionMeta!" },
  },
  NoticiaFiltersInput: {
    and: { __type: "[NoticiaFiltersInput]" },
    contenido: { __type: "StringFilterInput" },
    createdAt: { __type: "DateTimeFilterInput" },
    descripcion: { __type: "StringFilterInput" },
    id: { __type: "IDFilterInput" },
    not: { __type: "NoticiaFiltersInput" },
    or: { __type: "[NoticiaFiltersInput]" },
    publishedAt: { __type: "DateTimeFilterInput" },
    slug: { __type: "StringFilterInput" },
    titulo: { __type: "StringFilterInput" },
    updatedAt: { __type: "DateTimeFilterInput" },
  },
  NoticiaInput: {
    contenido: { __type: "String" },
    descripcion: { __type: "String" },
    imagen: { __type: "ID" },
    publishedAt: { __type: "DateTime" },
    seo: { __type: "ComponentSharedSeoInput" },
    slug: { __type: "String" },
    titulo: { __type: "String" },
  },
  Pagination: {
    __typename: { __type: "String!" },
    page: { __type: "Int!" },
    pageCount: { __type: "Int!" },
    pageSize: { __type: "Int!" },
    total: { __type: "Int!" },
  },
  PaginationArg: {
    limit: { __type: "Int" },
    page: { __type: "Int" },
    pageSize: { __type: "Int" },
    start: { __type: "Int" },
  },
  ResponseCollectionMeta: {
    __typename: { __type: "String!" },
    pagination: { __type: "Pagination!" },
  },
  Servicio: {
    __typename: { __type: "String!" },
    beneficios: {
      __type: "ServicioRelationResponseCollection",
      __args: {
        filters: "ServicioFiltersInput",
        pagination: "PaginationArg",
        publicationState: "PublicationState",
        sort: "[String]",
      },
    },
    categoria: { __type: "ENUM_SERVICIO_CATEGORIA!" },
    createdAt: { __type: "DateTime" },
    descripcion: { __type: "String!" },
    form: { __type: "String" },
    icono: { __type: "UploadFileEntityResponse!" },
    nombre: { __type: "String!" },
    portada: { __type: "ComponentSharedPortada!" },
    publishedAt: { __type: "DateTime" },
    requisitos: {
      __type: "[ComponentServiciosRequisitos]",
      __args: {
        filters: "ComponentServiciosRequisitosFiltersInput",
        pagination: "PaginationArg",
        sort: "[String]",
      },
    },
    seo: { __type: "ComponentSharedSeo" },
    slug: { __type: "String!" },
    tarifario: { __type: "ComponentServiciosTarifario" },
    tipo: { __type: "ENUM_SERVICIO_TIPO!" },
    updatedAt: { __type: "DateTime" },
    ventajas: {
      __type: "[ComponentServiciosVentajas]",
      __args: {
        filters: "ComponentServiciosVentajasFiltersInput",
        pagination: "PaginationArg",
        sort: "[String]",
      },
    },
    video: { __type: "String" },
  },
  ServicioEntity: {
    __typename: { __type: "String!" },
    attributes: { __type: "Servicio" },
    id: { __type: "ID" },
  },
  ServicioEntityResponse: {
    __typename: { __type: "String!" },
    data: { __type: "ServicioEntity" },
  },
  ServicioEntityResponseCollection: {
    __typename: { __type: "String!" },
    data: { __type: "[ServicioEntity!]!" },
    meta: { __type: "ResponseCollectionMeta!" },
  },
  ServicioFiltersInput: {
    and: { __type: "[ServicioFiltersInput]" },
    beneficios: { __type: "ServicioFiltersInput" },
    categoria: { __type: "StringFilterInput" },
    createdAt: { __type: "DateTimeFilterInput" },
    descripcion: { __type: "StringFilterInput" },
    form: { __type: "StringFilterInput" },
    id: { __type: "IDFilterInput" },
    nombre: { __type: "StringFilterInput" },
    not: { __type: "ServicioFiltersInput" },
    or: { __type: "[ServicioFiltersInput]" },
    publishedAt: { __type: "DateTimeFilterInput" },
    slug: { __type: "StringFilterInput" },
    tipo: { __type: "StringFilterInput" },
    updatedAt: { __type: "DateTimeFilterInput" },
    video: { __type: "StringFilterInput" },
  },
  ServicioInput: {
    beneficios: { __type: "[ID]" },
    categoria: { __type: "ENUM_SERVICIO_CATEGORIA" },
    descripcion: { __type: "String" },
    form: { __type: "String" },
    icono: { __type: "ID" },
    nombre: { __type: "String" },
    portada: { __type: "ComponentSharedPortadaInput" },
    publishedAt: { __type: "DateTime" },
    requisitos: { __type: "[ComponentServiciosRequisitosInput]" },
    seo: { __type: "ComponentSharedSeoInput" },
    slug: { __type: "String" },
    tarifario: { __type: "ComponentServiciosTarifarioInput" },
    tipo: { __type: "ENUM_SERVICIO_TIPO" },
    ventajas: { __type: "[ComponentServiciosVentajasInput]" },
    video: { __type: "String" },
  },
  ServicioRelationResponseCollection: {
    __typename: { __type: "String!" },
    data: { __type: "[ServicioEntity!]!" },
  },
  Slide: {
    __typename: { __type: "String!" },
    copy: { __type: "String!" },
    createdAt: { __type: "DateTime" },
    cta: { __type: "ComponentSharedCta" },
    imagen: { __type: "UploadFileEntityResponse!" },
    publishedAt: { __type: "DateTime" },
    titular: { __type: "String!" },
    updatedAt: { __type: "DateTime" },
  },
  SlideEntity: {
    __typename: { __type: "String!" },
    attributes: { __type: "Slide" },
    id: { __type: "ID" },
  },
  SlideEntityResponse: {
    __typename: { __type: "String!" },
    data: { __type: "SlideEntity" },
  },
  SlideEntityResponseCollection: {
    __typename: { __type: "String!" },
    data: { __type: "[SlideEntity!]!" },
    meta: { __type: "ResponseCollectionMeta!" },
  },
  SlideFiltersInput: {
    and: { __type: "[SlideFiltersInput]" },
    copy: { __type: "StringFilterInput" },
    createdAt: { __type: "DateTimeFilterInput" },
    id: { __type: "IDFilterInput" },
    not: { __type: "SlideFiltersInput" },
    or: { __type: "[SlideFiltersInput]" },
    publishedAt: { __type: "DateTimeFilterInput" },
    titular: { __type: "StringFilterInput" },
    updatedAt: { __type: "DateTimeFilterInput" },
  },
  SlideInput: {
    copy: { __type: "String" },
    cta: { __type: "ComponentSharedCtaInput" },
    imagen: { __type: "ID" },
    publishedAt: { __type: "DateTime" },
    titular: { __type: "String" },
  },
  StringFilterInput: {
    and: { __type: "[String]" },
    between: { __type: "[String]" },
    contains: { __type: "String" },
    containsi: { __type: "String" },
    endsWith: { __type: "String" },
    eq: { __type: "String" },
    gt: { __type: "String" },
    gte: { __type: "String" },
    in: { __type: "[String]" },
    lt: { __type: "String" },
    lte: { __type: "String" },
    ne: { __type: "String" },
    not: { __type: "StringFilterInput" },
    notContains: { __type: "String" },
    notContainsi: { __type: "String" },
    notIn: { __type: "[String]" },
    notNull: { __type: "Boolean" },
    null: { __type: "Boolean" },
    or: { __type: "[String]" },
    startsWith: { __type: "String" },
  },
  Sucursal: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime" },
    direccion: { __type: "String!" },
    form: { __type: "String!" },
    horario: { __type: "String!" },
    imagen: { __type: "UploadFileEntityResponse!" },
    nombre: { __type: "String!" },
    orden: { __type: "Int" },
    publishedAt: { __type: "DateTime" },
    slug: { __type: "String!" },
    telefonos: {
      __type: "[ComponentSucursalTelefonos]!",
      __args: {
        filters: "ComponentSucursalTelefonosFiltersInput",
        pagination: "PaginationArg",
        sort: "[String]",
      },
    },
    ubicacion: { __type: "String!" },
    updatedAt: { __type: "DateTime" },
  },
  SucursalEntity: {
    __typename: { __type: "String!" },
    attributes: { __type: "Sucursal" },
    id: { __type: "ID" },
  },
  SucursalEntityResponse: {
    __typename: { __type: "String!" },
    data: { __type: "SucursalEntity" },
  },
  SucursalEntityResponseCollection: {
    __typename: { __type: "String!" },
    data: { __type: "[SucursalEntity!]!" },
    meta: { __type: "ResponseCollectionMeta!" },
  },
  SucursalFiltersInput: {
    and: { __type: "[SucursalFiltersInput]" },
    createdAt: { __type: "DateTimeFilterInput" },
    direccion: { __type: "StringFilterInput" },
    form: { __type: "StringFilterInput" },
    horario: { __type: "StringFilterInput" },
    id: { __type: "IDFilterInput" },
    nombre: { __type: "StringFilterInput" },
    not: { __type: "SucursalFiltersInput" },
    or: { __type: "[SucursalFiltersInput]" },
    orden: { __type: "IntFilterInput" },
    publishedAt: { __type: "DateTimeFilterInput" },
    slug: { __type: "StringFilterInput" },
    ubicacion: { __type: "StringFilterInput" },
    updatedAt: { __type: "DateTimeFilterInput" },
  },
  SucursalInput: {
    direccion: { __type: "String" },
    form: { __type: "String" },
    horario: { __type: "String" },
    imagen: { __type: "ID" },
    nombre: { __type: "String" },
    orden: { __type: "Int" },
    publishedAt: { __type: "DateTime" },
    slug: { __type: "String" },
    telefonos: { __type: "[ComponentSucursalTelefonosInput]" },
    ubicacion: { __type: "String" },
  },
  Tpage: {
    __typename: { __type: "String!" },
    agradecimiento: { __type: "String!" },
    createdAt: { __type: "DateTime" },
    cta: { __type: "ComponentSharedCta" },
    nombre: { __type: "String!" },
    publishedAt: { __type: "DateTime" },
    slug: { __type: "String!" },
    titular: { __type: "String!" },
    updatedAt: { __type: "DateTime" },
  },
  TpageEntity: {
    __typename: { __type: "String!" },
    attributes: { __type: "Tpage" },
    id: { __type: "ID" },
  },
  TpageEntityResponse: {
    __typename: { __type: "String!" },
    data: { __type: "TpageEntity" },
  },
  TpageEntityResponseCollection: {
    __typename: { __type: "String!" },
    data: { __type: "[TpageEntity!]!" },
    meta: { __type: "ResponseCollectionMeta!" },
  },
  TpageFiltersInput: {
    agradecimiento: { __type: "StringFilterInput" },
    and: { __type: "[TpageFiltersInput]" },
    createdAt: { __type: "DateTimeFilterInput" },
    id: { __type: "IDFilterInput" },
    nombre: { __type: "StringFilterInput" },
    not: { __type: "TpageFiltersInput" },
    or: { __type: "[TpageFiltersInput]" },
    publishedAt: { __type: "DateTimeFilterInput" },
    slug: { __type: "StringFilterInput" },
    titular: { __type: "StringFilterInput" },
    updatedAt: { __type: "DateTimeFilterInput" },
  },
  TpageInput: {
    agradecimiento: { __type: "String" },
    cta: { __type: "ComponentSharedCtaInput" },
    nombre: { __type: "String" },
    publishedAt: { __type: "DateTime" },
    slug: { __type: "String" },
    titular: { __type: "String" },
  },
  UploadFile: {
    __typename: { __type: "String!" },
    alternativeText: { __type: "String" },
    caption: { __type: "String" },
    createdAt: { __type: "DateTime" },
    ext: { __type: "String" },
    formats: { __type: "JSON" },
    hash: { __type: "String!" },
    height: { __type: "Int" },
    mime: { __type: "String!" },
    name: { __type: "String!" },
    previewUrl: { __type: "String" },
    provider: { __type: "String!" },
    provider_metadata: { __type: "JSON" },
    related: { __type: "[GenericMorph]" },
    size: { __type: "Float!" },
    updatedAt: { __type: "DateTime" },
    url: { __type: "String!" },
    width: { __type: "Int" },
  },
  UploadFileEntity: {
    __typename: { __type: "String!" },
    attributes: { __type: "UploadFile" },
    id: { __type: "ID" },
  },
  UploadFileEntityResponse: {
    __typename: { __type: "String!" },
    data: { __type: "UploadFileEntity" },
  },
  UploadFileEntityResponseCollection: {
    __typename: { __type: "String!" },
    data: { __type: "[UploadFileEntity!]!" },
    meta: { __type: "ResponseCollectionMeta!" },
  },
  UploadFileFiltersInput: {
    alternativeText: { __type: "StringFilterInput" },
    and: { __type: "[UploadFileFiltersInput]" },
    caption: { __type: "StringFilterInput" },
    createdAt: { __type: "DateTimeFilterInput" },
    ext: { __type: "StringFilterInput" },
    formats: { __type: "JSONFilterInput" },
    hash: { __type: "StringFilterInput" },
    height: { __type: "IntFilterInput" },
    id: { __type: "IDFilterInput" },
    mime: { __type: "StringFilterInput" },
    name: { __type: "StringFilterInput" },
    not: { __type: "UploadFileFiltersInput" },
    or: { __type: "[UploadFileFiltersInput]" },
    previewUrl: { __type: "StringFilterInput" },
    provider: { __type: "StringFilterInput" },
    provider_metadata: { __type: "JSONFilterInput" },
    size: { __type: "FloatFilterInput" },
    updatedAt: { __type: "DateTimeFilterInput" },
    url: { __type: "StringFilterInput" },
    width: { __type: "IntFilterInput" },
  },
  UploadFileInput: {
    alternativeText: { __type: "String" },
    caption: { __type: "String" },
    ext: { __type: "String" },
    formats: { __type: "JSON" },
    hash: { __type: "String" },
    height: { __type: "Int" },
    mime: { __type: "String" },
    name: { __type: "String" },
    previewUrl: { __type: "String" },
    provider: { __type: "String" },
    provider_metadata: { __type: "JSON" },
    size: { __type: "Float" },
    url: { __type: "String" },
    width: { __type: "Int" },
  },
  UsersPermissionsCreateRolePayload: {
    __typename: { __type: "String!" },
    ok: { __type: "Boolean!" },
  },
  UsersPermissionsDeleteRolePayload: {
    __typename: { __type: "String!" },
    ok: { __type: "Boolean!" },
  },
  UsersPermissionsLoginInput: {
    identifier: { __type: "String!" },
    password: { __type: "String!" },
    provider: { __type: "String!" },
  },
  UsersPermissionsLoginPayload: {
    __typename: { __type: "String!" },
    jwt: { __type: "String" },
    user: { __type: "UsersPermissionsMe!" },
  },
  UsersPermissionsMe: {
    __typename: { __type: "String!" },
    blocked: { __type: "Boolean" },
    confirmed: { __type: "Boolean" },
    email: { __type: "String" },
    id: { __type: "ID!" },
    role: { __type: "UsersPermissionsMeRole" },
    username: { __type: "String!" },
  },
  UsersPermissionsMeRole: {
    __typename: { __type: "String!" },
    description: { __type: "String" },
    id: { __type: "ID!" },
    name: { __type: "String!" },
    type: { __type: "String" },
  },
  UsersPermissionsPasswordPayload: {
    __typename: { __type: "String!" },
    ok: { __type: "Boolean!" },
  },
  UsersPermissionsPermission: {
    __typename: { __type: "String!" },
    action: { __type: "String!" },
    createdAt: { __type: "DateTime" },
    role: { __type: "UsersPermissionsRoleEntityResponse" },
    updatedAt: { __type: "DateTime" },
  },
  UsersPermissionsPermissionEntity: {
    __typename: { __type: "String!" },
    attributes: { __type: "UsersPermissionsPermission" },
    id: { __type: "ID" },
  },
  UsersPermissionsPermissionFiltersInput: {
    action: { __type: "StringFilterInput" },
    and: { __type: "[UsersPermissionsPermissionFiltersInput]" },
    createdAt: { __type: "DateTimeFilterInput" },
    id: { __type: "IDFilterInput" },
    not: { __type: "UsersPermissionsPermissionFiltersInput" },
    or: { __type: "[UsersPermissionsPermissionFiltersInput]" },
    role: { __type: "UsersPermissionsRoleFiltersInput" },
    updatedAt: { __type: "DateTimeFilterInput" },
  },
  UsersPermissionsPermissionRelationResponseCollection: {
    __typename: { __type: "String!" },
    data: { __type: "[UsersPermissionsPermissionEntity!]!" },
  },
  UsersPermissionsRegisterInput: {
    email: { __type: "String!" },
    password: { __type: "String!" },
    username: { __type: "String!" },
  },
  UsersPermissionsRole: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime" },
    description: { __type: "String" },
    name: { __type: "String!" },
    permissions: {
      __type: "UsersPermissionsPermissionRelationResponseCollection",
      __args: {
        filters: "UsersPermissionsPermissionFiltersInput",
        pagination: "PaginationArg",
        sort: "[String]",
      },
    },
    type: { __type: "String" },
    updatedAt: { __type: "DateTime" },
    users: {
      __type: "UsersPermissionsUserRelationResponseCollection",
      __args: {
        filters: "UsersPermissionsUserFiltersInput",
        pagination: "PaginationArg",
        sort: "[String]",
      },
    },
  },
  UsersPermissionsRoleEntity: {
    __typename: { __type: "String!" },
    attributes: { __type: "UsersPermissionsRole" },
    id: { __type: "ID" },
  },
  UsersPermissionsRoleEntityResponse: {
    __typename: { __type: "String!" },
    data: { __type: "UsersPermissionsRoleEntity" },
  },
  UsersPermissionsRoleEntityResponseCollection: {
    __typename: { __type: "String!" },
    data: { __type: "[UsersPermissionsRoleEntity!]!" },
    meta: { __type: "ResponseCollectionMeta!" },
  },
  UsersPermissionsRoleFiltersInput: {
    and: { __type: "[UsersPermissionsRoleFiltersInput]" },
    createdAt: { __type: "DateTimeFilterInput" },
    description: { __type: "StringFilterInput" },
    id: { __type: "IDFilterInput" },
    name: { __type: "StringFilterInput" },
    not: { __type: "UsersPermissionsRoleFiltersInput" },
    or: { __type: "[UsersPermissionsRoleFiltersInput]" },
    permissions: { __type: "UsersPermissionsPermissionFiltersInput" },
    type: { __type: "StringFilterInput" },
    updatedAt: { __type: "DateTimeFilterInput" },
    users: { __type: "UsersPermissionsUserFiltersInput" },
  },
  UsersPermissionsRoleInput: {
    description: { __type: "String" },
    name: { __type: "String" },
    permissions: { __type: "[ID]" },
    type: { __type: "String" },
    users: { __type: "[ID]" },
  },
  UsersPermissionsUpdateRolePayload: {
    __typename: { __type: "String!" },
    ok: { __type: "Boolean!" },
  },
  UsersPermissionsUser: {
    __typename: { __type: "String!" },
    blocked: { __type: "Boolean" },
    confirmed: { __type: "Boolean" },
    createdAt: { __type: "DateTime" },
    email: { __type: "String!" },
    provider: { __type: "String" },
    role: { __type: "UsersPermissionsRoleEntityResponse" },
    updatedAt: { __type: "DateTime" },
    username: { __type: "String!" },
  },
  UsersPermissionsUserEntity: {
    __typename: { __type: "String!" },
    attributes: { __type: "UsersPermissionsUser" },
    id: { __type: "ID" },
  },
  UsersPermissionsUserEntityResponse: {
    __typename: { __type: "String!" },
    data: { __type: "UsersPermissionsUserEntity" },
  },
  UsersPermissionsUserEntityResponseCollection: {
    __typename: { __type: "String!" },
    data: { __type: "[UsersPermissionsUserEntity!]!" },
    meta: { __type: "ResponseCollectionMeta!" },
  },
  UsersPermissionsUserFiltersInput: {
    and: { __type: "[UsersPermissionsUserFiltersInput]" },
    blocked: { __type: "BooleanFilterInput" },
    confirmationToken: { __type: "StringFilterInput" },
    confirmed: { __type: "BooleanFilterInput" },
    createdAt: { __type: "DateTimeFilterInput" },
    email: { __type: "StringFilterInput" },
    id: { __type: "IDFilterInput" },
    not: { __type: "UsersPermissionsUserFiltersInput" },
    or: { __type: "[UsersPermissionsUserFiltersInput]" },
    password: { __type: "StringFilterInput" },
    provider: { __type: "StringFilterInput" },
    resetPasswordToken: { __type: "StringFilterInput" },
    role: { __type: "UsersPermissionsRoleFiltersInput" },
    updatedAt: { __type: "DateTimeFilterInput" },
    username: { __type: "StringFilterInput" },
  },
  UsersPermissionsUserInput: {
    blocked: { __type: "Boolean" },
    confirmationToken: { __type: "String" },
    confirmed: { __type: "Boolean" },
    email: { __type: "String" },
    password: { __type: "String" },
    provider: { __type: "String" },
    resetPasswordToken: { __type: "String" },
    role: { __type: "ID" },
    username: { __type: "String" },
  },
  UsersPermissionsUserRelationResponseCollection: {
    __typename: { __type: "String!" },
    data: { __type: "[UsersPermissionsUserEntity!]!" },
  },
  Writer: {
    __typename: { __type: "String!" },
    articles: {
      __type: "ArticleRelationResponseCollection",
      __args: {
        filters: "ArticleFiltersInput",
        pagination: "PaginationArg",
        publicationState: "PublicationState",
        sort: "[String]",
      },
    },
    createdAt: { __type: "DateTime" },
    email: { __type: "String" },
    name: { __type: "String" },
    picture: { __type: "UploadFileEntityResponse" },
    updatedAt: { __type: "DateTime" },
  },
  WriterEntity: {
    __typename: { __type: "String!" },
    attributes: { __type: "Writer" },
    id: { __type: "ID" },
  },
  WriterEntityResponse: {
    __typename: { __type: "String!" },
    data: { __type: "WriterEntity" },
  },
  WriterEntityResponseCollection: {
    __typename: { __type: "String!" },
    data: { __type: "[WriterEntity!]!" },
    meta: { __type: "ResponseCollectionMeta!" },
  },
  WriterFiltersInput: {
    and: { __type: "[WriterFiltersInput]" },
    articles: { __type: "ArticleFiltersInput" },
    createdAt: { __type: "DateTimeFilterInput" },
    email: { __type: "StringFilterInput" },
    id: { __type: "IDFilterInput" },
    name: { __type: "StringFilterInput" },
    not: { __type: "WriterFiltersInput" },
    or: { __type: "[WriterFiltersInput]" },
    updatedAt: { __type: "DateTimeFilterInput" },
  },
  WriterInput: {
    articles: { __type: "[ID]" },
    email: { __type: "String" },
    name: { __type: "String" },
    picture: { __type: "ID" },
  },
  mutation: {
    __typename: { __type: "String!" },
    createArticle: {
      __type: "ArticleEntityResponse",
      __args: { data: "ArticleInput!" },
    },
    createCategory: {
      __type: "CategoryEntityResponse",
      __args: { data: "CategoryInput!" },
    },
    createLanding: {
      __type: "LandingEntityResponse",
      __args: { data: "LandingInput!" },
    },
    createMemoriaAnual: {
      __type: "MemoriaAnualEntityResponse",
      __args: { data: "MemoriaAnualInput!" },
    },
    createMenusMenu: {
      __type: "MenusMenuEntityResponse",
      __args: { data: "MenusMenuInput!" },
    },
    createMenusMenuItem: {
      __type: "MenusMenuItemEntityResponse",
      __args: { data: "MenusMenuItemInput!" },
    },
    createNoticia: {
      __type: "NoticiaEntityResponse",
      __args: { data: "NoticiaInput!" },
    },
    createServicio: {
      __type: "ServicioEntityResponse",
      __args: { data: "ServicioInput!" },
    },
    createSlide: {
      __type: "SlideEntityResponse",
      __args: { data: "SlideInput!" },
    },
    createSucursal: {
      __type: "SucursalEntityResponse",
      __args: { data: "SucursalInput!" },
    },
    createTpage: {
      __type: "TpageEntityResponse",
      __args: { data: "TpageInput!" },
    },
    createUploadFile: {
      __type: "UploadFileEntityResponse",
      __args: { data: "UploadFileInput!" },
    },
    createUsersPermissionsRole: {
      __type: "UsersPermissionsCreateRolePayload",
      __args: { data: "UsersPermissionsRoleInput!" },
    },
    createUsersPermissionsUser: {
      __type: "UsersPermissionsUserEntityResponse!",
      __args: { data: "UsersPermissionsUserInput!" },
    },
    createWriter: {
      __type: "WriterEntityResponse",
      __args: { data: "WriterInput!" },
    },
    deleteArticle: { __type: "ArticleEntityResponse", __args: { id: "ID!" } },
    deleteCategory: { __type: "CategoryEntityResponse", __args: { id: "ID!" } },
    deleteGlobal: { __type: "GlobalEntityResponse" },
    deleteHomepage: { __type: "HomepageEntityResponse" },
    deleteLanding: { __type: "LandingEntityResponse", __args: { id: "ID!" } },
    deleteMemoriaAnual: {
      __type: "MemoriaAnualEntityResponse",
      __args: { id: "ID!" },
    },
    deleteMenusMenu: {
      __type: "MenusMenuEntityResponse",
      __args: { id: "ID!" },
    },
    deleteMenusMenuItem: {
      __type: "MenusMenuItemEntityResponse",
      __args: { id: "ID!" },
    },
    deleteNoticia: { __type: "NoticiaEntityResponse", __args: { id: "ID!" } },
    deleteServicio: { __type: "ServicioEntityResponse", __args: { id: "ID!" } },
    deleteSlide: { __type: "SlideEntityResponse", __args: { id: "ID!" } },
    deleteSucursal: { __type: "SucursalEntityResponse", __args: { id: "ID!" } },
    deleteTpage: { __type: "TpageEntityResponse", __args: { id: "ID!" } },
    deleteUploadFile: {
      __type: "UploadFileEntityResponse",
      __args: { id: "ID!" },
    },
    deleteUsersPermissionsRole: {
      __type: "UsersPermissionsDeleteRolePayload",
      __args: { id: "ID!" },
    },
    deleteUsersPermissionsUser: {
      __type: "UsersPermissionsUserEntityResponse!",
      __args: { id: "ID!" },
    },
    deleteWriter: { __type: "WriterEntityResponse", __args: { id: "ID!" } },
    emailConfirmation: {
      __type: "UsersPermissionsLoginPayload",
      __args: { confirmation: "String!" },
    },
    forgotPassword: {
      __type: "UsersPermissionsPasswordPayload",
      __args: { email: "String!" },
    },
    login: {
      __type: "UsersPermissionsLoginPayload!",
      __args: { input: "UsersPermissionsLoginInput!" },
    },
    multipleUpload: {
      __type: "[UploadFileEntityResponse]!",
      __args: {
        field: "String",
        files: "[Upload]!",
        ref: "String",
        refId: "ID",
      },
    },
    register: {
      __type: "UsersPermissionsLoginPayload!",
      __args: { input: "UsersPermissionsRegisterInput!" },
    },
    removeFile: { __type: "UploadFileEntityResponse", __args: { id: "ID!" } },
    resetPassword: {
      __type: "UsersPermissionsLoginPayload",
      __args: {
        code: "String!",
        password: "String!",
        passwordConfirmation: "String!",
      },
    },
    updateArticle: {
      __type: "ArticleEntityResponse",
      __args: { data: "ArticleInput!", id: "ID!" },
    },
    updateCategory: {
      __type: "CategoryEntityResponse",
      __args: { data: "CategoryInput!", id: "ID!" },
    },
    updateFileInfo: {
      __type: "UploadFileEntityResponse!",
      __args: { id: "ID!", info: "FileInfoInput" },
    },
    updateGlobal: {
      __type: "GlobalEntityResponse",
      __args: { data: "GlobalInput!" },
    },
    updateHomepage: {
      __type: "HomepageEntityResponse",
      __args: { data: "HomepageInput!" },
    },
    updateLanding: {
      __type: "LandingEntityResponse",
      __args: { data: "LandingInput!", id: "ID!" },
    },
    updateMemoriaAnual: {
      __type: "MemoriaAnualEntityResponse",
      __args: { data: "MemoriaAnualInput!", id: "ID!" },
    },
    updateMenusMenu: {
      __type: "MenusMenuEntityResponse",
      __args: { data: "MenusMenuInput!", id: "ID!" },
    },
    updateMenusMenuItem: {
      __type: "MenusMenuItemEntityResponse",
      __args: { data: "MenusMenuItemInput!", id: "ID!" },
    },
    updateNoticia: {
      __type: "NoticiaEntityResponse",
      __args: { data: "NoticiaInput!", id: "ID!" },
    },
    updateServicio: {
      __type: "ServicioEntityResponse",
      __args: { data: "ServicioInput!", id: "ID!" },
    },
    updateSlide: {
      __type: "SlideEntityResponse",
      __args: { data: "SlideInput!", id: "ID!" },
    },
    updateSucursal: {
      __type: "SucursalEntityResponse",
      __args: { data: "SucursalInput!", id: "ID!" },
    },
    updateTpage: {
      __type: "TpageEntityResponse",
      __args: { data: "TpageInput!", id: "ID!" },
    },
    updateUploadFile: {
      __type: "UploadFileEntityResponse",
      __args: { data: "UploadFileInput!", id: "ID!" },
    },
    updateUsersPermissionsRole: {
      __type: "UsersPermissionsUpdateRolePayload",
      __args: { data: "UsersPermissionsRoleInput!", id: "ID!" },
    },
    updateUsersPermissionsUser: {
      __type: "UsersPermissionsUserEntityResponse!",
      __args: { data: "UsersPermissionsUserInput!", id: "ID!" },
    },
    updateWriter: {
      __type: "WriterEntityResponse",
      __args: { data: "WriterInput!", id: "ID!" },
    },
    upload: {
      __type: "UploadFileEntityResponse!",
      __args: {
        field: "String",
        file: "Upload!",
        info: "FileInfoInput",
        ref: "String",
        refId: "ID",
      },
    },
  },
  query: {
    __typename: { __type: "String!" },
    article: { __type: "ArticleEntityResponse", __args: { id: "ID" } },
    articles: {
      __type: "ArticleEntityResponseCollection",
      __args: {
        filters: "ArticleFiltersInput",
        pagination: "PaginationArg",
        publicationState: "PublicationState",
        sort: "[String]",
      },
    },
    categories: {
      __type: "CategoryEntityResponseCollection",
      __args: {
        filters: "CategoryFiltersInput",
        pagination: "PaginationArg",
        sort: "[String]",
      },
    },
    category: { __type: "CategoryEntityResponse", __args: { id: "ID" } },
    global: { __type: "GlobalEntityResponse" },
    homepage: { __type: "HomepageEntityResponse" },
    i18NLocale: { __type: "I18NLocaleEntityResponse", __args: { id: "ID" } },
    i18NLocales: {
      __type: "I18NLocaleEntityResponseCollection",
      __args: {
        filters: "I18NLocaleFiltersInput",
        pagination: "PaginationArg",
        sort: "[String]",
      },
    },
    landing: { __type: "LandingEntityResponse", __args: { id: "ID" } },
    landings: {
      __type: "LandingEntityResponseCollection",
      __args: {
        filters: "LandingFiltersInput",
        pagination: "PaginationArg",
        publicationState: "PublicationState",
        sort: "[String]",
      },
    },
    me: { __type: "UsersPermissionsMe" },
    memoriaAnual: {
      __type: "MemoriaAnualEntityResponse",
      __args: { id: "ID" },
    },
    memoriasAnuales: {
      __type: "MemoriaAnualEntityResponseCollection",
      __args: {
        filters: "MemoriaAnualFiltersInput",
        pagination: "PaginationArg",
        publicationState: "PublicationState",
        sort: "[String]",
      },
    },
    menusMenu: { __type: "MenusMenuEntityResponse", __args: { id: "ID" } },
    menusMenuItem: {
      __type: "MenusMenuItemEntityResponse",
      __args: { id: "ID" },
    },
    menusMenuItems: {
      __type: "MenusMenuItemEntityResponseCollection",
      __args: {
        filters: "MenusMenuItemFiltersInput",
        pagination: "PaginationArg",
        sort: "[String]",
      },
    },
    menusMenus: {
      __type: "MenusMenuEntityResponseCollection",
      __args: {
        filters: "MenusMenuFiltersInput",
        pagination: "PaginationArg",
        sort: "[String]",
      },
    },
    noticia: { __type: "NoticiaEntityResponse", __args: { id: "ID" } },
    noticias: {
      __type: "NoticiaEntityResponseCollection",
      __args: {
        filters: "NoticiaFiltersInput",
        pagination: "PaginationArg",
        publicationState: "PublicationState",
        sort: "[String]",
      },
    },
    servicio: { __type: "ServicioEntityResponse", __args: { id: "ID" } },
    servicios: {
      __type: "ServicioEntityResponseCollection",
      __args: {
        filters: "ServicioFiltersInput",
        pagination: "PaginationArg",
        publicationState: "PublicationState",
        sort: "[String]",
      },
    },
    slide: { __type: "SlideEntityResponse", __args: { id: "ID" } },
    slides: {
      __type: "SlideEntityResponseCollection",
      __args: {
        filters: "SlideFiltersInput",
        pagination: "PaginationArg",
        publicationState: "PublicationState",
        sort: "[String]",
      },
    },
    sucursal: { __type: "SucursalEntityResponse", __args: { id: "ID" } },
    sucursals: {
      __type: "SucursalEntityResponseCollection",
      __args: {
        filters: "SucursalFiltersInput",
        pagination: "PaginationArg",
        publicationState: "PublicationState",
        sort: "[String]",
      },
    },
    tpage: { __type: "TpageEntityResponse", __args: { id: "ID" } },
    tpages: {
      __type: "TpageEntityResponseCollection",
      __args: {
        filters: "TpageFiltersInput",
        pagination: "PaginationArg",
        publicationState: "PublicationState",
        sort: "[String]",
      },
    },
    uploadFile: { __type: "UploadFileEntityResponse", __args: { id: "ID" } },
    uploadFiles: {
      __type: "UploadFileEntityResponseCollection",
      __args: {
        filters: "UploadFileFiltersInput",
        pagination: "PaginationArg",
        sort: "[String]",
      },
    },
    usersPermissionsRole: {
      __type: "UsersPermissionsRoleEntityResponse",
      __args: { id: "ID" },
    },
    usersPermissionsRoles: {
      __type: "UsersPermissionsRoleEntityResponseCollection",
      __args: {
        filters: "UsersPermissionsRoleFiltersInput",
        pagination: "PaginationArg",
        sort: "[String]",
      },
    },
    usersPermissionsUser: {
      __type: "UsersPermissionsUserEntityResponse",
      __args: { id: "ID" },
    },
    usersPermissionsUsers: {
      __type: "UsersPermissionsUserEntityResponseCollection",
      __args: {
        filters: "UsersPermissionsUserFiltersInput",
        pagination: "PaginationArg",
        sort: "[String]",
      },
    },
    writer: { __type: "WriterEntityResponse", __args: { id: "ID" } },
    writers: {
      __type: "WriterEntityResponseCollection",
      __args: {
        filters: "WriterFiltersInput",
        pagination: "PaginationArg",
        sort: "[String]",
      },
    },
  },
  subscription: {},
  [SchemaUnionsKey]: {
    GenericMorph: [
      "Article",
      "Category",
      "ComponentGeneralFormulario",
      "ComponentGeneralItems",
      "ComponentGeneralLista",
      "ComponentSectionsHero",
      "ComponentServiciosRequisitos",
      "ComponentServiciosTarifario",
      "ComponentServiciosTarifas",
      "ComponentServiciosVentajas",
      "ComponentSharedCta",
      "ComponentSharedPortada",
      "ComponentSharedSeo",
      "ComponentSucursalTelefonos",
      "Global",
      "Homepage",
      "I18NLocale",
      "Landing",
      "MemoriaAnual",
      "MenusMenu",
      "MenusMenuItem",
      "Noticia",
      "Servicio",
      "Slide",
      "Sucursal",
      "Tpage",
      "UploadFile",
      "UsersPermissionsPermission",
      "UsersPermissionsRole",
      "UsersPermissionsUser",
      "Writer",
    ],
    LandingContenidoDynamicZone: ["ComponentGeneralLista", "Error"],
  },
} as const;

export interface Article {
  __typename?: "Article";
  author?: Maybe<WriterEntityResponse>;
  category?: Maybe<CategoryEntityResponse>;
  content: ScalarsEnums["String"];
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  description: ScalarsEnums["String"];
  image?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<ScalarsEnums["DateTime"]>;
  seo?: Maybe<ComponentSharedSeo>;
  slug: ScalarsEnums["String"];
  title: ScalarsEnums["String"];
  updatedAt?: Maybe<ScalarsEnums["DateTime"]>;
}

export interface ArticleEntity {
  __typename?: "ArticleEntity";
  attributes?: Maybe<Article>;
  id?: Maybe<ScalarsEnums["ID"]>;
}

export interface ArticleEntityResponse {
  __typename?: "ArticleEntityResponse";
  data?: Maybe<ArticleEntity>;
}

export interface ArticleEntityResponseCollection {
  __typename?: "ArticleEntityResponseCollection";
  data: Array<ArticleEntity>;
  meta: ResponseCollectionMeta;
}

export interface ArticleRelationResponseCollection {
  __typename?: "ArticleRelationResponseCollection";
  data: Array<ArticleEntity>;
}

export interface Category {
  __typename?: "Category";
  articles: (args?: {
    filters?: Maybe<ArticleFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `"LIVE"`
     */
    publicationState?: Maybe<PublicationState>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<ArticleRelationResponseCollection>;
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  description: ScalarsEnums["String"];
  icon: UploadFileEntityResponse;
  name: ScalarsEnums["String"];
  slug: ScalarsEnums["String"];
  updatedAt?: Maybe<ScalarsEnums["DateTime"]>;
}

export interface CategoryEntity {
  __typename?: "CategoryEntity";
  attributes?: Maybe<Category>;
  id?: Maybe<ScalarsEnums["ID"]>;
}

export interface CategoryEntityResponse {
  __typename?: "CategoryEntityResponse";
  data?: Maybe<CategoryEntity>;
}

export interface CategoryEntityResponseCollection {
  __typename?: "CategoryEntityResponseCollection";
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
}

export interface ComponentGeneralFormulario {
  __typename?: "ComponentGeneralFormulario";
  formId: ScalarsEnums["String"];
  id: ScalarsEnums["ID"];
  titulo?: Maybe<ScalarsEnums["String"]>;
}

export interface ComponentGeneralItems {
  __typename?: "ComponentGeneralItems";
  id: ScalarsEnums["ID"];
  texto: ScalarsEnums["String"];
}

export interface ComponentGeneralLista {
  __typename?: "ComponentGeneralLista";
  id: ScalarsEnums["ID"];
  items: (args?: {
    filters?: Maybe<ComponentGeneralItemsFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Array<Maybe<ComponentGeneralItems>>;
  titulo: ScalarsEnums["String"];
}

export interface ComponentSectionsHero {
  __typename?: "ComponentSectionsHero";
  cta?: Maybe<ComponentSharedCta>;
  descripcion: ScalarsEnums["String"];
  id: ScalarsEnums["ID"];
  imagen: UploadFileEntityResponse;
  titulo: ScalarsEnums["String"];
}

export interface ComponentServiciosRequisitos {
  __typename?: "ComponentServiciosRequisitos";
  id: ScalarsEnums["ID"];
  requisito?: Maybe<ScalarsEnums["String"]>;
}

export interface ComponentServiciosTarifario {
  __typename?: "ComponentServiciosTarifario";
  id: ScalarsEnums["ID"];
  nota?: Maybe<ScalarsEnums["String"]>;
  tarifas: (args?: {
    filters?: Maybe<ComponentServiciosTarifasFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<Array<Maybe<ComponentServiciosTarifas>>>;
}

export interface ComponentServiciosTarifas {
  __typename?: "ComponentServiciosTarifas";
  id: ScalarsEnums["ID"];
  nombre?: Maybe<ScalarsEnums["String"]>;
  valor?: Maybe<ScalarsEnums["String"]>;
}

export interface ComponentServiciosVentajas {
  __typename?: "ComponentServiciosVentajas";
  id: ScalarsEnums["ID"];
  ventaja?: Maybe<ScalarsEnums["String"]>;
}

export interface ComponentSharedCta {
  __typename?: "ComponentSharedCta";
  id: ScalarsEnums["ID"];
  target: ScalarsEnums["Boolean"];
  texto: ScalarsEnums["String"];
  uri: ScalarsEnums["String"];
}

export interface ComponentSharedPortada {
  __typename?: "ComponentSharedPortada";
  copy: ScalarsEnums["String"];
  cta?: Maybe<ComponentSharedCta>;
  id: ScalarsEnums["ID"];
  imagen: UploadFileEntityResponse;
  titular: ScalarsEnums["String"];
}

export interface ComponentSharedSeo {
  __typename?: "ComponentSharedSeo";
  id: ScalarsEnums["ID"];
  metaDescription: ScalarsEnums["String"];
  metaTitle: ScalarsEnums["String"];
  shareImage?: Maybe<UploadFileEntityResponse>;
}

export interface ComponentSucursalTelefonos {
  __typename?: "ComponentSucursalTelefonos";
  id: ScalarsEnums["ID"];
  telefono?: Maybe<ScalarsEnums["String"]>;
}

export interface Error {
  __typename?: "Error";
  code: ScalarsEnums["String"];
  message?: Maybe<ScalarsEnums["String"]>;
}

export interface GenericMorph {
  __typename?:
    | "Article"
    | "Category"
    | "ComponentGeneralFormulario"
    | "ComponentGeneralItems"
    | "ComponentGeneralLista"
    | "ComponentSectionsHero"
    | "ComponentServiciosRequisitos"
    | "ComponentServiciosTarifario"
    | "ComponentServiciosTarifas"
    | "ComponentServiciosVentajas"
    | "ComponentSharedCta"
    | "ComponentSharedPortada"
    | "ComponentSharedSeo"
    | "ComponentSucursalTelefonos"
    | "Global"
    | "Homepage"
    | "I18NLocale"
    | "Landing"
    | "MemoriaAnual"
    | "MenusMenu"
    | "MenusMenuItem"
    | "Noticia"
    | "Servicio"
    | "Slide"
    | "Sucursal"
    | "Tpage"
    | "UploadFile"
    | "UsersPermissionsPermission"
    | "UsersPermissionsRole"
    | "UsersPermissionsUser"
    | "Writer";
  $on: $GenericMorph;
}

export interface Global {
  __typename?: "Global";
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  defaultSeo: ComponentSharedSeo;
  favicon?: Maybe<UploadFileEntityResponse>;
  siteName: ScalarsEnums["String"];
  updatedAt?: Maybe<ScalarsEnums["DateTime"]>;
}

export interface GlobalEntity {
  __typename?: "GlobalEntity";
  attributes?: Maybe<Global>;
  id?: Maybe<ScalarsEnums["ID"]>;
}

export interface GlobalEntityResponse {
  __typename?: "GlobalEntityResponse";
  data?: Maybe<GlobalEntity>;
}

export interface Homepage {
  __typename?: "Homepage";
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  informacion: ComponentSectionsHero;
  portada: ComponentSharedPortada;
  razones: ComponentSectionsHero;
  updatedAt?: Maybe<ScalarsEnums["DateTime"]>;
}

export interface HomepageEntity {
  __typename?: "HomepageEntity";
  attributes?: Maybe<Homepage>;
  id?: Maybe<ScalarsEnums["ID"]>;
}

export interface HomepageEntityResponse {
  __typename?: "HomepageEntityResponse";
  data?: Maybe<HomepageEntity>;
}

export interface I18NLocale {
  __typename?: "I18NLocale";
  code?: Maybe<ScalarsEnums["String"]>;
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  updatedAt?: Maybe<ScalarsEnums["DateTime"]>;
}

export interface I18NLocaleEntity {
  __typename?: "I18NLocaleEntity";
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<ScalarsEnums["ID"]>;
}

export interface I18NLocaleEntityResponse {
  __typename?: "I18NLocaleEntityResponse";
  data?: Maybe<I18NLocaleEntity>;
}

export interface I18NLocaleEntityResponseCollection {
  __typename?: "I18NLocaleEntityResponseCollection";
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
}

export interface Landing {
  __typename?: "Landing";
  contenido?: Maybe<Array<Maybe<LandingContenidoDynamicZone>>>;
  copy?: Maybe<ScalarsEnums["String"]>;
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  formulario: ComponentGeneralFormulario;
  imagen: UploadFileEntityResponse;
  nombre: ScalarsEnums["String"];
  publishedAt?: Maybe<ScalarsEnums["DateTime"]>;
  slug: ScalarsEnums["String"];
  titular: ScalarsEnums["String"];
  updatedAt?: Maybe<ScalarsEnums["DateTime"]>;
}

export interface LandingContenidoDynamicZone {
  __typename?: "ComponentGeneralLista" | "Error";
  $on: $LandingContenidoDynamicZone;
}

export interface LandingEntity {
  __typename?: "LandingEntity";
  attributes?: Maybe<Landing>;
  id?: Maybe<ScalarsEnums["ID"]>;
}

export interface LandingEntityResponse {
  __typename?: "LandingEntityResponse";
  data?: Maybe<LandingEntity>;
}

export interface LandingEntityResponseCollection {
  __typename?: "LandingEntityResponseCollection";
  data: Array<LandingEntity>;
  meta: ResponseCollectionMeta;
}

export interface MemoriaAnual {
  __typename?: "MemoriaAnual";
  ano: ScalarsEnums["Int"];
  archivo: UploadFileEntityResponse;
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  imagen: UploadFileEntityResponse;
  nombre: ScalarsEnums["String"];
  publishedAt?: Maybe<ScalarsEnums["DateTime"]>;
  updatedAt?: Maybe<ScalarsEnums["DateTime"]>;
}

export interface MemoriaAnualEntity {
  __typename?: "MemoriaAnualEntity";
  attributes?: Maybe<MemoriaAnual>;
  id?: Maybe<ScalarsEnums["ID"]>;
}

export interface MemoriaAnualEntityResponse {
  __typename?: "MemoriaAnualEntityResponse";
  data?: Maybe<MemoriaAnualEntity>;
}

export interface MemoriaAnualEntityResponseCollection {
  __typename?: "MemoriaAnualEntityResponseCollection";
  data: Array<MemoriaAnualEntity>;
  meta: ResponseCollectionMeta;
}

export interface MenusMenu {
  __typename?: "MenusMenu";
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  items: (args?: {
    filters?: Maybe<MenusMenuItemFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<MenusMenuItemRelationResponseCollection>;
  slug: ScalarsEnums["String"];
  title: ScalarsEnums["String"];
  updatedAt?: Maybe<ScalarsEnums["DateTime"]>;
}

export interface MenusMenuEntity {
  __typename?: "MenusMenuEntity";
  attributes?: Maybe<MenusMenu>;
  id?: Maybe<ScalarsEnums["ID"]>;
}

export interface MenusMenuEntityResponse {
  __typename?: "MenusMenuEntityResponse";
  data?: Maybe<MenusMenuEntity>;
}

export interface MenusMenuEntityResponseCollection {
  __typename?: "MenusMenuEntityResponseCollection";
  data: Array<MenusMenuEntity>;
  meta: ResponseCollectionMeta;
}

export interface MenusMenuItem {
  __typename?: "MenusMenuItem";
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  order?: Maybe<ScalarsEnums["Int"]>;
  parent?: Maybe<MenusMenuItemEntityResponse>;
  root_menu: MenusMenuEntityResponse;
  target?: Maybe<ScalarsEnums["ENUM_MENUSMENUITEM_TARGET"]>;
  title: ScalarsEnums["String"];
  updatedAt?: Maybe<ScalarsEnums["DateTime"]>;
  url?: Maybe<ScalarsEnums["String"]>;
}

export interface MenusMenuItemEntity {
  __typename?: "MenusMenuItemEntity";
  attributes?: Maybe<MenusMenuItem>;
  id?: Maybe<ScalarsEnums["ID"]>;
}

export interface MenusMenuItemEntityResponse {
  __typename?: "MenusMenuItemEntityResponse";
  data?: Maybe<MenusMenuItemEntity>;
}

export interface MenusMenuItemEntityResponseCollection {
  __typename?: "MenusMenuItemEntityResponseCollection";
  data: Array<MenusMenuItemEntity>;
  meta: ResponseCollectionMeta;
}

export interface MenusMenuItemRelationResponseCollection {
  __typename?: "MenusMenuItemRelationResponseCollection";
  data: Array<MenusMenuItemEntity>;
}

export interface Noticia {
  __typename?: "Noticia";
  contenido?: Maybe<ScalarsEnums["String"]>;
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  descripcion: ScalarsEnums["String"];
  imagen: UploadFileEntityResponse;
  publishedAt?: Maybe<ScalarsEnums["DateTime"]>;
  seo?: Maybe<ComponentSharedSeo>;
  slug: ScalarsEnums["String"];
  titulo: ScalarsEnums["String"];
  updatedAt?: Maybe<ScalarsEnums["DateTime"]>;
}

export interface NoticiaEntity {
  __typename?: "NoticiaEntity";
  attributes?: Maybe<Noticia>;
  id?: Maybe<ScalarsEnums["ID"]>;
}

export interface NoticiaEntityResponse {
  __typename?: "NoticiaEntityResponse";
  data?: Maybe<NoticiaEntity>;
}

export interface NoticiaEntityResponseCollection {
  __typename?: "NoticiaEntityResponseCollection";
  data: Array<NoticiaEntity>;
  meta: ResponseCollectionMeta;
}

export interface Pagination {
  __typename?: "Pagination";
  page: ScalarsEnums["Int"];
  pageCount: ScalarsEnums["Int"];
  pageSize: ScalarsEnums["Int"];
  total: ScalarsEnums["Int"];
}

export interface ResponseCollectionMeta {
  __typename?: "ResponseCollectionMeta";
  pagination: Pagination;
}

export interface Servicio {
  __typename?: "Servicio";
  beneficios: (args?: {
    filters?: Maybe<ServicioFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `"LIVE"`
     */
    publicationState?: Maybe<PublicationState>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<ServicioRelationResponseCollection>;
  categoria: ScalarsEnums["ENUM_SERVICIO_CATEGORIA"];
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  descripcion: ScalarsEnums["String"];
  form?: Maybe<ScalarsEnums["String"]>;
  icono: UploadFileEntityResponse;
  nombre: ScalarsEnums["String"];
  portada: ComponentSharedPortada;
  publishedAt?: Maybe<ScalarsEnums["DateTime"]>;
  requisitos: (args?: {
    filters?: Maybe<ComponentServiciosRequisitosFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<Array<Maybe<ComponentServiciosRequisitos>>>;
  seo?: Maybe<ComponentSharedSeo>;
  slug: ScalarsEnums["String"];
  tarifario?: Maybe<ComponentServiciosTarifario>;
  tipo: ScalarsEnums["ENUM_SERVICIO_TIPO"];
  updatedAt?: Maybe<ScalarsEnums["DateTime"]>;
  ventajas: (args?: {
    filters?: Maybe<ComponentServiciosVentajasFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<Array<Maybe<ComponentServiciosVentajas>>>;
  video?: Maybe<ScalarsEnums["String"]>;
}

export interface ServicioEntity {
  __typename?: "ServicioEntity";
  attributes?: Maybe<Servicio>;
  id?: Maybe<ScalarsEnums["ID"]>;
}

export interface ServicioEntityResponse {
  __typename?: "ServicioEntityResponse";
  data?: Maybe<ServicioEntity>;
}

export interface ServicioEntityResponseCollection {
  __typename?: "ServicioEntityResponseCollection";
  data: Array<ServicioEntity>;
  meta: ResponseCollectionMeta;
}

export interface ServicioRelationResponseCollection {
  __typename?: "ServicioRelationResponseCollection";
  data: Array<ServicioEntity>;
}

export interface Slide {
  __typename?: "Slide";
  copy: ScalarsEnums["String"];
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  cta?: Maybe<ComponentSharedCta>;
  imagen: UploadFileEntityResponse;
  publishedAt?: Maybe<ScalarsEnums["DateTime"]>;
  titular: ScalarsEnums["String"];
  updatedAt?: Maybe<ScalarsEnums["DateTime"]>;
}

export interface SlideEntity {
  __typename?: "SlideEntity";
  attributes?: Maybe<Slide>;
  id?: Maybe<ScalarsEnums["ID"]>;
}

export interface SlideEntityResponse {
  __typename?: "SlideEntityResponse";
  data?: Maybe<SlideEntity>;
}

export interface SlideEntityResponseCollection {
  __typename?: "SlideEntityResponseCollection";
  data: Array<SlideEntity>;
  meta: ResponseCollectionMeta;
}

export interface Sucursal {
  __typename?: "Sucursal";
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  direccion: ScalarsEnums["String"];
  form: ScalarsEnums["String"];
  horario: ScalarsEnums["String"];
  imagen: UploadFileEntityResponse;
  nombre: ScalarsEnums["String"];
  orden?: Maybe<ScalarsEnums["Int"]>;
  publishedAt?: Maybe<ScalarsEnums["DateTime"]>;
  slug: ScalarsEnums["String"];
  telefonos: (args?: {
    filters?: Maybe<ComponentSucursalTelefonosFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Array<Maybe<ComponentSucursalTelefonos>>;
  ubicacion: ScalarsEnums["String"];
  updatedAt?: Maybe<ScalarsEnums["DateTime"]>;
}

export interface SucursalEntity {
  __typename?: "SucursalEntity";
  attributes?: Maybe<Sucursal>;
  id?: Maybe<ScalarsEnums["ID"]>;
}

export interface SucursalEntityResponse {
  __typename?: "SucursalEntityResponse";
  data?: Maybe<SucursalEntity>;
}

export interface SucursalEntityResponseCollection {
  __typename?: "SucursalEntityResponseCollection";
  data: Array<SucursalEntity>;
  meta: ResponseCollectionMeta;
}

export interface Tpage {
  __typename?: "Tpage";
  agradecimiento: ScalarsEnums["String"];
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  cta?: Maybe<ComponentSharedCta>;
  nombre: ScalarsEnums["String"];
  publishedAt?: Maybe<ScalarsEnums["DateTime"]>;
  slug: ScalarsEnums["String"];
  titular: ScalarsEnums["String"];
  updatedAt?: Maybe<ScalarsEnums["DateTime"]>;
}

export interface TpageEntity {
  __typename?: "TpageEntity";
  attributes?: Maybe<Tpage>;
  id?: Maybe<ScalarsEnums["ID"]>;
}

export interface TpageEntityResponse {
  __typename?: "TpageEntityResponse";
  data?: Maybe<TpageEntity>;
}

export interface TpageEntityResponseCollection {
  __typename?: "TpageEntityResponseCollection";
  data: Array<TpageEntity>;
  meta: ResponseCollectionMeta;
}

export interface UploadFile {
  __typename?: "UploadFile";
  alternativeText?: Maybe<ScalarsEnums["String"]>;
  caption?: Maybe<ScalarsEnums["String"]>;
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  ext?: Maybe<ScalarsEnums["String"]>;
  formats?: Maybe<ScalarsEnums["JSON"]>;
  hash: ScalarsEnums["String"];
  height?: Maybe<ScalarsEnums["Int"]>;
  mime: ScalarsEnums["String"];
  name: ScalarsEnums["String"];
  previewUrl?: Maybe<ScalarsEnums["String"]>;
  provider: ScalarsEnums["String"];
  provider_metadata?: Maybe<ScalarsEnums["JSON"]>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: ScalarsEnums["Float"];
  updatedAt?: Maybe<ScalarsEnums["DateTime"]>;
  url: ScalarsEnums["String"];
  width?: Maybe<ScalarsEnums["Int"]>;
}

export interface UploadFileEntity {
  __typename?: "UploadFileEntity";
  attributes?: Maybe<UploadFile>;
  id?: Maybe<ScalarsEnums["ID"]>;
}

export interface UploadFileEntityResponse {
  __typename?: "UploadFileEntityResponse";
  data?: Maybe<UploadFileEntity>;
}

export interface UploadFileEntityResponseCollection {
  __typename?: "UploadFileEntityResponseCollection";
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
}

export interface UsersPermissionsCreateRolePayload {
  __typename?: "UsersPermissionsCreateRolePayload";
  ok: ScalarsEnums["Boolean"];
}

export interface UsersPermissionsDeleteRolePayload {
  __typename?: "UsersPermissionsDeleteRolePayload";
  ok: ScalarsEnums["Boolean"];
}

export interface UsersPermissionsLoginPayload {
  __typename?: "UsersPermissionsLoginPayload";
  jwt?: Maybe<ScalarsEnums["String"]>;
  user: UsersPermissionsMe;
}

export interface UsersPermissionsMe {
  __typename?: "UsersPermissionsMe";
  blocked?: Maybe<ScalarsEnums["Boolean"]>;
  confirmed?: Maybe<ScalarsEnums["Boolean"]>;
  email?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  role?: Maybe<UsersPermissionsMeRole>;
  username: ScalarsEnums["String"];
}

export interface UsersPermissionsMeRole {
  __typename?: "UsersPermissionsMeRole";
  description?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  name: ScalarsEnums["String"];
  type?: Maybe<ScalarsEnums["String"]>;
}

export interface UsersPermissionsPasswordPayload {
  __typename?: "UsersPermissionsPasswordPayload";
  ok: ScalarsEnums["Boolean"];
}

export interface UsersPermissionsPermission {
  __typename?: "UsersPermissionsPermission";
  action: ScalarsEnums["String"];
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<ScalarsEnums["DateTime"]>;
}

export interface UsersPermissionsPermissionEntity {
  __typename?: "UsersPermissionsPermissionEntity";
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<ScalarsEnums["ID"]>;
}

export interface UsersPermissionsPermissionRelationResponseCollection {
  __typename?: "UsersPermissionsPermissionRelationResponseCollection";
  data: Array<UsersPermissionsPermissionEntity>;
}

export interface UsersPermissionsRole {
  __typename?: "UsersPermissionsRole";
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  description?: Maybe<ScalarsEnums["String"]>;
  name: ScalarsEnums["String"];
  permissions: (args?: {
    filters?: Maybe<UsersPermissionsPermissionFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<ScalarsEnums["String"]>;
  updatedAt?: Maybe<ScalarsEnums["DateTime"]>;
  users: (args?: {
    filters?: Maybe<UsersPermissionsUserFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<UsersPermissionsUserRelationResponseCollection>;
}

export interface UsersPermissionsRoleEntity {
  __typename?: "UsersPermissionsRoleEntity";
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<ScalarsEnums["ID"]>;
}

export interface UsersPermissionsRoleEntityResponse {
  __typename?: "UsersPermissionsRoleEntityResponse";
  data?: Maybe<UsersPermissionsRoleEntity>;
}

export interface UsersPermissionsRoleEntityResponseCollection {
  __typename?: "UsersPermissionsRoleEntityResponseCollection";
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
}

export interface UsersPermissionsUpdateRolePayload {
  __typename?: "UsersPermissionsUpdateRolePayload";
  ok: ScalarsEnums["Boolean"];
}

export interface UsersPermissionsUser {
  __typename?: "UsersPermissionsUser";
  blocked?: Maybe<ScalarsEnums["Boolean"]>;
  confirmed?: Maybe<ScalarsEnums["Boolean"]>;
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  email: ScalarsEnums["String"];
  provider?: Maybe<ScalarsEnums["String"]>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<ScalarsEnums["DateTime"]>;
  username: ScalarsEnums["String"];
}

export interface UsersPermissionsUserEntity {
  __typename?: "UsersPermissionsUserEntity";
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<ScalarsEnums["ID"]>;
}

export interface UsersPermissionsUserEntityResponse {
  __typename?: "UsersPermissionsUserEntityResponse";
  data?: Maybe<UsersPermissionsUserEntity>;
}

export interface UsersPermissionsUserEntityResponseCollection {
  __typename?: "UsersPermissionsUserEntityResponseCollection";
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
}

export interface UsersPermissionsUserRelationResponseCollection {
  __typename?: "UsersPermissionsUserRelationResponseCollection";
  data: Array<UsersPermissionsUserEntity>;
}

export interface Writer {
  __typename?: "Writer";
  articles: (args?: {
    filters?: Maybe<ArticleFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `"LIVE"`
     */
    publicationState?: Maybe<PublicationState>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<ArticleRelationResponseCollection>;
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  email?: Maybe<ScalarsEnums["String"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  picture?: Maybe<UploadFileEntityResponse>;
  updatedAt?: Maybe<ScalarsEnums["DateTime"]>;
}

export interface WriterEntity {
  __typename?: "WriterEntity";
  attributes?: Maybe<Writer>;
  id?: Maybe<ScalarsEnums["ID"]>;
}

export interface WriterEntityResponse {
  __typename?: "WriterEntityResponse";
  data?: Maybe<WriterEntity>;
}

export interface WriterEntityResponseCollection {
  __typename?: "WriterEntityResponseCollection";
  data: Array<WriterEntity>;
  meta: ResponseCollectionMeta;
}

export interface Mutation {
  __typename?: "Mutation";
  createArticle: (args: { data: ArticleInput }) => Maybe<ArticleEntityResponse>;
  createCategory: (args: {
    data: CategoryInput;
  }) => Maybe<CategoryEntityResponse>;
  createLanding: (args: { data: LandingInput }) => Maybe<LandingEntityResponse>;
  createMemoriaAnual: (args: {
    data: MemoriaAnualInput;
  }) => Maybe<MemoriaAnualEntityResponse>;
  createMenusMenu: (args: {
    data: MenusMenuInput;
  }) => Maybe<MenusMenuEntityResponse>;
  createMenusMenuItem: (args: {
    data: MenusMenuItemInput;
  }) => Maybe<MenusMenuItemEntityResponse>;
  createNoticia: (args: { data: NoticiaInput }) => Maybe<NoticiaEntityResponse>;
  createServicio: (args: {
    data: ServicioInput;
  }) => Maybe<ServicioEntityResponse>;
  createSlide: (args: { data: SlideInput }) => Maybe<SlideEntityResponse>;
  createSucursal: (args: {
    data: SucursalInput;
  }) => Maybe<SucursalEntityResponse>;
  createTpage: (args: { data: TpageInput }) => Maybe<TpageEntityResponse>;
  createUploadFile: (args: {
    data: UploadFileInput;
  }) => Maybe<UploadFileEntityResponse>;
  /**
   * Create a new role
   */
  createUsersPermissionsRole: (args: {
    data: UsersPermissionsRoleInput;
  }) => Maybe<UsersPermissionsCreateRolePayload>;
  /**
   * Create a new user
   */
  createUsersPermissionsUser: (args: {
    data: UsersPermissionsUserInput;
  }) => UsersPermissionsUserEntityResponse;
  createWriter: (args: { data: WriterInput }) => Maybe<WriterEntityResponse>;
  deleteArticle: (args: { id: Scalars["ID"] }) => Maybe<ArticleEntityResponse>;
  deleteCategory: (args: {
    id: Scalars["ID"];
  }) => Maybe<CategoryEntityResponse>;
  deleteGlobal?: Maybe<GlobalEntityResponse>;
  deleteHomepage?: Maybe<HomepageEntityResponse>;
  deleteLanding: (args: { id: Scalars["ID"] }) => Maybe<LandingEntityResponse>;
  deleteMemoriaAnual: (args: {
    id: Scalars["ID"];
  }) => Maybe<MemoriaAnualEntityResponse>;
  deleteMenusMenu: (args: {
    id: Scalars["ID"];
  }) => Maybe<MenusMenuEntityResponse>;
  deleteMenusMenuItem: (args: {
    id: Scalars["ID"];
  }) => Maybe<MenusMenuItemEntityResponse>;
  deleteNoticia: (args: { id: Scalars["ID"] }) => Maybe<NoticiaEntityResponse>;
  deleteServicio: (args: {
    id: Scalars["ID"];
  }) => Maybe<ServicioEntityResponse>;
  deleteSlide: (args: { id: Scalars["ID"] }) => Maybe<SlideEntityResponse>;
  deleteSucursal: (args: {
    id: Scalars["ID"];
  }) => Maybe<SucursalEntityResponse>;
  deleteTpage: (args: { id: Scalars["ID"] }) => Maybe<TpageEntityResponse>;
  deleteUploadFile: (args: {
    id: Scalars["ID"];
  }) => Maybe<UploadFileEntityResponse>;
  /**
   * Delete an existing role
   */
  deleteUsersPermissionsRole: (args: {
    id: Scalars["ID"];
  }) => Maybe<UsersPermissionsDeleteRolePayload>;
  /**
   * Delete an existing user
   */
  deleteUsersPermissionsUser: (args: {
    id: Scalars["ID"];
  }) => UsersPermissionsUserEntityResponse;
  deleteWriter: (args: { id: Scalars["ID"] }) => Maybe<WriterEntityResponse>;
  /**
   * Confirm an email users email address
   */
  emailConfirmation: (args: {
    confirmation: Scalars["String"];
  }) => Maybe<UsersPermissionsLoginPayload>;
  /**
   * Request a reset password token
   */
  forgotPassword: (args: {
    email: Scalars["String"];
  }) => Maybe<UsersPermissionsPasswordPayload>;
  login: (args: {
    input: UsersPermissionsLoginInput;
  }) => UsersPermissionsLoginPayload;
  multipleUpload: (args: {
    field?: Maybe<Scalars["String"]>;
    files: Array<Maybe<Scalars["Upload"]>>;
    ref?: Maybe<Scalars["String"]>;
    refId?: Maybe<Scalars["ID"]>;
  }) => Array<Maybe<UploadFileEntityResponse>>;
  /**
   * Register a user
   */
  register: (args: {
    input: UsersPermissionsRegisterInput;
  }) => UsersPermissionsLoginPayload;
  removeFile: (args: { id: Scalars["ID"] }) => Maybe<UploadFileEntityResponse>;
  /**
   * Reset user password. Confirm with a code (resetToken from forgotPassword)
   */
  resetPassword: (args: {
    code: Scalars["String"];
    password: Scalars["String"];
    passwordConfirmation: Scalars["String"];
  }) => Maybe<UsersPermissionsLoginPayload>;
  updateArticle: (args: {
    data: ArticleInput;
    id: Scalars["ID"];
  }) => Maybe<ArticleEntityResponse>;
  updateCategory: (args: {
    data: CategoryInput;
    id: Scalars["ID"];
  }) => Maybe<CategoryEntityResponse>;
  updateFileInfo: (args: {
    id: Scalars["ID"];
    info?: Maybe<FileInfoInput>;
  }) => UploadFileEntityResponse;
  updateGlobal: (args: { data: GlobalInput }) => Maybe<GlobalEntityResponse>;
  updateHomepage: (args: {
    data: HomepageInput;
  }) => Maybe<HomepageEntityResponse>;
  updateLanding: (args: {
    data: LandingInput;
    id: Scalars["ID"];
  }) => Maybe<LandingEntityResponse>;
  updateMemoriaAnual: (args: {
    data: MemoriaAnualInput;
    id: Scalars["ID"];
  }) => Maybe<MemoriaAnualEntityResponse>;
  updateMenusMenu: (args: {
    data: MenusMenuInput;
    id: Scalars["ID"];
  }) => Maybe<MenusMenuEntityResponse>;
  updateMenusMenuItem: (args: {
    data: MenusMenuItemInput;
    id: Scalars["ID"];
  }) => Maybe<MenusMenuItemEntityResponse>;
  updateNoticia: (args: {
    data: NoticiaInput;
    id: Scalars["ID"];
  }) => Maybe<NoticiaEntityResponse>;
  updateServicio: (args: {
    data: ServicioInput;
    id: Scalars["ID"];
  }) => Maybe<ServicioEntityResponse>;
  updateSlide: (args: {
    data: SlideInput;
    id: Scalars["ID"];
  }) => Maybe<SlideEntityResponse>;
  updateSucursal: (args: {
    data: SucursalInput;
    id: Scalars["ID"];
  }) => Maybe<SucursalEntityResponse>;
  updateTpage: (args: {
    data: TpageInput;
    id: Scalars["ID"];
  }) => Maybe<TpageEntityResponse>;
  updateUploadFile: (args: {
    data: UploadFileInput;
    id: Scalars["ID"];
  }) => Maybe<UploadFileEntityResponse>;
  /**
   * Update an existing role
   */
  updateUsersPermissionsRole: (args: {
    data: UsersPermissionsRoleInput;
    id: Scalars["ID"];
  }) => Maybe<UsersPermissionsUpdateRolePayload>;
  /**
   * Update an existing user
   */
  updateUsersPermissionsUser: (args: {
    data: UsersPermissionsUserInput;
    id: Scalars["ID"];
  }) => UsersPermissionsUserEntityResponse;
  updateWriter: (args: {
    data: WriterInput;
    id: Scalars["ID"];
  }) => Maybe<WriterEntityResponse>;
  upload: (args: {
    field?: Maybe<Scalars["String"]>;
    file: Scalars["Upload"];
    info?: Maybe<FileInfoInput>;
    ref?: Maybe<Scalars["String"]>;
    refId?: Maybe<Scalars["ID"]>;
  }) => UploadFileEntityResponse;
}

export interface Query {
  __typename?: "Query";
  article: (args?: {
    id?: Maybe<Scalars["ID"]>;
  }) => Maybe<ArticleEntityResponse>;
  articles: (args?: {
    filters?: Maybe<ArticleFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `"LIVE"`
     */
    publicationState?: Maybe<PublicationState>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<ArticleEntityResponseCollection>;
  categories: (args?: {
    filters?: Maybe<CategoryFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<CategoryEntityResponseCollection>;
  category: (args?: {
    id?: Maybe<Scalars["ID"]>;
  }) => Maybe<CategoryEntityResponse>;
  global?: Maybe<GlobalEntityResponse>;
  homepage?: Maybe<HomepageEntityResponse>;
  i18NLocale: (args?: {
    id?: Maybe<Scalars["ID"]>;
  }) => Maybe<I18NLocaleEntityResponse>;
  i18NLocales: (args?: {
    filters?: Maybe<I18NLocaleFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<I18NLocaleEntityResponseCollection>;
  landing: (args?: {
    id?: Maybe<Scalars["ID"]>;
  }) => Maybe<LandingEntityResponse>;
  landings: (args?: {
    filters?: Maybe<LandingFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `"LIVE"`
     */
    publicationState?: Maybe<PublicationState>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<LandingEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  memoriaAnual: (args?: {
    id?: Maybe<Scalars["ID"]>;
  }) => Maybe<MemoriaAnualEntityResponse>;
  memoriasAnuales: (args?: {
    filters?: Maybe<MemoriaAnualFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `"LIVE"`
     */
    publicationState?: Maybe<PublicationState>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<MemoriaAnualEntityResponseCollection>;
  menusMenu: (args?: {
    id?: Maybe<Scalars["ID"]>;
  }) => Maybe<MenusMenuEntityResponse>;
  menusMenuItem: (args?: {
    id?: Maybe<Scalars["ID"]>;
  }) => Maybe<MenusMenuItemEntityResponse>;
  menusMenuItems: (args?: {
    filters?: Maybe<MenusMenuItemFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<MenusMenuItemEntityResponseCollection>;
  menusMenus: (args?: {
    filters?: Maybe<MenusMenuFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<MenusMenuEntityResponseCollection>;
  noticia: (args?: {
    id?: Maybe<Scalars["ID"]>;
  }) => Maybe<NoticiaEntityResponse>;
  noticias: (args?: {
    filters?: Maybe<NoticiaFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `"LIVE"`
     */
    publicationState?: Maybe<PublicationState>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<NoticiaEntityResponseCollection>;
  servicio: (args?: {
    id?: Maybe<Scalars["ID"]>;
  }) => Maybe<ServicioEntityResponse>;
  servicios: (args?: {
    filters?: Maybe<ServicioFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `"LIVE"`
     */
    publicationState?: Maybe<PublicationState>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<ServicioEntityResponseCollection>;
  slide: (args?: { id?: Maybe<Scalars["ID"]> }) => Maybe<SlideEntityResponse>;
  slides: (args?: {
    filters?: Maybe<SlideFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `"LIVE"`
     */
    publicationState?: Maybe<PublicationState>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<SlideEntityResponseCollection>;
  sucursal: (args?: {
    id?: Maybe<Scalars["ID"]>;
  }) => Maybe<SucursalEntityResponse>;
  sucursals: (args?: {
    filters?: Maybe<SucursalFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `"LIVE"`
     */
    publicationState?: Maybe<PublicationState>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<SucursalEntityResponseCollection>;
  tpage: (args?: { id?: Maybe<Scalars["ID"]> }) => Maybe<TpageEntityResponse>;
  tpages: (args?: {
    filters?: Maybe<TpageFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `"LIVE"`
     */
    publicationState?: Maybe<PublicationState>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<TpageEntityResponseCollection>;
  uploadFile: (args?: {
    id?: Maybe<Scalars["ID"]>;
  }) => Maybe<UploadFileEntityResponse>;
  uploadFiles: (args?: {
    filters?: Maybe<UploadFileFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole: (args?: {
    id?: Maybe<Scalars["ID"]>;
  }) => Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles: (args?: {
    filters?: Maybe<UsersPermissionsRoleFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser: (args?: {
    id?: Maybe<Scalars["ID"]>;
  }) => Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers: (args?: {
    filters?: Maybe<UsersPermissionsUserFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<UsersPermissionsUserEntityResponseCollection>;
  writer: (args?: { id?: Maybe<Scalars["ID"]> }) => Maybe<WriterEntityResponse>;
  writers: (args?: {
    filters?: Maybe<WriterFiltersInput>;
    /**
     * @defaultValue `{}`
     */
    pagination?: Maybe<PaginationArg>;
    /**
     * @defaultValue `[]`
     */
    sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<WriterEntityResponseCollection>;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface SchemaObjectTypes {
  Article: Article;
  ArticleEntity: ArticleEntity;
  ArticleEntityResponse: ArticleEntityResponse;
  ArticleEntityResponseCollection: ArticleEntityResponseCollection;
  ArticleRelationResponseCollection: ArticleRelationResponseCollection;
  Category: Category;
  CategoryEntity: CategoryEntity;
  CategoryEntityResponse: CategoryEntityResponse;
  CategoryEntityResponseCollection: CategoryEntityResponseCollection;
  ComponentGeneralFormulario: ComponentGeneralFormulario;
  ComponentGeneralItems: ComponentGeneralItems;
  ComponentGeneralLista: ComponentGeneralLista;
  ComponentSectionsHero: ComponentSectionsHero;
  ComponentServiciosRequisitos: ComponentServiciosRequisitos;
  ComponentServiciosTarifario: ComponentServiciosTarifario;
  ComponentServiciosTarifas: ComponentServiciosTarifas;
  ComponentServiciosVentajas: ComponentServiciosVentajas;
  ComponentSharedCta: ComponentSharedCta;
  ComponentSharedPortada: ComponentSharedPortada;
  ComponentSharedSeo: ComponentSharedSeo;
  ComponentSucursalTelefonos: ComponentSucursalTelefonos;
  Error: Error;
  Global: Global;
  GlobalEntity: GlobalEntity;
  GlobalEntityResponse: GlobalEntityResponse;
  Homepage: Homepage;
  HomepageEntity: HomepageEntity;
  HomepageEntityResponse: HomepageEntityResponse;
  I18NLocale: I18NLocale;
  I18NLocaleEntity: I18NLocaleEntity;
  I18NLocaleEntityResponse: I18NLocaleEntityResponse;
  I18NLocaleEntityResponseCollection: I18NLocaleEntityResponseCollection;
  Landing: Landing;
  LandingEntity: LandingEntity;
  LandingEntityResponse: LandingEntityResponse;
  LandingEntityResponseCollection: LandingEntityResponseCollection;
  MemoriaAnual: MemoriaAnual;
  MemoriaAnualEntity: MemoriaAnualEntity;
  MemoriaAnualEntityResponse: MemoriaAnualEntityResponse;
  MemoriaAnualEntityResponseCollection: MemoriaAnualEntityResponseCollection;
  MenusMenu: MenusMenu;
  MenusMenuEntity: MenusMenuEntity;
  MenusMenuEntityResponse: MenusMenuEntityResponse;
  MenusMenuEntityResponseCollection: MenusMenuEntityResponseCollection;
  MenusMenuItem: MenusMenuItem;
  MenusMenuItemEntity: MenusMenuItemEntity;
  MenusMenuItemEntityResponse: MenusMenuItemEntityResponse;
  MenusMenuItemEntityResponseCollection: MenusMenuItemEntityResponseCollection;
  MenusMenuItemRelationResponseCollection: MenusMenuItemRelationResponseCollection;
  Mutation: Mutation;
  Noticia: Noticia;
  NoticiaEntity: NoticiaEntity;
  NoticiaEntityResponse: NoticiaEntityResponse;
  NoticiaEntityResponseCollection: NoticiaEntityResponseCollection;
  Pagination: Pagination;
  Query: Query;
  ResponseCollectionMeta: ResponseCollectionMeta;
  Servicio: Servicio;
  ServicioEntity: ServicioEntity;
  ServicioEntityResponse: ServicioEntityResponse;
  ServicioEntityResponseCollection: ServicioEntityResponseCollection;
  ServicioRelationResponseCollection: ServicioRelationResponseCollection;
  Slide: Slide;
  SlideEntity: SlideEntity;
  SlideEntityResponse: SlideEntityResponse;
  SlideEntityResponseCollection: SlideEntityResponseCollection;
  Subscription: Subscription;
  Sucursal: Sucursal;
  SucursalEntity: SucursalEntity;
  SucursalEntityResponse: SucursalEntityResponse;
  SucursalEntityResponseCollection: SucursalEntityResponseCollection;
  Tpage: Tpage;
  TpageEntity: TpageEntity;
  TpageEntityResponse: TpageEntityResponse;
  TpageEntityResponseCollection: TpageEntityResponseCollection;
  UploadFile: UploadFile;
  UploadFileEntity: UploadFileEntity;
  UploadFileEntityResponse: UploadFileEntityResponse;
  UploadFileEntityResponseCollection: UploadFileEntityResponseCollection;
  UsersPermissionsCreateRolePayload: UsersPermissionsCreateRolePayload;
  UsersPermissionsDeleteRolePayload: UsersPermissionsDeleteRolePayload;
  UsersPermissionsLoginPayload: UsersPermissionsLoginPayload;
  UsersPermissionsMe: UsersPermissionsMe;
  UsersPermissionsMeRole: UsersPermissionsMeRole;
  UsersPermissionsPasswordPayload: UsersPermissionsPasswordPayload;
  UsersPermissionsPermission: UsersPermissionsPermission;
  UsersPermissionsPermissionEntity: UsersPermissionsPermissionEntity;
  UsersPermissionsPermissionRelationResponseCollection: UsersPermissionsPermissionRelationResponseCollection;
  UsersPermissionsRole: UsersPermissionsRole;
  UsersPermissionsRoleEntity: UsersPermissionsRoleEntity;
  UsersPermissionsRoleEntityResponse: UsersPermissionsRoleEntityResponse;
  UsersPermissionsRoleEntityResponseCollection: UsersPermissionsRoleEntityResponseCollection;
  UsersPermissionsUpdateRolePayload: UsersPermissionsUpdateRolePayload;
  UsersPermissionsUser: UsersPermissionsUser;
  UsersPermissionsUserEntity: UsersPermissionsUserEntity;
  UsersPermissionsUserEntityResponse: UsersPermissionsUserEntityResponse;
  UsersPermissionsUserEntityResponseCollection: UsersPermissionsUserEntityResponseCollection;
  UsersPermissionsUserRelationResponseCollection: UsersPermissionsUserRelationResponseCollection;
  Writer: Writer;
  WriterEntity: WriterEntity;
  WriterEntityResponse: WriterEntityResponse;
  WriterEntityResponseCollection: WriterEntityResponseCollection;
}
export type SchemaObjectTypesNames =
  | "Article"
  | "ArticleEntity"
  | "ArticleEntityResponse"
  | "ArticleEntityResponseCollection"
  | "ArticleRelationResponseCollection"
  | "Category"
  | "CategoryEntity"
  | "CategoryEntityResponse"
  | "CategoryEntityResponseCollection"
  | "ComponentGeneralFormulario"
  | "ComponentGeneralItems"
  | "ComponentGeneralLista"
  | "ComponentSectionsHero"
  | "ComponentServiciosRequisitos"
  | "ComponentServiciosTarifario"
  | "ComponentServiciosTarifas"
  | "ComponentServiciosVentajas"
  | "ComponentSharedCta"
  | "ComponentSharedPortada"
  | "ComponentSharedSeo"
  | "ComponentSucursalTelefonos"
  | "Error"
  | "Global"
  | "GlobalEntity"
  | "GlobalEntityResponse"
  | "Homepage"
  | "HomepageEntity"
  | "HomepageEntityResponse"
  | "I18NLocale"
  | "I18NLocaleEntity"
  | "I18NLocaleEntityResponse"
  | "I18NLocaleEntityResponseCollection"
  | "Landing"
  | "LandingEntity"
  | "LandingEntityResponse"
  | "LandingEntityResponseCollection"
  | "MemoriaAnual"
  | "MemoriaAnualEntity"
  | "MemoriaAnualEntityResponse"
  | "MemoriaAnualEntityResponseCollection"
  | "MenusMenu"
  | "MenusMenuEntity"
  | "MenusMenuEntityResponse"
  | "MenusMenuEntityResponseCollection"
  | "MenusMenuItem"
  | "MenusMenuItemEntity"
  | "MenusMenuItemEntityResponse"
  | "MenusMenuItemEntityResponseCollection"
  | "MenusMenuItemRelationResponseCollection"
  | "Mutation"
  | "Noticia"
  | "NoticiaEntity"
  | "NoticiaEntityResponse"
  | "NoticiaEntityResponseCollection"
  | "Pagination"
  | "Query"
  | "ResponseCollectionMeta"
  | "Servicio"
  | "ServicioEntity"
  | "ServicioEntityResponse"
  | "ServicioEntityResponseCollection"
  | "ServicioRelationResponseCollection"
  | "Slide"
  | "SlideEntity"
  | "SlideEntityResponse"
  | "SlideEntityResponseCollection"
  | "Subscription"
  | "Sucursal"
  | "SucursalEntity"
  | "SucursalEntityResponse"
  | "SucursalEntityResponseCollection"
  | "Tpage"
  | "TpageEntity"
  | "TpageEntityResponse"
  | "TpageEntityResponseCollection"
  | "UploadFile"
  | "UploadFileEntity"
  | "UploadFileEntityResponse"
  | "UploadFileEntityResponseCollection"
  | "UsersPermissionsCreateRolePayload"
  | "UsersPermissionsDeleteRolePayload"
  | "UsersPermissionsLoginPayload"
  | "UsersPermissionsMe"
  | "UsersPermissionsMeRole"
  | "UsersPermissionsPasswordPayload"
  | "UsersPermissionsPermission"
  | "UsersPermissionsPermissionEntity"
  | "UsersPermissionsPermissionRelationResponseCollection"
  | "UsersPermissionsRole"
  | "UsersPermissionsRoleEntity"
  | "UsersPermissionsRoleEntityResponse"
  | "UsersPermissionsRoleEntityResponseCollection"
  | "UsersPermissionsUpdateRolePayload"
  | "UsersPermissionsUser"
  | "UsersPermissionsUserEntity"
  | "UsersPermissionsUserEntityResponse"
  | "UsersPermissionsUserEntityResponseCollection"
  | "UsersPermissionsUserRelationResponseCollection"
  | "Writer"
  | "WriterEntity"
  | "WriterEntityResponse"
  | "WriterEntityResponseCollection";

export interface $GenericMorph {
  Article?: Article;
  Category?: Category;
  ComponentGeneralFormulario?: ComponentGeneralFormulario;
  ComponentGeneralItems?: ComponentGeneralItems;
  ComponentGeneralLista?: ComponentGeneralLista;
  ComponentSectionsHero?: ComponentSectionsHero;
  ComponentServiciosRequisitos?: ComponentServiciosRequisitos;
  ComponentServiciosTarifario?: ComponentServiciosTarifario;
  ComponentServiciosTarifas?: ComponentServiciosTarifas;
  ComponentServiciosVentajas?: ComponentServiciosVentajas;
  ComponentSharedCta?: ComponentSharedCta;
  ComponentSharedPortada?: ComponentSharedPortada;
  ComponentSharedSeo?: ComponentSharedSeo;
  ComponentSucursalTelefonos?: ComponentSucursalTelefonos;
  Global?: Global;
  Homepage?: Homepage;
  I18NLocale?: I18NLocale;
  Landing?: Landing;
  MemoriaAnual?: MemoriaAnual;
  MenusMenu?: MenusMenu;
  MenusMenuItem?: MenusMenuItem;
  Noticia?: Noticia;
  Servicio?: Servicio;
  Slide?: Slide;
  Sucursal?: Sucursal;
  Tpage?: Tpage;
  UploadFile?: UploadFile;
  UsersPermissionsPermission?: UsersPermissionsPermission;
  UsersPermissionsRole?: UsersPermissionsRole;
  UsersPermissionsUser?: UsersPermissionsUser;
  Writer?: Writer;
}

export interface $LandingContenidoDynamicZone {
  ComponentGeneralLista?: ComponentGeneralLista;
  Error?: Error;
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  ENUM_MENUSMENUITEM_TARGET: ENUM_MENUSMENUITEM_TARGET | undefined;
  ENUM_SERVICIO_CATEGORIA: ENUM_SERVICIO_CATEGORIA | undefined;
  ENUM_SERVICIO_TIPO: ENUM_SERVICIO_TIPO | undefined;
  PublicationState: PublicationState | undefined;
}
