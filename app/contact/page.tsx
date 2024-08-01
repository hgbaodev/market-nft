import Contact from "@/app/components/block/Contact";
import Breadcrumb from "@/app/components/breadcrumb";
import { Metadata } from "next";

const item = {
    title: "Contact",
    breadcrumb: [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Contact",
            path: "/contact",
        },
        {
            name: "Contact",
        },
    ],
};

export const metadata: Metadata = {
    title: "Axies | NFT Marketplace React/Next Js Template | Contact 1",
};

export default function page(): JSX.Element {
    return (
        <>
            <Breadcrumb data={item} />
            <Contact />
        </>
    );
}
