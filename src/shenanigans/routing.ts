import fs, { type PathLike } from "fs";

const dissectPathname = (fullAstroPathname: PathLike) => {
  const langPathname =
    fullAstroPathname.toString().length > 3
      ? fullAstroPathname
          .toString()
          .replace(/(?<!^)(\/\w+)+\/\w+$|(?<!^)\/\w+$/gm, "")
      : fullAstroPathname;
  const lang = langPathname
    .toString()
    .replace(/(?<=^\/\w{2}).+/gm, "")
    .replace(/\//gm, "");
  return { fullAstroPathname, langPathname, lang };
};

export { dissectPathname };
