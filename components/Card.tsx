import { Author } from "./Author";
export const Card = (props: any) => {
  return (
    <div className=" w-full md:w-1/3 p-3">
      <div>
        <img
          className="object-cover h-64 w-full"
          src="https://picsum.photos/326/172"
        />
      </div>
      <div>
        <p className="p-1 text-lg  overflow-ellipsis ">{props.post.title}</p>
      </div>
      <div>
        <p className="overflow-ellipsis">{props.post.body}</p>
      </div>
      <div>
        <Author />
      </div>
    </div>
  );
};
