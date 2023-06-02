import { Fragment, SetStateAction, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
interface iconProps {
  id: number;
  open: any;
}
function Icon({ id, open }: iconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Acordion() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          Product Details
        </AccordionHeader>
        <AccordionBody>
          <p className="border p-2 rounded-lg cursor-pointer ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            architecto expedita blanditiis dicta cumque tempore. Voluptatum amet
            velit mollitia recusandae aliquid magnam, pariatur ratione odio id
            consectetur, molestiae similique placeat fugit, deserunt illo
            corporis harum? Sed omnis architecto cupiditate enim totam!
            Accusamus cupiditate minus unde corrupti quibusdam odit, illo
            aspernatur incidunt tenetur quis aliquam esse sunt perspiciatis
            aperiam consequatur possimus at quam doloribus, deleniti vel maiores
            ex dolorum obcaecati explicabo! Natus quod tempora velit, asperiores
            quam distinctio hic magnam expedita adipisci ab atque necessitatibus
            itaque aut ipsa in inventore voluptatibus culpa, ex ad deserunt
            voluptates rem nisi accusantium. Quas, fuga?
          </p>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
