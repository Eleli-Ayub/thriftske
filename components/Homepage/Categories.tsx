import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
interface categoryProps {
  title: string;
}
export default function CategoryItem({ title }: categoryProps) {
  const router = useRouter();
  return (
    <Card
      onClick={() => {
        router.push("/categories");
      }}
      shadow={false}
      className="relative grid lg:h-[25rem] h-[10rem] w-[150px] lg:w-[300px] max-w-[28rem] lg:min-w-[300px] items-end justify-center overflow-hidden text-center hover:scale-105 duration-500 cursor-pointer"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full hover:from-red-800/50 hover:via-red-400/50 duration-500 bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography variant="h5" className="mb-4 text-gray-400">
          {title}
        </Typography>
      </CardBody>
    </Card>
  );
}
