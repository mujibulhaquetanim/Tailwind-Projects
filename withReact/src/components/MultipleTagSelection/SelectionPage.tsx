import { useState } from "react";
import Tag from "./Tag";

interface tag {
  tag: string[];
}

export default function SelectionPage() {
  const [tags, setTags] = useState<tag>({ tag: [] });
  const checkTag = (tag: string) => {
    tags.tag.filter((item) => item !== tag);
  };

  const selectTag = (tag: string) => {
    if (tags.tag.some((item) => item === tag)) {
      const filterTags = tags.tag.filter((item) => item !== tag);
      setTags((prev) => {
        return { ...prev, tag: filterTags };
      });
    } else {
      setTags((prev) => {
        return { ...prev, tag: [...prev.tag, tag] };
      });
    }
  };

  console.log(tags.tag);

  return (
    <div>
      <div className="border-2 mt-3 justify-center flex flex">
        <Tag tagName="JS" selectTag={selectTag} select={checkTag} />
        <Tag tagName="Python" selectTag={selectTag} select={checkTag} />
        <Tag tagName="GO" selectTag={selectTag} select={checkTag} />
        <Tag tagName="C" selectTag={selectTag} select={checkTag} />
      </div>
      <div className="gap=3 m-3">You have selected: {tags.tag} </div>
    </div>
  );
}
