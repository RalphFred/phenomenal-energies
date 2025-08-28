import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Clients() {
    const clients = [
        {
            name: "amni",
            image: "/images/amni.jpeg"
        },
        {
            name: "chevron",
            image: "/images/chevron.png"
        },
        {
            name: "exxon",
            image: "/images/exxon.png"
        },
        {
            name: "heritage",
            image: "/images/heritage.png"
        },
        {
            name: "kwale",
            image: "/images/kwale.png"
        },
        {
            name: "nnpc",
            image: "/images/nnpc.png"
        },
        {
            name: "renaissance",
            image: "/images/renaissance.png"
        },
        {
            name: "savannah",
            image: "/images/savannah.png"
        },
        {
            name: "seplat",
            image: "/images/seplat.png"
        },
        {
            name: "shell",
            image: "/images/shell.png"
        },
        {
            name: "tenoil",
            image: "/images/tenoil.png"
        },
        {
            name: "total",
            image: "/images/total.jpeg"
        }
    ]
    return (
        <section className="flex justify-center items-center bg-white py-8 overflow-x-hidden px-8 rounded-2xl">
             <Marquee>
                {clients.map((client, index) => (
                <Image
                key={index}
                src={client.image}
                alt={client.name}
                width={200}
                height={100}
                className="object-contain w-auto h-16 mx-6"
                />
            ))}
            </Marquee>
        </section>
    )
}