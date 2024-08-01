import ItemDetails from "@/app/components/block/ItemDetails";
import LiveAuction from "@/app/components/block/LiveAuction";
import Breadcrumb from "@/app/components/breadcrumb";
import LiveAuctionModal from "@/app/components/modal/LiveAuctionModal";
import { Metadata } from "next";

const item = {
    title: "Item Details",
    breadcrumb: [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Explore",
            path: "/item-details-1",
        },
        {
            name: "Item Details",
        },
    ],
};

export const metadata: Metadata = {
    title: "Axies | NFT Marketplace React/Next Js Template | Item Details 1",
};

export default function page(): JSX.Element {
    return (
        <>
            <Breadcrumb data={item} />
            <ItemDetails />
            <LiveAuction />

            {/* live auction product modal */}
            <LiveAuctionModal />
        </>
    );
}
