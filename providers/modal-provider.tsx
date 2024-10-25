"use client";

import { StoreModal } from "@/components/modals/store-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
    const [isMounted, setIsMointed] = useState(false);

    useEffect(()=>{
        setIsMointed(true);
    }, []);

    if(!isMounted){
        return null;
    }

    return(
        <>
          <StoreModal />
        </>
    )
}