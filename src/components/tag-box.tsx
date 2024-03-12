"use client";

interface TagBoxProps {
  tags: string[];
}

export default function TagBox({ tags }: TagBoxProps) {
  return (
    <div className="flex">
      {tags.length > 2 ? (
        <>
            <p className="rounded-md border-solid border-2 p-1 mr-2 text-xs">
                {tags[0]}
            </p>
            <p className="rounded-md border-solid border-2 p-1 mr-2 text-xs">
                {tags[1]}
            </p>
            <p className="rounded-md border-solid border-2 p-1 mr-2 text-xs">
                +{tags.length - 2} more
            </p>
        </>
      ) : (
        tags.map((tag: string) => {
          return (
            <p
              key={tag}
              className="rounded-md border-solid border-2 p-1 mr-2 text-xs"
            >
              {tag}
            </p>
          );
        })
      )}
    </div>
  );
}
