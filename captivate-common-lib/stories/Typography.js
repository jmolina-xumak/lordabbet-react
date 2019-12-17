import React from 'react';
import {storiesOf} from '@storybook/react';
import {Grid} from '@material-ui/core';

// Addons
import {withA11y} from '@storybook/addon-a11y';

import {H1, H2, H3, H4, H5, H6, P1, P2, OL, UL, PQ, TIP} from '../src/common';

storiesOf('typography', module)
    .addDecorator(withA11y)
    .add('Headers', () => (
        <Grid container style={{padding: 16, marginTop: 40}}>
            <Grid item xs={12} style={{fontSize: 30, color: '#1c9dec'}}>Titles</Grid>
            <Grid item xs={12}>
                <H1>Heading 1</H1>
            </Grid>
            <Grid item xs={12}>
                <H2>Heading 2</H2>
            </Grid>
            <Grid item xs={12}>
                <H3>Heading 3</H3>
            </Grid>
            <Grid item xs={12}>
                <H4>Heading 4</H4>
            </Grid>
            <Grid item xs={12}>
                <H5>HEADING 5</H5>
            </Grid>
            <Grid item xs={12}>
                <H6>HEADING 6</H6>
            </Grid>
        </Grid>
    ))
    .add('Paragraphs', () => (
        <Grid container style={{padding: 16, marginTop: 40}}>
            <Grid item xs={12} style={{fontSize: 30, color: '#1c9dec'}}>Paragraph 1</Grid>
            <Grid item xs={4}>
                <P1>Increasingly, clients are relying on their advisors for advanced beneficiary-planning strategies, such as naming a trust as the beneficiary of a retirement account. Designating a "look-through" trust as an IRA beneficiary can be tricky and complicated, with potentially serious tax consequences if done incorrectly.</P1>
            </Grid>
            <Grid item xs={12} style={{fontSize: 30, color: '#1c9dec'}}>Paragraph 2</Grid>
            <Grid item xs={4}>
                <P2>Increasingly, clients are relying on their advisors for advanced beneficiary-planning strategies, such as naming a trust as the beneficiary of a retirement account. Designating a "look-through" trust as an IRA beneficiary can be tricky and complicated, with potentially serious tax consequences if done incorrectly.</P2>
            </Grid>
        </Grid>
    ))
    .add('Lists', () => (
        <Grid container style={{padding: 16, marginTop: 40}}>
            <Grid item xs={12} style={{fontSize: 30, color: '#1c9dec', margin: '12px 0'}}>Ordered List</Grid>
            <Grid item xs={4}>
                <OL>
                    <li>Corporate Bonds: O’Brien noted that historically, corporate credit “does fine” in an economic environment with modest growth, much like the current U.S. situation. He added that high yield, an asset class that's more oriented toward U.S. growth, may be appealing to investors as it is “a little bit less exposed to international volatility and the potentially weaker growth that we're seeing overseas.”</li>
                    <li>item 2</li>
                    <li>item 3</li>
                </OL>
            </Grid>
            <Grid item xs={12} style={{fontSize: 30, color: '#1c9dec', margin: '12px 0'}}>Unordered List</Grid>
            <Grid item xs={4}>
                <UL>
                    <li>In a session with investment professionals on June 13, 2019, Lord Abbett experts offered updated observations on the investment backdrop for the second half of 2019.</li>
                    <li>item 2</li>
                    <li>item 3</li>
                </UL>
            </Grid>
        </Grid>
    ))
    .add('Pull Quote and Tip', () => (
        <Grid container style={{padding: 16, marginTop: 40}}>
            <Grid item xs={12} style={{fontSize: 30, color: '#1c9dec', margin: '12px 0'}}>Pull-Quote</Grid>
            <Grid item xs={4}>
                <PQ>In other words, when a trust is named beneficiary, then minimum distributions are required to be made from the IRA to the trust. Bypassing (the trust) is not allowed. Instead, distributions are then made to trust beneficiaries, following the rules set forth in the trust.</PQ>
            </Grid>
            <Grid item xs={12} style={{fontSize: 30, color: '#1c9dec', margin: '36px 0'}}>Tip</Grid>
            <Grid item xs={4}>
                <TIP linkUrl="test" title="Seek confirmation from IRA Custodian before naming them your beneficiary." description="Although naming a trust as an IRA beneficiary is permissible, not all IRA custodians permit trusts to be a named beneficiary. It is imperative that you receive confirmation from an IRA custodian that will allow you to name a trust beneficiary." showSeparator/>
            </Grid>
        </Grid>
    ));
