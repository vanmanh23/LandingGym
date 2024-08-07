import { useState } from "react";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarShortcut, MenubarTrigger } from "./ui/menubar";
import { AlignJustify, ChevronDown, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
// import { Link } from '../router';
import { MenuElenents } from '@/data/menu_elements'
import { Link } from "react-router-dom";

export default function Navigation() {
  const logo =
    "https://sofitgympooler.com/wp-content/uploads/2019/10/Untitled-design-98.png";
    const main_menu = MenuElenents;
 
  const [accordionStates, setAccordionStates] = useState(main_menu.map(() => false));
  const [toogle, setToogle] = useState(false)
  const toogleHandler = () => {
    setToogle(!toogle)
  }
  const chervonHandler = (index : number) => {
    const newAccordionStates = [...accordionStates];
    newAccordionStates[index] = !newAccordionStates[index];
    setAccordionStates(newAccordionStates);
  };
  return (
    <div className="relative w-full flex flex-col z-30 bg-white xl:bg-transparent">
    <div className="relative flex h-fit w-full justify-between overflow-hidden  items-center px-7 md:px-4 bg-white md:bg-gray-400 md:bg-opacity-50 z-10">
      <div className="block md:hidden">
          <AlignJustify className="font-bold text-xl cursor-pointer" onClick={toogleHandler}/>
      </div>
      <div className="md:w-24 w-full items-center flex justify-center ">
        <Link to={"/"}><img src={logo} alt="logo" className="w-24"/></Link>
      </div>
      <div className="md:flex hidden">
        <ul className="flex">
        {main_menu.map((item, index) => (
            <Link to={item.url} key={index}>
              <Menubar className="border-none bg-transparent">
                <MenubarMenu>
                  <MenubarTrigger className="uppercase text-md cursor-pointer">{item.title} <MenubarShortcut className="">{index === 0 ? <ChevronRight /> : ""}</MenubarShortcut></MenubarTrigger>
                  <MenubarContent className="border-none">
                    {item.option.map(section => 
                      <MenubarItem key={section.title} className="uppercase bg-black/75 text-white border-none text-xs"><p className="opacity-75 ">{section.title}</p></MenubarItem>
                      )}
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </Link>
        ))}
        </ul>

      </div>
    </div>
    <div className={`w-full h-fit xl:hidden bg-white ${toogle ? "flex" : "hidden"}`}>
      <div className="w-full z-50 m-7">
      <Accordion type="single" collapsible className="w-full">
      {main_menu.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}  onClick={() => chervonHandler(index)} className="cursor-pointer">
          <div className="flex justify-between items-center">
            <AccordionTrigger >{item.title}</AccordionTrigger> 
            {item.option.length > 0 && <ChevronDown className={`transition ${accordionStates[index] ? "rotate-180" : "rotate-0"} `}/>}
          </div>
        {  item.option.map(section => (
            <AccordionContent key={section.title}>
            {section.title} 
        </AccordionContent>
        ))}
      </AccordionItem>
      ))}
    </Accordion>
      </div>
    </div>
    </div>
  );
}
