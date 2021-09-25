import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

import ActionItem from './Components/ActionItem';
import Signup from './Components/Signup';

const actionItems = [
    {
        header: 'Tell lawmakers: No subsidies for fossil fuel power',
        text: 'There is no way to get to zero carbon if we keep building things that emit carbon. Right now, the U.S. Department of Agriculture Rural Utility Service is considering a subsidized loan for Dairyland Power Cooperative worth hundreds of millions of dollars for the Nemadji Trail gas power plant proposed for Superior, Wisconsin. Call on President Biden, and your Senators to prevent this federal subsidy for a climate-polluting proposal.',
        action_subheader: 'There is no way to get to zero carbon if we keep building things that emit carbon.',
        paragraphs: [
            'Right now, the U.S. Department of Agriculture Rural Utility Service is considering a subsidized loan for Dairyland Power Cooperative worth hundreds of millions of dollars for the Nemadji Trail gas power plant proposed for Superior, Wisconsin. Worse, the environmental study of this loan didn’t look at the climate impact of 30 years of more of burning gas to create electricity.',
            'When President Biden took office, he committed to ending federal subsidies for fossil fuel energy. Now its time for him to make good on that promise!',
            'Clean Wisconsin, along with the Minnesota Center for Environmental Advocacy, Sierra Club and Honor the Earth have petitioned the federal government to force climate analysis or deny funding for the gas plant, but we need your help too!',
            'Call on President Biden, and your Senators to prevent this federal subsidy for a climate-polluting proposal. '
        ],
    },
    {
        header: 'Tell lawmakers: Support the CLEAR Act',
        text: 'The CLEAR Act was recently introduced as one of the most comprehensive proposals in the nation on PFAS. This bill covers more PFAS chemicals and provides more safety measures for Wisconsin residents. However, some lawmakers are still refusing to sign onto it!',
        action_subheader: 'Enough is Enough: Support the CLEAR Act now!',
        paragraphs: [
            'People should no longer be forced to rely on bottled water for access to safe, clean drinking water. PFAS pollution—and the serious public health risks it poses—is creating major problems for residents and families across Wisconsin.',
            'PFAS, or Per- and Polyfluoroalkyl Substances, are a group of persistent human-made chemicals often referred to as “forever chemicals” because they do not easily break down in the environment and can build up in human bodies over a lifetime. PFAS is found in common household products like food packaging and non-stick pans, as well as firefighting foams used at military bases and airports. These chemicals are linked to many adverse health effects including decreased fertility, thyroid issues, suppressed vaccine response, and kidney and testicular cancer.',
            '(FIND WAY TO MAKE THIS BOLD) The CLEAR Act was recently introduced by Sen. Melissa Agard as one of the most comprehensive proposals in the nation to combat PFAS pollution. This bill directs state agencies to develop standards and protective measures to keep PFAS from polluting Wisconsin’s water resources and putting families’ health at risk.  However, some lawmakers are still refusing to support it!',
            'As people continue to struggle with PFAS pollution in their communities, they are looking to lawmakers to take action! The first step is setting comprehensive standards that protect public health, and The CLEAR Act does just that.',
            '(FIND WAY TO MAKE THIS BOLD) Lawmakers must also focus on providing clean drinking water to families affected by PFAS pollution while moving forward with permanent solutions to prevent more pollution from happening in the first place and start cleaning up our contaminated groundwater.',
            'There is no time to waste. Every day without action only makes the problem more difficult to solve in the future.',
            'Send a message to your legislators: Support the CLEAR Act!',
        ],
    }
];

const links = [
    'MG&E Agrees to Lower Fixed Charges, Expand Smart Thermostat Program in Rate Case Settlement',
    'Federal judge strikes down Trump-era water rule',
    'Extreme heat in urban Milwaukee',
    'Holding Our Environment Hostage: NRB Chair’s Abuse of Power Leads to Disastrous Decision on Wolf Hunt',
    'Petition Filed With Federal Government To Force Climate Study Or Deny Funding For Wisconsin Gas Plant',
];

/*            <View>
                {props.content.paragraphs.map((paragraph) => (
                    <Text key={paragraph}>{paragraph}</Text>
                ))}
            </View> */


// sideways scrolls action items, press releases, blog

export default function Home() {
    // popups for the donate button and for the indivdual action items
    // email from these popups if needed
    // have the signup form open on this page as well, if the user is already signed up give them to option to hide this
    return (
        <View style={styles.container}>
            <Text style={styles.header_text}>Take Action</Text>
            <View style={styles.subheader}>
                <Text style={styles.subheader_text}>Voice your support for our water, air, and land on these critical issues</Text>
            </View>
            <View style={styles.action_item_container}>
                <ScrollView horizontal={true}>
                    {actionItems.map((item) => <ActionItem item={item} />)}
                </ScrollView>
            </View>
            <Text style={styles.header_text}>Read More</Text>
            <View style={styles.more_links}>
                {links.map((link) => (
                    <TouchableOpacity style={styles.link_container}>
                        <Text style={styles.link_text}>{link}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Signup />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 8,
        paddingLeft: 20,
    },
    header_text: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    subheader: {
        width: 300,
    },
    subheader_text: {
        fontSize: 16,
        color: 'gray',
    },
    action_item_container: {
        marginBottom: 20,
    },
    more_links: {
        paddingRight: 20,
        marginBottom: 20,
    },
    link_container: {
        padding: 8,
        borderRadius: 20,
        backgroundColor: 'lightgray',
        marginBottom: 4,
    },
    link_text: {
        fontSize: 12,
        color: 'blue'
    },
});
