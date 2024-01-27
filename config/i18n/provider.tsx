// "use client";

// import { I18nClientContext } from "./client";
// import { TI18NProviderProps } from "./types";

// import { BaseLocale } from "international-types";

// export const flattenLocale = <Locale extends BaseLocale>(
//   locale: Record<string, unknown>,
//   prefix = ""
// ): Locale =>
//   Object.entries(locale).reduce(
//     (prev, [name, value]) => ({
//       ...prev,
//       ...(typeof value === "string"
//         ? { [prefix + name]: value }
//         : flattenLocale(value as unknown as Locale, `${prefix}${name}.`)),
//     }),
//     {} as Locale
//   );

// export const I18NProvider = ({
//   children,
//   locale,
//   content,
// }: TI18NProviderProps) => {
//   return (
//     <I18nClientContext.Provider
//       value={{ locale, localeContent: flattenLocale(content) }}
//     >
//       {children}
//     </I18nClientContext.Provider>
//   );
// };

export {};