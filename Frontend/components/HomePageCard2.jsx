function HomePageCard2() {
  return (
    <div className="flex  justify-between max-h-[400px]">
      <div className="flex flex-col items-center  bg-RedPrimary text-center w-1/2 gap-4 py-28 ">
        <h1 className="h1 text-White text-center "> Western Dishes</h1>

        <h3 className="h3 text-White text-center">
          {" "}
          Filling in summer, winter, fall and spring{" "}
        </h3>

        <button className="border rounded-lg border-White  pr-2 pl-2   ">
          {" "}
          <p className="text-White text-center p-2 ">Order Now</p>
        </button>
      </div>
      <div className="flex  w-1/2">
        <img
          src="https://s3-alpha-sig.figma.com/img/fe35/3468/7728d567708134f4fb2b7076baf728b1?Expires=1669593600&Signature=QAR5qfOETaPUx--nofxnYkv2EgZBOWFj4SGTk74zrEJ77YKJSDBWQ7qhlMjuBFawLERA0WU-H2QUl718DB4sc29KVdxMZnLkn-IAJJ8TkdMpxr8riEsFKMmSr~EARWlbsBxf9kLAoQ~PutRMjf6Qy4d8UAV128BA-5R9xQR~JJpoB52oW5vZmkPEkGyZMOY~NMiG89J0nwTGhWIK766jGRdVeEpxSRCk3nRjnA8VrnUWFG3h6S3l2mPalixgNZTrTneIA0aYfLq8b7xGcXVkQhuXSnl1HLLNhYa3helVloPBIrxvgeNnp4p1V37qb8WHkUQGOxtlEXJONDUMxwY12A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          className="w-full"
        ></img>
      </div>
    </div>
  );
}

export default HomePageCard2;
