export const authorNames = [
  {id: "Egg", name: "Shell G. Hydrous", color: "text-[#fd8535]"},
  {id: "Mek", name: "Bon Don John Von Lee Esquirex", color: "text-[#3e1d26]"},
  {id: "Sash", name: "Reginald T. Canon", color: "text-[#614051]"},
  {id: "J", name: "J", color: ""},
  {id: "Vax", name: "Catt Lauer", color: "text-[#01660e]"},
  {id: "L", name: "L", color: ""}
];

const getAuthorNames = (authorName: string) => {
  const author = authorNames.find((element) => element.id == authorName);

  return <span className={author?.color}>{author?.name}</span>;
};

export default getAuthorNames;
