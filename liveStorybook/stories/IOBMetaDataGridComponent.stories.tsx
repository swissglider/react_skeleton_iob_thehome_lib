import React, { useEffect } from 'react';
import { Title, Subtitle, Description, Primary, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
import { Skeleton } from '@swissglider/react_skeleton_framework';
import { IOBApp } from '@swissglider/react_skeleton_iob_thehome_lib';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css';

export default {
    title: 'App/IOBApp',
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
    const iobTheHomeAdapterState = IOBApp.Hooks.useIOBTheHomeAdapter();
    const iobLegacyAdapterState = IOBApp.Hooks.useIOBLegacyAdapter();
    const sendToUrlState = IOBApp.Hooks.useSendToUrl();

    const title = 'IOBMetaDataGridComponent';

    const AppStructure: Skeleton.Types.T_AppStructure = {
        MetaData: { ...IOBApp.Components.IOBMetaDataGridComponentStructure, ...{ default: true } },
    };
    useEffect(() => {
        appStructureState.set(AppStructure);
        titleState.setTitle(title);
        iobTheHomeAdapterState.set('thehome_generator_mihome', 0);
        iobLegacyAdapterState.set('mihome', 0);
        sendToUrlState.setSendToURL('https://iobroker.mocklab.io/sendTo');
    }, []);

    return <>{<Skeleton.App />}</>;
};

export const MetaData = MetaDataTemplate.bind({});
MetaData.args = {};
