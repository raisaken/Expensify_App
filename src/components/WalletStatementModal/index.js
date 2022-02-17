import React from 'react';
import walletStatementPropTypes from './WalletStatementModalPropTypes';

const WalletStatementModal = props => (
    <iframe
        // src={props.statementPageURL}
        src={`https://www.expensify.com.dev/statement.php?authToken=7959BCD52E694F631583C82F5EDA2449B05A94169C2289F5AEB3176986186FF4BA0F4F7118895C4AAB197D225CCADF4312F5537BC2C8991747FEB99042640B777CEECE42BFF841D061FE6DCF9B70260E4365435B87C34329608F5BBE3B8BE70E579E9C11B558C342186971B583AF5267B0E0DA10E9AAB32229F8E8274ED007D79997E7213664CD22712C022DC581C7C023DF55F33FB4B67CA892BEB6519573E031ECD1AC68464E104156322C23A084DB236BB562F7E8D0803488C0B8773B288822D2F35C6C06B89525C5A4C15B24CB601F7BACCE46399D714F6BE3FFE9BABCD3A91D94B8E12FDB3BFCE0036694C1939F8F8ECF93A795E550B85611D197A15B40065D1A153A63E6FFAE6AD6777B52A7832689F70A461C2E62E152DCBC16B75410BD2139822ED8E321293B769307DC1E48`}
        title="Statements"
        height="100%"
        width="100%"
        seamless="seamless"
        frameBorder="0"
    />
);

WalletStatementModal.propTypes = walletStatementPropTypes;
WalletStatementModal.displayName = 'WalletStatementModal';
export default WalletStatementModal;
