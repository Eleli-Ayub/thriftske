import { Carousel, Typography, Button } from "@material-tailwind/react";

export default function Couresel() {
  return (
    <Carousel className="rounded-xl w-full h-[400px]">
      <Item />
      <Item />
      <Item />
    </Carousel>
  );
}

const Item = () => {
  return (
    <div className="relative h-full w-full ">
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />
    </div>
  );
};
