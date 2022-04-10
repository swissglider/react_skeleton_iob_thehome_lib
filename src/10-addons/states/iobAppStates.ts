import { createState, State, useState } from '@hookstate/core';


type T_IOBAdapterType = {
    adapterName: string;
    instance?: number;
};

const S_iobTheHomecAdapter = createState<T_IOBAdapterType>({
    adapterName: '',
    instance: 0,
});

// this is the Instance Number of the legacy Adapter i.e. mihome (not thehome_generator_mihome)
const S_iobLegacyAdapter = createState<T_IOBAdapterType>({
    adapterName: '',
    instance: 0,
});
const wrapS_Adapter = (state: State<T_IOBAdapterType>) => ({
    set: (adapterName:string, instance:number = 0) => state.set({adapterName:adapterName, instance:instance}),
    getAdapterName: () => state.adapterName.value,
    getInstance: () => state.instance.value,
    getInstanceName: () => `${state.adapterName.value}.${state.instance.value}`,
    getSystemInstanceName: () => `system.adapter.${state.adapterName.value}.${state.instance.value}`
});

export const useIOBTheHomeAdapter = () => wrapS_Adapter(useState(S_iobTheHomecAdapter));
export const useIOBLegacyAdapter = () => wrapS_Adapter(useState(S_iobLegacyAdapter));



const S_iobSendToURL = createState<string>("http://localhost:8089/send-to");
const wrapS_iobSendToURL = (state:State<string>) => ({
    setSendToURL:(url:string) => state.set(url),
    getSendToUrl:():string => state.value,
})
export const useSendToUrl = () => wrapS_iobSendToURL(useState(S_iobSendToURL));
