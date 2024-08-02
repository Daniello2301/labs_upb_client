import Image from "next/image";

export default function UPBLogo() {
    return(
        <div className="flex flex-col items-center justify-center gap-2">
            <Image src="/logo_upb.png" alt="UPB Logo" width={100} height={100} />
            <p className="text-blue-300 font-semibold text-sm">Laboratorio IEE y TIC</p>
        </div>
    )
}