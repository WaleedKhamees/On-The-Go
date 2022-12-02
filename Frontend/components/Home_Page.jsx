import NavBar from "./NavBar";
import HomePageCard from "./HomePageCard";
import Footer from "./Footer";

function Home_Page() {
  return (
    <>
      
      <HomePageCard
        Img="https://s3-alpha-sig.figma.com/img/3ace/154c/4d9e8937101671c15ad48799914bbc71?Expires=1669593600&Signature=QFD~Cu3bza2I-Nmix6e0sT~4M9mpCTqoF1Rn3vUJcoajbV38UNKJynfuF-yhqIJfqnBij1M9rHXQVj6Cq-kazi78T6CpJ0yqmlM5bzTJ8k57DfYFLQmGqSwuRexDAiAaog6nzeGwx~7RGrSTYDHsglP7GAKPOIIvV9HaaO7jyJ2Rmd1Nf4qLPuBaxlml-G--AeC60srjtdQ3ajtK3r7Lg9DNoEGT~NX-vRdU-dqDP2IXOh9ayMqzsURMn~5Umf6YawRlPJygZ09qcBVJje-v7lxxpQK74ek910gsKsXM3pFBJcRTZOX8M7uaTJTQQ1gvWKVigRzPMT7wYzjiatpBUg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        Header="Eastern Dishes"
        Description="Rich in flavors and history "
        Reversed={true}
      />
      <HomePageCard
        Img="https://s3-alpha-sig.figma.com/img/fe35/3468/7728d567708134f4fb2b7076baf728b1?Expires=1669593600&Signature=QAR5qfOETaPUx--nofxnYkv2EgZBOWFj4SGTk74zrEJ77YKJSDBWQ7qhlMjuBFawLERA0WU-H2QUl718DB4sc29KVdxMZnLkn-IAJJ8TkdMpxr8riEsFKMmSr~EARWlbsBxf9kLAoQ~PutRMjf6Qy4d8UAV128BA-5R9xQR~JJpoB52oW5vZmkPEkGyZMOY~NMiG89J0nwTGhWIK766jGRdVeEpxSRCk3nRjnA8VrnUWFG3h6S3l2mPalixgNZTrTneIA0aYfLq8b7xGcXVkQhuXSnl1HLLNhYa3helVloPBIrxvgeNnp4p1V37qb8WHkUQGOxtlEXJONDUMxwY12A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        Header="Western Dishes"
        Description="Filling in summer, winter, fall and spring "
        Reversed={false}
      />
      <HomePageCard
        Img="https://s3-alpha-sig.figma.com/img/5967/a42b/951aca107210377cc974420266922a5f?Expires=1669593600&Signature=QIFj2sd7nvSweq31UeKEFYiFCLRYODTe4hCOZG5o4C~LhAVuyYRJtS7vL32xrH9TzqIRC1OlUs50l0kZSnK6-Qo72QCqQ1-~M9MGxAyx~4PNPERUKX6eyhOU3UB5eZCrtPCgXdftJX2xH9O0Eq-DKa3TbS2mptjFJ1pE5fYPKcDoMC01WKqMMNWrZEqoFkAY0vgGmnM3fYbBWAEsvNfS8r7~8bE-sOm3JLWrcJUO5E9LY1vm3o-GbJs1wA0cmKvCdntjPZN1O1cDPmSpoyXArKVwyp5YZs3i2vcZQ2hlkfKRTpoxMUAHJrlmdDWqm69tWEAOOWoG2tEscMFVhCH9Lw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        Header="Drinks"
        Description="Wash down your meal with a cold drink"
        Reversed={true}
      />
      
    </>
  );
}

export default Home_Page;
