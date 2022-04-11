import { useState } from '@hookstate/core';
import { useEffect } from 'react';
import { Skeleton } from '@swissglider/react_skeleton_framework';
import axios from 'axios';
import { useIOBTheHomeAdapter, useSendToUrl } from '../states/iobAppStates';

export const useLoadJsonDataWithIOBSendTo = (
    useJsonDataMethod: any,
    sendToCommand: string,
    sendToParams: any,
    timeOut: number,
): any[] => {
    const messageState = Skeleton.Hooks.useMessages();
    const dataState = useJsonDataMethod();
    const urlState = useSendToUrl();
    const theHomeAdapterState = useIOBTheHomeAdapter();

    const loadedData = useState<boolean>(false);

    const refresh = (): void => {
        loadedData.set(false);
        axios
            .post(urlState.getSendToUrl(), {
                instance: theHomeAdapterState.getSystemInstanceName(),
                command: sendToCommand,
                message: sendToParams,
                timeout: timeOut,
            })
            .then((ha: any) => {
                if (ha.data.result.error) {
                    if (ha.data.error.errorType === 'timeout') {
                        messageState.addCritical(
                            `TimoutError - check if Adapter is running and refresh`,
                            ha.data.error.errorInfo,
                            true,
                        );
                    } else {
                        messageState.addCritical(
                            `Error while getting the Data - ${ha.data.error.errorType} - check Admin Config`,
                            ha.data.error.errorInfo,
                            true,
                        );
                    }
                } else {
                    dataState.set(ha.data.result);
                }
            })
            .catch((e: Error) => {
                const error = typeof e === 'string' ? new Error(e) : e;
                console.error(error);
                messageState.addError(error.name, error.message, error, true);
            })
            .finally(() => {
                loadedData.set(true);
            });
    };

    useEffect(() => {
        refresh();
    }, []);

    return [loadedData, refresh];
};
