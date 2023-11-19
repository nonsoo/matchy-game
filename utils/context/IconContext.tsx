import { IconContext } from "react-icons";
import { ReactNode } from "react";

interface Props {
  className: string;
  children: ReactNode;
}
const IconContexts = ({ className, children }: Props) => {
  return (
    <IconContext.Provider value={{ className }}>
      {children}
    </IconContext.Provider>
  );
};

export default IconContexts;
