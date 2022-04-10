import React, { useEffect } from 'react';
import { Title, Subtitle, Description, Primary, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
import { Skeleton } from '@swissglider/react_skeleton_framework';
import { IOBMetaDataGridComponentStructure } from '.';
import { useIOBLegacyAdapter, useIOBTheHomeAdapter, useSendToUrl } from '../../10-addons/states/iobAppStates';

export default {
    title: 'Internal/components/IOBMetaDataGridComponent',
    argTypes: {},
    args: {},
    parameters: {
        controls: { hideNoControlsWarning: true },
        docs: {
            page: () => {
                return (
                    <>
                        <Title />
                        <Subtitle />
                        <Description />
                        <Primary />
                        <ArgsTable story={PRIMARY_STORY} />
                    </>
                );
            },
            description: {
                component: 'All MetaData from the ioBroker TheHome Generator Adapters',
            },
        },
    },
};

const MetaDataTemplate: any = () => {
    const titleState = Skeleton.Hooks.useAppTitle();
    const appStructureState = Skeleton.Hooks.useAppStructure();
    const iobTheHomeAdapterState = useIOBTheHomeAdapter();
    const iobLegacyAdapterState = useIOBLegacyAdapter();
    const sendToUrlState = useSendToUrl();

    const title = 'IOBMetaDataGridComponent';

    const AppStructure: Skeleton.Types.T_AppStructure = {
        MetaData: { ...IOBMetaDataGridComponentStructure, ...{ default: true } },
    };
    useEffect(() => {
        appStructureState.set(AppStructure);
        titleState.setTitle(title);
        iobTheHomeAdapterState.set('thehome_generator_mihome', 0);
        iobLegacyAdapterState.set('mihome', 0);
        sendToUrlState.setSendToURL('http://iobroker.mocklab.io/sendTo');
    }, []);

    return <>{<Skeleton.App />}</>;
};

export const MetaData = MetaDataTemplate.bind({});
MetaData.args = {};
