import { STR_EMPTY } from 'permanent';
import STR_INDEXOF from '../_constants/STR_INDEXOF';
import _or from './_or';

const _indexOf = (val, search) => val[STR_INDEXOF](_or(search, STR_EMPTY));

export default _indexOf;
