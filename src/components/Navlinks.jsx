
import { Link } from "react-router-dom"
import { links } from "./Mylinks"
import { useState } from "react";
export const Navlinks = () => {
    const [heading, setHeading] = useState("    ");
    return (
        <>
            {links.map((link) => (
                <div className="bg-white">
                    <div className="   px-1 text-left md:cursor-pointer   group">
                        <h1 className="py-7 w-full w-20 text-sm md:z-50   hover:border-t-2 border-green-500 transition-transform "
                            onClick={() =>heading !== link.name ?  setHeading(link.name) : setHeading('')}

                        >
                            {link.name}
                        </h1>

                        {link.submenu && (
                            <div className="">
                                <div className="absolute -mt-10 hidden z-50  group-hover:md:block hover:md:block">
                                    <div className="py-3">
                                        <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                                    </div>
                                    <div className="bg-white p-3.5 ">
                                        {
                                            link.sublinks.map((mysublink) => (
                                                <div>
                                                    <h1 className="text-lg font-semibold">{mysublink.Head}</h1>
                                                    {mysublink.sublink.map(slink => (
                                                        <li className="text-sm text-gray-600 my-2.5 ">
                                                            <Link to={slink.link} className="hover:text-purple-500 " >{slink.name}</Link>
                                                        </li>
                                                    ))}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className={`
                        ${heading === link.name ? "md:hiiden" : 'hidden'} 
                        
                        
                        `}>
                        {link.sublinks.map((slinks) => (
                            <div className="">
                                <div>
                                    <h1 className="py-4  font-semibold pr-5 md:pr-0">{slinks.Head}</h1>
                                    <div className="">
                                        {slinks.sublink.map((slink) => (
                                            <li>
                                                <Link to={slink.link}>{slink.name}</Link>
                                            </li>

                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>

                </div>
            ))
            }



        </>
    )
}


