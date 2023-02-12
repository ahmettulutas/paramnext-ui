import i18n from "../../plugins/i18n";

const Intl = ({ id, data }) => i18n.t(id, data && { ...data });

export default Intl;