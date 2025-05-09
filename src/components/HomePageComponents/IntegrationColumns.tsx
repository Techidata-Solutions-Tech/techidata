"use client";
import { type IntegrationType } from "../../sections/HomePage/Integrations";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function IntegrationColumns(props: {
    integrations: IntegrationType;
    className?: string;
    reverse?: boolean;
}) {
    const { integrations, className, reverse } = props;
    return (
        <motion.div
        initial={{
            y:reverse? "-50%": "0%",
        }}
            animate={{
                y: reverse? '0%': "-50%",
            }}
            transition={{
                duration:18,
                ease: "linear",
                repeat: Infinity,
            }}
            className={twMerge("flex flex-col gap-6 pb-4", className)}
        >
            {Array.from({ length: 2 }).map((_, i) => (
                <React.Fragment key={i}>
                     {integrations.map((integration) => (
                <div
                    className="bg-neutral-50 border border-neutral-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:bg-white"
                    key={integration.name}
                >
                    <div className="flex justify-center mb-6">
                        <div className="bg-white/80 rounded-xl p-3 shadow-sm">
                            <Image
                                src={integration.icon}
                                alt={integration.name}
                                className="icon size-16"
                            />
                        </div>
                    </div>
                    <h3 className="text-2xl font-medium text-center mt-4 text-neutral-800">
                        {integration.name}
                    </h3>
                    <p className="text-center text-neutral-600 mt-3 leading-relaxed max-w-md mx-auto">
                        {integration.description}
                    </p>
                    <div className="flex justify-center mt-6">
                        <div className="h-1 w-16 bg-gradient-to-r from-[#F3631F]/80 to-[#F3631F]/20 rounded-full"></div>
                    </div>
                </div>
            ))}
                </React.Fragment>
            ))}

           
        </motion.div>
    );
}
