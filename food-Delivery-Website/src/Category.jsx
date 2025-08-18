import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFoodBank, MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import {GiFullPizza, GiHamburger} from "react-icons/gi"


export const Categories = [
    {
        id:1,
        name: "All",
        image: <TiThSmallOutline className="w-[60px] h-[60px]" />
    },
    {
        id:2,
        name: "Breakfaset",
        image: <MdOutlineFreeBreakfast className="w-[60px] h-[60px]"/>
    },
    {
        id:3,
        name: "Soups",
        image: <LuSoup className="w-[60px] h-[60px]"/>
    },
    {
        id:4,
        name: "Pasta",
        image: <CiBowlNoodles className="w-[60px] h-[60px]"/>
    },
    {
        id:5,
        name: "Main Course",
        image: <MdOutlineFoodBank className="w-[60px] h-[60px]"/>
    },
    {
        id:6,
        name: "Pizza",
        image: <GiFullPizza className="w-[60px] h-[60px]"/>
    },
    {
        id:7,
        name: "Burger",
        image: <GiHamburger className="w-[60px] h-[60px]"/>
    }
]