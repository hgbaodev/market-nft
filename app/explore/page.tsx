import Explore from "@/app/components/block/Explore4";
import Breadcrumb from "@/app/components/breadcrumb";
import LiveAuctionModal from "@/app/components/modal/LiveAuctionModal";
import { Metadata } from "next";

const item = {
    title: "Explore",
    breadcrumb: [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Explore",
            path: "/explore",
        },
        {
            name: "Explore",
        },
    ],
};

export const metadata: Metadata = {
    title: "Axies | NFT Marketplace React/Next Js Template | Explore 4",
};

export default function page(): JSX.Element {
    return (
        <>
            <Breadcrumb data={item} />
            <Explore />

            {/* live auction product modal */}
            <LiveAuctionModal />
        </>
    );
}
