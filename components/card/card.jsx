import Image from "next/image";

import classes from "./card.module.css";

const DetailCard = ({ imageSrc, imageAlt, buttonTitle, buttonClick }) => {
  return (
    <>
      <div className={classes["card"]}>
        <Image
          className={classes["card-image"]}
          src={imageSrc}
          alt={imageAlt}
          width={250}
          height={250}
          objectFit={"contain"}
        />
        <button className={classes["button"]} onClick={buttonClick}>
          {buttonTitle}
        </button>
      </div>
    </>
  );
};

export default DetailCard;
