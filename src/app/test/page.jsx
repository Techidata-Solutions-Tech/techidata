import Image from "next/image";
import ConsultationForm from "../components/sales/Form";

export default function Page() {
  return (
    <div className="mt-32">
      <div className="flex justify-center ">
        {/* Left */}
        <div className="">
          <Image
            src="/formimg.png"
            width={500}
            height={500}
            alt="Form illustration"
            className="object-contain rounded-lg"
          />
        </div>

        {/* Right side with form */}

        <div className="">
          <ConsultationForm />
        </div>
      </div>
    </div>
  );
}
