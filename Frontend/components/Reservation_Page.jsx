import NavBar from "./NavBar";
import CheckinDate from "./CheckinDate";
import Footer from "./Footer";
import How from "./Howmanyarecoming";
import When from "./When";

function Reservation_Page() {
    return (
        <>
            <NavBar />
            <div className="flex-col flex justify-center items-center flex-grow gap-4 h-screen">
                <div className="w-full">
                    <CheckinDate />
                    <How />
                    <When />
                </div>
                <div className="flex-col flex w-[364px] ">
                    <button className="rounded-lg pr-2 pl-2 bg-RedPrimary ">
                        <p className="text-White text-center p-2  ">RESERVE</p>
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Reservation_Page;