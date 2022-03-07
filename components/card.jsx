import Image from "next/image";

const DetailCard = ({
  imageSrc,
  imageAlt,
  description,
  title,
  buttonTitle,
  buttonClick,
  badge,
}) => {
  return (
    <>
      <div style={{ width: 340, margin: "auto" }}>
        <Image src={imageSrc} alt={imageAlt} width={100} height={100} />
        <h1>{title}</h1>
        <div>{description}</div>
        {badge && <div>{badge}</div>}
        <button onClick={buttonClick}>{buttonTitle}</button>
      </div>
    </>
  );
};

export default DetailCard;
