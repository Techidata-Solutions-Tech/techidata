import Image, { StaticImageData } from "next/image";


export default function ServicesCard(props: {
    id: string;
    frontSrc: StaticImageData;
    fontText: string;
    backSrc: string;
    className?: string;
}) {
    const { id, frontSrc, backSrc, 
        
     } = props;

    return (
        <div
            className="card absolute floating top-[50%] left-[50%] transform -translate-x-[50%] w-[240px] -translate-y-[50%]"
            style={{ perspective: "1000px" }}
            id={id}
        >
           <div
    className="card-wrapper w-full h-full"
    style={{
      position: "absolute",
      animation: "floating 3s infinite ease-in-out",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
            >
                <div className="flip-card-inner relative w-full h-full ">
                    <div className="flip-card-front">
                        <Image
                            priority
                            src={frontSrc}
                            width={500}
                            height={500}
                            alt="Card Image"
                        />
                    </div>
                    <div className="flip-card-back">
                        <p className="absolute top-[50%] left-[50%] transform -translate-x-[50%] text-2xl font-medium text-center -translate-y-[50%]">
                            {backSrc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
