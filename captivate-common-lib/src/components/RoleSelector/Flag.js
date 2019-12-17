import React from 'react';

import at from '../../../node_modules/flag-icon-css/flags/4x3/at.svg';
import ch from '../../../node_modules/flag-icon-css/flags/4x3/ch.svg';
import cl from '../../../node_modules/flag-icon-css/flags/4x3/cl.svg';
import co from '../../../node_modules/flag-icon-css/flags/4x3/co.svg';
import de from '../../../node_modules/flag-icon-css/flags/4x3/de.svg';
import dk from '../../../node_modules/flag-icon-css/flags/4x3/dk.svg';
import es from '../../../node_modules/flag-icon-css/flags/4x3/es.svg';
import fi from '../../../node_modules/flag-icon-css/flags/4x3/fi.svg';
import fr from '../../../node_modules/flag-icon-css/flags/4x3/fr.svg';
import gb from '../../../node_modules/flag-icon-css/flags/4x3/gb.svg';
import hk from '../../../node_modules/flag-icon-css/flags/4x3/hk.svg';
import ie from '../../../node_modules/flag-icon-css/flags/4x3/ie.svg';
import it from '../../../node_modules/flag-icon-css/flags/4x3/it.svg';
import jp from '../../../node_modules/flag-icon-css/flags/4x3/jp.svg';
import lu from '../../../node_modules/flag-icon-css/flags/4x3/lu.svg';
import nl from '../../../node_modules/flag-icon-css/flags/4x3/nl.svg';
import no from '../../../node_modules/flag-icon-css/flags/4x3/no.svg';
import pe from '../../../node_modules/flag-icon-css/flags/4x3/pe.svg';
import se from '../../../node_modules/flag-icon-css/flags/4x3/se.svg';
import sg from '../../../node_modules/flag-icon-css/flags/4x3/sg.svg';
import us from '../../../node_modules/flag-icon-css/flags/4x3/us.svg';
import uy from '../../../node_modules/flag-icon-css/flags/4x3/uy.svg';

const countryNameToImage = (countryName) => {
    const x = {
        'austria': at,
        'switzerland': ch,
        'chile': cl,
        'colombia': co,
        'germany': de,
        'denmark': dk,
        'spain': es,
        'finland': fi,
        'france': fr,
        'united_kingdom': gb,
        'hong_kong': hk,
        'ireland': ie,
        'italy': it,
        'japan': jp,
        'luxembourg': lu,
        'netherlands': nl,
        'norway': no,
        'peru': pe,
        'sweden': se,
        'singapore': sg,
        'united_states': us,
        'uruguay': uy,
    };
    return x[countryName.country];
};

const Flag = (props) => {
    const {country, label} = props;
    return (
        <img style={{height: 20, width: 20, marginRight: 10}} src={countryNameToImage({country})} alt={label} />
    );
};

export default Flag;
