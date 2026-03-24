import { unrnData } from "./Unrn";
import { ubaCarreras } from "./uba";
import { utnCarreras } from "./utn";
import { unrcCarreras } from "./unrc";
import { unluCarreras } from "./unlu";
import { unlpCarreras } from "./unlp";
import { uncomaData } from "./uncomaData";
import { ufloCarreras } from "./uflo";
import { ucasalCarreras } from "./ucasal";
import { us21Data } from "./siglo21";
import { uncCarreras } from "./unc";
import { unroData } from "./unro";
import { unslData } from "./sanluis";
import { umData } from "./um";
import { carrerasUCA } from "./uca";
import { unsaData } from "./unsa";
import { unsjData } from "./unsj";
import { uncuyoData } from "./cuyo";

export const todasPresenciales = [
  ...unrnData, ...utnCarreras, ...unrcCarreras, ...unluCarreras,
  ...unlpCarreras, ...uncomaData, ...ufloCarreras, ...ucasalCarreras,
  ...ubaCarreras, ...uncCarreras, ...unroData, ...us21Data,
  ...unslData, ...umData, ...carrerasUCA, ...unsaData, ...unsjData, ...uncuyoData,
];