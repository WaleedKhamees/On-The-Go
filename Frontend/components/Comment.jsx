import StarsRating from "./atoms/StarsRating";
const Comment = (prop) => {
  return (
    <div className="flex flex-col gap-4 px-8">
      <div className="flex gap-4">
        <img
          src="https://s3-alpha-sig.figma.com/img/4678/91cb/1ce1d049ca67dc27f3e146f4c96ee442?Expires=1669593600&Signature=OnSF0n2nppTiWGHZO23Y9gBOSA1K7CzgKvz8KS~bAgmBg8HuJCErLocbEsQcalknm-A5~3qZ9bF1qWuTfkTTaIlq~CdcyI1KRBHW81dS9G1NR~BAN5r0rA~TePhUc4xkyNGFBM68bypDO~WP1V1dd-bOHCZZ-jMhp46FDcFhE1zTottQ0o~PHVVOxRvsUR043WiBuLZA-QfNUyBh3C4hu5C6udy~K4JnOWlzkgdj3HEMRSN0k~ZS2J5vMuxirAQCTZT2VSJopKrBxDDOmFDNoQfkctBNIJiHWm825A~cAZP6rv-LdLQB-9rAEYLh9GNcvKf40~y8Tbi7zxuQDPGdgw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
          className="rounded-full w-16 h-16"
        />
        <div className="flex flex-col gap-1">
          <h3 className="h3">{prop.UserName}</h3>
          <p className="small text-Small">{prop.Date}</p>
          <StarsRating Rating={prop.Rating} />
        </div>
      </div>
      <p className="p text-Body">{prop.Review}</p>
    </div>
  );
};
export default Comment;
